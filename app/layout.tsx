import type React from "react"
import "@/app/globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata = {
  title: "ChristoLanguages - Expert Language Learning Resources",
  description: "Personalized language learning through expert coaching, insightful blog content, and innovative tools.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-serif text-xl">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>ChristoLanguages</span>
                </Link>
                <nav className="hidden md:flex gap-6">
                  <Link href="#services" className="text-sm font-medium hover:text-primary">
                    Services
                  </Link>
                  <Link href="/blog" className="text-sm font-medium hover:text-primary">
                    Blog
                  </Link>
                  <Link href="/app" className="text-sm font-medium hover:text-primary">
                    iOS App
                  </Link>
                  <Link href="/coaching" className="text-sm font-medium hover:text-primary">
                    Coaching
                  </Link>
                  <Link href="/about" className="text-sm font-medium hover:text-primary">
                    About
                  </Link>
                </nav>
                <div className="flex items-center gap-2">
                  <Button asChild variant="outline" className="hidden md:flex">
                    <Link href="/newsletter">Newsletter</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/coaching">Book a Session</Link>
                  </Button>
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="w-full border-t bg-card">
              <div className="container flex flex-col gap-6 py-12 px-4 md:px-6 md:flex-row md:justify-between">
                <div className="flex flex-col gap-6 md:w-1/3">
                  <Link href="/" className="flex items-center gap-2 font-serif text-xl">
                    <Globe className="h-5 w-5 text-primary" />
                    <span className="text-foreground">ChristoLanguages</span>
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Empowering language learners through expert guidance, innovative tools, and comprehensive resources.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-foreground">Services</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="#premium" className="text-sm text-muted-foreground hover:text-primary">
                          Premium Content
                        </Link>
                      </li>
                      <li>
                        <Link href="/app" className="text-sm text-muted-foreground hover:text-primary">
                          iOS App
                        </Link>
                      </li>
                      <li>
                        <Link href="/coaching" className="text-sm text-muted-foreground hover:text-primary">
                          Coaching
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-foreground">Company</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-foreground">Legal</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                          Terms of Service
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="container flex flex-col gap-2 sm:flex-row py-6 items-center border-t px-4 md:px-6">
                <p className="text-xs text-muted-foreground">
                  &copy; {new Date().getFullYear()} ChristoLanguages. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                  <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                    <span className="sr-only">Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                  <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                    <span className="sr-only">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </Link>
                  <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                    <span className="sr-only">YouTube</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                  </Link>
                </nav>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
