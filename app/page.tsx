import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Calendar, Globe, Mail, MessageSquare, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-serif text-xl">
            <Globe className="h-5 w-5 text-primary" />
            <span>ChristoLanguage</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="#app" className="text-sm font-medium hover:text-primary">
              iOS App
            </Link>
            <Link href="#coaching" className="text-sm font-medium hover:text-primary">
              Coaching
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="#newsletter">Newsletter</Link>
            </Button>
            <Button asChild>
              <Link href="#coaching">Book a Session</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>
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
                    <Link href="#blog">Read the Blog</Link>
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
                    <Link href="#blog" className="mt-2">
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
                    <Link href="#premium" className="mt-2">
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
                    <Link href="#app" className="mt-2">
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
                    <Link href="#coaching" className="mt-2">
                      Book a Session <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-card">
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
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Blog+${i}`}
                    width={400}
                    height={200}
                    alt={`Blog post ${i}`}
                    className="object-cover transition-all duration-200 group-hover:scale-105"
                  />
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
        </section>

        <section id="coaching" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
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
                  <Link href="#blog">Explore the Blog</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#premium">Browse Learning Materials</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-card">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-6 md:w-1/3">
            <Link href="/" className="flex items-center gap-2 font-serif text-xl">
              <Globe className="h-5 w-5 text-primary" />
              <span className="text-foreground">ChristoLanguage</span>
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
                  <Link href="#blog" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#premium" className="text-sm text-muted-foreground hover:text-primary">
                    Premium Content
                  </Link>
                </li>
                <li>
                  <Link href="#app" className="text-sm text-muted-foreground hover:text-primary">
                    iOS App
                  </Link>
                </li>
                <li>
                  <Link href="#coaching" className="text-sm text-muted-foreground hover:text-primary">
                    Coaching
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-foreground">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
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
            &copy; {new Date().getFullYear()} ChristoLanguage. All rights reserved.
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
  )
}
