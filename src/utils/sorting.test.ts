import { describe, it, expect } from 'vitest';
import { sortData, getNextSortDirection } from './sorting';

interface TestItem {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  joinDate: Date;
  salary?: number;
}

const testData: TestItem[] = [
  {
    id: 3,
    name: 'Charlie',
    age: 30,
    isActive: true,
    joinDate: new Date('2023-01-15'),
    salary: 75000,
  },
  {
    id: 1,
    name: 'Alice',
    age: 25,
    isActive: false,
    joinDate: new Date('2023-03-10'),
    salary: 65000,
  },
  {
    id: 2,
    name: 'Bob',
    age: 35,
    isActive: true,
    joinDate: new Date('2022-12-01'),
  },
];

describe('sortData', () => {
  it('sorts strings in ascending order', () => {
    const sorted = sortData(testData, 'name', 'asc');
    expect(sorted[0].name).toBe('Alice');
    expect(sorted[1].name).toBe('Bob');
    expect(sorted[2].name).toBe('Charlie');
  });

  it('sorts strings in descending order', () => {
    const sorted = sortData(testData, 'name', 'desc');
    expect(sorted[0].name).toBe('Charlie');
    expect(sorted[1].name).toBe('Bob');
    expect(sorted[2].name).toBe('Alice');
  });

  it('sorts numbers in ascending order', () => {
    const sorted = sortData(testData, 'age', 'asc');
    expect(sorted[0].age).toBe(25);
    expect(sorted[1].age).toBe(30);
    expect(sorted[2].age).toBe(35);
  });

  it('sorts numbers in descending order', () => {
    const sorted = sortData(testData, 'age', 'desc');
    expect(sorted[0].age).toBe(35);
    expect(sorted[1].age).toBe(30);
    expect(sorted[2].age).toBe(25);
  });

  it('sorts booleans in ascending order', () => {
    const sorted = sortData(testData, 'isActive', 'asc');
    expect(sorted[0].isActive).toBe(false);
    expect(sorted[1].isActive).toBe(true);
    expect(sorted[2].isActive).toBe(true);
  });

  it('sorts booleans in descending order', () => {
    const sorted = sortData(testData, 'isActive', 'desc');
    expect(sorted[0].isActive).toBe(true);
    expect(sorted[1].isActive).toBe(true);
    expect(sorted[2].isActive).toBe(false);
  });

  it('sorts dates in ascending order', () => {
    const sorted = sortData(testData, 'joinDate', 'asc');
    expect(sorted[0].joinDate.getTime()).toBe(new Date('2022-12-01').getTime());
    expect(sorted[1].joinDate.getTime()).toBe(new Date('2023-01-15').getTime());
    expect(sorted[2].joinDate.getTime()).toBe(new Date('2023-03-10').getTime());
  });

  it('sorts dates in descending order', () => {
    const sorted = sortData(testData, 'joinDate', 'desc');
    expect(sorted[0].joinDate.getTime()).toBe(new Date('2023-03-10').getTime());
    expect(sorted[1].joinDate.getTime()).toBe(new Date('2023-01-15').getTime());
    expect(sorted[2].joinDate.getTime()).toBe(new Date('2022-12-01').getTime());
  });

  it('handles null direction by returning original data', () => {
    const sorted = sortData(testData, 'name', null);
    expect(sorted).toEqual(testData);
  });

  it('handles null/undefined values', () => {
    const sorted = sortData(testData, 'salary', 'asc');
    // Items without salary should come first when sorting ascending
    expect(sorted[0].salary).toBeUndefined();
    expect(sorted[1].salary).toBe(65000);
    expect(sorted[2].salary).toBe(75000);
  });

  it('does not mutate original array', () => {
    const originalData = [...testData];
    sortData(testData, 'name', 'asc');
    expect(testData).toEqual(originalData);
  });
});

describe('getNextSortDirection', () => {
  it('returns "asc" when current is null', () => {
    expect(getNextSortDirection(null)).toBe('asc');
  });

  it('returns "desc" when current is "asc"', () => {
    expect(getNextSortDirection('asc')).toBe('desc');
  });

  it('returns null when current is "desc"', () => {
    expect(getNextSortDirection('desc')).toBe(null);
  });
});
