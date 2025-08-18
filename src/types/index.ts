import { ReactNode } from 'react';

/**
 * Props for the InputField component
 * Covers common input patterns with validation, styling options, and accessibility
 */
export interface InputFieldProps {
  // Core input functionality
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  
  // Labeling and help text
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  
  // State and behavior
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  
  // Visual styling
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  
  // Input type and features
  type?: 'text' | 'password' | 'email' | 'number';
  clearable?: boolean;
  showPasswordToggle?: boolean;
  
  // Standard HTML input attributes
  id?: string;
  name?: string;
  autoComplete?: string;
}

/**
 * Configuration for a single table column
 * Generic type T represents the shape of each row's data
 */
export interface Column<T> {
  key: string;                    // Unique identifier for this column
  title: string;                  // Display text in the column header
  dataIndex: keyof T;            // Which field from the data to show
  sortable?: boolean;            // Whether users can sort by this column
  render?: (value: any, record: T, index: number) => ReactNode; // Custom rendering function
  width?: string | number;       // Column width (CSS value or pixels)
  align?: 'left' | 'center' | 'right'; // Text alignment
}

/**
 * Props for the DataTable component
 * Supports sorting, selection, loading states, and customization
 */
export interface DataTableProps<T> {
  // Core data
  data: T[];
  columns: Column<T>[];
  
  // State management
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  
  // Styling and layout
  className?: string;
  striped?: boolean;
  bordered?: boolean;
  size?: 'sm' | 'md' | 'lg';
  
  // Content customization
  emptyStateMessage?: string;
  rowKey?: keyof T | ((record: T) => string | number);
}

/**
 * Sorting-related types
 * Used internally by the table to track sort state
 */
export type SortDirection = 'asc' | 'desc' | null;

export interface SortState {
  key: string;
  direction: SortDirection;
}
