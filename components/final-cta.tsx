import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <Card className="relative overflow-hidden bg-gradient-to-br from-accent to-accent/80 text-accent-foreground">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-balance">Career growth without all the chaos</h2>
              <p className="text-lg opacity-90">
                Let us handle the complexity of job searching while you focus on what matters - finding the perfect role
                that matches your ambitions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary">
                  Start Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/mobile-app-recruitment-interface.jpg"
                alt="LinkPark mobile app"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
