import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DataTable from './DataTable';
import { DataTableProps, Column } from '@/types';

// Sample data types
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
  salary: number;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  available: boolean;
}

// Sample data
const sampleUsers: User[] = [
  {
    id: 1,
    name: 'Ram',
    email: 'ram@example.com',
    role: 'Developer',
    status: 'active',
    joinDate: '2023-01-15',
    salary: 75000,
  },
  {
    id: 2,
    name: 'Shyam',
    email: 'shyam@example.com',
    role: 'Designer',
    status: 'active',
    joinDate: '2023-02-20',
    salary: 68000,
  },
  {
    id: 3,
    name: 'Radha',
    email: 'radha@example.com',
    role: 'Manager',
    status: 'inactive',
    joinDate: '2022-11-10',
    salary: 85000,
  },
  {
    id: 4,
    name: 'Priya',
    email: 'priya@example.com',
    role: 'Developer',
    status: 'active',
    joinDate: '2023-03-05',
    salary: 72000,
  },
  {
    id: 5,
    name: 'Arjun',
    email: 'arjun@example.com',
    role: 'QA Engineer',
    status: 'active',
    joinDate: '2023-01-30',
    salary: 65000,
  },
  {
    id: 6,
    name: 'Kavya',
    email: 'kavya@example.com',
    role: 'Product Manager',
    status: 'active',
    joinDate: '2023-04-12',
    salary: 90000,
  },
];

const sampleProducts: Product[] = [
  {
    id: 'P001',
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 99.99,
    stock: 150,
    available: true,
  },
  {
    id: 'P002',
    name: 'Coffee Mug',
    category: 'Kitchen',
    price: 12.99,
    stock: 75,
    available: true,
  },
  {
    id: 'P003',
    name: 'Laptop Stand',
    category: 'Office',
    price: 45.99,
    stock: 0,
    available: false,
  },
  {
    id: 'P004',
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: 79.99,
    stock: 32,
    available: true,
  },
];

// Column definitions
const userColumns: Column<User>[] = [
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
    key: 'role',
    title: 'Role',
    dataIndex: 'role',
    sortable: true,
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    sortable: true,
    render: (value: string) => (
      <span
        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          value === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}
      >
        {value}
      </span>
    ),
  },
  {
    key: 'joinDate',
    title: 'Join Date',
    dataIndex: 'joinDate',
    sortable: true,
    render: (value: string) => new Date(value).toLocaleDateString(),
  },
  {
    key: 'salary',
    title: 'Salary',
    dataIndex: 'salary',
    sortable: true,
    align: 'right',
    render: (value: number) => `$${value.toLocaleString()}`,
  },
];

const productColumns: Column<Product>[] = [
  {
    key: 'id',
    title: 'ID',
    dataIndex: 'id',
    sortable: true,
    width: 80,
  },
  {
    key: 'name',
    title: 'Product Name',
    dataIndex: 'name',
    sortable: true,
  },
  {
    key: 'category',
    title: 'Category',
    dataIndex: 'category',
    sortable: true,
  },
  {
    key: 'price',
    title: 'Price',
    dataIndex: 'price',
    sortable: true,
    align: 'right',
    render: (value: number) => `$${value.toFixed(2)}`,
  },
  {
    key: 'stock',
    title: 'Stock',
    dataIndex: 'stock',
    sortable: true,
    align: 'center',
    render: (value: number) => (
      <span className={value === 0 ? 'text-red-600 font-semibold' : ''}>
        {value}
      </span>
    ),
  },
  {
    key: 'available',
    title: 'Available',
    dataIndex: 'available',
    sortable: true,
    align: 'center',
    render: (value: boolean) => (
      <span
        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          value
            ? 'bg-green-100 text-green-800'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        {value ? 'Yes' : 'No'}
      </span>
    ),
  },
];

const meta: Meta<DataTableProps<User>> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A data table component with sorting, selection, and customizable rendering capabilities.',
      },
    },
  },
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Whether the table is in a loading state',
    },
    selectable: {
      control: 'boolean',
      description: 'Whether rows can be selected',
    },
    striped: {
      control: 'boolean',
      description: 'Whether to show alternating row colors',
    },
    bordered: {
      control: 'boolean',
      description: 'Whether to show table borders',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the table',
    },
  },
};

export default meta;
type Story = StoryObj<DataTableProps<User>>;

// Wrapper component for selection handling
const SelectableTable = (args: DataTableProps<User>) => {
  const [selectedRows, setSelectedRows] = useState<User[]>([]);
  
  return (
    <div className="space-y-4">
      <DataTable
        {...args}
        onRowSelect={setSelectedRows}
      />
      {selectedRows.length > 0 && (
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm font-medium text-blue-900">
            Selected {selectedRows.length} row(s):
          </p>
          <ul className="mt-2 text-xs text-blue-700">
            {selectedRows.map(row => (
              <li key={row.id}>{row.name} ({row.email})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const Default: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
  },
};

export const WithSelection: Story = {
  render: (args) => <SelectableTable {...args} />,
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: userColumns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: userColumns,
    emptyStateMessage: 'No users found. Create a new user to get started.',
  },
};

export const Striped: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    striped: true,
  },
};

export const Bordered: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    bordered: true,
  },
};

export const SmallSize: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    size: 'lg',
  },
};

export const ProductTable: Story = {
  render: () => (
    <DataTable<Product>
      data={sampleProducts}
      columns={productColumns}
      selectable={true}
      striped={true}
    />
  ),
};

export const CustomRendering: Story = {
  args: {
    data: sampleUsers,
    columns: [
      {
        key: 'avatar',
        title: 'Avatar',
        dataIndex: 'name',
        render: (value: string) => (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              {value.split(' ').map(n => n[0]).join('')}
            </div>
            <span>{value}</span>
          </div>
        ),
      },
      ...userColumns.slice(1),
    ],
    selectable: true,
  },
};

// Showcase story
export const Showcase: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Table</h3>
        <DataTable data={sampleUsers.slice(0, 3)} columns={userColumns} />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">With Selection & Striped</h3>
        <SelectableTable 
          data={sampleUsers.slice(0, 3)} 
          columns={userColumns}
          selectable={true}
          striped={true}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Product Table (Custom Rendering)</h3>
        <DataTable 
          data={sampleProducts} 
          columns={productColumns}
          bordered={true}
          size="sm"
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Loading State</h3>
        <DataTable 
          data={[]} 
          columns={userColumns}
          loading={true}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Empty State</h3>
        <DataTable 
          data={[]} 
          columns={userColumns}
          emptyStateMessage="No data available to display"
        />
      </div>
    </div>
  ),
};
