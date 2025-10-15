"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const professions = [
  { src: "https://res.cloudinary.com/dspdvpj5n/image/upload/v1760532635/dubai-skyline-sunset-time-united-arab-emirates_lztzld.jpg", title: "Engineering" },
  { src: "https://res.cloudinary.com/dspdvpj5n/image/upload/v1760532633/barista-serving-coffee-stockcake_m9b2od.jpg", title: "Hospitality" },
  { src: "https://res.cloudinary.com/dspdvpj5n/image/upload/v1760532631/social-worker-taking-care-old-woman_p3zmoh.jpg", title: "Caregiving" },
  { src: "https://res.cloudinary.com/dspdvpj5n/image/upload/v1760532633/nurse-wearing-scrubs-while-working-clinic_xqaqe7.jpg", title: "Nursing" },
  { src: "https://res.cloudinary.com/dspdvpj5n/image/upload/v1760532635/dubai-united-arab-emirates-november-11-view-dubai-marina-towers-dubai-united-arab-emirates-november-11-2014-dubai-marina-is-district-dubai-artificial-canal-city_heoloc.jpg", title: "Dubai" },
  { src: "https://res.cloudinary.com/dspdvpj5n/image/upload/v1760532632/looking-camera-young-schoolgirl-wearing-back-bag-holding-globe-tickets-purple-background_j3jtxy.jpg", title: "Education" },
  { src: "https://res.cloudinary.com/dspdvpj5n/image/upload/v1760532630/Freight-Feature-1-1024x646_m5z4t6.png", title: "warehousing" },
  { src: "https://res.cloudinary.com/dspdvpj5n/image/upload/v1760532632/smiling-airport-security-officer-holding-metal-detector-airport-terminal_kea5aq.jpg", title: "Security Industry" },
]

export function ImageCollage() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {professions.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className={`relative overflow-hidden rounded-2xl shadow-md cursor-pointer group ${
                index % 5 === 0 ? "row-span-2" : index % 3 === 0 ? "col-span-2" : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 left-3 text-white text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
