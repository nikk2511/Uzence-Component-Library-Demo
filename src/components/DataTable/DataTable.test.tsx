import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import DataTable from './DataTable';
import { Column } from '@/types';

interface TestData {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

const testData: TestData[] = [
  { id: 1, name: 'Ram', email: 'ram@example.com', status: 'active' },
  { id: 2, name: 'Shyam', email: 'shyam@example.com', status: 'inactive' },
  { id: 3, name: 'Radha', email: 'radha@example.com', status: 'active' },
  { id: 4, name: 'Priya', email: 'priya@example.com', status: 'active' },
  { id: 5, name: 'Arjun', email: 'arjun@example.com', status: 'active' },
  { id: 6, name: 'Kavya', email: 'kavya@example.com', status: 'inactive' },
];

const testColumns: Column<TestData>[] = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sortable: true,
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    sortable: true,
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    sortable: false,
    render: (value: string) => (
      <span className={`status-${value}`}>{value}</span>
    ),
  },
];

describe('DataTable', () => {
  it('renders table with data', () => {
    render(
      <DataTable
        data={testData}
        columns={testColumns}
      />
    );
    
    // Check headers
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    
    // Check data
    expect(screen.getByText('Ram')).toBeInTheDocument();
    expect(screen.getByText('shyam@example.com')).toBeInTheDocument();
    expect(screen.getByText('Radha')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(
      <DataTable
        data={[]}
        columns={testColumns}
        loading
      />
    );
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows empty state', () => {
    render(
      <DataTable
        data={[]}
        columns={testColumns}
        emptyStateMessage="No data available"
      />
    );
    
    expect(screen.getByText('No Data')).toBeInTheDocument();
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('handles sorting', () => {
    render(
      <DataTable
        data={testData}
        columns={testColumns}
      />
    );
    
    const nameHeader = screen.getByText('Name');
    
    // Click to sort ascending
    fireEvent.click(nameHeader);
    
    // Check if aria-sort attribute is set
    expect(nameHeader.closest('th')).toHaveAttribute('aria-sort', 'ascending');
    
    // Click again to sort descending
    fireEvent.click(nameHeader);
    expect(nameHeader.closest('th')).toHaveAttribute('aria-sort', 'descending');
    
    // Click again to remove sorting
    fireEvent.click(nameHeader);
    expect(nameHeader.closest('th')).toHaveAttribute('aria-sort', 'none');
  });

  it('handles row selection', () => {
    const handleRowSelect = vi.fn();
    
    render(
      <DataTable
        data={testData}
        columns={testColumns}
        selectable
        onRowSelect={handleRowSelect}
      />
    );
    
    // Should show select all checkbox
    const selectAllCheckbox = screen.getByLabelText('Select all rows');
    expect(selectAllCheckbox).toBeInTheDocument();
    
    // Should show individual row checkboxes
    const rowCheckboxes = screen.getAllByLabelText(/Select row/);
    expect(rowCheckboxes).toHaveLength(6);
    
    // Click first row
    const firstRow = screen.getByText('Ram').closest('tr');
    fireEvent.click(firstRow!);
    
    expect(handleRowSelect).toHaveBeenCalledWith([testData[0]]);
  });

  it('handles select all functionality', () => {
    const handleRowSelect = vi.fn();
    
    render(
      <DataTable
        data={testData}
        columns={testColumns}
        selectable
        onRowSelect={handleRowSelect}
      />
    );
    
    const selectAllCheckbox = screen.getByLabelText('Select all rows');
    
    // Select all
    fireEvent.click(selectAllCheckbox);
    expect(handleRowSelect).toHaveBeenCalledWith(testData);
    
    // Deselect all
    fireEvent.click(selectAllCheckbox);
    expect(handleRowSelect).toHaveBeenCalledWith([]);
  });

  it('renders custom cell content', () => {
    render(
      <DataTable
        data={testData}
        columns={testColumns}
      />
    );
    
    // Check if custom render function is applied
    expect(screen.getAllByText('active')[0]).toHaveClass('status-active');
    expect(screen.getAllByText('inactive')[0]).toHaveClass('status-inactive');
  });

  it('applies striped styling', () => {
    render(
      <DataTable
        data={testData}
        columns={testColumns}
        striped
      />
    );
    
    const rows = screen.getAllByRole('row');
    // First row is header, so data rows start from index 1
    const dataRows = rows.slice(1);
    
    // Second data row (index 1) should have striped class
    expect(dataRows[1]).toHaveClass('bg-gray-50');
  });

  it('applies bordered styling', () => {
    render(
      <DataTable
        data={testData}
        columns={testColumns}
        bordered
      />
    );
    
    const table = screen.getByRole('table');
    expect(table).toHaveClass('border');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(
      <DataTable
        data={testData}
        columns={testColumns}
        size="sm"
      />
    );
    
    let table = screen.getByRole('table');
    expect(table).toHaveClass('text-xs');
    
    rerender(
      <DataTable
        data={testData}
        columns={testColumns}
        size="lg"
      />
    );
    
    table = screen.getByRole('table');
    expect(table).toHaveClass('text-base');
  });

  it('handles column alignment', () => {
    const columnsWithAlignment: Column<TestData>[] = [
      {
        key: 'name',
        title: 'Name',
        dataIndex: 'name',
        align: 'left',
      },
      {
        key: 'email',
        title: 'Email',
        dataIndex: 'email',
        align: 'center',
      },
      {
        key: 'status',
        title: 'Status',
        dataIndex: 'status',
        align: 'right',
      },
    ];
    
    render(
      <DataTable
        data={testData}
        columns={columnsWithAlignment}
      />
    );
    
    const headers = screen.getAllByRole('columnheader');
    
    // Check header alignment
    expect(headers[0]).not.toHaveClass('text-center', 'text-right');
    expect(headers[1]).toHaveClass('text-center');
    expect(headers[2]).toHaveClass('text-right');
  });

  it('has proper accessibility attributes', () => {
    render(
      <DataTable
        data={testData}
        columns={testColumns}
        selectable
      />
    );
    
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    
    const columnHeaders = screen.getAllByRole('columnheader');
    expect(columnHeaders).toHaveLength(4); // 3 columns + 1 selection column
    
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(7); // 1 header + 6 data rows
  });
});
