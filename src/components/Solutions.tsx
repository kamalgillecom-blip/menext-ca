import Link from "next/link";

export function Solutions() {
  const solutions = [
    {
      title: "Smart Waitlist",
      description: "Real-time queue tracking and management to reduce congestion and improve patient flow. Give patients freedom while they wait.",
      href: "#smart-waitlist",
      gradient: "from-[#4a7ba7] to-[#0c4683]",
    },
    {
      title: "SMS Alerts",
      description: "Automated text notifications to keep patients informed about their appointment status and reduce no-shows significantly.",
      href: "#sms-alerts",
      gradient: "from-[#5a8bb7] to-[#0c4683]",
    },
    {
      title: "Digital Intake",
      description: "Secure online forms for patients to complete history and consent prior to arrival, saving time at the front desk.",
      href: "#digital-intake",
      gradient: "from-[#6a9bc7] to-[#0c4683]",
    },
    {
      title: "Workflow Automation",
      description: "Streamline front-desk operations with integrated check-in and documentation tools that sync with your practice management software.",
      href: "#workflow-automation",
      gradient: "from-[#7aabd7] to-[#0c4683]",
    },
    {
      title: "Patient Engagement",
      description: "Improve satisfaction with transparent wait times and seamless communication, creating a modern patient experience.",
      href: "#patient-engagement",
      gradient: "from-[#8abbe7] to-[#0c4683]",
    },
  ];

  return (
    <section id="enterprise" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-sectra text-3xl md:text-4xl text-[#0c4683] text-center mb-16">
          Discover our enterprise solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.href}
              className="group relative overflow-hidden rounded-lg aspect-[4/5] block"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${solution.gradient}`} />

              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-32 h-32 border border-white rounded-full" />
                <div className="absolute bottom-20 left-10 w-20 h-20 border border-white rounded-full" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-sectra text-2xl text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                  {solution.description}
                </p>
                <span className="inline-flex items-center text-white text-sm font-medium">
                  See More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
