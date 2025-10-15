"use client"

import FlagSlider from "./flags"

export function LogoStrip() {
  // const companies = ["Microsoft", "Google", "Amazon", "Meta", "Apple", "Netflix"]

  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container mx-auto md:max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">Trusted by countries worldwide</p>
        {/* <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div key={company} className="text-xl font-semibold text-muted-foreground/60">
              {company}
            </div>
          ))}
        </div> */}
        <FlagSlider />
      </div>
    </section>
  )
}
