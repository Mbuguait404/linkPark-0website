"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
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
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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

      {/* Content */}
      <div className="relative container mx-auto md:max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ✨ Left Column (Text) */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Badge variant="secondary" className="text-xs">
                  🌍 Kenya to Gulf Region Placements
                </Badge>
              </motion.div>
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-[#0b0f7e]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Empowering Kenyan youth through global opportunities
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground text-pretty max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                LinkPark connects talented Kenyan professionals with rewarding careers in the Gulf region. We
                specialize in secure, legal, and dignified international job placements.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button size="lg" className="text-base bg-[#0b0f7e] hover:bg-[#4dfbdf] hover:text-[#0b0f7e]" asChild>
                <Link href="/jobs">Find Your Job</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-[#0b0f7e] text-[#0b0f7e] hover:bg-[#4dfbdf] hover:text-[#0b0f7e]"
                asChild
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* 🪄 Right Column (Cards) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 space-y-4 bg-[#4dfbdf]/20 text-[#0b0f7e] backdrop-blur-md border-none shadow-md">
                <img
                  src="/professional-african-woman-smiling.jpg"
                  alt="Professional candidate"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Grace Wanjiku</h3>
                  <p className="text-sm opacity-90">Healthcare Professional</p>
                  <Badge className="bg-[#0b0f7e] text-white">Placed in UAE</Badge>
                </div>
              </Card>

              <div className="space-y-4 pt-8">
                <Card className="p-6 bg-[#0b0f7e] text-white shadow-md">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Success Rate</h4>
                    <div className="text-4xl font-bold">95%</div>
                    <p className="text-xs opacity-90">Successful placements</p>
                  </div>
                </Card>

                <Card className="p-6 bg-white text-[#0b0f7e] border shadow-md">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Gulf Opportunities</h4>
                    <div className="text-4xl font-bold">500+</div>
                    <p className="text-xs text-muted-foreground">Active positions in GCC</p>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
