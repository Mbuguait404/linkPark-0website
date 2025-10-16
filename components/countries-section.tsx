import Image from "next/image";
import { Card } from "@/components/ui/card";

export function CountriesSection() {
  const countries = [
    {
      name: "United Arab Emirates",
      code: "ae",
      opportunities: "Construction, Hospitality, Healthcare",
    },
    {
      name: "Saudi Arabia",
      code: "sa",
      opportunities: "Energy, Engineering, Healthcare",
    },
    {
      name: "Qatar",
      code: "qa",
      opportunities: "Construction, Hospitality, IT",
    },
    {
      name: "Oman",
      code: "om",
      opportunities: "Maritime, Hospitality, Engineering",
    },
    {
      name: "Bahrain",
      code: "bh",
      opportunities: "Finance, Hospitality, Healthcare",
    },
    {
      name: "Kuwait",
      code: "kw",
      opportunities: "Energy, Construction, Healthcare",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto md:max-w-6xl">
        {/* Heading */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Gulf Cooperation Council Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We connect Kenyan professionals with opportunities across the GCC region,
            offering secure and rewarding international careers.
          </p>
        </div>

        {/* Country Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <Card
              key={country.name}
              className="p-6 hover:shadow-lg transition-shadow rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-10 flex-shrink-0 rounded-md overflow-hidden shadow-sm">
                  <Image
                    src={`https://flagcdn.com/w320/${country.code}.png`}
                    alt={`${country.name} flag`}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{country.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {country.opportunities}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
