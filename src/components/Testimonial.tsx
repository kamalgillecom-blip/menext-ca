export function Testimonial() {
  return (
    <section className="bg-[#f5f2ed] py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f9f8f6] rounded-lg p-8 md:p-12 shadow-sm">
          <blockquote className="text-center">
            <p className="font-sectra text-xl md:text-2xl text-[#1a1a1a] leading-relaxed mb-8">
              "Because of the MeNext platform, we are able to significantly reduce patient wait times and no-shows.{" "}
              <span className="text-[#c81d6e]">
                And this has proven to be a massive efficiency gain for our daily clinic operations.
              </span>
              "
            </p>
            <footer>
              <p className="text-[#1a1a1a] font-medium">
                Dr. Sarah Jenkins, Lead Physician,
              </p>
              <p className="text-[#1a1a1a]/70">
                Oakwood Family Practice
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
