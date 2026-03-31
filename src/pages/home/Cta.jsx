const Cta = () => {
  return (
    <section className="bg-[#f5f3fb] px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <div
          className="
            rounded-[42px]
            px-6 md:px-12
            py-16 md:py-24
            text-center

            bg-linear-to-r
            from-indigo-600
            to-purple-400
          "
        >
          <div className="max-w-3xl mx-auto">
            {/* heading */}
            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-semibold
                text-white
                leading-tight
                mb-6
              "
            >
              Ready to curate your universe?
            </h2>

            {/* description */}
            <p
              className="
                text-white/90
                text-base
                md:text-lg
                mb-10
              "
            >
              Join the new era of bio links and stand out from the noise with a
              truly high-end editorial presence.
            </p>

            {/* button */}
            <button
              className="
                px-10
                py-4
                rounded-2xl
                cursor-pointer

                bg-white
                text-indigo-700
                font-semibold

                hover:bg-gray-100
                transition
              "
            >
              Claim Your URL Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
