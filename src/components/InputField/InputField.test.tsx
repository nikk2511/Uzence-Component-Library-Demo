import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputField } from './InputField';

describe('InputField', () => {
  it('renders with label and placeholder', () => {
    render(
      <InputField
        label="Test Label"
        placeholder="Test placeholder"
      />
    );
    
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
  });

  it('handles value changes', () => {
    const handleChange = vi.fn();
    render(
      <InputField
        value=""
        onChange={handleChange}
        label="Test Input"
      />
    );
    
    const input = screen.getByLabelText('Test Input');
    fireEvent.change(input, { target: { value: 'test value' } });
    
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'test value'
        })
      })
    );
  });

  it('shows error message when invalid', () => {
    render(
      <InputField
        label="Test Input"
        invalid
        errorMessage="This field is required"
      />
    );
    
    expect(screen.getByText('This field is required')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('shows helper text', () => {
    render(
      <InputField
        label="Test Input"
        helperText="This is helper text"
      />
    );
    
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(
      <InputField
        label="Test Input"
        disabled
      />
    );
    
    expect(screen.getByLabelText('Test Input')).toBeDisabled();
  });

  it('shows required indicator', () => {
    render(
      <InputField
        label="Required Field"
        required
      />
    );
    
    const label = screen.getByText('Required Field');
    expect(label).toHaveClass('after:content-[\'*\']');
  });

  it('shows clear button when clearable and has value', () => {
    const handleChange = vi.fn();
    render(
      <InputField
        label="Test Input"
        value="test value"
        onChange={handleChange}
        clearable
      />
    );
    
    const clearButton = screen.getByLabelText('Clear input');
    expect(clearButton).toBeInTheDocument();
    
    fireEvent.click(clearButton);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: ''
        })
      })
    );
  });

  it('shows password toggle for password input', () => {
    render(
      <InputField
        label="Password"
        type="password"
        showPasswordToggle
        value="password123"
      />
    );
    
    const toggleButton = screen.getByLabelText('Show password');
    expect(toggleButton).toBeInTheDocument();
    
    fireEvent.click(toggleButton);
    expect(screen.getByLabelText('Hide password')).toBeInTheDocument();
  });

  it('applies correct variant classes', () => {
    const { rerender } = render(
      <InputField
        label="Test Input"
        variant="filled"
      />
    );
    
    let input = screen.getByLabelText('Test Input');
    expect(input).toHaveClass('bg-gray-50');
    
    rerender(
      <InputField
        label="Test Input"
        variant="outlined"
      />
    );
    
    input = screen.getByLabelText('Test Input');
    expect(input).toHaveClass('bg-white', 'border-2');
    
    rerender(
      <InputField
        label="Test Input"
        variant="ghost"
      />
    );
    
    input = screen.getByLabelText('Test Input');
    expect(input).toHaveClass('bg-transparent');
  });

  it('applies correct size classes', () => {
    const { rerender } = render(
      <InputField
        label="Test Input"
        size="sm"
      />
    );
    
    let input = screen.getByLabelText('Test Input');
    expect(input).toHaveClass('h-8');
    
    rerender(
      <InputField
        label="Test Input"
        size="md"
      />
    );
    
    input = screen.getByLabelText('Test Input');
    expect(input).toHaveClass('h-10');
    
    rerender(
      <InputField
        label="Test Input"
        size="lg"
      />
    );
    
    input = screen.getByLabelText('Test Input');
    expect(input).toHaveClass('h-12');
  });

  it('has proper accessibility attributes', () => {
    render(
      <InputField
        label="Test Input"
        helperText="Helper text"
        errorMessage="Error message"
        invalid
        required
      />
    );
    
    const input = screen.getByLabelText('Test Input');
    
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby');
    expect(input).toHaveAttribute('required');
  });
});
