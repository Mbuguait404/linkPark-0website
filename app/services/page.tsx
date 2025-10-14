"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Globe, Target, TrendingUp, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { FAQSection } from "@/components/faq-section"
import { motion } from "framer-motion"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        {/* 🌊 Animated Curved Background */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,200 Q150,100 300,200 T600,200 T900,200 T1200,200"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,300 Q150,400 300,300 T600,300 T900,300 T1200,300"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.2, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0b0f7e" />
            <stop offset="100%" stopColor="#4dfbdf" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4dfbdf" />
            <stop offset="100%" stopColor="#0b0f7e" />
          </linearGradient>
        </defs>
      </motion.svg>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Our Services</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Empowering Kenyan youth with Gulf opportunities
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Specialized recruitment services connecting talented Kenyan professionals with career opportunities across
              the Gulf Cooperation Council countries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/jobs">View Open Positions</Link>
              </Button>
            </div>
          </div>
                    {/* 🪄 Right Column (Cards) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">

              <div className="space-y-4 pt-8">
                <Card className="p-6 bg-[#0b0f7e] text-white shadow-md">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Success Rate</h4>
                    <div className="text-4xl font-bold">95%</div>
                    <p className="text-xs opacity-90">Successful placements</p>
                  </div>
                </Card>

                <Card className="p-6 bg-white text-[#0b0f7e] border shadow-md">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Gulf Opportunities</h4>
                    <div className="text-4xl font-bold">500+</div>
                    <p className="text-xs text-muted-foreground">Active positions in GCC</p>
                  </div>
                </Card>
              </div>
                            <Card className="p-6 space-y-4 bg-[#4dfbdf]/20 text-[#0b0f7e] backdrop-blur-md border-none shadow-md">
                <img
                  src="/professional-african-woman-smiling.jpg"
                  alt="Professional candidate"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Grace Wanjiku</h3>
                  <p className="text-sm opacity-90">Healthcare Professional</p>
                  <Badge className="bg-[#0b0f7e] text-white">Placed in UAE</Badge>
                </div>
              </Card>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What we offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized recruitment services designed to connect Kenyan talent with Gulf opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Gulf Region Placements</h3>
                <p className="text-muted-foreground mb-6">
                  Specialized placement services for UAE, Saudi Arabia, Qatar, Oman, Bahrain, and Kuwait. We handle visa
                  processing, documentation, and pre-departure orientation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Complete visa and work permit assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Pre-departure orientation programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ongoing support throughout contract</span>
                  </li>
                </ul>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/services/gulf-placements">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Healthcare Recruitment</h3>
                <p className="text-muted-foreground mb-6">
                  Specialized placement of nurses, doctors, and allied health professionals in Gulf region hospitals and
                  medical facilities with full licensing support.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>License verification and processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Dataflow and credential verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Exam preparation guidance</span>
                  </li>
                </ul>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/services/healthcare-recruitment">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Hospitality Staffing</h3>
                <p className="text-muted-foreground mb-6">
                  Recruitment for hotels, resorts, restaurants, and tourism sectors across the Gulf region. From
                  entry-level to management positions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>5-star hotel placements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Restaurant and catering positions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Tourism and event management</span>
                  </li>
                </ul>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/services/hospitality-staffing">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Engineering & Technical</h3>
                <p className="text-muted-foreground mb-6">
                  Placement of engineers and technical professionals in construction, oil & gas, and infrastructure
                  projects across the Gulf region.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Civil and mechanical engineers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Oil & gas sector positions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Construction management roles</span>
                  </li>
                </ul>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/services/engineering-technical">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Service 5 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">IT Professionals</h3>
                <p className="text-muted-foreground mb-6">
                  Recruitment of IT professionals, software developers, and technology specialists for Gulf region tech
                  companies and digital transformation projects.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Software development roles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Network and cybersecurity positions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>IT management opportunities</span>
                  </li>
                </ul>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/services/it-professionals">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Service 6 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Compliance & Documentation</h3>
                <p className="text-muted-foreground mb-6">
                  Complete documentation, visa processing, and compliance services ensuring smooth and legal
                  international placements for all candidates.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Document authentication & attestation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Medical examination coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Police clearance assistance</span>
                  </li>
                </ul>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/services/compliance-documentation">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our recruitment process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-muted-foreground">
                We learn about your company culture, requirements, and ideal candidate profile
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Sourcing</h3>
              <p className="text-muted-foreground">
                We tap into our extensive network and use advanced tools to find top talent
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Screening</h3>
              <p className="text-muted-foreground">
                Rigorous assessment and vetting to ensure only qualified candidates move forward
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Placement</h3>
              <p className="text-muted-foreground">
                We facilitate interviews, negotiations, and onboarding for a smooth transition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to find your next hire?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our recruitment services can help you build a winning team
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/jobs">Browse Jobs</Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </div>
  )
}
