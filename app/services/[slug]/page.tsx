import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Users, Globe, Zap, Target, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const services = {
  "gulf-placements": {
    title: "Gulf Region Placements",
    icon: Globe,
    description:
      "Specialized recruitment services connecting Kenyan professionals with opportunities across the Gulf Cooperation Council (GCC) countries.",
    longDescription:
      "Our Gulf placement service is our flagship offering, connecting talented Kenyan professionals with career opportunities in the UAE, Saudi Arabia, Qatar, Oman, Bahrain, and Kuwait. We handle the entire process from initial screening to visa processing and pre-departure orientation.",
    benefits: [
      "Comprehensive visa and work permit assistance",
      "Pre-departure orientation and cultural training",
      "Ongoing support throughout your contract",
      "Competitive salary packages and benefits",
      "Direct employer connections",
      "Post-arrival settlement assistance",
    ],
    industries: ["Healthcare", "Hospitality", "Engineering", "IT & Technology", "Construction", "Energy & Oil"],
    stats: [
      { label: "Successful Placements", value: "3,500+" },
      { label: "Partner Companies", value: "150+" },
      { label: "Average Salary Increase", value: "200%" },
      { label: "Success Rate", value: "98%" },
    ],
  },
  "healthcare-recruitment": {
    title: "Healthcare Recruitment",
    icon: Users,
    description:
      "Specialized placement of healthcare professionals including nurses, doctors, and allied health workers in Gulf region hospitals and clinics.",
    longDescription:
      "We specialize in placing qualified healthcare professionals in leading hospitals and medical facilities across the Gulf region. Our team understands the specific licensing requirements and cultural considerations for healthcare workers.",
    benefits: [
      "License verification and processing support",
      "Dataflow and credential verification assistance",
      "Prometric and other exam preparation guidance",
      "Placement in JCI-accredited facilities",
      "Competitive tax-free salaries",
      "Accommodation and transportation benefits",
    ],
    industries: [
      "Nursing",
      "General Practice",
      "Specialist Doctors",
      "Allied Health",
      "Medical Technology",
      "Healthcare Administration",
    ],
    stats: [
      { label: "Healthcare Placements", value: "1,200+" },
      { label: "Partner Hospitals", value: "45+" },
      { label: "Countries Served", value: "6" },
      { label: "Average Processing Time", value: "60 days" },
    ],
  },
  "hospitality-staffing": {
    title: "Hospitality Staffing",
    icon: Zap,
    description:
      "Recruitment of hospitality professionals for hotels, resorts, restaurants, and tourism sectors across the Gulf region.",
    longDescription:
      "The Gulf region's booming tourism and hospitality sector offers excellent opportunities for Kenyan professionals. We place staff at all levels from entry positions to management roles in 5-star hotels and resorts.",
    benefits: [
      "Placement in luxury hotels and resorts",
      "Tips and service charge benefits",
      "Career progression opportunities",
      "Free accommodation and meals",
      "Annual leave and return tickets",
      "Training and development programs",
    ],
    industries: ["Hotels & Resorts", "Restaurants", "Catering", "Tourism", "Event Management", "Cruise Lines"],
    stats: [
      { label: "Hospitality Placements", value: "2,000+" },
      { label: "Partner Hotels", value: "80+" },
      { label: "Average Monthly Salary", value: "$800-2,500" },
      { label: "Retention Rate", value: "92%" },
    ],
  },
  "engineering-technical": {
    title: "Engineering & Technical",
    icon: Target,
    description:
      "Placement of engineers and technical professionals in construction, oil & gas, and infrastructure projects across the Gulf.",
    longDescription:
      "The Gulf region's massive infrastructure development creates constant demand for qualified engineers and technical professionals. We place civil, mechanical, electrical, and petroleum engineers in major projects.",
    benefits: [
      "High-value project placements",
      "Competitive salary packages",
      "Professional development opportunities",
      "International project experience",
      "Modern work environments",
      "Family visa sponsorship options",
    ],
    industries: [
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Oil & Gas",
      "Construction Management",
      "Project Management",
    ],
    stats: [
      { label: "Engineers Placed", value: "800+" },
      { label: "Major Projects", value: "120+" },
      { label: "Average Salary", value: "$3,000-8,000" },
      { label: "Contract Duration", value: "2-3 years" },
    ],
  },
  "it-professionals": {
    title: "IT Professionals",
    icon: TrendingUp,
    description:
      "Recruitment of IT professionals, software developers, and technology specialists for Gulf region tech companies and enterprises.",
    longDescription:
      "As the Gulf region rapidly digitizes, demand for IT professionals continues to grow. We place software developers, network engineers, cybersecurity specialists, and IT managers in leading companies.",
    benefits: [
      "Work with cutting-edge technology",
      "Competitive tax-free salaries",
      "Modern office environments",
      "Professional certification support",
      "Career advancement opportunities",
      "Relocation and settling-in support",
    ],
    industries: [
      "Software Development",
      "Network Engineering",
      "Cybersecurity",
      "Data Science",
      "Cloud Computing",
      "IT Management",
    ],
    stats: [
      { label: "IT Placements", value: "500+" },
      { label: "Tech Companies", value: "60+" },
      { label: "Average Salary", value: "$2,500-7,000" },
      { label: "Demand Growth", value: "35% YoY" },
    ],
  },
  "compliance-documentation": {
    title: "Compliance & Documentation",
    icon: Shield,
    description:
      "Complete documentation, visa processing, and compliance services ensuring smooth and legal international placements.",
    longDescription:
      "We handle all the complex paperwork and compliance requirements for international placements. Our experienced team ensures all documentation meets Gulf country requirements and processes are completed efficiently.",
    benefits: [
      "Complete visa processing support",
      "Document authentication and attestation",
      "Medical examination coordination",
      "Police clearance assistance",
      "Contract review and verification",
      "Pre-departure briefing sessions",
    ],
    industries: [
      "All Sectors",
      "Healthcare Licensing",
      "Engineering Credentials",
      "Educational Certificates",
      "Professional Licenses",
      "Background Verification",
    ],
    stats: [
      { label: "Documents Processed", value: "10,000+" },
      { label: "Success Rate", value: "99.5%" },
      { label: "Average Processing", value: "45 days" },
      { label: "Countries Covered", value: "6" },
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
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">Service Details</Badge>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-purple-600 flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">{service.title}</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">{service.description}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
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
      <section className="py-12 px-4 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {service.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-purple-100">{stat.label}</div>
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
              <p className="text-muted-foreground leading-relaxed">
                At LinkPark, we understand that international placement is more than just finding a job - it's about
                building a career and creating opportunities for personal and professional growth. Our team provides
                comprehensive support throughout your journey.
              </p>
            </div>
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
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
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Application</h3>
              <p className="text-sm text-muted-foreground">Submit your application and required documents</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Screening</h3>
              <p className="text-sm text-muted-foreground">Interview and skills assessment by our team</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Placement</h3>
              <p className="text-sm text-muted-foreground">Job matching and employer interview coordination</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Deployment</h3>
              <p className="text-sm text-muted-foreground">Visa processing, orientation, and travel arrangements</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today to learn more about opportunities in this sector</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/jobs">Browse Jobs</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
