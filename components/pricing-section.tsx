import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">
            Flexible services that scale with you
          </h2>
          <p className="text-lg text-muted-foreground">Choose the plan that fits your career goals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Job Seeker</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">Free</span>
              </div>
              <p className="text-sm text-muted-foreground">For individuals looking for their next opportunity</p>
            </div>

            <Button className="w-full bg-transparent" variant="outline">
              Get Started
            </Button>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">Access to all job listings</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">Profile creation & resume upload</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">Job match notifications</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">Basic career resources</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 space-y-6 border-accent border-2 relative">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Premium</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground">For professionals seeking personalized support</p>
            </div>

            <Button className="w-full">Start Free Trial</Button>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">Everything in Job Seeker</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">Dedicated recruiter support</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">Priority job applications</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">Interview preparation & coaching</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">Salary negotiation assistance</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 space-y-6 bg-primary text-primary-foreground">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-sm opacity-90">For companies hiring at scale</p>
            </div>

            <Button className="w-full" variant="secondary">
              Contact Sales
            </Button>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm">Everything in Premium</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm">Unlimited job postings</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm">Dedicated account manager</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm">Custom integration & API access</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm">Advanced analytics & reporting</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
