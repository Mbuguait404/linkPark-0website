// "use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Users, Globe, Zap, Target, TrendingUp, Shield, GraduationCap, PenTool } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { FAQSection } from "@/components/faq-section"

const services = {
  "local-international-placement": {
    title: "Local & International Job Placement",
    icon: Globe,
    description:
      "Connecting skilled Kenyan professionals with employers locally and abroad across high-demand industries.",
    longDescription:
      "LinkPark Recruitment Agency specializes in placing qualified candidates in both local and international roles. Whether you're a skilled professional seeking global opportunities or a company looking to hire locally, our placement services deliver results with precision, speed, and integrity.",
    benefits: [
      "Access to verified global employers",
      "Tailored placements based on skills and career goals",
      "Transparent and ethical recruitment process",
      "Pre-departure guidance and orientation",
      "Continuous candidate support and follow-up",
      "Opportunities across multiple industries",
    ],
    industries: [
      "Healthcare",
      "Hospitality",
      "Engineering",
      "Information Technology",
      "Construction",
      "Energy & Oil",
    ],
    stats: [
      { label: "Successful Placements", value: "3,500+" },
      { label: "Partner Employers", value: "150+" },
      { label: "Countries Served", value: "6+" },
      { label: "Placement Satisfaction Rate", value: "98%" },
    ],
  },

  "staffing-solutions": {
    title: "Permanent & Temporary Staffing",
    icon: Users,
    description:
      "Flexible staffing solutions designed to meet evolving project and business needs for local and international employers.",
    longDescription:
      "Different projects and organizations require different staffing models. LinkPark provides both permanent and temporary staffing solutions, empowering job seekers with meaningful opportunities while meeting global employer needs efficiently.",
    benefits: [
      "On-demand workforce support",
      "Scalable staffing for short or long-term projects",
      "Employer-employee matching based on needs",
      "Full HR compliance and contract management",
      "Continuous candidate performance tracking",
      "Rapid deployment capabilities",
    ],
    industries: [
      "Construction",
      "Hospitality",
      "Manufacturing",
      "Healthcare",
      "IT Services",
      "Retail & Logistics",
    ],
    stats: [
      { label: "Staffing Contracts Managed", value: "1,000+" },
      { label: "Partner Organizations", value: "200+" },
      { label: "Average Retention Rate", value: "93%" },
      { label: "Turnaround Time", value: "1-2 weeks" },
    ],
  },

  "executive-search": {
    title: "Executive Search & Headhunting",
    icon: Target,
    description:
      "Identifying and placing visionary leaders who drive transformation and growth in international organizations.",
    longDescription:
      "Our Executive Search and Headhunting service goes beyond traditional recruitment to attract top-tier leaders for global roles. We focus on connecting organizations with professionals who can lead expansions, manage offshore operations, and deliver results in complex environments.",
    benefits: [
      "Access to senior-level global talent",
      "Discreet and confidential recruitment process",
      "Leadership and cultural fit assessments",
      "Strategic guidance throughout the hiring cycle",
      "Support for relocation and onboarding",
      "Tailored searches for niche executive roles",
    ],
    industries: [
      "Corporate Management",
      "Engineering Leadership",
      "Healthcare Administration",
      "Finance & Banking",
      "Technology Leadership",
      "Operations & Strategy",
    ],
    stats: [
      { label: "Executive Placements", value: "300+" },
      { label: "Leadership Roles Filled", value: "100+" },
      { label: "Average Hiring Time", value: "45 days" },
      { label: "Client Retention Rate", value: "97%" },
    ],
  },

  "hr-consulting": {
    title: "HR Consulting & Talent Advisory",
    icon: TrendingUp,
    description:
      "Helping organizations build high-performing teams through strategic HR and workforce development advisory.",
    longDescription:
      "LinkPark provides expert HR consulting to help employers optimize workforce strategies, improve retention, and strengthen organizational culture. We also guide professionals in career growth and global readiness through personalized coaching and development plans.",
    benefits: [
      "Workforce planning and analysis",
      "Performance and talent management",
      "Employee engagement strategies",
      "Organizational development support",
      "Training and professional development programs",
      "Employer branding and retention strategies",
    ],
    industries: [
      "Corporate HR",
      "Education & Training",
      "Healthcare",
      "IT & Professional Services",
      "Manufacturing",
      "Public Sector",
    ],
    stats: [
      { label: "Advisory Projects", value: "250+" },
      { label: "Corporate Clients", value: "90+" },
      { label: "Improved Retention Rate", value: "35%" },
      { label: "Average ROI on Consulting", value: "4x" },
    ],
  },

  "career-support": {
    title: "CV Writing & Interview Coaching",
    icon: PenTool,
    description:
      "Empowering job seekers to present their best selves through professional CV writing and interview coaching services.",
    longDescription:
      "Every candidate has a story worth telling. Our CV Writing and Interview Coaching services help professionals communicate their skills effectively, stand out in global job markets, and succeed in both local and offshore interviews.",
    benefits: [
      "Professional CV and cover letter drafting",
      "Mock interviews and personalized feedback",
      "Job market readiness training",
      "Industry-specific CV tailoring",
      "LinkedIn and digital profile optimization",
      "Confidence and communication coaching",
    ],
    industries: [
      "All Job Sectors",
      "Healthcare",
      "Engineering",
      "Hospitality",
      "IT & Digital",
      "Administrative Roles",
    ],
    stats: [
      { label: "CVs Enhanced", value: "5,000+" },
      { label: "Interview Success Rate", value: "95%" },
      { label: "Job Offers Received", value: "4,000+" },
      { label: "Countries Reached", value: "10+" },
    ],
  },

  "graduate-placement": {
    title: "Internship & Graduate Placement",
    icon: GraduationCap,
    description:
      "Creating pathways for youth and graduates to gain real-world experience and international exposure.",
    longDescription:
      "Our Internship and Graduate Placement Programs equip young professionals with industry exposure, mentorship, and skills needed to launch successful global careers. LinkPark partners with international employers to provide structured, rewarding early-career experiences.",
    benefits: [
      "Industry-relevant internships",
      "Mentorship and career guidance",
      "Opportunities for permanent employment",
      "Exposure to international work environments",
      "Certification and recommendation letters",
      "Holistic career development support",
    ],
    industries: [
      "Hospitality",
      "Healthcare",
      "IT & Digital Services",
      "Engineering",
      "Finance & Accounting",
      "Customer Service",
    ],
    stats: [
      { label: "Graduates Placed", value: "1,000+" },
      { label: "Partner Institutions", value: "30+" },
      { label: "Countries Served", value: "6" },
      { label: "Employment Conversion Rate", value: "70%" },
    ],
  },
}


export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug: slug,
  }))
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-secondary">Service Details</Badge>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">{service.title}</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">{service.description}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-secondary" asChild>
                <Link href="/jobs">View Open Positions</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {service.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.longDescription}</p>
              <blockquote className="relative border-l-4 border-[#4dfbdf] pl-6 italic text-lg text-[#0b0f7e] leading-relaxed">
  <p className="text-balance">
    “At LinkPark, we understand that international placement is more than just finding a job — it's about building a
    career and creating opportunities for personal and professional growth. Our team provides comprehensive support
    throughout your journey.”
  </p>

  <span className="absolute -top-4 left-0 text-[#4dfbdf] text-5xl font-serif opacity-60 select-none">“</span>
</blockquote>

            </div>
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {service.industries.map((industry, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                <p className="font-semibold">{industry}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to international placement
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Application</h3>
              <p className="text-sm text-muted-foreground">Submit your application and required documents</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Screening</h3>
              <p className="text-sm text-muted-foreground">Interview and skills assessment by our team</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Placement</h3>
              <p className="text-sm text-muted-foreground">Job matching and employer interview coordination</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Deployment</h3>
              <p className="text-sm text-muted-foreground">Visa processing, orientation, and travel arrangements</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today to learn more about opportunities in this sector</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="default" asChild>
              <Link href="/jobs">Browse Jobs</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-secondary"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Footer */}

      <Footer />
    </div>
  )
}
