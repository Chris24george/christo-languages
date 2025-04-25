import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronDown, Download, HelpCircle, Smartphone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import AppScreenshot from "@/components/AppScreenshot"

export default function AppPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                <Smartphone className="h-4 w-4 mr-2" />
                <span>iOS App Available Now</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Master Languages <span className="text-primary">Anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
                Bring the power of immersive language learning to your pocket with our award-winning iOS app. Practice anytime, anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href="https://apps.apple.com">
                    <Download className="h-5 w-5" />
                    Download Now
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#features">
                    Learn More
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                      <Image 
                        src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`} 
                        alt="User" 
                        width={32} 
                        height={32}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">4.9 (2,800+ reviews)</span>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px]">
                <div className="absolute inset-0 rounded-[2rem] border-8 border-black bg-black shadow-xl overflow-hidden">
                  <AppScreenshot 
                    src="/app-screenshot.png"
                    alt="App Screenshot"
                    width={600}
                    height={1200}
                    className="object-cover"
                    fallbackSrc="https://placehold.co/600x1200/5f27cd/ffffff?text=Christo+Languages"
                  />
                </div>
                <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-t-[2rem] flex justify-center items-end pb-1">
                  <div className="w-16 h-1 rounded-full bg-zinc-700"></div>
                </div>
              </div>
              <div className="absolute -z-10 bg-gradient-radial from-primary/20 to-transparent w-[600px] h-[600px] blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-[800px]">
              Our app is packed with features to accelerate your language learning journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Personalized Learning Path",
                description: "AI-powered lessons adapt to your skill level, learning style, and progress.",
                icon: <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
                </div>
              },
              {
                title: "Interactive Exercises",
                description: "Build skills through reading, writing, listening, and speaking challenges.",
                icon: <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>
                </div>
              },
              {
                title: "Offline Learning",
                description: "Download lessons for learning without internet connection.",
                icon: <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M16 8V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3"/><path d="m9 19 3-3 3 3"/><path d="M12 16v-7"/><path d="m2 8 2 2 2-2"/><path d="m18 8 2 2 2-2"/><path d="M7 6h11"/></svg>
                </div>
              },
              {
                title: "Progress Analytics",
                description: "Visualize your learning journey with detailed progress tracking.",
                icon: <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
                </div>
              },
              {
                title: "Audio Recognition",
                description: "Fine-tune your pronunciation with advanced speech recognition technology.",
                icon: <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
                </div>
              },
              {
                title: "Spaced Repetition",
                description: "Optimize memorization with scientifically proven learning techniques.",
                icon: <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 14v1"/><path d="M9 19v2"/><path d="M9 3v2"/><path d="M9 9v1"/><path d="M15 14v1"/><path d="M15 19v2"/><path d="M15 3v2"/><path d="M15 9v1"/></svg>
                </div>
              },
            ].map((feature, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Users Say</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-[800px]">
              Join thousands of satisfied language learners around the world.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Spanish Learner",
                content: "The app has transformed my language learning experience. I can practice during my commute and have made incredible progress in just three months.",
                avatar: "/testimonial-1.jpg"
              },
              {
                name: "David Chen",
                role: "French Enthusiast",
                content: "I've tried many language apps, but this one stands out with its effective methodology and engaging exercises. It's become part of my daily routine.",
                avatar: "/testimonial-2.jpg"
              },
              {
                name: "Maria Gonzalez",
                role: "Japanese Student",
                content: "The speech recognition feature is incredibly accurate and has helped me improve my pronunciation dramatically. Highly recommended!",
                avatar: "/testimonial-3.jpg"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
                    <AppScreenshot 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      width={48} 
                      height={48}
                      fallbackSrc={`https://randomuser.me/api/portraits/${i % 2 ? 'women' : 'men'}/${i + 20}.jpg`}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground flex-grow">{testimonial.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-[800px]">
              Find answers to common questions about our iOS app.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "Is the app free to download?",
                  answer: "Yes, the basic version of the app is free to download with limited features. We offer premium subscriptions for full access to all lessons and features."
                },
                {
                  question: "Which languages are currently supported?",
                  answer: "We currently support Spanish, French, German, Italian, Portuguese, Japanese, Chinese, and Russian, with more languages being added regularly."
                },
                {
                  question: "Can I use the app offline?",
                  answer: "Yes, you can download lessons for offline use, which is perfect for learning while traveling or in areas with limited connectivity."
                },
                {
                  question: "How often is new content added?",
                  answer: "We add new lessons, exercises, and features every month to keep content fresh and engaging for all learning levels."
                },
                {
                  question: "Is there a web version of the app?",
                  answer: "Yes, your account syncs between our iOS app and web platform, allowing you to continue your learning journey on any device."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Start Your Language Journey?</h2>
              <p className="mt-4 text-primary-foreground/80 text-lg max-w-[600px]">
                Download our app today and join thousands of language learners worldwide.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Daily 10-minute practice sessions",
                  "30+ languages to choose from",
                  "Personalizes to your learning style",
                  "14-day free premium trial"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary" className="gap-2">
                  <Link href="https://apps.apple.com">
                    <Smartphone className="h-5 w-5" />
                    Download on App Store
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative mx-auto w-[240px] h-[480px] rotate-6">
                <div className="absolute inset-0 rounded-[2rem] border-8 border-black bg-black shadow-xl overflow-hidden">
                  <AppScreenshot
                    src="/app-screenshot-2.png"
                    alt="App Screenshot"
                    width={600}
                    height={1200}
                    className="object-cover"
                    fallbackSrc="https://placehold.co/600x1200/5f27cd/ffffff?text=Language+Practice"
                  />
                </div>
                <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-t-[2rem] flex justify-center items-end pb-1">
                  <div className="w-16 h-1 rounded-full bg-zinc-700"></div>
                </div>
              </div>
              <div className="absolute top-8 -right-8 w-[240px] h-[480px] -rotate-6">
                <div className="absolute inset-0 rounded-[2rem] border-8 border-black bg-black shadow-xl overflow-hidden">
                  <AppScreenshot
                    src="/app-screenshot-3.png"
                    alt="App Screenshot"
                    width={600}
                    height={1200}
                    className="object-cover"
                    fallbackSrc="https://placehold.co/600x1200/6c5ce7/ffffff?text=Progress+Stats"
                  />
                </div>
                <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-t-[2rem] flex justify-center items-end pb-1">
                  <div className="w-16 h-1 rounded-full bg-zinc-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 