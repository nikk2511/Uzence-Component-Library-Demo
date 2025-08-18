import { clsx, type ClassValue } from 'clsx';

/**
 * Merges CSS class names intelligently, handling conditional classes and duplicates
 * Wrapper around clsx for consistent class name handling throughout the app
 */
export function cn(...classInputs: ClassValue[]): string {
  return clsx(classInputs);
}
