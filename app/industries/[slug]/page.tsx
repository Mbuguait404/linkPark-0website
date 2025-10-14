import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Stethoscope,
  Utensils,
  Building2,
  Laptop,
  Zap,
  GraduationCap,
  Truck,
  Briefcase,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const industries = {
  healthcare: {
    title: "Healthcare",
    icon: Stethoscope,
    description:
      "Connecting qualified healthcare professionals with leading hospitals and medical facilities across the Gulf region.",
    longDescription:
      "The Gulf region's healthcare sector is experiencing rapid growth, creating significant demand for qualified medical professionals. We specialize in placing nurses, doctors, allied health professionals, and healthcare administrators in JCI-accredited facilities across the UAE, Saudi Arabia, Qatar, and other GCC countries.",
    positions: [
      "Registered Nurses (RN)",
      "Staff Nurses",
      "Specialist Doctors",
      "General Practitioners",
      "Medical Laboratory Technicians",
      "Radiographers",
      "Pharmacists",
      "Physiotherapists",
      "Healthcare Administrators",
      "Medical Records Officers",
    ],
    requirements: [
      "Valid professional license from home country",
      "Minimum 2 years post-qualification experience",
      "Good English communication skills",
      "Willingness to obtain Gulf country license",
      "Clean criminal record",
      "Medical fitness certificate",
    ],
    benefits: [
      "Tax-free competitive salaries",
      "Free accommodation or housing allowance",
      "Annual return flight tickets",
      "Medical insurance coverage",
      "30 days annual leave",
      "End of service benefits",
    ],
    stats: [
      { label: "Healthcare Placements", value: "1,200+" },
      { label: "Partner Hospitals", value: "45+" },
      { label: "Average Salary", value: "$2,000-5,000" },
      { label: "Success Rate", value: "97%" },
    ],
  },
  hospitality: {
    title: "Hospitality & Tourism",
    icon: Utensils,
    description:
      "Placing hospitality professionals in luxury hotels, resorts, restaurants, and tourism establishments across the Gulf.",
    longDescription:
      "The Gulf region's booming tourism industry offers excellent opportunities for hospitality professionals. From 5-star hotels in Dubai to luxury resorts in Qatar, we connect talented individuals with prestigious establishments that value quality service and professional excellence.",
    positions: [
      "Hotel Managers",
      "Front Desk Officers",
      "Housekeeping Staff",
      "Chefs & Cooks",
      "Waiters & Waitresses",
      "Bartenders",
      "Concierge Staff",
      "Event Coordinators",
      "Restaurant Managers",
      "Spa Therapists",
    ],
    requirements: [
      "Relevant hospitality qualification or experience",
      "Minimum 1-2 years experience in similar role",
      "Excellent customer service skills",
      "Good English communication",
      "Professional appearance and demeanor",
      "Flexibility to work shifts",
    ],
    benefits: [
      "Competitive salary plus tips",
      "Free accommodation and meals",
      "Annual flight tickets",
      "Service charge benefits",
      "Career progression opportunities",
      "Training and development",
    ],
    stats: [
      { label: "Hospitality Placements", value: "2,000+" },
      { label: "Partner Hotels", value: "80+" },
      { label: "Average Salary", value: "$800-2,500" },
      { label: "Retention Rate", value: "92%" },
    ],
  },
  engineering: {
    title: "Engineering & Construction",
    icon: Building2,
    description:
      "Recruiting engineers and technical professionals for major infrastructure and construction projects across the Gulf.",
    longDescription:
      "The Gulf region's massive infrastructure development creates constant demand for qualified engineers. From mega construction projects in Saudi Arabia to oil & gas facilities in the UAE, we place civil, mechanical, electrical, and petroleum engineers in world-class projects.",
    positions: [
      "Civil Engineers",
      "Mechanical Engineers",
      "Electrical Engineers",
      "Structural Engineers",
      "Project Managers",
      "Site Engineers",
      "Quantity Surveyors",
      "Construction Managers",
      "Safety Officers",
      "Quality Control Engineers",
    ],
    requirements: [
      "Bachelor's degree in relevant engineering field",
      "Minimum 3-5 years experience",
      "Professional engineering license preferred",
      "Strong technical and analytical skills",
      "Experience with international standards",
      "Good English communication",
    ],
    benefits: [
      "High competitive salaries",
      "Housing allowance or accommodation",
      "Transportation allowance",
      "Annual flight tickets",
      "Project completion bonuses",
      "Family visa sponsorship options",
    ],
    stats: [
      { label: "Engineers Placed", value: "800+" },
      { label: "Major Projects", value: "120+" },
      { label: "Average Salary", value: "$3,000-8,000" },
      { label: "Contract Duration", value: "2-3 years" },
    ],
  },
  technology: {
    title: "IT & Technology",
    icon: Laptop,
    description:
      "Connecting IT professionals with technology companies and digital transformation projects across the Gulf region.",
    longDescription:
      "As Gulf countries rapidly digitize their economies, demand for IT professionals continues to surge. We place software developers, network engineers, cybersecurity specialists, and IT managers in leading tech companies, government entities, and enterprises undergoing digital transformation.",
    positions: [
      "Software Developers",
      "Full Stack Engineers",
      "Network Engineers",
      "Cybersecurity Specialists",
      "Database Administrators",
      "Cloud Engineers",
      "DevOps Engineers",
      "IT Project Managers",
      "Systems Analysts",
      "Technical Support Engineers",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Minimum 2-4 years relevant experience",
      "Strong programming or technical skills",
      "Professional certifications preferred",
      "Experience with modern technologies",
      "Good English communication",
    ],
    benefits: [
      "Tax-free competitive salaries",
      "Modern work environments",
      "Professional development opportunities",
      "Certification sponsorship",
      "Housing and transportation allowances",
      "Annual leave and flight tickets",
    ],
    stats: [
      { label: "IT Placements", value: "500+" },
      { label: "Tech Companies", value: "60+" },
      { label: "Average Salary", value: "$2,500-7,000" },
      { label: "Demand Growth", value: "35% YoY" },
    ],
  },
  energy: {
    title: "Energy & Oil",
    icon: Zap,
    description: "Specialized recruitment for the oil, gas, and renewable energy sectors across Gulf countries.",
    longDescription:
      "The Gulf region remains a global energy hub, with both traditional oil & gas operations and growing renewable energy initiatives. We recruit for petroleum engineers, drilling specialists, refinery operators, and renewable energy professionals for leading energy companies.",
    positions: [
      "Petroleum Engineers",
      "Drilling Engineers",
      "Production Engineers",
      "Process Engineers",
      "HSE Officers",
      "Refinery Operators",
      "Pipeline Engineers",
      "Maintenance Technicians",
      "Instrumentation Engineers",
      "Renewable Energy Specialists",
    ],
    requirements: [
      "Bachelor's degree in relevant engineering field",
      "Minimum 3-5 years industry experience",
      "Safety certifications (NEBOSH, IOSH)",
      "Experience with industry standards",
      "Strong technical knowledge",
      "Willingness to work in remote locations",
    ],
    benefits: [
      "Premium salary packages",
      "Rotation schedules (28/28, 42/21)",
      "Comprehensive insurance",
      "Housing in company camps",
      "Transportation provided",
      "Generous leave benefits",
    ],
    stats: [
      { label: "Energy Placements", value: "400+" },
      { label: "Partner Companies", value: "35+" },
      { label: "Average Salary", value: "$4,000-10,000" },
      { label: "Contract Duration", value: "2-3 years" },
    ],
  },
  education: {
    title: "Education",
    icon: GraduationCap,
    description:
      "Placing qualified teachers and education professionals in international schools and institutions across the Gulf.",
    longDescription:
      "The Gulf region's growing expatriate population and focus on education quality creates demand for qualified teachers and education professionals. We place teachers, administrators, and education specialists in international schools, universities, and training institutions.",
    positions: [
      "English Teachers",
      "Math & Science Teachers",
      "Early Childhood Educators",
      "Special Education Teachers",
      "School Administrators",
      "Academic Coordinators",
      "University Lecturers",
      "Training Specialists",
      "Curriculum Developers",
      "Education Consultants",
    ],
    requirements: [
      "Bachelor's degree in Education or relevant field",
      "Teaching qualification (B.Ed, PGCE, etc.)",
      "Minimum 2 years teaching experience",
      "Native or fluent English speaker",
      "Experience with international curriculum",
      "Clean criminal record",
    ],
    benefits: [
      "Competitive tax-free salaries",
      "Free or subsidized accommodation",
      "Annual return flight tickets",
      "Medical insurance",
      "School fee discounts for children",
      "Professional development opportunities",
    ],
    stats: [
      { label: "Education Placements", value: "600+" },
      { label: "Partner Schools", value: "50+" },
      { label: "Average Salary", value: "$2,000-4,500" },
      { label: "Contract Duration", value: "2 years" },
    ],
  },
  logistics: {
    title: "Logistics & Supply Chain",
    icon: Truck,
    description:
      "Recruiting logistics professionals for warehousing, transportation, and supply chain operations across the Gulf.",
    longDescription:
      "The Gulf region's strategic location as a global trade hub creates significant demand for logistics and supply chain professionals. We place warehouse managers, logistics coordinators, supply chain analysts, and transportation specialists in leading companies.",
    positions: [
      "Warehouse Managers",
      "Logistics Coordinators",
      "Supply Chain Analysts",
      "Inventory Controllers",
      "Transportation Managers",
      "Procurement Officers",
      "Freight Forwarders",
      "Operations Supervisors",
      "Distribution Managers",
      "Customs Clearance Officers",
    ],
    requirements: [
      "Bachelor's degree in relevant field",
      "Minimum 2-3 years logistics experience",
      "Knowledge of supply chain management",
      "Computer literacy (ERP systems)",
      "Good organizational skills",
      "Valid driving license preferred",
    ],
    benefits: [
      "Competitive salaries",
      "Housing or housing allowance",
      "Transportation provided",
      "Annual flight tickets",
      "Medical insurance",
      "Performance bonuses",
    ],
    stats: [
      { label: "Logistics Placements", value: "700+" },
      { label: "Partner Companies", value: "65+" },
      { label: "Average Salary", value: "$1,500-4,000" },
      { label: "Growth Rate", value: "25% YoY" },
    ],
  },
  professional: {
    title: "Professional Services",
    icon: Briefcase,
    description:
      "Placing professionals in finance, accounting, HR, marketing, and other corporate services across the Gulf region.",
    longDescription:
      "Gulf companies require skilled professionals across various corporate functions. We recruit accountants, HR specialists, marketing professionals, and business development managers for multinational corporations, SMEs, and government entities.",
    positions: [
      "Accountants",
      "Financial Analysts",
      "HR Managers",
      "Recruitment Specialists",
      "Marketing Managers",
      "Business Development Managers",
      "Sales Executives",
      "Customer Service Managers",
      "Administrative Managers",
      "Legal Advisors",
    ],
    requirements: [
      "Bachelor's degree in relevant field",
      "Minimum 2-4 years experience",
      "Professional certifications preferred",
      "Strong communication skills",
      "Computer proficiency",
      "Experience with international standards",
    ],
    benefits: [
      "Competitive tax-free salaries",
      "Housing allowance",
      "Transportation allowance",
      "Annual flight tickets",
      "Medical insurance",
      "Performance bonuses",
    ],
    stats: [
      { label: "Professional Placements", value: "900+" },
      { label: "Partner Companies", value: "100+" },
      { label: "Average Salary", value: "$2,000-6,000" },
      { label: "Success Rate", value: "95%" },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({
    slug: slug,
  }))
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = industries[params.slug as keyof typeof industries]

  if (!industry) {
    notFound()
  }

  const Icon = industry.icon

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">Industry Focus</Badge>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-purple-600 flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">{industry.title}</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">{industry.description}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/jobs">View Open Positions</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industry.stats.map((stat, index) => (
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
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-6">Industry Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{industry.longDescription}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Available Positions</h3>
              <ul className="space-y-2">
                {industry.positions.slice(0, 5).map((position, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{position}</span>
                  </li>
                ))}
              </ul>
              {industry.positions.length > 5 && (
                <p className="text-sm text-muted-foreground mt-4">
                  And {industry.positions.length - 5} more positions...
                </p>
              )}
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Requirements</h3>
              <ul className="space-y-2">
                {industry.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Benefits Package</h3>
              <ul className="space-y-2">
                {industry.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* All Positions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All Available Positions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the full range of opportunities in this sector
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industry.positions.map((position, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                <p className="text-sm font-semibold">{position}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How to Apply</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Your journey to a Gulf career starts here</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Submit Application</h3>
              <p className="text-sm text-muted-foreground">Apply online with your CV and required documents</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Initial Screening</h3>
              <p className="text-sm text-muted-foreground">Our team reviews your qualifications and experience</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Interview & Matching</h3>
              <p className="text-sm text-muted-foreground">Interview with our team and match with suitable employers</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Placement & Travel</h3>
              <p className="text-sm text-muted-foreground">
                Complete documentation, visa processing, and travel arrangements
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your career in {industry.title}?</h2>
          <p className="text-xl mb-8 opacity-90">
            Browse available positions or contact us to learn more about opportunities in this sector
          </p>
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
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
