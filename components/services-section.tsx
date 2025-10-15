"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Users,
  Target,
  TrendingUp,
  PenTool,
  GraduationCap,
  ArrowRight,
} from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What we offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized recruitment services designed to connect Kenyan talent with Gulf opportunities
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Service 1 - Local & International Job Placement */}
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Local & International Job Placement
              </h3>
              <p className="text-muted-foreground mb-6">
                Connecting skilled Kenyan professionals with verified local and global employers across high-demand industries.
                We handle screening, matching, and full placement support for career success.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Access to verified global employers</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Pre-departure and visa guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Continuous post-placement support</span>
                </li>
              </ul>
              <Button variant="link" className="p-0" asChild>
                <Link href="/services/local-international-placement">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Service 2 - Permanent & Temporary Staffing */}
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Permanent & Temporary Staffing</h3>
              <p className="text-muted-foreground mb-6">
                Flexible staffing models designed to meet evolving employer needs—offering both permanent and project-based workforce solutions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Permanent and short-term staffing options</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>On-demand workforce deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Compliant and transparent hiring process</span>
                </li>
              </ul>
              <Button variant="link" className="p-0" asChild>
                <Link href="/services/staffing-solutions">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Service 3 - Executive Search & Headhunting */}
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Executive Search & Headhunting</h3>
              <p className="text-muted-foreground mb-6">
                Identifying and placing visionary leaders for international and offshore roles across multiple sectors.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Access to global leadership talent</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Confidential executive recruitment</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Leadership assessment & onboarding support</span>
                </li>
              </ul>
              <Button variant="link" className="p-0" asChild>
                <Link href="/services/executive-search">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Service 4 - HR Consulting & Talent Advisory */}
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">HR Consulting & Talent Advisory</h3>
              <p className="text-muted-foreground mb-6">
                Supporting organizations in building high-performing teams and improving workforce strategies through expert HR advisory.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Workforce planning and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Talent development and retention strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Employee training and engagement programs</span>
                </li>
              </ul>
              <Button variant="link" className="p-0" asChild>
                <Link href="/services/hr-consulting">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Service 5 - CV Writing & Interview Coaching */}
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <PenTool className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">CV Writing & Interview Coaching</h3>
              <p className="text-muted-foreground mb-6">
                Helping candidates craft professional CVs, build confidence, and succeed in both local and international interviews.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Professional CV and cover letter writing</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Mock interviews with feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Personalized job readiness training</span>
                </li>
              </ul>
              <Button variant="link" className="p-0" asChild>
                <Link href="/services/career-support">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Service 6 - Internship & Graduate Placement */}
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Internship & Graduate Placement</h3>
              <p className="text-muted-foreground mb-6">
                Equipping young professionals with practical experience, mentorship, and international exposure through structured programs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Industry-relevant internship opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Career mentorship and guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>International placement pathways</span>
                </li>
              </ul>
              <Button variant="link" className="p-0" asChild>
                <Link href="/services/graduate-placement">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
