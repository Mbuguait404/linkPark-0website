import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">What is LinkPark?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              LinkPark is a global recruitment agency specializing in local and international job placements. We connect
              talented professionals with leading companies worldwide through our AI-powered matching platform and
              expert recruiter network.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">How is LinkPark different?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We combine cutting-edge technology with personalized human expertise. Our AI analyzes thousands of data
              points to match you with the right opportunities, while our experienced recruiters provide guidance
              throughout the entire process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">Is my information secure?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Absolutely. We use enterprise-grade encryption and follow strict data protection regulations. Your
              information is never shared without your explicit consent, and you have full control over your profile
              visibility.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">What countries do you operate in?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We operate in 45+ countries across North America, Europe, Asia-Pacific, and the Middle East. Our network
              includes opportunities in major tech hubs, financial centers, and emerging markets worldwide.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left">Is there a fee for job seekers?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Our basic job seeker service is completely free. Premium services with dedicated recruiter support and
              additional features are available for $99/month, with a free trial period to get started.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
