import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Globe, Heart, TrendingUp, CheckCircle, Shield } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals driving LinkPark's mission forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Dominic Chelimo</h3>
                <p className="text-purple-600 font-semibold mb-4">Chief Executive Officer</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 15 years of experience in international recruitment, Dominic leads LinkPark's strategic
                  vision and oversees operations across all markets. His expertise in Gulf region employment has helped
                  thousands of Kenyan professionals secure life-changing opportunities.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Strategic Leadership</Badge>
                  <Badge variant="secondary">Gulf Markets Expert</Badge>
                  <Badge variant="secondary">15+ Years Experience</Badge>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Alicent Togom</h3>
                <p className="text-purple-600 font-semibold mb-4">Executive Director</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Alicent brings extensive expertise in talent management and client relations, ensuring exceptional
                  service delivery and candidate success. She oversees candidate preparation, compliance, and
                  post-placement support programs.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Talent Management</Badge>
                  <Badge variant="secondary">Client Relations</Badge>
                  <Badge variant="secondary">Compliance Expert</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Accreditations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognized and certified by leading regulatory bodies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Licensed Recruitment Agency</h3>
              <p className="text-muted-foreground mb-4">Fully licensed by the National Employment Authority of Kenya</p>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Verified</Badge>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">ISO Certified</h3>
              <p className="text-muted-foreground mb-4">ISO 9001:2015 certified for quality management systems</p>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Certified</Badge>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gulf Cooperation Council</h3>
              <p className="text-muted-foreground mb-4">Approved recruitment partner for GCC member states</p>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Approved</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of successful professionals who have transformed their careers with LinkPark
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/jobs">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Explore Opportunities
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
