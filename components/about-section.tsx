import { Card } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">About LinkPark</h2>
            <p className="text-lg text-muted-foreground">
              A dynamic, trusted recruitment firm headquartered in Eldoret, Kenya, connecting employers with skilled
              professionals through customized solutions across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="text-muted-foreground">
                To be Kenya's leading youth empowerment agency, transforming lives through sustainable global employment
                and contributing to national socio-economic growth.
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                Supporting Kenya's youth employment initiatives by facilitating access to secure and rewarding
                international job placements, especially in the Gulf region.
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Our Values</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Integrity & Transparency</li>
                <li>• Empowerment Through Opportunity</li>
                <li>• Excellence in Service</li>
                <li>• Global Mindset, Local Heart</li>
              </ul>
            </Card>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-center">Leadership Team</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                  DC
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Dominic Chelimo</h4>
                  <p className="text-sm text-muted-foreground">Chief Executive Officer</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Leading LinkPark's mission to transform how African talent connects to global opportunities.
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                  AT
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Alicent Togom</h4>
                  <p className="text-sm text-muted-foreground">Executive Director</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Driving strategic partnerships and ensuring excellence in service delivery across all operations.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
