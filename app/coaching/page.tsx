import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CoachingPage() {
  return (
    <main className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                One-on-One Language Coaching
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Personalized sessions tailored to your specific language goals and learning style.
              </p>
            </div>
            <ul className="grid gap-2">
              {[
                "Customized learning plan based on your goals",
                "Real-time feedback on pronunciation and grammar",
                "Cultural insights and practical conversation practice",
                "Flexible scheduling to fit your busy life",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/coaching/book">
                  <Calendar className="h-5 w-5" />
                  Book a Session
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/coaching/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/placeholder.svg?height=400&width=600&text=Coaching+Session"
            width={600}
            height={400}
            alt="Coaching session illustration"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </main>
  )
} 