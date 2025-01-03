import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const inputVariants = cva(
  'text-md inline-block h-10 w-full  rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        leadingSelect: 'rounded-l-none rounded-r-md !border-l-0',
        trailingSelect: 'rounded-l-md rounded-r-none !border-r-0',
      },
      sizes: {
        default: 'h-10 px-3 py-2',
        sm: 'h-9 px-3 py-2 text-sm',
        md: 'h-10 rounded-md px-4 py-1.5',
        lg: 'h-10 rounded-md px-5 py-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      sizes: 'default',
    },
  }
);
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  hasError?: boolean;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, sizes, variant, type, hasError, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ variant, sizes, className }),
          disabled
            ? 'cursor-not-allowed bg-[#F4F4F5] text-muted-foreground'
            : '',
          hasError ? 'border-[#DC2626]' : 'border-input'
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };

export interface ComboInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  comboText: string;
}

const ComboInput = React.forwardRef<HTMLInputElement, ComboInputProps>(
  ({ className, type, sizes, comboText, ...props }, ref) => {
    return (
      <div className="flex items-center rounded-md border">
        <span className="flex h-10 items-center rounded-l-md border-r bg-background px-3 text-sm text-muted-foreground">
          {comboText}
        </span>
        <input
          type={type}
          className={cn(
            inputVariants({ variant: 'default', sizes, className }),
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

ComboInput.displayName = 'ComboInput';
