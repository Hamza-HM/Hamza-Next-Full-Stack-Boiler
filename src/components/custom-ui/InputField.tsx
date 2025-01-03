import { LabelProps } from '@radix-ui/react-label';
import { LucideIcon } from 'lucide-react';
import { InputHTMLAttributes } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

import { cn } from '@/lib/utils';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input, InputProps } from '../ui/input';
import { RequiredSign } from './RequiredSign';

export const InputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  InputProps,
  label,
  className,
  showErrors = true,
  Icon,
  placeholder,
  description,
  descriptionProps,
  labelProps,
  required = false,
  readOnly = false,
  disabled = false,
  autoComplete,
  ...props
}: {
  control: Control<TFieldValues>;
  showErrors?: boolean;
  shouldUnregister?: boolean;
  name: TName;
  placeholder?: string;
  label?: string | JSX.Element;
  description?: string;
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
  className?: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  Icon?: LucideIcon;
  InputProps?: Omit<InputProps, 'name' | 'type' | 'placeholder'>;
  labelProps?: LabelProps;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  autoComplete?: string;
}) => {
  const { className: inputClassName, ...restInputProps } = InputProps || {};
  return (
    <FormField
      {...props}
      render={({ field, fieldState }) => {
        return (
          <FormItem className={className}>
            {!!label && (
              <FormLabel {...labelProps}>
                {label}
                <RequiredSign required={required} />
              </FormLabel>
            )}
            <div className="relative flex w-full items-center">
              <FormControl>
                <Input
                  {...field}
                  type={props?.type ?? 'text'}
                  {...restInputProps}
                  placeholder={placeholder}
                  className={cn(
                    {
                      'focus-visible:ring-destructive': fieldState.error,
                    },
                    inputClassName
                  )}
                  onChange={(e) => {
                    field.onChange(e);
                    restInputProps?.onChange?.(e);
                  }}
                  readOnly={readOnly}
                  disabled={disabled}
                  autoComplete={autoComplete}
                />
              </FormControl>

              {Icon && (
                <Icon className="absolute end-4 flex size-5 items-center text-gray-500" />
              )}
            </div>
            {description && (
              <FormDescription {...descriptionProps}>
                {description}
              </FormDescription>
            )}
            {showErrors && <FormMessage />}
          </FormItem>
        );
      }}
    />
  );
};
