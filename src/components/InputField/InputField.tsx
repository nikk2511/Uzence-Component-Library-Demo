import React, { useState, useId, forwardRef } from 'react';
import { Eye, EyeOff, X, Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';
import { InputFieldProps } from '@/types';

/**
 * A flexible input field component with support for various states and features
 * Built to handle common form input patterns with good UX
 */
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      value,
      onChange,
      label,
      placeholder,
      helperText,
      errorMessage,
      disabled = false,
      invalid = false,
      variant = 'outlined',
      size = 'md',
      type = 'text',
      clearable = false,
      showPasswordToggle = false,
      className,
      id,
      name,
      required = false,
      autoComplete,
      autoFocus = false,
      maxLength,
      readOnly = false,
      ...props
    },
    ref
  ) => {
    // Component state for interactive features
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading] = useState(false); // TODO: Make this controllable via props
    
    // Generate unique IDs for accessibility
    const generatedId = useId();
    const inputId = id || generatedId;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    // Determine input behavior based on props
    const shouldShowAsPassword = type === 'password' || showPasswordToggle;
    const actualInputType = shouldShowAsPassword && isPasswordVisible ? 'text' : type;
    const hasValidationError = invalid || !!errorMessage;
    const hasInputValue = value && value.length > 0;

    // Define size-specific styling - keeps things consistent across the component
    const sizeStyles = {
      sm: {
        input: 'h-8 px-2 text-sm',
        label: 'text-sm',
        icon: 'h-4 w-4',
        iconContainer: 'h-8'
      },
      md: {
        input: 'h-10 px-3 text-sm',
        label: 'text-sm',
        icon: 'h-4 w-4',
        iconContainer: 'h-10'
      },
      lg: {
        input: 'h-12 px-4 text-base',
        label: 'text-base',
        icon: 'h-5 w-5',
        iconContainer: 'h-12'
      }
    };

    // Different visual styles for the input variants
    const variantStyles = {
      filled: {
        base: 'bg-gray-50 border-0 border-b-2 rounded-t-md',
        normal: 'border-gray-300 focus:border-primary-500',
        error: 'border-red-500 bg-red-50',
        disabled: 'bg-gray-100 border-gray-200'
      },
      outlined: {
        base: 'bg-white border-2 rounded-md',
        normal: 'border-gray-300 focus:border-primary-500',
        error: 'border-red-500',
        disabled: 'bg-gray-50 border-gray-200'
      },
      ghost: {
        base: 'bg-transparent border-0 border-b-2',
        normal: 'border-gray-300 focus:border-primary-500',
        error: 'border-red-500',
        disabled: 'border-gray-200'
      }
    };

    // Figure out which variant styles to apply based on current state
    const buildVariantClasses = () => {
      const currentVariant = variantStyles[variant];
      
      // Start with normal state, then override if needed
      let stateClasses = currentVariant.normal;
      
      if (disabled) {
        stateClasses = currentVariant.disabled;
      } else if (hasValidationError) {
        stateClasses = currentVariant.error;
      }
      
      return cn(currentVariant.base, stateClasses);
    };

    // Build the main input styling by combining all the pieces
    const inputClasses = cn(
      // Base input styling that applies to all variants
      'w-full transition-all duration-200 ease-in-out outline-none',
      'placeholder:text-gray-400 text-gray-900',
      'disabled:cursor-not-allowed disabled:text-gray-500',
      
      // Apply size-specific styles
      sizeStyles[size].input,
      
      // Apply the variant styling (filled, outlined, ghost)
      buildVariantClasses(),
      
      // Show focus ring when input is focused and not disabled
      isFocused && !disabled && 'ring-2 ring-primary-100',
      
      // Add padding for action buttons (clear, password toggle)
      getInputPaddingForButtons(),
      
      className
    );

    // Helper to calculate right padding based on which buttons are shown
    function getInputPaddingForButtons() {
      const showsClearButton = clearable && hasInputValue;
      const showsPasswordButton = shouldShowAsPassword;
      
      if (showsClearButton && showsPasswordButton) {
        return 'pr-16'; // Need space for both buttons
      } else if (showsClearButton || showsPasswordButton) {
        return 'pr-10'; // Space for one button
      }
      return ''; // No buttons, no extra padding
    }

    // Label styling - changes based on state
    const labelClasses = cn(
      'block font-medium mb-1.5',
      sizeStyles[size].label,
      hasValidationError ? 'text-red-700' : 'text-gray-700',
      disabled && 'text-gray-500',
      required && "after:content-['*'] after:ml-0.5 after:text-red-500"
    );

    // Helper text / error message styling
    const helperTextClasses = cn(
      'mt-1.5 text-xs',
      hasValidationError ? 'text-red-600' : 'text-gray-500'
    );

    // Styling for the action buttons (clear, password toggle)
    const actionButtonClasses = cn(
      'absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded',
      'text-gray-400 hover:text-gray-600 transition-colors',
      'disabled:cursor-not-allowed disabled:text-gray-300',
      'focus:outline-none focus:ring-2 focus:ring-primary-100',
      sizeStyles[size].iconContainer
    );

    // Event handlers
    const clearInput = () => {
      if (!onChange) return;
      
      // Create a synthetic event to mimic normal input behavior
      const syntheticEvent = {
        target: { value: '' }
      } as React.ChangeEvent<HTMLInputElement>;
      
      onChange(syntheticEvent);
    };

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(prev => !prev);
    };

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    // Determine accessibility attributes
    const ariaDescribedBy = cn(
      helperText && helperId,
      errorMessage && errorId
    );

    const showsClearButton = clearable && hasInputValue && !disabled;
    const showsPasswordToggle = shouldShowAsPassword;
    const showsActionButtons = !isLoading && (showsClearButton || showsPasswordToggle);

    return (
      <div className={cn('relative', className)}>
        {/* Label - only render if provided */}
        {label && (
          <label htmlFor={inputId} className={labelClasses}>
            {label}
          </label>
        )}
        
        <div className="relative">
          {/* Main input field */}
          <input
            ref={ref}
            id={inputId}
            name={name}
            type={actualInputType}
            value={value || ''}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled || isLoading}
            required={required}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            maxLength={maxLength}
            readOnly={readOnly}
            aria-invalid={hasValidationError}
            aria-describedby={ariaDescribedBy || undefined}
            className={inputClasses}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />

          {/* Loading spinner - shows when input is processing */}
          {isLoading && (
            <div className={actionButtonClasses}>
              <Loader2 className={cn(sizeStyles[size].icon, 'animate-spin')} />
            </div>
          )}

          {/* Action buttons (clear, password toggle) */}
          {showsActionButtons && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
              {/* Clear button - lets users quickly empty the input */}
              {showsClearButton && (
                <button
                  type="button"
                  onClick={clearInput}
                  className={cn(
                    'p-1 rounded text-gray-400 hover:text-gray-600',
                    'disabled:cursor-not-allowed disabled:text-gray-300',
                    'focus:outline-none focus:ring-2 focus:ring-primary-100'
                  )}
                  aria-label="Clear input"
                >
                  <X className={sizeStyles[size].icon} />
                </button>
              )}

              {/* Password visibility toggle */}
              {showsPasswordToggle && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  disabled={disabled}
                  className={cn(
                    'p-1 rounded text-gray-400 hover:text-gray-600',
                    'disabled:cursor-not-allowed disabled:text-gray-300',
                    'focus:outline-none focus:ring-2 focus:ring-primary-100'
                  )}
                  aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
                >
                  {isPasswordVisible ? (
                    <EyeOff className={sizeStyles[size].icon} />
                  ) : (
                    <Eye className={sizeStyles[size].icon} />
                  )}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Helper text or validation errors */}
        {(helperText || errorMessage) && (
          <div
            id={errorMessage ? errorId : helperId}
            className={helperTextClasses}
            role={errorMessage ? 'alert' : undefined}
          >
            {errorMessage || helperText}
          </div>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
