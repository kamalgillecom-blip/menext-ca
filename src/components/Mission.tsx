export function Mission() {
  return (
    <section className="bg-[#0c4683] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sectra text-3xl md:text-4xl text-[#c81d6e] mb-4">
            Streamline your practice with smart<br className="hidden md:block" />
            waitlist management
          </h2>
          <p className="text-white/80 text-lg">
            Efficient patient intake, automated SMS alerts,<br />
            and verified data for family physicians.
          </p>
        </div>

        {/* Globe Animation */}
        <div className="relative w-full max-w-2xl mx-auto aspect-square mb-16 flex items-center justify-center">
          {/* Fallback globe design if video doesn't load */}
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full border border-white/20" />
            <div className="absolute inset-4 rounded-full border border-white/20" />
            <div className="absolute inset-8 rounded-full border border-white/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
            {/* Orbit lines */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/10 rotate-12" />
            <div className="absolute inset-0 rounded-full border border-dashed border-white/10 -rotate-45" />
            {/* Dots */}
            <div className="absolute top-10 left-20 w-1.5 h-1.5 bg-white/60 rounded-full" />
            <div className="absolute top-32 right-16 w-2 h-2 bg-white/40 rounded-full" />
            <div className="absolute bottom-20 left-24 w-1 h-1 bg-white/80 rounded-full" />
            <div className="absolute bottom-32 right-28 w-1.5 h-1.5 bg-white/50 rounded-full" />
            <div className="absolute top-20 right-24 w-1 h-1 bg-white/70 rounded-full" />
          </div>
        </div>

        {/* Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0a3a6d] rounded-lg p-6 hover:bg-[#093460] transition-colors cursor-pointer">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-5 h-5 mt-1 flex-shrink-0 border border-white/40 rounded flex items-center justify-center">
                <span className="text-white/60 text-xs">?</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Is the patient checked in and ready to be seen?
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 mt-1 flex-shrink-0 border border-white/40 rounded flex items-center justify-center">
                <span className="text-white/60 text-xs">?</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Has the patient completed their intake forms beforehand?
              </p>
            </div>
          </div>

          <div className="bg-[#0a3a6d] rounded-lg p-6 hover:bg-[#093460] transition-colors cursor-pointer">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-5 h-5 mt-1 flex-shrink-0 border border-white/40 rounded flex items-center justify-center">
                <span className="text-white/60 text-xs">?</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                What is the current estimated wait time for walk-ins?
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 mt-1 flex-shrink-0 border border-white/40 rounded flex items-center justify-center">
                <span className="text-white/60 text-xs">?</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Did the patient receive the SMS alert to come in?
              </p>
            </div>
          </div>

          <div className="bg-[#0a3a6d] rounded-lg p-6 hover:bg-[#093460] transition-colors cursor-pointer">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-5 h-5 mt-1 flex-shrink-0 border border-white/40 rounded flex items-center justify-center">
                <span className="text-white/60 text-xs">?</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                How many patients are currently in the waiting room?
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 mt-1 flex-shrink-0 border border-white/40 rounded flex items-center justify-center">
                <span className="text-white/60 text-xs">?</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Are there any missing documents for today's appointments?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
