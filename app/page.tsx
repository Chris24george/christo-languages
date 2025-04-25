import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Calendar, Globe, Mail, MessageSquare, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-card to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
                  Master Languages with Christo
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Personalized language learning through expert coaching, insightful blog content, and innovative
                  tools.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="#services">
                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/blog">Read the Blog</Link>
                </Button>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Language learning illustration"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground mb-4">
            Comprehensive Language Learning Services
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-6">
            Everything you need to master a new language, all in one place.
          </p>
          <Button asChild size="lg">
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </section>

      <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-card">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground mb-4">
            Latest from the Blog
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-6">
            Insights, tips, and strategies to enhance your language learning journey.
          </p>
          <Button asChild size="lg">
            <Link href="/blog">Read the Blog</Link>
          </Button>
        </div>
      </section>

      <section id="premium" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground">
                Premium Learning Materials
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Accelerate your progress with our carefully crafted resources.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Comprehensive Grammar Guide",
                description: "Master the fundamentals with clear explanations and practical examples.",
                price: "$29",
                icon: <BookOpen className="h-10 w-10" />,
              },
              {
                title: "Vocabulary Builder Pack",
                description: "Expand your lexicon with thematic word lists and memory techniques.",
                price: "$19",
                icon: <MessageSquare className="h-10 w-10" />,
              },
              {
                title: "Pronunciation Masterclass",
                description: "Sound like a native speaker with our audio-guided practice sessions.",
                price: "$39",
                icon: <Mail className="h-10 w-10" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 shadow-md"
              >
                <div className="rounded-full bg-secondary p-4 text-secondary-foreground">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{item.title}</h3>
                <p className="text-center text-muted-foreground">{item.description}</p>
                <div className="text-2xl font-bold text-primary">{item.price}</div>
                <Button asChild className="w-full">
                  <Link href={`/premium/${i + 1}`}>Purchase Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="app" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Learn on the Go with Our iOS App</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl mb-6">
            Practice anytime, anywhere with our intuitive and effective mobile application.
          </p>
          <Button asChild size="lg">
            <Link href="/app">Discover the App</Link>
          </Button>
        </div>
      </section>

      <section id="coaching" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            One-on-One Language Coaching
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl mb-6">
            Personalized sessions tailored to your specific language goals and learning style.
          </p>
          <Button asChild size="lg">
            <Link href="/coaching">Book a Coaching Session</Link>
          </Button>
        </div>
      </section>

      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">About Christo</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl mb-6">
            Language enthusiast, polyglot, and dedicated educator with a passion for helping others master new languages.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link href="/about">Learn More About Me</Link>
          </Button>
        </div>
      </section>

      <section
        id="newsletter"
        className="w-full py-12 md:py-24 lg:py-32 bg-card"
      >
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
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Start Your Language Journey?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Choose the path that works best for you and begin your transformation today.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="#coaching">Book a Coaching Session</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Explore the Blog</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#premium">Browse Learning Materials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
