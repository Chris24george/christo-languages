import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Calendar, Globe, Mail, MessageSquare, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-card to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center mx-auto max-w-[800px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-foreground mb-6">
              Master Languages with Christo
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-10 max-w-[600px]">
              Personalized language learning through expert coaching, insightful blog content, and innovative
              tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button asChild size="lg" className="px-8 text-base">
                <Link href="#services">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 text-base">
                <Link href="/blog">Read the Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Comprehensive Language Learning Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              Everything you need to master a new language, all in one place.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:gap-10">
            <div className="grid gap-8">
              <div className="flex flex-col p-8 rounded-lg bg-card shadow-sm border h-full">
                <h3 className="text-2xl font-bold mb-3">Insightful Blog Content</h3>
                <p className="text-muted-foreground mb-4">
                  Regular articles on language learning techniques, cultural insights, and practical tips.
                </p>
                <Button asChild variant="link" className="px-0 text-primary justify-start mt-auto">
                  <Link href="/blog">
                    Read the Blog <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col p-8 rounded-lg bg-card shadow-sm border h-full">
                <h3 className="text-2xl font-bold mb-3">Premium Learning Materials</h3>
                <p className="text-muted-foreground mb-4">
                  Carefully crafted resources to accelerate your language learning journey.
                </p>
                <Button asChild variant="link" className="px-0 text-primary justify-start mt-auto">
                  <Link href="#premium">
                    Browse Materials <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-8">
              <div className="flex flex-col p-8 rounded-lg bg-card shadow-sm border h-full">
                <h3 className="text-2xl font-bold mb-3">iOS Language Learning App</h3>
                <p className="text-muted-foreground mb-4">
                  Practice on the go with our intuitive and effective mobile application.
                </p>
                <Button asChild variant="link" className="px-0 text-primary justify-start mt-auto">
                  <Link href="#app">
                    Discover the App <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col p-8 rounded-lg bg-card shadow-sm border h-full">
                <h3 className="text-2xl font-bold mb-3">One-on-One Coaching</h3>
                <p className="text-muted-foreground mb-4">
                  Personalized sessions tailored to your specific language goals and learning style.
                </p>
                <Button asChild variant="link" className="px-0 text-primary justify-start mt-auto">
                  <Link href="#coaching">
                    Book a Session <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="w-full py-20 bg-gradient-to-b from-background to-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Latest from the Blog
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, tips, and strategies to enhance your language learning journey.
            </p>
            <Button asChild size="lg" className="px-8 text-base">
              <Link href="/blog">Read the Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section id="premium" className="w-full py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Premium Learning Materials
            </h2>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              Accelerate your progress with our carefully crafted resources.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                className="flex flex-col items-center rounded-lg border bg-card p-8 shadow-md"
              >
                <div className="rounded-full bg-secondary p-5 text-secondary-foreground mb-5">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-center text-muted-foreground mb-5">{item.description}</p>
                <div className="text-2xl font-bold text-primary mb-6">{item.price}</div>
                <Button asChild className="w-full">
                  <Link href={`/premium/${i + 1}`}>Purchase Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Section */}
      <section id="app" className="w-full py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Learn on the Go with Our iOS App
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-[600px]">
              Practice anytime, anywhere with our intuitive and effective mobile application.
            </p>
            <Button asChild size="lg" className="px-8 text-base">
              <Link href="/app">Discover the App</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coaching Section */}
      <section id="coaching" className="w-full py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              One-on-One Language Coaching
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-[600px]">
              Personalized sessions tailored to your specific language goals and learning style.
            </p>
            <Button asChild size="lg" className="px-8 text-base">
              <Link href="/coaching">Book a Coaching Session</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              About Christo
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-[600px]">
              Language enthusiast, polyglot, and dedicated educator with a passion for helping others master new languages.
            </p>
            <Button asChild size="lg" variant="outline" className="px-8 text-base">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="w-full py-20 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Subscribe to the Language Learning Newsletter
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-[600px]">
              Get weekly tips, resources, and insights to accelerate your language learning journey.
            </p>
            <div className="w-full max-w-md">
              <form className="flex flex-col sm:flex-row gap-3 w-full">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button type="submit" className="px-6">
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-3">
                By subscribing, you agree to our{" "}
                <Link href="/terms" className="underline underline-offset-2 text-primary">
                  Terms & Conditions
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Ready to Start Your Language Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-[700px]">
              Choose the path that works best for you and begin your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="px-8 text-base">
                <Link href="#coaching">Book a Coaching Session</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 text-base">
                <Link href="/blog">Explore the Blog</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 text-base">
                <Link href="#premium">Browse Learning Materials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
