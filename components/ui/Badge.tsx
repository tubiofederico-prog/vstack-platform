import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'neutral';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'sm',
}) => {
  const variants = {
    primary: 'bg-red-500/20 text-red-300 border border-red-500/30',
    success: 'bg-green-500/20 text-green-300 border border-green-400/30',
    danger: 'bg-red-500/20 text-red-300 border border-red-400/30',
    warning: 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30',
    neutral: 'bg-gray-500/20 text-gray-300 border border-gray-400/30',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs font-medium',
    md: 'px-3 py-1.5 text-sm font-medium',
  };

  return (
    <span className={clsx('inline-flex items-center rounded-full', variants[variant], sizes[size])}>
      {children}
    </span>
  );
};
