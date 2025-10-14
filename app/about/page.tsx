import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Globe, Heart, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">About LinkPark</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Empowering Kenyan Youth Through Global Opportunities
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Based in Eldoret, Kenya, we specialize in connecting talented Kenyan professionals with career
              opportunities across the Gulf region and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-2 hover:border-purple-200 transition-colors">
              <Target className="w-12 h-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower Kenyan youth by providing access to international employment opportunities, particularly in
                the Gulf region, while ensuring ethical recruitment practices and comprehensive support throughout their
                career journey.
              </p>
            </Card>
            <Card className="p-8 border-2 hover:border-purple-200 transition-colors">
              <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading recruitment agency in East Africa, recognized for transforming lives through quality
                international placements and becoming the bridge that connects African talent with global opportunities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced team driving LinkPark's mission forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Dominic Chelimo</h3>
              <p className="text-purple-600 font-semibold mb-4">Chief Executive Officer</p>
              <p className="text-muted-foreground leading-relaxed">
                With over 15 years of experience in international recruitment, Dominic leads LinkPark's strategic vision
                and oversees operations across all markets.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Alicent Togom</h3>
              <p className="text-purple-600 font-semibold mb-4">Executive Director</p>
              <p className="text-muted-foreground leading-relaxed">
                Alicent brings extensive expertise in talent management and client relations, ensuring exceptional
                service delivery and candidate success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We maintain the highest ethical standards in all our recruitment practices
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every placement and client interaction
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Empowerment</h3>
              <p className="text-muted-foreground">
                We empower candidates with opportunities that transform their lives
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-purple-100">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">6</div>
              <div className="text-purple-100">Gulf Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-purple-100">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-purple-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Office</h2>
            <Card className="p-8">
              <div className="space-y-4 text-left">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Headquarters</h3>
                  <p className="text-muted-foreground">
                    Sagaas Business Centre, 3rd Floor
                    <br />
                    Eldoret City, Kenya
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    Phone: +254 722 447 701 / +254 790 388 833
                    <br />
                    Email: overseasconnections@gmail.com
                    <br />
                    Website: www.linkparkoffshore.co.ke
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/jobs">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Explore Opportunities
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
