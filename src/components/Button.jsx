import React from 'react';

/**
 * Reusable Premium Button Component
 * @param {Object} props
 * @param {string} props.variant - 'primary' | 'secondary' | 'outline' | 'glass'
 * @param {string} props.type - 'button' | 'submit' | 'reset'
 * @param {function} props.onClick
 * @param {string} props.className
 * @param {React.ReactNode} props.children
 */
export default function Button({
  children,
  variant = 'glass',
  type = 'button',
  onClick,
  className = '',
  ...props
}) {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  
  return (
    <button
      type={type}
      className={`${baseClass} ${variantClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
