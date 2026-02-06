'use client';

import { cn } from '@/lib/utils';

interface KortixLogoProps {
  size?: number;
  variant?: 'symbol' | 'logomark';
  className?: string;
}

export function KortixLogo({ size = 137, variant = 'symbol', className }: KortixLogoProps) {
  // For logomark variant, use logomark-white.svg which is already white
  // and invert it for light mode using CSS (no JS needed)
  if (variant === 'logomark') {
    return (
      <img
        src="/logo-hellenic-ai.svg"
        alt="Hellenic AI"
        className={cn('flex-shrink-0', className)}
        style={{ width: `${size}px`, height: 'auto'}}
        suppressHydrationWarning
      />
    );
  }

  // Default symbol variant behavior - invert for dark mode
  return (
    <img
      src="/logo-hellenic-ai.svg"
      alt="Hellenic AI"
      className={cn('dark:invert flex-shrink-0', className)}
      style={{ width: `${size}px`, height: 'auto' }}
      suppressHydrationWarning
    />
  );
}
