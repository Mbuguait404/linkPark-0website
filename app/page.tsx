import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogoStrip } from "@/components/logo-strip"
import { CountriesSection } from "@/components/countries-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { QuoteSection } from "@/components/quote-section"
import { PricingSection } from "@/components/pricing-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ValueProps } from "@/components/value-props"
import { FAQSection } from "@/components/faq-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LogoStrip />
      <CountriesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <QuoteSection />
      <PricingSection />
      <ReviewsSection />
      <ValueProps />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
