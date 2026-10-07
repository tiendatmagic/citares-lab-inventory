import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'tab';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isActive?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  loadingText,
  leftIcon,
  rightIcon,
  isActive = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer rounded-xl select-none disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 h-8 gap-1.5',
    md: 'text-sm px-4 py-2.5 h-11 gap-2',
    lg: 'text-[15px] px-5 py-3 h-[50px] gap-2 tracking-wide',
  }[size];

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#20409a] to-[#152e75] hover:from-[#284ebd] to-[#1a388c] text-white hover:-translate-y-0.5 shadow-[0_4px_18px_rgba(32,64,154,0.3)] hover:shadow-[0_6px_22px_rgba(32,64,154,0.42)]',
    secondary:
      'bg-white border border-[#d8e2f1] text-[#0f172a] hover:bg-[#f0f4fa] hover:border-[#20409a] hover:text-[#20409a]',
    danger:
      'bg-[#d3122a]/15 border border-[#d3122a]/40 text-[#ff6b7b] hover:bg-[#d3122a] hover:text-white',
    tab: isActive
      ? 'bg-[#20409a] text-white border border-[#20409a]'
      : 'bg-white text-[#0f172a] border border-[#d8e2f1] hover:bg-[#f0f4fa]',
  }[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin shrink-0" aria-hidden="true" />
          <span>{loadingText || 'Đang xử lý...'}</span>
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}
