import { Card } from "@/components/ui/card"

export function ReviewsSection() {
const reviews = [
  {
    text: "I never thought I’d work in Europe. LinkPark guided me through every step — from interview prep to relocation. Now I’m thriving in Munich!",
    author: "Grace Muthoni",
    role: "Nurse – Germany",
  },
  {
    text: "After years of job hunting, LinkPark helped me find work in Dubai’s hospitality industry. I can finally support my family comfortably.",
    author: "Naomi Sesay",
    role: "Hotel Attendant – UAE",
  },
  {
    text: "LinkPark connected me to a logistics company in Poland. Their support during the visa and travel process was exceptional!",
    author: "Peter Mugisha",
    role: "Truck Driver – Poland",
  },
]



  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">See why candidates love using LinkPark</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 space-y-4">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground">{review.text}</p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold">{review.author}</p>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
