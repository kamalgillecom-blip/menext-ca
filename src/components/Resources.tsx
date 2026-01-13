import Link from "next/link";

export function Resources() {
  const resources = [
    {
      type: "White Paper",
      title: "Optimizing Patient Flow in Modern Clinics",
      href: "#",
      color: "bg-[#0c4683]",
    },
    {
      type: "Blog",
      title: "The Impact of SMS Alerts on No-Show Rates",
      href: "#",
      color: "bg-[#3a7ab8]",
    },
    {
      type: "Video",
      title: "Digital Intake Forms: A Guide for Family Practices",
      href: "#",
      isVideo: true,
      color: "bg-gradient-to-br from-[#0c4683] to-[#c81d6e]",
    },
  ];

  return (
    <section className="bg-[#f9f8f6] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-sm font-medium text-[#1a1a1a]/60 mb-8">
          Explore our latest resources
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Link
              key={index}
              href={resource.href}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Placeholder Image */}
              <div className={`relative aspect-[4/3] ${resource.color} flex items-center justify-center`}>
                {resource.type && (
                  <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-xs font-medium text-[#1a1a1a]">
                    {resource.type}
                  </span>
                )}
                {resource.isVideo && (
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#0c4683] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
                {!resource.isVideo && (
                  <div className="text-white/30 text-6xl font-sectra">
                    MN
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="font-sectra text-lg text-[#1a1a1a] mb-4 group-hover:text-[#0c4683] transition-colors">
                  {resource.title}
                </h4>
                <span className="inline-flex items-center text-[#0c4683] text-sm font-medium border border-[#0c4683] rounded-full px-4 py-2 group-hover:bg-[#0c4683] group-hover:text-white transition-colors">
                  {resource.isVideo ? "View video" : "Read more"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
