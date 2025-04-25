import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
          <Image
            src="/placeholder.svg?height=600&width=600&text=Christo"
            width={600}
            height={600}
            alt="Christo portrait"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Christo</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Language enthusiast, polyglot, and dedicated educator with a passion for helping others master new
                languages.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                As a polyglot with extensive experience in language acquisition, I understand the challenges and
                joys of learning new languages. My approach combines proven methodologies with personalized
                strategies to help you achieve fluency efficiently and enjoyably.
              </p>
              <p>
                Through my blog, premium materials, iOS app, and one-on-one coaching sessions, I provide
                comprehensive support for language learners at all levels. My teaching philosophy emphasizes
                practical communication skills, cultural understanding, and sustainable learning habits.
              </p>
              <p>
                Whether you're a beginner taking your first steps in a new language or an advanced learner aiming
                for native-like fluency, I'm here to guide you every step of the way.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 