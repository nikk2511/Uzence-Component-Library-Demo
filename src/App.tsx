import { useState } from 'react';
import { InputField, DataTable } from './components';
import { Column } from './types';

// Type definition for our demo user data
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

// Mock user data for demonstration purposes
const mockUsers: User[] = [
  {
    id: 1,
    name: 'Ram',
    email: 'ram@example.com',
    role: 'Developer',
    status: 'active',
    joinDate: '2023-01-15',
  },
  {
    id: 2,
    name: 'Shyam',
    email: 'shyam@example.com',
    role: 'Designer',
    status: 'active',
    joinDate: '2023-02-20',
  },
  {
    id: 3,
    name: 'Radha',
    email: 'radha@example.com',
    role: 'Manager',
    status: 'inactive',
    joinDate: '2022-11-10',
  },
  {
    id: 4,
    name: 'Priya',
    email: 'priya@example.com',
    role: 'Developer',
    status: 'active',
    joinDate: '2023-03-05',
  },
  {
    id: 5,
    name: 'Arjun',
    email: 'arjun@example.com',
    role: 'QA Engineer',
    status: 'active',
    joinDate: '2023-01-30',
  },
  {
    id: 6,
    name: 'Kavya',
    email: 'kavya@example.com',
    role: 'Product Manager',
    status: 'active',
    joinDate: '2023-04-12',
  },
];

// Table column configuration for the user data
const userTableColumns: Column<User>[] = [
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
    // Custom rendering for status with colored badges
    render: (statusValue: string) => {
      const isActive = statusValue === 'active';
      const badgeClasses = isActive 
        ? 'bg-green-100 text-green-800' 
        : 'bg-red-100 text-red-800';
      
      return (
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${badgeClasses}`}>
          {statusValue}
        </span>
      );
    },
  },
  {
    key: 'joinDate',
    title: 'Join Date',
    dataIndex: 'joinDate',
    sortable: true,
    // Format the date string for display
    render: (dateValue: string) => new Date(dateValue).toLocaleDateString(),
  },
];

function App() {
  // Form state for the demo inputs
  const [searchQuery, setSearchQuery] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  // Filter users based on search query
  const filteredUserList = mockUsers.filter(user => {
    const query = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Uzence Component Library Demo
          </h1>
          <p className="mt-2 text-gray-600">
            Showcasing InputField and DataTable components
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          {/* InputField Demo Section */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                InputField Component
              </h2>
              <p className="text-gray-600">
                A flexible input component with multiple variants, sizes, and features.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Basic Inputs */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800">Basic Examples</h3>
                
                <InputField
                  label="Search Users"
                  placeholder="Search by name, email, or role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  clearable
                  helperText="This will filter the table below"
                />

                <InputField
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                />

                <InputField
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  showPasswordToggle
                  helperText="Password must be at least 8 characters"
                />
              </div>

              {/* Variants and States */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800">Variants & States</h3>
                
                <InputField
                  label="Outlined (Default)"
                  placeholder="Outlined variant"
                  variant="outlined"
                />

                <InputField
                  label="Filled Variant"
                  placeholder="Filled variant"
                  variant="filled"
                />

                <InputField
                  label="Ghost Variant"
                  placeholder="Ghost variant"
                  variant="ghost"
                />

                <InputField
                  label="Error State"
                  placeholder="This has an error"
                  invalid
                  errorMessage="This field is required"
                />

                <InputField
                  label="Disabled State"
                  placeholder="Cannot edit"
                  disabled
                  value="Disabled input"
                />
              </div>
            </div>

            {/* Size Variants */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Size Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField
                  label="Small"
                  placeholder="Small size"
                  size="sm"
                  clearable
                />
                <InputField
                  label="Medium (Default)"
                  placeholder="Medium size"
                  size="md"
                  clearable
                />
                <InputField
                  label="Large"
                  placeholder="Large size"
                  size="lg"
                  clearable
                />
              </div>
            </div>
          </section>

          {/* DataTable Demo Section */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                DataTable Component
              </h2>
              <p className="text-gray-600">
                A powerful data table with sorting, selection, and custom rendering.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  User Management Table
                </h3>
                {selectedUsers.length > 0 && (
                  <div className="text-sm text-gray-600">
                    {selectedUsers.length} user(s) selected
                  </div>
                )}
              </div>

              <DataTable
                data={filteredUserList}
                columns={userTableColumns}
                selectable
                onRowSelect={setSelectedUsers}
                striped
                emptyStateMessage={
                  searchQuery 
                    ? `No users found matching "${searchQuery}"`
                    : "No users available"
                }
              />

              {selectedUsers.length > 0 && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Selected Users:</h4>
                  <div className="space-y-1">
                    {selectedUsers.map(user => (
                      <div key={user.id} className="text-sm text-blue-700">
                        {user.name} ({user.email}) - {user.role}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Features Overview */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Features Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">InputField</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Multiple variants (outlined, filled, ghost)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Three size options (sm, md, lg)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Validation states with error messages
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Clear button functionality
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Password visibility toggle
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Accessibility features (ARIA labels)
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">DataTable</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Column sorting functionality
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Row selection (single/multiple)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Custom cell rendering
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Loading and empty states
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Responsive design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    TypeScript support
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            Built with React, TypeScript, and TailwindCSS • Uzence Design Studio
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
