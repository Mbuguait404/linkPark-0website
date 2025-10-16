"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { stringToColor, getInitials } from "@/utils/avatar"

export function TestimonialsSection() {
const testimonials = [
  {
    name: "Fatima Ndlovu",
    title: "Registered Nurse – Germany",
    text: "I always dreamed of working in Europe. LinkPark guided me through the entire visa process and helped me secure a nursing job in Munich. Now I’m living my dream and supporting my family back home.",
  },
  {
    name: "Abdul Rahman",
    title: "Electrical Engineer – Qatar",
    text: "From Kenya to Doha! LinkPark connected me with a top construction firm in Qatar. The recruitment process was smooth and transparent — truly life changing.",
  },
  {
    name: "Linda Owusu",
    title: "Software Developer – Canada",
    text: "I got matched with a remote tech role in Toronto through LinkPark. It’s amazing to work with a global team while still staying connected to home in Ghana.",
  },
  {
    name: "Mariam Kamara",
    title: "Housekeeper – UAE",
    text: "I came from Sierra Leone looking for a better future. LinkPark treated me with respect and connected me to a safe and reliable employer in Dubai.",
  },
  {
    name: "John Okello",
    title: "Truck Driver – Poland",
    text: "I didn’t believe it at first, but LinkPark helped me get my license converted and find a logistics job in Europe. I’m grateful to be part of something bigger.",
  },
]


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto md:max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            African Talent, <span className="text-muted-foreground">Global Opportunities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Thousands of professionals across Africa have launched international careers with LinkPark
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, index) => (
            <Card key={index} className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-lg"
                  style={{ backgroundColor: stringToColor(t.name) }}
                >
                  {getInitials(t.name)}
                </div>
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.title}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">“{t.text.replace(/“|”/g, "")}”</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Card */}
        <Card className="p-8 bg-primary text-primary-foreground">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Your dream job abroad starts here</h3>
              <p className="opacity-90">Join thousands of Africans who’ve successfully built global careers through LinkPark</p>
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
