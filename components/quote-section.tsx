export function QuoteSection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/diverse-team-meeting-collaboration.jpg" alt="Team collaboration" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            "Finding the right opportunities shouldn't be complicated. We believe that every professional deserves
            access to roles that truly match their potential. The dream of meaningful work is achievable."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img
              src="/ceo-headshot.jpg"
              alt="CEO"
              className="w-16 h-16 rounded-full object-cover border-2 border-white"
            />
            <div className="text-left">
              <p className="text-white font-semibold">David Park</p>
              <p className="text-white/80 text-sm">Founder & CEO, LinkPark</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
