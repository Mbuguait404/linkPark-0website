export function ValueProps() {
const values = [
  { label: "Dream Bigger", color: "bg-yellow-400" },
  { label: "Work Abroad", color: "bg-yellow-400" },
  { label: "Grow Globally", color: "bg-yellow-400" },
  { label: "Change Lives", color: "bg-yellow-400" },
]


  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {values.map((value, index) => (
            <div key={index} className="relative">
              <span className={`${value.color} text-black px-6 py-3 text-2xl font-bold`}>{value.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
