import Button from "../../components/shared/Button";

const Cta = () => {


  return (
    <section
      className="

bg-[#f5f3fb]

px-4 sm:px-6 lg:px-8

py-20 md:py-28

"
    >
      <div
        className="

max-w-6xl

mx-auto

"
      >
        <div
          className="

relative

rounded-[40px]

px-6 md:px-12

py-14 md:py-20

text-center

overflow-hidden

bg-gradient-to-r

from-indigo-600

to-purple-400

"
        >
          {/* subtle glow */}

          <div
            className="

absolute

inset-0

bg-white/5

"
          />

          <div
            className="

relative

max-w-2xl

mx-auto

space-y-6

"
          >
            {/* heading */}

            <h2
              className="

text-3xl

sm:text-4xl

md:text-5xl

font-semibold

text-white

leading-tight

tracking-tight

"
            >
              Ready to curate your universe?
            </h2>

            {/* description */}

            <p
              className="

text-white/90

text-sm

sm:text-base

md:text-lg

leading-relaxed

"
            >
              Create a premium bio page that captures attention, builds trust,
              and grows your audience.
            </p>

            {/* button */}

            <div className="pt-2">
              <Button
                label="Claim your URL"
                to="/register"
                btnStyle="

bg-white

text-indigo-700

px-7 py-3

text-sm md:text-base

font-semibold

hover:bg-gray-100

shadow-md

hover:shadow-lg

transition

"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
