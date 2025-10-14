import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto md:max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-xs">
                🌍 Kenya to Gulf Region Placements
              </Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Empowering Kenyan youth through global opportunities
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-xl">
                LinkPark connects talented Kenyan professionals with rewarding careers in the Gulf region. We specialize
                in secure, legal, and dignified international job placements.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link href="/jobs">Find Your Job</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 space-y-4 bg-accent text-accent-foreground">
                <img
                  src="/professional-african-woman-smiling.jpg"
                  alt="Professional candidate"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Grace Wanjiku</h3>
                  <p className="text-sm opacity-90">Healthcare Professional</p>
                  <Badge className="bg-accent-foreground text-accent">Placed in UAE</Badge>
                </div>
              </Card>

              <div className="space-y-4 pt-8">
                <Card className="p-6 bg-primary text-primary-foreground">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Success Rate</h4>
                    <div className="text-4xl font-bold">95%</div>
                    <p className="text-xs opacity-90">Successful placements</p>
                  </div>
                </Card>

                <Card className="p-6 bg-card">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Gulf Opportunities</h4>
                    <div className="text-4xl font-bold">500+</div>
                    <p className="text-xs text-muted-foreground">Active positions in GCC</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
