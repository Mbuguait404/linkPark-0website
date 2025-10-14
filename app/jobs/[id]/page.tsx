import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Briefcase, DollarSign, Clock, Calendar, Building2, CheckCircle2, Share2, Bookmark } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Sample job data - in a real app, this would come from a database
const jobs: Record<string, any> = {
  "1": {
    id: "1",
    title: "Registered Nurse - ICU",
    company: "Dubai Healthcare City Hospital",
    location: "Dubai, UAE",
    country: "UAE",
    salary: "$3,500 - $4,500",
    type: "Full-time",
    experience: "3-5 years",
    posted: "2 days ago",
    deadline: "March 30, 2025",
    industry: "Healthcare",
    positions: "5 openings",
    description:
      "We are seeking experienced Registered Nurses to join our Intensive Care Unit at one of Dubai's premier healthcare facilities. This is an excellent opportunity for qualified nurses looking to advance their careers in a world-class medical environment.",
    responsibilities: [
      "Provide direct patient care in the ICU setting",
      "Monitor patient vital signs and respond to emergencies",
      "Administer medications and treatments as prescribed",
      "Collaborate with physicians and healthcare team",
      "Maintain accurate patient records and documentation",
      "Educate patients and families on care procedures",
      "Ensure compliance with hospital policies and protocols",
    ],
    requirements: [
      "Bachelor's degree in Nursing (BSN)",
      "Valid nursing license from home country",
      "Minimum 3 years ICU experience",
      "BLS and ACLS certification",
      "Excellent English communication skills",
      "Ability to work rotating shifts",
      "Dataflow and license verification required",
    ],
    benefits: [
      "Tax-free monthly salary of $3,500 - $4,500",
      "Free furnished accommodation",
      "Annual return flight ticket",
      "Comprehensive medical insurance",
      "30 days annual leave",
      "End of service gratuity",
      "Professional development opportunities",
    ],
    skills: ["Critical Care", "Patient Monitoring", "Emergency Response", "Medical Documentation"],
  },
  "2": {
    id: "2",
    title: "Hotel Manager",
    company: "Luxury Resort Group",
    location: "Doha, Qatar",
    country: "Qatar",
    salary: "$4,000 - $5,500",
    type: "Full-time",
    experience: "5+ years",
    posted: "1 week ago",
    deadline: "April 15, 2025",
    industry: "Hospitality",
    positions: "2 openings",
    description:
      "Join our prestigious 5-star resort in Doha as a Hotel Manager. Lead a dynamic team and deliver exceptional guest experiences in one of Qatar's most luxurious properties.",
    responsibilities: [
      "Oversee daily hotel operations and staff management",
      "Ensure exceptional guest service and satisfaction",
      "Manage budgets and financial performance",
      "Implement operational policies and procedures",
      "Coordinate with all departments for seamless operations",
      "Handle guest complaints and resolve issues",
      "Drive revenue growth and occupancy rates",
    ],
    requirements: [
      "Bachelor's degree in Hospitality Management",
      "Minimum 5 years hotel management experience",
      "Experience in 4 or 5-star properties",
      "Strong leadership and communication skills",
      "Proficiency in hotel management systems",
      "Excellent problem-solving abilities",
      "Fluent in English, Arabic is a plus",
    ],
    benefits: [
      "Competitive tax-free salary",
      "Luxury accommodation provided",
      "Annual flight tickets for family",
      "Medical insurance for family",
      "Performance bonuses",
      "Career advancement opportunities",
      "Staff meals and uniforms",
    ],
    skills: ["Hotel Operations", "Team Leadership", "Guest Relations", "Budget Management"],
  },
  "3": {
    id: "3",
    title: "Civil Engineer",
    company: "Gulf Construction Ltd",
    location: "Riyadh, Saudi Arabia",
    country: "Saudi Arabia",
    salary: "$5,000 - $7,000",
    type: "Contract",
    experience: "5+ years",
    posted: "3 days ago",
    deadline: "April 10, 2025",
    industry: "Engineering",
    positions: "8 openings",
    description:
      "Major infrastructure project in Riyadh seeking experienced Civil Engineers. Work on cutting-edge construction projects as part of Saudi Arabia's Vision 2030 development initiatives.",
    responsibilities: [
      "Design and oversee construction projects",
      "Prepare technical drawings and specifications",
      "Conduct site inspections and quality control",
      "Coordinate with contractors and consultants",
      "Ensure compliance with safety standards",
      "Manage project timelines and budgets",
      "Prepare progress reports and documentation",
    ],
    requirements: [
      "Bachelor's degree in Civil Engineering",
      "Minimum 5 years experience in construction",
      "Experience with large-scale infrastructure projects",
      "Proficiency in AutoCAD and engineering software",
      "Knowledge of international building codes",
      "Strong analytical and problem-solving skills",
      "Valid engineering license preferred",
    ],
    benefits: [
      "High competitive salary package",
      "Company-provided accommodation",
      "Transportation to/from site",
      "Annual return flight tickets",
      "Medical insurance coverage",
      "Project completion bonuses",
      "Overtime compensation",
    ],
    skills: ["AutoCAD", "Project Management", "Structural Design", "Quality Control"],
  },
  "4": {
    id: "4",
    title: "Full Stack Developer",
    company: "Tech Innovations DMCC",
    location: "Dubai, UAE",
    country: "UAE",
    salary: "$4,500 - $6,500",
    type: "Full-time",
    experience: "3-5 years",
    posted: "5 days ago",
    deadline: "April 20, 2025",
    industry: "Technology",
    positions: "4 openings",
    description:
      "Join our innovative tech company in Dubai as a Full Stack Developer. Work on exciting projects using modern technologies and contribute to digital transformation initiatives.",
    responsibilities: [
      "Develop and maintain web applications",
      "Design and implement RESTful APIs",
      "Write clean, maintainable code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews and testing",
      "Troubleshoot and debug applications",
      "Stay updated with emerging technologies",
    ],
    requirements: [
      "Bachelor's degree in Computer Science",
      "3+ years full stack development experience",
      "Proficiency in React, Node.js, and databases",
      "Experience with cloud platforms (AWS/Azure)",
      "Strong problem-solving skills",
      "Good understanding of Agile methodologies",
      "Excellent communication skills",
    ],
    benefits: [
      "Tax-free competitive salary",
      "Housing allowance",
      "Annual flight tickets",
      "Medical insurance",
      "Professional development budget",
      "Modern office environment",
      "Flexible working arrangements",
    ],
    skills: ["React", "Node.js", "MongoDB", "AWS", "TypeScript"],
  },
  "5": {
    id: "5",
    title: "Executive Chef",
    company: "Fine Dining Restaurant Group",
    location: "Abu Dhabi, UAE",
    country: "UAE",
    salary: "$3,500 - $5,000",
    type: "Full-time",
    experience: "7+ years",
    posted: "1 week ago",
    deadline: "April 5, 2025",
    industry: "Hospitality",
    positions: "1 opening",
    description:
      "Lead the culinary team at our upscale restaurant in Abu Dhabi. Create innovative menus and deliver exceptional dining experiences to discerning guests.",
    responsibilities: [
      "Oversee all kitchen operations and staff",
      "Design seasonal menus and special offerings",
      "Ensure food quality and presentation standards",
      "Manage food costs and inventory",
      "Train and mentor kitchen staff",
      "Maintain health and safety compliance",
      "Collaborate with restaurant management",
    ],
    requirements: [
      "Culinary degree or equivalent certification",
      "Minimum 7 years experience as Executive Chef",
      "Experience in fine dining establishments",
      "Strong knowledge of international cuisines",
      "Excellent leadership and management skills",
      "Food safety certification",
      "Creative and innovative approach to cooking",
    ],
    benefits: [
      "Competitive salary plus service charge",
      "Accommodation provided",
      "Annual flight tickets",
      "Medical insurance",
      "Staff meals",
      "Career growth opportunities",
      "Performance bonuses",
    ],
    skills: ["Menu Development", "Kitchen Management", "Food Safety", "Team Leadership"],
  },
  "6": {
    id: "6",
    title: "Accountant",
    company: "Global Finance Solutions",
    location: "Muscat, Oman",
    country: "Oman",
    salary: "$2,500 - $3,500",
    type: "Full-time",
    experience: "3-5 years",
    posted: "4 days ago",
    deadline: "April 12, 2025",
    industry: "Professional Services",
    positions: "3 openings",
    description:
      "Join our finance team in Muscat as an Accountant. Handle financial operations for a growing company with international clients.",
    responsibilities: [
      "Prepare financial statements and reports",
      "Manage accounts payable and receivable",
      "Conduct monthly reconciliations",
      "Assist with budget preparation",
      "Ensure compliance with tax regulations",
      "Process payroll and employee expenses",
      "Support audit processes",
    ],
    requirements: [
      "Bachelor's degree in Accounting or Finance",
      "Professional certification (ACCA, CPA) preferred",
      "Minimum 3 years accounting experience",
      "Proficiency in accounting software",
      "Strong analytical skills",
      "Attention to detail",
      "Good English communication",
    ],
    benefits: [
      "Tax-free salary",
      "Housing allowance",
      "Annual flight tickets",
      "Medical insurance",
      "30 days annual leave",
      "End of service benefits",
      "Professional development support",
    ],
    skills: ["Financial Reporting", "QuickBooks", "Excel", "Tax Compliance"],
  },
  "7": {
    id: "7",
    title: "Mechanical Engineer",
    company: "Industrial Solutions Co.",
    location: "Kuwait City, Kuwait",
    country: "Kuwait",
    salary: "$4,000 - $6,000",
    type: "Full-time",
    experience: "5+ years",
    posted: "6 days ago",
    deadline: "April 18, 2025",
    industry: "Engineering",
    positions: "6 openings",
    description:
      "Seeking experienced Mechanical Engineers for industrial projects in Kuwait. Work on HVAC, piping, and mechanical systems for commercial and industrial facilities.",
    responsibilities: [
      "Design mechanical systems and equipment",
      "Prepare technical specifications",
      "Conduct site surveys and inspections",
      "Review and approve shop drawings",
      "Coordinate with contractors and suppliers",
      "Ensure project quality and compliance",
      "Provide technical support and troubleshooting",
    ],
    requirements: [
      "Bachelor's degree in Mechanical Engineering",
      "Minimum 5 years relevant experience",
      "Experience with HVAC and piping systems",
      "Proficiency in AutoCAD and design software",
      "Knowledge of international standards",
      "Strong technical and analytical skills",
      "Valid engineering license preferred",
    ],
    benefits: [
      "Competitive salary package",
      "Company accommodation",
      "Transportation provided",
      "Annual flight tickets",
      "Medical insurance",
      "Performance bonuses",
      "Overtime allowance",
    ],
    skills: ["HVAC Design", "AutoCAD", "Piping Systems", "Project Coordination"],
  },
  "8": {
    id: "8",
    title: "English Teacher",
    company: "International School of Bahrain",
    location: "Manama, Bahrain",
    country: "Bahrain",
    salary: "$2,800 - $3,800",
    type: "Full-time",
    experience: "2-4 years",
    posted: "1 week ago",
    deadline: "March 28, 2025",
    industry: "Education",
    positions: "3 openings",
    description:
      "Join our international school in Bahrain as an English Teacher. Teach secondary level students following the British curriculum.",
    responsibilities: [
      "Plan and deliver engaging English lessons",
      "Assess student progress and provide feedback",
      "Prepare students for IGCSE examinations",
      "Participate in school activities and events",
      "Communicate with parents about student progress",
      "Contribute to curriculum development",
      "Maintain classroom discipline and management",
    ],
    requirements: [
      "Bachelor's degree in English or Education",
      "Teaching qualification (PGCE, B.Ed)",
      "Minimum 2 years teaching experience",
      "Experience with British curriculum preferred",
      "Native or fluent English speaker",
      "Strong classroom management skills",
      "Clean criminal record check",
    ],
    benefits: [
      "Tax-free salary",
      "Furnished accommodation",
      "Annual return flight tickets",
      "Medical insurance",
      "School fee discount for children",
      "Professional development opportunities",
      "8 weeks annual leave",
    ],
    skills: ["British Curriculum", "IGCSE", "Classroom Management", "Student Assessment"],
  },
}

export function generateStaticParams() {
  return Object.keys(jobs).map((id) => ({
    id: id,
  }))
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = jobs[params.id]

  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Job Header */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge className="mb-3 bg-secondary text-secondary-700 hover:bg-secondary">{job.industry}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{job.title}</h1>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span className="font-semibold">{job.company}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Job Meta */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-secondary-600" />
                    <div>
                      <div className="text-xs text-muted-foreground">Location</div>
                      <div className="font-semibold">{job.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-secondary-600" />
                    <div>
                      <div className="text-xs text-muted-foreground">Salary</div>
                      <div className="font-semibold">{job.salary}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-secondary-600" />
                    <div>
                      <div className="text-xs text-muted-foreground">Experience</div>
                      <div className="font-semibold">{job.experience}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-secondary-600" />
                    <div>
                      <div className="text-xs text-muted-foreground">Type</div>
                      <div className="font-semibold">{job.type}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Job Description</h2>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </Card>

              {/* Responsibilities */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Requirements */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((requirement: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Benefits */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Benefits Package</h2>
                <ul className="space-y-3">
                  {job.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Skills */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill: string, index: number) => (
                    <Badge key={index} variant="secondary" className="px-4 py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Card */}
              <Card className="p-6 sticky top-24">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Application Deadline</div>
                    <div className="flex items-center gap-2 font-semibold">
                      <Calendar className="w-4 h-4 text-secondary-600" />
                      {job.deadline}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Positions Available</div>
                    <div className="font-semibold">{job.positions}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Posted</div>
                    <div className="font-semibold">{job.posted}</div>
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary" size="lg" asChild>
                    <Link href="/signup">Apply Now</Link>
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline" size="lg" asChild>
                    <Link href="/contact">Contact Recruiter</Link>
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By applying, you agree to our terms and conditions
                  </p>
                </div>
              </Card>

              {/* Company Info */}
              <Card className="p-6">
                <h3 className="font-bold mb-4">About the Company</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-muted-foreground mb-1">Company</div>
                    <div className="font-semibold">{job.company}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Location</div>
                    <div className="font-semibold">{job.location}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Industry</div>
                    <div className="font-semibold">{job.industry}</div>
                  </div>
                </div>
              </Card>

              {/* Share */}
              <Card className="p-6">
                <h3 className="font-bold mb-4">Share this job</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Email
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Similar Jobs */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Similar Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(jobs)
                .filter((j: any) => j.id !== job.id && j.industry === job.industry)
                .slice(0, 3)
                .map((similarJob: any) => (
                  <Card key={similarJob.id} className="p-6 hover:shadow-lg transition-shadow">
                    <Badge className="mb-3 bg-secondary text-secondary-700 hover:bg-secondary">
                      {similarJob.industry}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{similarJob.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{similarJob.company}</p>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-secondary-600" />
                        <span>{similarJob.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-secondary-600" />
                        <span>{similarJob.salary}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-transparent" variant="outline" asChild>
                      <Link href={`/jobs/${similarJob.id}`}>View Details</Link>
                    </Button>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
