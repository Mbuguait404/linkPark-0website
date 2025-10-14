import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto md:max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Candidates love LinkPark. <span className="text-muted-foreground">Over 10,000 professionals</span>
          </h2>
          <p className="text-lg text-muted-foreground">have found their dream jobs through our platform</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/professional-headshot.png" alt="Candidate" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold">Michael Chen</h4>
                <p className="text-sm text-muted-foreground">Data Scientist</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "LinkPark helped me transition from a local role to an international position at a Fortune 500 company.
              The process was seamless and professional."
            </p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500">
                  ★
                </span>
              ))}
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/professional-woman.png" alt="Candidate" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold">Emma Rodriguez</h4>
                <p className="text-sm text-muted-foreground">Marketing Director</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "The personalized approach and attention to detail made all the difference. I found a role that perfectly
              aligned with my career goals."
            </p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500">
                  ★
                </span>
              ))}
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/professional-man.png" alt="Candidate" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold">James Wilson</h4>
                <p className="text-sm text-muted-foreground">Product Manager</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "Outstanding service! They understood my requirements and connected me with opportunities I wouldn't have
              found on my own."
            </p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500">
                  ★
                </span>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-primary text-primary-foreground">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Ready to transform your career?</h3>
              <p className="opacity-90">Join thousands of professionals who found success with LinkPark</p>
            </div>
            <Button size="lg" variant="secondary">
              Get Started Today
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
