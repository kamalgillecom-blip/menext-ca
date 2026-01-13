import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-[#f5f2ed] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-sectra text-3xl md:text-4xl lg:text-5xl text-[#0c4683] mb-4">
            See what MeNext can do for your clinic.
          </h2>
          <p className="text-[#1a1a1a]/70 text-lg mb-8 font-sectra">
            Modernize your practice today.
          </p>
          <Link
            href="#demo"
            className="inline-flex items-center px-8 py-3.5 rounded-full border-2 border-[#0c4683] text-[#0c4683] hover:bg-[#0c4683] hover:text-white transition-colors font-medium text-sm"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
