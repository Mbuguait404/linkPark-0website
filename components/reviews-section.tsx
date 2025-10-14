import { Card } from "@/components/ui/card"

export function ReviewsSection() {
  const reviews = [
    {
      text: "LinkPark's international placement service opened doors I never knew existed. Now working in Singapore!",
      author: "Alex Thompson",
      role: "Software Engineer",
    },
    {
      text: "The team understood exactly what I was looking for and delivered beyond expectations. Highly recommend!",
      author: "Priya Sharma",
      role: "UX Designer",
    },
    {
      text: "From application to offer in just 2 weeks. The fastest and most professional recruitment experience I've had.",
      author: "Carlos Martinez",
      role: "Financial Analyst",
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
