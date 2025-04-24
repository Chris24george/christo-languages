'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

// Remove CustomThemeProviderProps if fontVars is no longer needed here
// interface CustomThemeProviderProps extends ThemeProviderProps {
//   fontVars?: string
// }

// Update props type if CustomThemeProviderProps is removed
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="christo-theme" // Added a unique storage key
      // disableTransitionOnChange // Optional: uncomment if theme change animations are causing issues
      {...props}
    >
      {children} // Render children directly
    </NextThemesProvider>
  )
}
