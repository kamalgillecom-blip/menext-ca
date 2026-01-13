import Link from "next/link";
import { ImageCarousel } from "./ImageCarousel";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0c4683] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://ext.same-assets.com/373852820/88893671.jpeg"
          alt="Healthcare professionals"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c4683]/95 via-[#0c4683]/80 to-[#0c4683]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="max-w-xl">
            <h1 className="font-sectra text-4xl md:text-5xl lg:text-[3.5rem] leading-tight text-white mb-6">
              Affordable Patient checkin with SMS alerts and forms intake prior to arrival
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              The trusted source of truth for global healthcare professionals (HCP), clinical, scientific, and research information for life sciences, payers, providers, and patients.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#enterprise"
                className="inline-flex items-center px-6 py-3 rounded-full border border-white/50 text-white hover:bg-white/10 transition-colors text-sm font-medium"
              >
                Enterprise Solutions
              </Link>
              <Link
                href="#professional"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#c81d6e] hover:bg-[#a81858] text-white transition-colors text-sm font-medium"
              >
                For Healthcare Professionals
              </Link>
            </div>
          </div>

          <div className="hidden lg:block w-full">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
