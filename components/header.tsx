"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (name: string) =>
    setOpenDropdown(openDropdown === name ? null : name)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    {
      name: "Locations",
      href: "#",
      dropdown: [
        { name: "Eldoret", href: "/locations/eldoret" },
        { name: "Nairobi", href: "/locations/nairobi" },
      ],
    },
    { name: "Jobs", href: "/jobs" },
    { name: "About", href: "#about" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="LinkPark Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      isScrolled ? "text-[#0b0f7e]" : "text-[#0b0f7e]"
                    } hover:text-[#4dfbdf]`}
                  >
                    {link.name}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-44 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0b0f7e]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled ? "text-[#0b0f7e]" : "text-[#0b0f7e]"
                  } hover:text-[#4dfbdf]`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Right buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-[#0b0f7e] hover:text-[#4dfbdf]"
              asChild
            >
              <Link href="/login">Sign In</Link>
            </Button>
            <Button
              size="sm"
              className="bg-[#0b0f7e] hover:bg-[#4dfbdf] hover:text-[#0b0f7e] text-white"
              asChild
            >
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-[#0b0f7e] hover:text-[#4dfbdf]"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-80 bg-white p-6 overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                      src="/logo.png"
                      alt="LinkPark Logo"
                      width={100}
                      height={40}
                      className="object-contain"
                    />
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-[#0b0f7e]"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) =>
                    link.dropdown ? (
                      <div key={link.name}>
                        <button
                          onClick={() => toggleDropdown(link.name)}
                          className="flex justify-between items-center w-full py-3 text-lg font-medium text-[#0b0f7e] hover:text-[#4dfbdf]"
                        >
                          {link.name}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              openDropdown === link.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openDropdown === link.name && (
                          <div className="pl-4 pb-2 space-y-1">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block py-2 text-sm text-gray-700 hover:text-[#0b0f7e]"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="py-3 text-lg font-medium text-[#0b0f7e] hover:text-[#4dfbdf]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )
                  )}
                </nav>

                <div className="mt-8 flex flex-col gap-3">
                  <Button
                    variant="ghost"
                    className="text-[#0b0f7e] hover:text-[#4dfbdf]"
                    asChild
                  >
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button
                    className="bg-[#0b0f7e] hover:bg-[#4dfbdf] hover:text-[#0b0f7e] text-white"
                    asChild
                  >
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
