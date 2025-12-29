import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold uppercase tracking-wider transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none border-2 border-black flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand text-black shadow-neo hover:bg-[#b0eb00]",
    secondary: "bg-white text-black shadow-neo hover:bg-gray-50",
    outline: "bg-transparent text-black border-black shadow-none hover:bg-gray-100",
    danger: "bg-red-500 text-white shadow-neo hover:bg-red-600",
  };

  const sizes = {
    sm: "px-3 py-1 text-xs shadow-neo-sm",
    md: "px-6 py-3 text-sm shadow-neo",
    lg: "px-8 py-4 text-base shadow-neo",
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};