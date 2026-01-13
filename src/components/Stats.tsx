export function Stats() {
  const stats = [
    {
      number: "80",
      suffix: "%",
      description: "Discover that 80%+ of their HCPs were not a strategic fit",
    },
    {
      number: "40",
      suffix: "%",
      description: "Increase the Medical Affairs team digital share of voice by 40%",
    },
    {
      number: "50",
      suffix: "%",
      description: "Advance representation in clinical trials with 50% Hispanic & 30% Black patients",
    },
  ];

  return (
    <section className="bg-[#0c4683] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-sectra text-2xl md:text-3xl text-white text-center mb-16">
          MeNext has helped family physicians<br />
          harness data to deliver<br />
          results:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-start justify-center mb-4">
                <span className="font-sectra text-7xl md:text-8xl text-white leading-none">
                  {stat.number}
                </span>
                <span className="font-sectra text-3xl md:text-4xl text-white mt-2">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-white/70 text-sm max-w-xs mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
