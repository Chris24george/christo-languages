import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <main className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground">
              Comprehensive Language Learning Services
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need to master a new language, all in one place.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-6">
            <div className="grid gap-1 p-6 rounded-lg bg-card shadow-sm border">
              <h3 className="text-xl font-bold text-card-foreground">Insightful Blog Content</h3>
              <p className="text-muted-foreground">
                Regular articles on language learning techniques, cultural insights, and practical tips.
              </p>
              <Button asChild variant="link" className="px-0 text-primary">
                <Link href="/blog" className="mt-2">
                  Read the Blog <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-1 p-6 rounded-lg bg-card shadow-sm border">
              <h3 className="text-xl font-bold text-card-foreground">Premium Learning Materials</h3>
              <p className="text-muted-foreground">
                Carefully crafted resources to accelerate your language learning journey.
              </p>
              <Button asChild variant="link" className="px-0 text-primary">
                <Link href="/premium" className="mt-2">
                  Browse Materials <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-1 p-6 rounded-lg bg-card shadow-sm border">
              <h3 className="text-xl font-bold text-card-foreground">iOS Language Learning App</h3>
              <p className="text-muted-foreground">
                Practice on the go with our intuitive and effective mobile application.
              </p>
              <Button asChild variant="link" className="px-0 text-primary">
                <Link href="/app" className="mt-2">
                  Discover the App <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-1 p-6 rounded-lg bg-card shadow-sm border">
              <h3 className="text-xl font-bold text-card-foreground">One-on-One Coaching</h3>
              <p className="text-muted-foreground">
                Personalized sessions tailored to your specific language goals and learning style.
              </p>
              <Button asChild variant="link" className="px-0 text-primary">
                <Link href="/coaching" className="mt-2">
                  Book a Session <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 