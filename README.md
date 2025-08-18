# Uzence Component Library

Hey there! 👋 This is a React component library I built for common UI patterns that I kept rewriting in every project. Got tired of copying the same input and table components everywhere, so I decided to make something reusable.

It's built with TypeScript (because who wants runtime errors?) and TailwindCSS (because I'm not great at writing CSS from scratch 😅).

## What's in the box?

- **Two main components**: InputField and DataTable - the bread and butter of most web apps
- **TypeScript everything**: No more guessing what props do what
- **TailwindCSS styling**: Consistent design that doesn't look like bootstrap from 2015
- **Actually accessible**: Screen readers work, keyboard navigation works, the whole deal
- **Works on mobile**: Responsive design because it's 2024
- **Decent test coverage**: I wrote tests so you don't have to debug my code
- **Storybook docs**: Interactive examples because reading code examples gets old fast

## The Components

### InputField
This is probably the component I use most. It's basically a text input but with all the stuff you actually need in real apps - validation, different styles, password toggles, etc. I got sick of writing the same input logic over and over.

**What it does:**
- Three visual styles (outlined, filled, ghost) - pick whatever matches your design
- Small, medium, large sizes because sometimes you need tiny inputs, sometimes big ones
- Shows error messages properly (with proper ARIA labels for screen readers)
- Clear button that appears when you type something
- Password visibility toggle (the little eye icon)
- Loading state if you need to show it's processing
- Keyboard navigation that actually works

### DataTable
Tables are everywhere in web apps, but making a good one is surprisingly annoying. This one handles sorting, row selection, custom rendering - basically everything I needed across different projects.

**What it does:**
- Click column headers to sort (cycles through asc/desc/none)
- Select individual rows or select all
- Custom rendering for cells (want avatars? status badges? go for it)
- Loading spinner and empty states that don't look terrible
- Works on mobile (horizontal scroll when needed)
- Striped rows and borders if that's your thing

## Getting Started

First, grab the code and install stuff:

```bash
git clone <your-repo-url>
cd uzence-component-library
npm install
```

That's it for setup. npm install takes forever these days but what can you do 🤷‍♂️

## Running Things

### See the demo
```bash
npm run dev
```
This starts the demo app on localhost:5173 (or 5174 if 5173 is busy). You'll see both components in action with some sample data.

### Check out Storybook
```bash
npm run storybook
```
Opens Storybook on localhost:6006. This is where you can play with the components, tweak props, and see all the different states. Way better than reading docs IMO.

### Build for production
```bash
npm run build              # builds the library
npm run build-storybook    # builds storybook for deployment
```

### Run tests
```bash
npm test                   # run once
npm run test:ui            # opens vitest UI (pretty nice actually)
```

## How to Use These Things

### Basic input field

Pretty straightforward - import it and use it like any other React component:

```tsx
import { InputField } from './components';

function MyForm() {
  const [email, setEmail] = useState('');
  
  return (
    <InputField
      label="Email Address"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
      required
      clearable
    />
  );
}
```

The `clearable` prop adds that little X button to clear the field. Pretty handy.

### Input with validation

Here's how I typically handle validation. Nothing fancy, just set an error message and the component handles the styling:

```tsx
import { InputField } from './components';

function SignupForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const validatePassword = (value: string) => {
    if (value.length < 8) {
      setError('Password must be at least 8 characters');
    } else {
      setError('');
    }
  };
  
  return (
    <InputField
      label="Password"
      type="password"
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
        validatePassword(e.target.value);
      }}
      placeholder="Enter your password"
      showPasswordToggle
      invalid={!!error}
      errorMessage={error}
      helperText="Must contain at least 8 characters"
    />
  );
}
```

The `showPasswordToggle` gives you that eye icon to show/hide the password. Users love that.

### Basic table setup

Tables need two things: data and column definitions. The column config tells the table what to show and how to show it:

```tsx
import { DataTable, Column } from './components';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const columns: Column<User>[] = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sortable: true,  // click to sort
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
];

function UserTable() {
  const [users] = useState<User[]>([
    { id: 1, name: 'Ram', email: 'ram@example.com', role: 'Developer' },
    { id: 2, name: 'Shyam', email: 'shyam@example.com', role: 'Designer' },
  ]);
  
  return (
    <DataTable
      data={users}
      columns={columns}
      selectable      // adds checkboxes
      striped         // every other row is gray
    />
  );
}
```

### Custom cell rendering

This is where it gets fun. You can render whatever you want in cells:

```tsx
const fancyColumns: Column<User>[] = [
  {
    key: 'avatar',
    title: 'User',
    dataIndex: 'name',
    render: (name: string, user: User) => (
      <div className="flex items-center space-x-3">
        {/* Circle with initials */}
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-gray-500">{user.email}</div>
        </div>
      </div>
    ),
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    render: (status: string) => (
      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
        status === 'active' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-red-100 text-red-800'
      }`}>
        {status}
      </span>
    ),
  },
];
```

The render function gets the cell value, the whole row object, and the row index. Do whatever you want with it.

## Props Reference

If you're like me and need to know what props are available without digging through code:

### InputField
```typescript
interface InputFieldProps {
  // Basic stuff
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  
  // Validation & help
  helperText?: string;
  errorMessage?: string;
  invalid?: boolean;
  required?: boolean;
  
  // Styling
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  
  // Features
  type?: 'text' | 'password' | 'email' | 'number';
  clearable?: boolean;
  showPasswordToggle?: boolean;
  disabled?: boolean;
  
  // Plus all the usual HTML input props
}
```

### DataTable
```typescript
interface DataTableProps<T> {
  data: T[];                    // your array of objects
  columns: Column<T>[];         // column configuration
  loading?: boolean;            // shows spinner
  selectable?: boolean;         // adds checkboxes
  onRowSelect?: (rows: T[]) => void;  // called when selection changes
  emptyStateMessage?: string;   // custom "no data" message
  striped?: boolean;            // alternating row colors
  bordered?: boolean;           // table borders
  size?: 'sm' | 'md' | 'lg';   // table sizing
}

interface Column<T> {
  key: string;                  // unique identifier
  title: string;                // column header text
  dataIndex: keyof T;          // which field to show
  sortable?: boolean;          // enable sorting
  render?: (value, record, index) => ReactNode;  // custom rendering
  width?: string | number;     // column width
  align?: 'left' | 'center' | 'right';  // text alignment
}
```

## Styling Options

### InputField styles

There are three visual styles:

```tsx
<InputField variant="outlined" label="Regular border" />   {/* default */}
<InputField variant="filled" label="Filled background" />
<InputField variant="ghost" label="Just underline" />
```

And three sizes:
```tsx
<InputField size="sm" label="Compact" />
<InputField size="md" label="Regular" />     {/* default */}
<InputField size="lg" label="Chunky" />
```

### DataTable options

```tsx
<DataTable data={data} columns={columns} striped />    {/* zebra stripes */}
<DataTable data={data} columns={columns} bordered />   {/* table borders */}
<DataTable data={data} columns={columns} size="sm" />  {/* tighter spacing */}

{/* With row selection */}
<DataTable 
  data={data} 
  columns={columns} 
  selectable 
  onRowSelect={(rows) => console.log('User selected:', rows)}
/>
```

## Testing

I wrote tests for the important stuff using Vitest and React Testing Library. Coverage isn't 100% but it covers the main functionality:

```bash
npm test                    # run tests once
npm test -- --watch         # watch mode (reruns on changes)  
npm test -- --coverage      # see what's tested
```

Tests are co-located with components:
```
src/components/
├── InputField/
│   ├── InputField.tsx
│   ├── InputField.test.tsx     ← tests here
│   └── InputField.stories.tsx
└── DataTable/
    ├── DataTable.tsx
    ├── DataTable.test.tsx      ← and here
    └── DataTable.stories.tsx
```

## Storybook

The best way to explore the components is through Storybook:

```bash
npm run storybook
```

It's got interactive controls so you can play with props, see all the different states, and copy code examples. Much better than reading docs.

## Browser Support

Works in all the browsers that matter:
- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

If you need IE support... maybe use a different library? 😅

## Contributing

Found a bug? Want to add a feature? Cool!

1. Fork this repo
2. Make a branch (`git checkout -b fix-that-annoying-bug`)
3. Do your thing
4. Add tests if you're adding features
5. Make sure `npm test` passes
6. Push and open a PR

Just try to keep the code style consistent and don't break accessibility. If you're not sure about something, just ask in the PR.

## License

MIT - do whatever you want with it. See [LICENSE](LICENSE) for the legal stuff.

## Project Structure

Pretty standard setup:

```
uzence-component-library/
├── src/
│   ├── components/          # the two main components
│   │   ├── InputField/
│   │   └── DataTable/
│   ├── types/              # TypeScript interfaces
│   ├── utils/              # helper functions (mostly sorting stuff)
│   └── index.ts            # main export file
├── .storybook/             # storybook config
└── dist/                   # built files (created when you run build)
```

## Tech Choices

**Vite for development** - crazy fast hot reload, much better than webpack for this stuff

**Rollup for building** - generates clean bundles, good tree-shaking

**TailwindCSS** - I'm not a designer so utility classes save me a lot of time

**TypeScript** - catches bugs before users do

**Vitest** - faster than Jest, same API

**Storybook** - best way to develop and document components

## Performance

The components are pretty lightweight:
- Tree-shakeable (only import what you use)
- No unnecessary re-renders
- Works fine on mobile
- Screen reader friendly

Nothing fancy performance-wise, but it won't slow down your app.

---

Built by a developer who got tired of rewriting the same components 🚀
#   U z e n c e - C o m p o n e n t - L i b r a r y - D e m o  
 