"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-accent to-accent/80 text-accent-foreground">
            <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
              {/* Text Section */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold text-balance">
                  Career growth without all the chaos
                </h2>
                <p className="text-lg opacity-90">
                  Let us handle the complexity of job searching while you focus on what matters —
                  finding the perfect role that matches your ambitions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                  >
                    Start Your Journey
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="/mobile-app-recruitment-interface.jpg"
                  alt="LinkPark mobile app"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                />
                {/* Optional glow accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4dfbdf]/10 to-transparent blur-2xl"></div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
