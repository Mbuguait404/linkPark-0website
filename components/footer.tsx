import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto md:max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Start your global career journey with LinkPark</h2>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">Get Started Today</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider opacity-80">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm opacity-90 hover:opacity-100">
                  Job Placement
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm opacity-90 hover:opacity-100">
                  CV Writing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm opacity-90 hover:opacity-100">
                  Interview Coaching
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm opacity-90 hover:opacity-100">
                  HR Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider opacity-80">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/industries" className="text-sm opacity-90 hover:opacity-100">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-sm opacity-90 hover:opacity-100">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-sm opacity-90 hover:opacity-100">
                  Jobs & Vacancies
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm opacity-90 hover:opacity-100">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider opacity-80">For Employers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm opacity-90 hover:opacity-100">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm opacity-90 hover:opacity-100">
                  Talent Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm opacity-90 hover:opacity-100">
                  Executive Search
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm opacity-90 hover:opacity-100">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider opacity-80">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-90">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>+254 722 447 701</div>
                  <div>+254 790 388 833</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-90">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@linkparkoffshore.co.ke" className="hover:opacity-100">
                  info@linkparkoffshore.co.ke
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-90">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  Sagaas Business Centre, 3rd Floor
                  <br />
                  Eldoret City, Kenya
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            {/* Logo */}
                      <Link href="/" className="flex items-center gap-2">
                        <Image
                          src="/logo/logo_white.png"
                          alt="LinkPark Logo"
                          width={120}
                          height={40}
                          className="h-10 w-auto object-contain"
                        />
                      </Link>
          </div>
          <Link href="https://www.lancolatech.com" className="text-sm opacity-80 hover:opacity-100">
          <p className="text-sm opacity-80">© 2025 Lancola Tech. All rights reserved.</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
