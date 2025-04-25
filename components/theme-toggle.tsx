'use client'

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme = "system", setTheme } = useTheme()
  const themes = ["light", "dark", "system"]
  const currentIndex = themes.indexOf(theme)
  const nextTheme = themes[(currentIndex + 1) % themes.length]

  const handleClick = () => {
    setTheme(nextTheme)
  }

  return (
    <Button variant="outline" size="icon" onClick={handleClick}>
      {/* Show icon based on current theme */}
      {theme === "light" && <Sun className="h-[1.2rem] w-[1.2rem]" />}
      {theme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem]" />}
      {theme === "system" && <Monitor className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 