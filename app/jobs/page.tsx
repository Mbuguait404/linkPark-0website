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
import { motion } from "framer-motion"
import { jobs } from "../../data/jobs-data";

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedType, setSelectedType] = useState("all")


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
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3}}
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
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Current Opportunities</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Find your next opportunity</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Browse thousands of job openings from leading companies worldwide
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="max-w-7xl mx-auto">
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
    <SelectItem value="Healthcare">Healthcare & Caregiving</SelectItem>
    <SelectItem value="Construction">Construction & Skilled Trades</SelectItem>
    <SelectItem value="Hospitality">Hospitality & Tourism</SelectItem>
    <SelectItem value="Technology">Information Technology (IT)</SelectItem>
    <SelectItem value="Engineering">Engineering & Technical</SelectItem>
    <SelectItem value="Logistics">Logistics & Transportation</SelectItem>
    <SelectItem value="Domestic">Domestic Work & Housekeeping</SelectItem>
    <SelectItem value="Agriculture">Agriculture & Farm Work</SelectItem>
    <SelectItem value="Education">Education</SelectItem>
    <SelectItem value="Security">Security Services</SelectItem>
    <SelectItem value="OilGas">Oil, Gas & Energy</SelectItem>
  </SelectContent>
</Select>

<Select value={selectedLocation} onValueChange={setSelectedLocation}>
  <SelectTrigger>
    <SelectValue placeholder="Location" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all">All Locations</SelectItem>

    {/* Europe */}
    <SelectItem value="Germany">Germany</SelectItem>
    <SelectItem value="United Kingdom">United Kingdom (UK)</SelectItem>
    <SelectItem value="France">France</SelectItem>
    <SelectItem value="Italy">Italy</SelectItem>
    <SelectItem value="Netherlands">Netherlands</SelectItem>
    <SelectItem value="Spain">Spain</SelectItem>
    <SelectItem value="Poland">Poland</SelectItem>

    {/* Middle East */}
    <SelectItem value="UAE">United Arab Emirates (UAE)</SelectItem>
    <SelectItem value="Saudi Arabia">Saudi Arabia</SelectItem>
    <SelectItem value="Qatar">Qatar</SelectItem>
    <SelectItem value="Kuwait">Kuwait</SelectItem>
    <SelectItem value="Oman">Oman</SelectItem>
    <SelectItem value="Bahrain">Bahrain</SelectItem>

    {/* Other Regions */}
    <SelectItem value="Canada">Canada</SelectItem>
    <SelectItem value="Australia">Australia</SelectItem>
    <SelectItem value="South Korea">South Korea</SelectItem>
    <SelectItem value="Japan">Japan</SelectItem>
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
