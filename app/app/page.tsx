import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AppPage() {
  return (
    <main className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            src="/placeholder.svg?height=600&width=300&text=App+Screenshot"
            width={300}
            height={600}
            alt="iOS App Screenshot"
            className="mx-auto aspect-[1/2] overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Learn on the Go with Our iOS App
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Practice anytime, anywhere with our intuitive and effective mobile application.
              </p>
            </div>
            <ul className="grid gap-2">
              {[
                "Daily practice sessions tailored to your level",
                "Interactive exercises for reading, writing, listening, and speaking",
                "Progress tracking and performance analytics",
                "Offline mode for learning without internet connection",
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
                <Link href="https://apps.apple.com">
                  <Smartphone className="h-5 w-5" />
                  Download on App Store
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#app-features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 