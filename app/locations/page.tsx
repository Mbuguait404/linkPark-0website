import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LocationsPage() {
  const locations = [
    {
      region: "North America",
      offices: [
        {
          city: "New York",
          country: "United States",
          address: "350 Fifth Avenue, Suite 4200, New York, NY 10118",
          phone: "+1 (212) 555-0123",
          email: "newyork@linkpark.com",
          isHeadquarters: true,
        },
        {
          city: "San Francisco",
          country: "United States",
          address: "101 California Street, Suite 2710, San Francisco, CA 94111",
          phone: "+1 (415) 555-0124",
          email: "sanfrancisco@linkpark.com",
        },
        {
          city: "Toronto",
          country: "Canada",
          address: "100 King Street West, Suite 5600, Toronto, ON M5X 1C9",
          phone: "+1 (416) 555-0125",
          email: "toronto@linkpark.com",
        },
      ],
    },
    {
      region: "Europe",
      offices: [
        {
          city: "London",
          country: "United Kingdom",
          address: "1 Canada Square, Canary Wharf, London E14 5AB",
          phone: "+44 20 7123 4567",
          email: "london@linkpark.com",
        },
        {
          city: "Berlin",
          country: "Germany",
          address: "Friedrichstraße 95, 10117 Berlin",
          phone: "+49 30 1234 5678",
          email: "berlin@linkpark.com",
        },
        {
          city: "Paris",
          country: "France",
          address: "52 Avenue des Champs-Élysées, 75008 Paris",
          phone: "+33 1 23 45 67 89",
          email: "paris@linkpark.com",
        },
      ],
    },
    {
      region: "Asia Pacific",
      offices: [
        {
          city: "Singapore",
          country: "Singapore",
          address: "1 Raffles Place, #40-02, One Raffles Place, Singapore 048616",
          phone: "+65 6123 4567",
          email: "singapore@linkpark.com",
        },
        {
          city: "Hong Kong",
          country: "Hong Kong",
          address: "2 International Finance Centre, 8 Finance Street, Central",
          phone: "+852 2123 4567",
          email: "hongkong@linkpark.com",
        },
        {
          city: "Sydney",
          country: "Australia",
          address: "Level 42, 1 Macquarie Place, Sydney NSW 2000",
          phone: "+61 2 1234 5678",
          email: "sydney@linkpark.com",
        },
      ],
    },
    {
      region: "Middle East & Africa",
      offices: [
        {
          city: "Dubai",
          country: "United Arab Emirates",
          address: "Level 41, Emirates Towers, Sheikh Zayed Road, Dubai",
          phone: "+971 4 123 4567",
          email: "dubai@linkpark.com",
        },
        {
          city: "Johannesburg",
          country: "South Africa",
          address: "11 Alice Lane, Sandton, Johannesburg 2196",
          phone: "+27 11 123 4567",
          email: "johannesburg@linkpark.com",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Global Presence</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Local expertise with global reach</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              With offices across four continents, we combine local market knowledge with international recruitment
              capabilities to serve clients worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Contact an Office</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/jobs">View Global Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">11</div>
              <div className="text-muted-foreground">Global Offices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Continents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Global Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations by Region */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {locations.map((region, regionIndex) => (
            <div key={regionIndex}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">{region.region}</h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {region.offices.map((office, officeIndex) => (
                  <Card key={officeIndex} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{office.city}</h3>
                          <p className="text-muted-foreground">{office.country}</p>
                        </div>
                        {office.isHeadquarters && (
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">HQ</Badge>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{office.address}</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                          <a href={`tel:${office.phone}`} className="text-sm hover:text-primary transition-colors">
                            {office.phone}
                          </a>
                        </div>

                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                          <a href={`mailto:${office.email}`} className="text-sm hover:text-primary transition-colors">
                            {office.email}
                          </a>
                        </div>
                      </div>

                      <Button variant="link" className="p-0 mt-4" asChild>
                        <Link href="/contact">
                          Get in touch <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Global Presence Matters */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why our global presence matters</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Local insights combined with international capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Local Market Knowledge</h3>
                <p className="text-muted-foreground">
                  Deep understanding of regional employment laws, salary benchmarks, and cultural nuances
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">On-the-Ground Support</h3>
                <p className="text-muted-foreground">
                  Local teams available for face-to-face meetings and hands-on recruitment support
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">International Mobility</h3>
                <p className="text-muted-foreground">
                  Seamless coordination for cross-border placements and global talent relocation
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Time Zone Coverage</h3>
                <p className="text-muted-foreground">
                  Round-the-clock service with teams across multiple time zones for urgent needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to connect with our team?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Reach out to your nearest office or contact our global team for international recruitment needs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
