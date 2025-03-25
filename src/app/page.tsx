import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { BookOpen, Sparkles, TrendingUp, MessageSquare, Calendar, Instagram, Twitter, Facebook } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      {/* Hero Section - Variation 1 with Variation 2 background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink/20 to-insight/20 dark:from-ink/10 dark:to-insight/10 -skew-y-6 transform origin-top-right"></div>
        <div className="container relative px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Your story. <span className="text-gradient">Our strategy.</span>
              </h1>
              <p className="text-xl text-muted-foreground">It&apos;s just #BookMarketingMagic</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://calendly.com/iharj99/ink-and-ivy-press-meet-with-maggie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-primary text-white">Meet your Bookish Besties!</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/images/bookstore-hero.jpeg"
                alt="Beautiful bookstore with stacks of books"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Reordered with Maggie first */}
      <section className="py-12 md:py-24 bg-white dark:bg-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Your Team</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              The dynamic duo behind Ink and Insight Press
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 mt-12">
            {/* Maggie First */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image src="/images/maggie.png" alt="Maggie Curley" fill className="object-cover" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Maggie Curley</h3>
                <p className="text-sm text-muted-foreground">Head of Insight</p>
                <p className="text-sm md:text-base">
                  With 5 years of experience in e-book marketing and advertising, Maggie will make sure that wherever
                  readers may be searching for books, they&apos;ll be able to find yours. From assisting with category
                  selection and description writing for Amazon success to securing key newsletter deals and providing
                  paid and organic social media and advertising services, Maggie&apos;s marketing prowess helps take
                  your self-published novel to commercial success.
                </p>
              </div>
            </div>
            {/* Claire Second */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image src="/images/claire.png" alt="Claire Fitzpatrick" fill className="object-cover" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Claire Fitzpatrick</h3>
                <p className="text-sm text-muted-foreground">Head of Ink</p>
                <p className="text-sm md:text-base">
                  With 5 years of experience in editorial, Claire will help turn your draft into a bestseller. From
                  shaping your story to the nitty gritty details of editing and book formatting, Claire&apos;s
                  comprehensive editorial services make all the difference for a self-published author.
                </p>
              </div>
            </div>
          </div>
          {/* "Claire and Maggie have been best friends..." paragraph from Variation 2 */}
          <div className="mt-12 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <p className="italic text-muted-foreground">
              Claire and Maggie have been best friends for more than a decade and are ready to bring you into the fold.
              They understand that publishing is not a one-size-fits-all industry: your book&apos;s success relies on a
              personalized approach. Excitement, energy, and a passion for books is at the center of everything they do.
              When they&apos;re not in the Ink and Insight office working on your next bestseller, you can catch Claire
              and Maggie bonding over the latest matcha latte flavor from Blank Street and taking a hike in upstate New
              York!
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - "Ink + Insight Launch Plan" from Variation 2 */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Ink + Insight Launch Plan</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive approach to publishing and marketing your book
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-1 bg-gradient-primary"></div>
              <div className="p-8">
                <div className="w-12 h-12 bg-ink/10 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="h-6 w-6 text-ink" />
                </div>
                <h3 className="text-2xl font-bold mb-4">INK REVIEW</h3>
                <p className="text-muted-foreground mb-6">
                  Full service editing that transforms your manuscript into a polished, professional book ready for
                  publication.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-ink" />
                    <span>Developmental editing</span>
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-ink" />
                    <span>Copy editing</span>
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-ink" />
                    <span>Proofreading</span>
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-ink" />
                    <span>Book formatting</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-1 bg-gradient-primary"></div>
              <div className="p-8">
                <div className="w-12 h-12 bg-insight/10 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-insight" />
                </div>
                <h3 className="text-2xl font-bold mb-4">INSIGHT STRATEGY</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive marketing strategy and execution to ensure your book reaches its target audience.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-insight" />
                    <span>Kindle Direct Publishing category consulting</span>
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-insight" />
                    <span>Social media and website consulting</span>
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-insight" />
                    <span>Paid advertising strategy</span>
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-insight" />
                    <span>Organic marketing execution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Variation 2 with title changed to "Ready to Get Started?" */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-ink/10 to-insight/10"></div>
        <div className="container relative px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Want to learn more? Take a look at our blog Ink + Insight Insider Tips for more info about the
              self-publishing process or check out our Author Spotlight page for testimonials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog">
                <Button variant="outline" size="lg" className="group">
                  <MessageSquare className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  <span>Read Our Blog</span>
                </Button>
              </Link>
              <Link href="/testimonials">
                <Button variant="outline" size="lg" className="group">
                  <MessageSquare className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  <span>Author Spotlights</span>
                </Button>
              </Link>
              <Link
                href="https://calendly.com/iharj99/ink-and-ivy-press-meet-with-maggie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-primary text-white group transition-all duration-300 transform hover:scale-105"
                >
                  <Calendar className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  <span>Meet your Bookish Besties!</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Social Links - from Variation 2 */}
      <footer className="border-t py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-bold text-2xl mb-4">
                <span className="text-ink">Ink</span> + <span className="text-insight">Insight</span>
              </div>
              <p className="text-muted-foreground">
                Publishing consulting and marketing company helping authors turn their drafts into bestsellers.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
              <div className="mt-6">
                <Link
                  href="https://calendly.com/iharj99/ink-and-ivy-press-meet-with-maggie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-primary text-white w-full">Schedule a Consultation</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 Ink and Insight Press. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

