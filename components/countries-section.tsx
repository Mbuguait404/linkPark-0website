import { Card } from "@/components/ui/card"

export function CountriesSection() {
  const countries = [
    {
      name: "United Arab Emirates",
      flag: "🇦🇪",
      opportunities: "Construction, Hospitality, Healthcare",
    },
    {
      name: "Saudi Arabia",
      flag: "🇸🇦",
      opportunities: "Energy, Engineering, Healthcare",
    },
    {
      name: "Qatar",
      flag: "🇶🇦",
      opportunities: "Construction, Hospitality, IT",
    },
    {
      name: "Oman",
      flag: "🇴🇲",
      opportunities: "Maritime, Hospitality, Engineering",
    },
    {
      name: "Bahrain",
      flag: "🇧🇭",
      opportunities: "Finance, Hospitality, Healthcare",
    },
    {
      name: "Kuwait",
      flag: "🇰🇼",
      opportunities: "Energy, Construction, Healthcare",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto md:max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Gulf Cooperation Council Destinations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We connect Kenyan professionals with opportunities across the GCC region, offering secure and rewarding
            international careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <Card key={country.name} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-5xl">{country.flag}</div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-semibold text-lg">{country.name}</h3>
                  <p className="text-sm text-muted-foreground">{country.opportunities}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
