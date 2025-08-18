import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import InputField from './InputField';
import { InputFieldProps } from '@/types';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input component with validation states, multiple variants, and optional features like clear button and password toggle.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost'],
      description: 'Visual style variant of the input',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
      description: 'HTML input type',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the input is in an invalid state',
    },
    clearable: {
      control: 'boolean',
      description: 'Whether to show a clear button when input has value',
    },
    showPasswordToggle: {
      control: 'boolean',
      description: 'Whether to show password visibility toggle',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

// Controlled wrapper for stories
const ControlledInputField = (args: InputFieldProps) => {
  const [value, setValue] = useState(args.value || '');
  
  return (
    <div className="w-80">
      <InputField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const Default: Story = {
  render: ControlledInputField,
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  render: ControlledInputField,
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'This will be your unique identifier',
  },
};

export const WithError: Story = {
  render: ControlledInputField,
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    invalid: true,
    errorMessage: 'Password must be at least 8 characters',
  },
};

export const Required: Story = {
  render: ControlledInputField,
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true,
    helperText: 'This field is required',
  },
};

export const Disabled: Story = {
  render: ControlledInputField,
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    value: 'Cannot edit this',
  },
};

export const Clearable: Story = {
  render: ControlledInputField,
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    clearable: true,
    value: 'Sample text',
  },
};

export const PasswordWithToggle: Story = {
  render: ControlledInputField,
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    showPasswordToggle: true,
    value: 'mypassword123',
  },
};

// Variant stories
export const FilledVariant: Story = {
  render: ControlledInputField,
  args: {
    label: 'Filled Input',
    placeholder: 'Filled variant',
    variant: 'filled',
  },
};

export const OutlinedVariant: Story = {
  render: ControlledInputField,
  args: {
    label: 'Outlined Input',
    placeholder: 'Outlined variant',
    variant: 'outlined',
  },
};

export const GhostVariant: Story = {
  render: ControlledInputField,
  args: {
    label: 'Ghost Input',
    placeholder: 'Ghost variant',
    variant: 'ghost',
  },
};

// Size stories
export const SmallSize: Story = {
  render: ControlledInputField,
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'sm',
    clearable: true,
  },
};

export const MediumSize: Story = {
  render: ControlledInputField,
  args: {
    label: 'Medium Input',
    placeholder: 'Medium size',
    size: 'md',
    clearable: true,
  },
};

export const LargeSize: Story = {
  render: ControlledInputField,
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'lg',
    clearable: true,
  },
};

// Showcase all variants and sizes
export const Showcase: Story = {
  render: () => (
    <div className="space-y-8 w-96">
      <div>
        <h3 className="text-lg font-semibold mb-4">Variants</h3>
        <div className="space-y-4">
          <ControlledInputField
            label="Outlined"
            placeholder="Outlined variant"
            variant="outlined"
          />
          <ControlledInputField
            label="Filled"
            placeholder="Filled variant"
            variant="filled"
          />
          <ControlledInputField
            label="Ghost"
            placeholder="Ghost variant"
            variant="ghost"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Sizes</h3>
        <div className="space-y-4">
          <ControlledInputField
            label="Small"
            placeholder="Small size"
            size="sm"
          />
          <ControlledInputField
            label="Medium"
            placeholder="Medium size"
            size="md"
          />
          <ControlledInputField
            label="Large"
            placeholder="Large size"
            size="lg"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">States</h3>
        <div className="space-y-4">
          <ControlledInputField
            label="Normal"
            placeholder="Normal state"
          />
          <ControlledInputField
            label="Error"
            placeholder="Error state"
            invalid
            errorMessage="Something went wrong"
          />
          <ControlledInputField
            label="Disabled"
            placeholder="Disabled state"
            disabled
            value="Cannot edit"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Features</h3>
        <div className="space-y-4">
          <ControlledInputField
            label="With Clear Button"
            placeholder="Type something"
            clearable
            value="Clear me"
          />
          <ControlledInputField
            label="Password Toggle"
            type="password"
            showPasswordToggle
            value="secret123"
          />
          <ControlledInputField
            label="Required Field"
            placeholder="This is required"
            required
            helperText="Required field"
          />
        </div>
      </div>
    </div>
  ),
};
