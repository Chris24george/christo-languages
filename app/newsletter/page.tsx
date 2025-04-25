import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterPage() {
  return (
    <main className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground">
            Subscribe to the Language Learning Newsletter
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get weekly tips, resources, and insights to accelerate your language learning journey.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-lg flex-1"
            />
            <Button type="submit">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground">
            By subscribing, you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-2 text-primary">
              Terms & Conditions
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  )
} 