"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Laptop,
  HeartPulse,
  Landmark,
  Factory,
  ShoppingBag,
  GraduationCap,
  Truck,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { MinCollageSection } from "@/components/min-collage-seciton"
import { StatsSection } from "@/components/stats-section"

export default function IndustriesPage() {
  const industries = [
    {
      icon: Laptop,
      title: "Technology & IT",
      description:
        "Software engineers, data scientists, cybersecurity experts, and IT professionals across all tech domains.",
      specialties: ["Software Development", "Cloud & DevOps", "Data & AI", "Cybersecurity"],
      stats: "500+ placements",
    },
    {
      icon: HeartPulse,
      title: "Healthcare & Life Sciences",
      description: "Medical professionals, pharmaceutical experts, biotech specialists, and healthcare administrators.",
      specialties: ["Clinical Roles", "Pharmaceutical", "Medical Devices", "Healthcare Admin"],
      stats: "300+ placements",
    },
    {
      icon: Landmark,
      title: "Finance & Banking",
      description:
        "Investment bankers, financial analysts, accountants, and fintech professionals driving financial innovation.",
      specialties: ["Investment Banking", "Accounting", "Fintech", "Risk Management"],
      stats: "450+ placements",
    },
    {
      icon: Factory,
      title: "Manufacturing & Engineering",
      description:
        "Mechanical engineers, production managers, quality assurance specialists, and industrial professionals.",
      specialties: ["Mechanical Engineering", "Production", "Quality Control", "Supply Chain"],
      stats: "350+ placements",
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-commerce",
      description: "Store managers, e-commerce specialists, merchandisers, and customer experience professionals.",
      specialties: ["Store Management", "E-commerce", "Merchandising", "Customer Service"],
      stats: "400+ placements",
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Teachers, academic administrators, corporate trainers, and educational technology specialists.",
      specialties: ["Academic Roles", "Corporate Training", "EdTech", "Administration"],
      stats: "250+ placements",
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Supply chain managers, logistics coordinators, warehouse supervisors, and procurement specialists.",
      specialties: ["Supply Chain", "Warehouse Management", "Procurement", "Distribution"],
      stats: "320+ placements",
    },
    {
      icon: Building2,
      title: "Professional Services",
      description: "Consultants, legal professionals, marketing experts, and business development specialists.",
      specialties: ["Consulting", "Legal", "Marketing", "Business Development"],
      stats: "380+ placements",
    },
  ]

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
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Industries We Serve</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Specialized expertise across diverse industries
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Our deep industry knowledge and extensive networks enable us to find the perfect talent match for your
              sector-specific needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Partner With Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/jobs">View All Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Industries Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries we specialize in</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leveraging deep sector knowledge to deliver exceptional recruitment outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors group">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <industry.icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold">{industry.title}</h3>
                        <Badge variant="secondary" className="ml-2">
                          {industry.stats}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{industry.description}</p>
                      <div className="mb-4">
                        <div className="text-sm font-semibold mb-2">Key Specialties:</div>
                        <div className="flex flex-wrap gap-2">
                          {industry.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="outline">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="link" className="p-0" asChild>
                        <Link href="/contact">
                          Inquire About Opportunity <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why industry expertise matters</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Generic recruitment doesn't work in specialized fields. Our industry-focused approach ensures we
                understand the unique challenges, skills, and cultural fit required for success in your sector.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Deep Market Knowledge</h3>
                    <p className="text-muted-foreground">
                      We stay current with industry trends, salary benchmarks, and emerging skill requirements
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Specialized Networks</h3>
                    <p className="text-muted-foreground">
                      Access to passive candidates and niche talent pools within your industry
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Technical Assessment</h3>
                    <p className="text-muted-foreground">
                      Industry-specific screening and evaluation to ensure technical competency
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Cultural Alignment</h3>
                    <p className="text-muted-foreground">
                      Understanding of industry culture and what makes candidates successful in your environment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4">15+</div>
                  <div className="text-2xl font-semibold mb-2">Years of Experience</div>
                  <p className="text-muted-foreground">
                    Building industry expertise and networks across multiple sectors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MinCollageSection />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Don't see your industry listed?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We work across many more sectors. Get in touch to discuss your specific recruitment needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
