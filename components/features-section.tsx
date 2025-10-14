import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto md:max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary">Our Approach</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              Acceleration through personalized matching
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Our AI-powered platform combined with expert recruiters ensures you find the perfect fit faster than
              traditional methods.
            </p>
            <Button size="lg">Learn More</Button>
          </div>

          <div className="relative">
            <Card className="p-8 bg-primary text-primary-foreground">
              <img
                src="/recruitment-dashboard.png"
                alt="Recruitment dashboard"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Smart Candidate Matching</h3>
                <p className="text-sm opacity-90">
                  Our proprietary algorithm analyzes skills, experience, and cultural fit to connect you with
                  opportunities that truly match your career goals.
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-2xl">🎯</div>
            <h3 className="text-xl font-semibold">Targeted Job Search</h3>
            <p className="text-muted-foreground">
              Filter opportunities by location, industry, salary range, and work arrangement to find your ideal
              position.
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-2xl">🌐</div>
            <h3 className="text-xl font-semibold">Global Network</h3>
            <p className="text-muted-foreground">
              Access opportunities across 45+ countries with our extensive network of international employers.
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-2xl">⚡</div>
            <h3 className="text-xl font-semibold">Fast Placement</h3>
            <p className="text-muted-foreground">
              Average placement time of just 18 days from application to offer acceptance.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
