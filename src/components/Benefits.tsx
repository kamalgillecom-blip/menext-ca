export function Benefits() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sectra text-2xl md:text-3xl text-[#1a1a1a] max-w-3xl mx-auto">
            Using technology{" "}
            <span className="text-[#0c4683]">
              to connect patients with quality care efficiently
            </span>{" "}
            for family practice clinics, walk-ins, and medical centers — the entire patient journey optimized with MeNext.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Optimize */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#0c4683]/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#0c4683]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-sectra text-xl text-[#0c4683] mb-2">Reduce No-Shows</h3>
            <p className="text-[#1a1a1a]/70 text-sm mb-4">
              Significant reduction in missed appointments through timely SMS reminders.
            </p>
            <p className="text-[#1a1a1a]/60 text-xs">
              Automated confirmation requests decrease gaps in your schedule
            </p>
          </div>

          {/* Save */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#0c4683]/10 rounded-full flex items-center justify-center">
              <span className="text-[#0c4683] font-bold text-xl">10+</span>
            </div>
            <h3 className="font-sectra text-xl text-[#0c4683] mb-2">Save Time</h3>
            <p className="text-[#1a1a1a]/70 text-sm mb-4">
              Save hours of staff administrative time daily with digital intake forms.
            </p>
            <p className="text-[#1a1a1a]/60 text-xs">
              Reduce manual data entry and focus on patient care
            </p>
          </div>

          {/* Increase */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#0c4683]/10 rounded-full flex items-center justify-center">
              <span className="text-[#0c4683] font-bold text-xl">36%</span>
            </div>
            <h3 className="font-sectra text-xl text-[#0c4683] mb-2">Patient Satisfaction</h3>
            <p className="text-[#1a1a1a]/70 text-sm mb-4">
              Improve patient experience with transparent wait times and modern tools.
            </p>
            <p className="text-[#1a1a1a]/60 text-xs">
              Patients prefer clinics that respect their time and communication
            </p>
          </div>

          {/* Improve */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#0c4683]/10 rounded-full flex items-center justify-center">
              <span className="text-[#0c4683] font-bold text-xl">275%</span>
            </div>
            <h3 className="font-sectra text-xl text-[#0c4683] mb-2">Clinic Flow</h3>
            <p className="text-[#1a1a1a]/70 text-sm mb-4">
              Optimize daily operations and throughput with data-driven practice management.
            </p>
            <p className="text-[#1a1a1a]/60 text-xs">
              Streamline the lobby experience and reduce overcrowding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
