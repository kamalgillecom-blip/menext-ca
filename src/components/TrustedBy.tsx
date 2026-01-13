"use client";

import Image from "next/image";

export function TrustedBy() {
  const logos = [
    { name: "Smith Family Medicine", initial: "SFM" },
    { name: "Oakwood Family Practice", initial: "OFP" },
    { name: "City Health Clinic", initial: "CHC" },
    { name: "Valley View Doctors", initial: "VVD" },
    { name: "Riverside Medical Group", initial: "RMG" },
    { name: "Harmony Health Centre", initial: "HHC" },
    { name: "Maple Leaf Family Practice", initial: "MLFP" },
    { name: "Sunrise Medical Centre", initial: "SMC" },
    { name: "Lakeside Family Physicians", initial: "LFP" },
    { name: "Park Avenue Medical", initial: "PAM" },
    { name: "Westside Family Clinic", initial: "WFC" },
    { name: "Community Health Partners", initial: "CHP" },
  ];

  return (
    <section className="bg-[#0c4683] py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-white/60 text-center text-sm mb-8">
          Trusted by 250+ leading companies
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-marquee">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-12"
            >
              <div className="bg-white/10 px-4 py-2 rounded text-white/70 font-medium text-sm hover:bg-white/20 transition-colors">
                {logo.name}
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-12"
            >
              <div className="bg-white/10 px-4 py-2 rounded text-white/70 font-medium text-sm hover:bg-white/20 transition-colors">
                {logo.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
