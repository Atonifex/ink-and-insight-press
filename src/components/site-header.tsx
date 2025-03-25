"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">
              <span className="text-ink">Ink</span> + <span className="text-insight">Insight</span>
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </Link>
            <Link
              href="https://calendly.com/iharj99/ink-and-ivy-press-meet-with-maggie"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Button variant="default" className="bg-gradient-primary text-white">
                Meet your Bookish Besties!
              </Button>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

