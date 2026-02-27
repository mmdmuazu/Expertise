"use client";

import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className = "",
      variant = "default",
      size = "default",
      ...props
    },
    ref,
  ) => {
    const variantStyles = {
      default: "text-white bg-primary hover:bg-opacity-90",
      destructive: "bg-red-600 text-white hover:bg-red-700",
      outline:
        "border border-primary text-primary hover:bg-primary hover:text-white",
      secondary: "bg-accent text-white hover:bg-opacity-90",
      ghost: "hover:bg-gray-100",
    };

    const sizeStyles = {
      default: "px-4 py-2",
      sm: "px-2 py-1 text-sm",
      lg: "px-6 py-3 text-lg",
      icon: "w-10 h-10",
    };

    return (
      <button
        className={`inline-flex items-center justify-center border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
