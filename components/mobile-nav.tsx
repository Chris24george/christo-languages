"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Add debugging to console
  useEffect(() => {
    console.log("Mobile menu state:", mobileMenuOpen)
  }, [mobileMenuOpen])

  const toggleMenu = () => {
    setMobileMenuOpen(prev => !prev)
  }

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon"
        aria-expanded={mobileMenuOpen}
        onClick={toggleMenu}
        type="button"
      >
        {mobileMenuOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle menu</span>
      </Button>
      
      {/* Simple mobile navigation */}
      <div
        className={
          mobileMenuOpen
            ? "border-t fixed left-0 right-0 top-16 bg-background z-50 animate-slide-down"
            : "border-t fixed left-0 right-0 top-16 bg-background z-50 animate-slide-up pointer-events-none opacity-0"
        }
        style={{ transition: 'opacity 0.3s, transform 0.3s' }}
      >
        {mobileMenuOpen && (
          <nav className="container flex flex-col py-4 space-y-3">
            <Link href="/blog" className="text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/app" className="text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              iOS App
            </Link>
            <Link href="/coaching" className="text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Coaching
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/newsletter" className="text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Newsletter
            </Link>
            <div className="flex items-center justify-between mt-2 pt-2 border-t">
              <div className="text-sm font-medium">Theme</div>
              <ThemeToggle />
            </div>
            <Button asChild className="w-full mt-2">
              <Link href="/coaching" onClick={() => setMobileMenuOpen(false)}>Book a Session</Link>
            </Button>
          </nav>
        )}
      </div>
    </div>
  )
} 