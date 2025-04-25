import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <main className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground">
              Latest from the Blog
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Insights, tips, and strategies to enhance your language learning journey.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group relative flex flex-col space-y-2 bg-card rounded-lg shadow-md overflow-hidden border"
            >
              <div className="flex-1 space-y-2 p-6">
                <h3 className="text-xl font-bold text-card-foreground">Language Learning Technique #{i}</h3>
                <p className="text-muted-foreground">
                  Effective strategies to accelerate your language acquisition process.
                </p>
                <Button asChild variant="link" className="px-0 text-primary">
                  <Link href={`/blog/post-${i}`}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </main>
  )
} 