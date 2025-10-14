"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Briefcase, Clock, DollarSign, Search, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Global",
      location: "San Francisco, CA",
      type: "Permanent",
      industry: "Technology",
      salary: "$150,000 - $200,000",
      posted: "2 days ago",
      description: "Leading tech company seeking experienced software engineer to build scalable cloud solutions.",
      skills: ["React", "Node.js", "AWS", "TypeScript"],
    },
    {
      id: 2,
      title: "Financial Analyst",
      company: "Global Finance Inc",
      location: "New York, NY",
      type: "Permanent",
      industry: "Finance",
      salary: "$90,000 - $120,000",
      posted: "1 week ago",
      description: "Join our investment team to analyze market trends and provide strategic financial insights.",
      skills: ["Excel", "Financial Modeling", "SQL", "Bloomberg"],
    },
    {
      id: 3,
      title: "Marketing Manager",
      company: "Brand Solutions Ltd",
      location: "London, UK",
      type: "Contract",
      industry: "Marketing",
      salary: "£60,000 - £75,000",
      posted: "3 days ago",
      description: "Drive marketing strategy and lead campaigns for a fast-growing consumer brand.",
      skills: ["Digital Marketing", "SEO", "Analytics", "Content Strategy"],
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "AI Innovations",
      location: "Singapore",
      type: "Permanent",
      industry: "Technology",
      salary: "$120,000 - $160,000",
      posted: "5 days ago",
      description: "Build machine learning models and drive data-driven decision making across the organization.",
      skills: ["Python", "Machine Learning", "TensorFlow", "Statistics"],
    },
    {
      id: 5,
      title: "Registered Nurse",
      company: "City Hospital",
      location: "Toronto, Canada",
      type: "Permanent",
      industry: "Healthcare",
      salary: "CAD $70,000 - $85,000",
      posted: "1 day ago",
      description: "Provide compassionate patient care in a modern healthcare facility with excellent benefits.",
      skills: ["Patient Care", "Medical Records", "Emergency Response", "Team Collaboration"],
    },
    {
      id: 6,
      title: "Supply Chain Manager",
      company: "Logistics Pro",
      location: "Dubai, UAE",
      type: "Permanent",
      industry: "Logistics",
      salary: "AED 180,000 - AED 240,000",
      posted: "1 week ago",
      description: "Optimize supply chain operations and manage vendor relationships across the Middle East region.",
      skills: ["Supply Chain", "Procurement", "SAP", "Logistics"],
    },
    {
      id: 7,
      title: "Product Designer",
      company: "Design Studio",
      location: "Berlin, Germany",
      type: "Contract",
      industry: "Technology",
      salary: "€65,000 - €85,000",
      posted: "4 days ago",
      description: "Create beautiful, user-centered designs for web and mobile applications.",
      skills: ["Figma", "UI/UX", "Prototyping", "User Research"],
    },
    {
      id: 8,
      title: "Mechanical Engineer",
      company: "Manufacturing Corp",
      location: "Sydney, Australia",
      type: "Permanent",
      industry: "Engineering",
      salary: "AUD $95,000 - AUD $120,000",
      posted: "6 days ago",
      description: "Design and develop mechanical systems for industrial manufacturing equipment.",
      skills: ["CAD", "SolidWorks", "Manufacturing", "Quality Control"],
    },
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesIndustry = selectedIndustry === "all" || job.industry === selectedIndustry
    const matchesLocation = selectedLocation === "all" || job.location.includes(selectedLocation)
    const matchesType = selectedType === "all" || job.type === selectedType

    return matchesSearch && matchesIndustry && matchesLocation && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Current Opportunities</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Find your next opportunity</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Browse thousands of job openings from leading companies worldwide
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="max-w-5xl mx-auto">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search jobs, companies, skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Logistics">Logistics</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="New York">New York</SelectItem>
                    <SelectItem value="San Francisco">San Francisco</SelectItem>
                    <SelectItem value="London">London</SelectItem>
                    <SelectItem value="Singapore">Singapore</SelectItem>
                    <SelectItem value="Toronto">Toronto</SelectItem>
                    <SelectItem value="Dubai">Dubai</SelectItem>
                    <SelectItem value="Berlin">Berlin</SelectItem>
                    <SelectItem value="Sydney">Sydney</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Permanent">Permanent</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Temporary">Temporary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">
                {filteredJobs.length} {filteredJobs.length === 1 ? "position" : "positions"} available
              </h2>
              <p className="text-muted-foreground">Updated daily with new opportunities</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/login">
                <Search className="w-4 h-4 mr-2" />
                Save Search
              </Link>
            </Button>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="border-2 hover:border-primary transition-colors group">
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-2">{job.company}</p>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              {job.type}
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {job.salary}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.posted}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-3">{job.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex lg:flex-col gap-2">
                      <Button className="flex-1 lg:flex-none" asChild>
                        <Link href={`/jobs/${job.id}`}>
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" className="flex-1 lg:flex-none bg-transparent">
                        Save Job
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <Card className="py-12">
              <CardContent className="text-center">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No jobs found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search criteria or filters</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedIndustry("all")
                    setSelectedLocation("all")
                    setSelectedType("all")
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Can't find what you're looking for?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Register your profile and we'll match you with opportunities that fit your skills and career goals
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/signup">Create Profile</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact a Recruiter</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
