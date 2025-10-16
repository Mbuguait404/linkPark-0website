"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitError(null)
    setSubmitSuccess(null)
    setIsSubmitting(true)

    try {
      const form = event.currentTarget
      const formData = new FormData(form)

      // Required by Web3Forms
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "3bf6a038-60a7-4909-91fc-f91d61aa91b5")

      // Optional: subject fallback
      if (!formData.get("subject")) {
        formData.set("subject", "New message from LinkPark contact form")
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()
      if (result.success) {
        setSubmitSuccess("Thanks! Your message has been sent.")
        form.reset()
      } else {
        setSubmitError(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitError("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#4dfbdf]/10 to-white py-20">
         {/* 🌊 Animated Curved Background */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,200 Q150,100 300,200 T600,200 T900,200 T1200,200"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,300 Q150,400 300,300 T600,300 T900,300 T1200,300"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.2, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0b0f7e" />
            <stop offset="100%" stopColor="#4dfbdf" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4dfbdf" />
            <stop offset="100%" stopColor="#0b0f7e" />
          </linearGradient>
        </defs>
      </motion.svg>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-[#4dfbdf]/20 text-[#0b0f7e] hover:bg-[#4dfbdf]/20">Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contact LinkPark</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Have questions about our services? We're here to help you start your international career journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Whether you're looking for your next career opportunity or seeking talented professionals for your
                  organization, our team is ready to assist you.
                </p>
              </div>

              <Card className="p-6 border-2 hover:border-[#4dfbdf]/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4dfbdf]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0b0f7e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Office Address</h3>
                    <p className="text-muted-foreground">
                      Sagaas Business Centre, 3rd Floor
                      <br />
                      Eldoret City, Kenya
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 hover:border-[#4dfbdf]/40 transition-colors">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#4dfbdf]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#0b0f7e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone Numbers</h3>
                    <p className="text-muted-foreground">
                      +254 722 447 701
                      <br />
                      +254 790 388 833
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 hover:border-[#4dfbdf]/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4dfbdf]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0b0f7e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email Address</h3>
                    <p className="text-muted-foreground">info@linkparkoffshore.co.ke</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 hover:border-[#4dfbdf]/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4dfbdf]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#0b0f7e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Honeypot field for bots */}
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                {/* From name for Web3Forms convenience */}
                <input type="hidden" name="from_name" value="LinkPark Website" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="first_name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="last_name" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+254 700 000 000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="How can we help you?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="resize-none"
                    required
                  />
                </div>

                {submitError ? (
                  <p className="text-sm text-red-600">{submitError}</p>
                ) : null}
                {submitSuccess ? (
                  <p className="text-sm text-green-600">{submitSuccess}</p>
                ) : null}

                <Button type="submit" size="lg" className="w-full bg-[#0b0f7e] hover:bg-[#4dfbdf] hover:text-[#0b0f7e] text-white" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Office</h2>
              <p className="text-xl text-muted-foreground">Located in the heart of Eldoret City, Kenya</p>
            </div>
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.234567890123!2d35.2697!3d0.5143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzAnNTEuNSJOIDM1wrAxNicxMC45IkU!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Quick Answers?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Check out our frequently asked questions or explore our services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <a href="/#faq">View FAQs</a>
              </Button>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <a href="/services">Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
