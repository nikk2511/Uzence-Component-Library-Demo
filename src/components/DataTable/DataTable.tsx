import React, { useState, useEffect, useMemo } from 'react';
import { ChevronUp, ChevronDown, Loader2, Database } from 'lucide-react';
import { cn } from '@/utils/cn';
import { sortData, getNextSortDirection } from '@/utils/sorting';
import { DataTableProps, Column, SortState, SortDirection } from '@/types';

/**
 * A flexible data table component with sorting, selection, and customization options
 * Handles common table patterns like loading states, empty states, and row actions
 */
function DataTable<T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
  className,
  emptyStateMessage = 'No data available',
  rowKey,
  striped = false,
  bordered = false,
  size = 'md'
}: DataTableProps<T>) {
  // Track current sort state (which column, which direction)
  const [currentSort, setCurrentSort] = useState<SortState>({ key: '', direction: null });
  const [selectedRowKeys, setSelectedRowKeys] = useState<Set<string | number>>(new Set());

  // Different sizing options for the table
  const tableSizeStyles = {
    sm: {
      table: 'text-xs',
      cell: 'px-3 py-2',
      header: 'px-3 py-2'
    },
    md: {
      table: 'text-sm',
      cell: 'px-4 py-3',
      header: 'px-4 py-3'
    },
    lg: {
      table: 'text-base',
      cell: 'px-6 py-4',
      header: 'px-6 py-4'
    }
  };

  // Helper to get a unique key for each row - needed for React and selection
  const getUniqueRowKey = (record: T, index: number): string | number => {
    // If user provided a custom key function, use that
    if (typeof rowKey === 'function') {
      return rowKey(record);
    }
    
    // If user specified a field to use as key, use that field's value
    if (rowKey) {
      return record[rowKey] as string | number;
    }
    
    // Fall back to using the array index
    return index;
  };

  // Apply sorting to the data when sort state changes
  const sortedTableData = useMemo(() => {
    // If no sorting is active, return data as-is
    if (!currentSort.direction || !currentSort.key) {
      return data;
    }
    
    // Find the column definition for the current sort
    const sortColumn = columns.find(col => col.key === currentSort.key);
    if (!sortColumn) {
      return data;
    }

    // Use our sorting utility to sort the data
    return sortData(data, sortColumn.dataIndex, currentSort.direction);
  }, [data, currentSort, columns]);

  // Handle clicking on a sortable column header
  const handleColumnSort = (column: Column<T>) => {
    // Only allow sorting on columns marked as sortable
    if (!column.sortable) return;

    const isCurrentlyActiveSortColumn = currentSort.key === column.key;
    
    // Cycle through: none -> asc -> desc -> none
    const nextDirection = isCurrentlyActiveSortColumn 
      ? getNextSortDirection(currentSort.direction)
      : 'asc';

    setCurrentSort({
      key: column.key,
      direction: nextDirection
    });
  };

  // Handle selecting/deselecting individual rows
  const toggleRowSelection = (record: T, index: number) => {
    if (!selectable) return;

    const rowKey = getUniqueRowKey(record, index);
    const newSelection = new Set(selectedRowKeys);

    // Toggle the selection state
    if (newSelection.has(rowKey)) {
      newSelection.delete(rowKey);
    } else {
      newSelection.add(rowKey);
    }

    setSelectedRowKeys(newSelection);

    // Notify parent component with the actual row data
    if (onRowSelect) {
      const selectedRecords = sortedTableData.filter((row, idx) => 
        newSelection.has(getUniqueRowKey(row, idx))
      );
      onRowSelect(selectedRecords);
    }
  };

  // Handle the "select all" checkbox in the header
  const toggleSelectAll = () => {
    if (!selectable) return;

    const allRowKeys = sortedTableData.map((record, index) => 
      getUniqueRowKey(record, index)
    );
    
    const areAllCurrentlySelected = allRowKeys.every(key => 
      selectedRowKeys.has(key)
    );

    // If all are selected, deselect all. Otherwise, select all.
    const newSelection = areAllCurrentlySelected 
      ? new Set<string | number>() 
      : new Set(allRowKeys);

    setSelectedRowKeys(newSelection);

    // Notify parent component
    if (onRowSelect) {
      const selectedRecords = areAllCurrentlySelected ? [] : sortedTableData;
      onRowSelect(selectedRecords);
    }
  };

  // Figure out the state of the "select all" checkbox
  const selectAllState = useMemo(() => {
    if (sortedTableData.length === 0) {
      return { checked: false, indeterminate: false };
    }

    const allKeys = sortedTableData.map((record, index) => 
      getUniqueRowKey(record, index)
    );
    
    const selectedCount = allKeys.filter(key => selectedRowKeys.has(key)).length;
    
    return {
      checked: selectedCount === allKeys.length,
      indeterminate: selectedCount > 0 && selectedCount < allKeys.length
    };
  }, [sortedTableData, selectedRowKeys]);

  // Clear selection when the data changes (e.g., filtering, new data load)
  useEffect(() => {
    setSelectedRowKeys(new Set());
  }, [data]);

  // Render the sort indicators for column headers
  const renderSortIcon = (column: Column<T>) => {
    if (!column.sortable) return null;

    const isActiveSortColumn = currentSort.key === column.key;
    const sortDirection = isActiveSortColumn ? currentSort.direction : null;

    return (
      <span className="ml-2 inline-flex flex-col">
        <ChevronUp 
          className={cn(
            'h-3 w-3 -mb-1',
            sortDirection === 'asc' ? 'text-primary-600' : 'text-gray-400'
          )} 
        />
        <ChevronDown 
          className={cn(
            'h-3 w-3',
            sortDirection === 'desc' ? 'text-primary-600' : 'text-gray-400'
          )} 
        />
      </span>
    );
  };

  // Build the main table styling
  const tableClasses = cn(
    'min-w-full divide-y divide-gray-200',
    bordered && 'border border-gray-200',
    tableSizeStyles[size].table,
    className
  );

  // Header row styling
  const headerRowClasses = cn(
    'bg-gray-50 border-b border-gray-200'
  );

  // Build styling for individual table rows
  const buildRowClasses = (rowIndex: number, isRowSelected: boolean) => cn(
    'transition-colors duration-150',
    
    // Striped rows - every other row gets a background
    striped && rowIndex % 2 === 1 && 'bg-gray-50',
    
    // Selected row highlighting
    isRowSelected && 'bg-primary-50 border-primary-200',
    
    // Hover effects
    selectable && 'hover:bg-gray-50 cursor-pointer',
    !striped && !isRowSelected && 'hover:bg-gray-50'
  );

  // Show loading state while data is being fetched
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center space-x-3 text-gray-500">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  // Show empty state when there's no data to display
  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-500">
        <Database className="h-12 w-12 mb-4 text-gray-300" />
        <p className="text-lg font-medium mb-2">No Data</p>
        <p className="text-sm">{emptyStateMessage}</p>
      </div>
    );
  }

  // Main table rendering
  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
      <div className="overflow-x-auto">
        <table className={tableClasses}>
          <thead className={headerRowClasses}>
            <tr>
              {/* Selection checkbox column header */}
              {selectable && (
                <th className={cn('w-8', tableSizeStyles[size].header)}>
                  <input
                    type="checkbox"
                    checked={selectAllState.checked}
                    ref={(input) => {
                      if (input) {
                        input.indeterminate = selectAllState.indeterminate;
                      }
                    }}
                    onChange={toggleSelectAll}
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    aria-label="Select all rows"
                  />
                </th>
              )}
              
              {/* Regular column headers */}
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={cn(
                    'text-left font-medium text-gray-900 tracking-wider',
                    tableSizeStyles[size].header,
                    column.sortable && 'cursor-pointer hover:bg-gray-100',
                    column.align === 'center' && 'text-center',
                    column.align === 'right' && 'text-right'
                  )}
                  style={{ width: column.width }}
                  onClick={() => handleColumnSort(column)}
                  role={column.sortable ? 'button' : undefined}
                  tabIndex={column.sortable ? 0 : undefined}
                  aria-sort={
                    currentSort.key === column.key && currentSort.direction
                      ? currentSort.direction === 'asc' ? 'ascending' : 'descending'
                      : 'none'
                  }
                >
                  <div className="flex items-center">
                    {column.title}
                    {renderSortIcon(column)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          
          {/* Table body with data rows */}
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedTableData.map((record, rowIndex) => {
              const rowKey = getUniqueRowKey(record, rowIndex);
              const isRowSelected = selectedRowKeys.has(rowKey);

              return (
                <tr
                  key={rowKey}
                  className={buildRowClasses(rowIndex, isRowSelected)}
                  onClick={() => toggleRowSelection(record, rowIndex)}
                >
                  {/* Selection checkbox cell */}
                  {selectable && (
                    <td className={tableSizeStyles[size].cell}>
                      <input
                        type="checkbox"
                        checked={isRowSelected}
                        onChange={() => {}} // Click handled by row onClick
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        aria-label={`Select row ${rowIndex + 1}`}
                      />
                    </td>
                  )}
                  
                  {/* Data cells */}
                  {columns.map((column) => {
                    const rawValue = record[column.dataIndex];
                    
                    // Use custom render function if provided, otherwise show raw value
                    const displayContent = column.render 
                      ? column.render(rawValue, record, rowIndex)
                      : rawValue;

                    return (
                      <td
                        key={column.key}
                        className={cn(
                          'text-gray-900 whitespace-nowrap',
                          tableSizeStyles[size].cell,
                          column.align === 'center' && 'text-center',
                          column.align === 'right' && 'text-right'
                        )}
                      >
                        {displayContent}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
