export function ValueProps() {
  const values = [
    { label: "faster", color: "bg-yellow-400" },
    { label: "Grow quicker", color: "bg-yellow-400" },
    { label: "Build better", color: "bg-yellow-400" },
    { label: "Succeed faster", color: "bg-yellow-400" },
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
