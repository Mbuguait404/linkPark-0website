import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Briefcase, DollarSign, Clock, Calendar, Building2, CheckCircle2, Share2, Bookmark } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { jobs } from "@/data/jobs-data";


export function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }));
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const job = jobs.find((j) => j.id === id);

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
