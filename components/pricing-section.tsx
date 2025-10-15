import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { StreamlinedImageCollage } from "./streamlined-image-masonry"

export function PricingSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto md:max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">
            Flexible services that scale with you
          </h2>
          <p className="text-lg text-muted-foreground">Discover oportunity with Linkpark Offshore Recruitment Agency</p>
        </div>

        <StreamlinedImageCollage />
      </div>
    </section>
  )
}
