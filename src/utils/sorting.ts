import { SortDirection } from '@/types';

/**
 * Sorts an array of objects by a specific field
 * Handles different data types intelligently (strings, numbers, dates, booleans)
 */
export function sortData<T>(
  dataToSort: T[],
  fieldToSortBy: keyof T,
  sortDirection: SortDirection
): T[] {
  // If no sort direction specified, return the original data
  if (!sortDirection) return dataToSort;

  // Create a copy to avoid mutating the original array
  return [...dataToSort].sort((itemA, itemB) => {
    const valueA = itemA[fieldToSortBy];
    const valueB = itemB[fieldToSortBy];

    // Handle cases where one or both values are null/undefined
    // Put null values at the beginning for ascending sort
    if (valueA == null && valueB == null) return 0;
    if (valueA == null) return sortDirection === 'asc' ? -1 : 1;
    if (valueB == null) return sortDirection === 'asc' ? 1 : -1;

    // String comparison using locale-aware sorting
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      const comparisonResult = valueA.localeCompare(valueB);
      return sortDirection === 'asc' ? comparisonResult : -comparisonResult;
    }

    // Numeric comparison
    if (typeof valueA === 'number' && typeof valueB === 'number') {
      const comparisonResult = valueA - valueB;
      return sortDirection === 'asc' ? comparisonResult : -comparisonResult;
    }

    // Boolean comparison (false < true)
    if (typeof valueA === 'boolean' && typeof valueB === 'boolean') {
      const comparisonResult = Number(valueA) - Number(valueB);
      return sortDirection === 'asc' ? comparisonResult : -comparisonResult;
    }

    // Date comparison using timestamps
    if (valueA instanceof Date && valueB instanceof Date) {
      const comparisonResult = valueA.getTime() - valueB.getTime();
      return sortDirection === 'asc' ? comparisonResult : -comparisonResult;
    }

    // Fallback: convert to string and compare
    // This handles any other types we might encounter
    const comparisonResult = String(valueA).localeCompare(String(valueB));
    return sortDirection === 'asc' ? comparisonResult : -comparisonResult;
  });
}

/**
 * Cycles through sort directions: none -> ascending -> descending -> none
 * Used when clicking on table column headers repeatedly
 */
export function getNextSortDirection(currentDirection: SortDirection): SortDirection {
  switch (currentDirection) {
    case 'asc':
      return 'desc';
    case 'desc':
      return null; // Clear sorting
    default:
      return 'asc'; // Start with ascending
  }
}
