import { LuCheck } from "react-icons/lu";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/month",
      save: "Free forever",
      features: ["Limited Smart Links", "Free Themes", "Weekly Reports"],
      button: "Get Started",
      highlight: false,
    },

    {
      name: "Professional",
      price: "$9",
      period: "/month",
      save: "Save 25%",
      features: [
        "All Editorial Layouts",
        "0% Transaction Fees",
        "Custom Domain",
        "Priority Support",
      ],
      button: "Go Professional",
      highlight: true,
    },

    {
      name: "Studio",
      price: "$19",
      period: "/month",
      save: "Save 35%",
      features: [
        "Everything in Pro",
        "Advanced Analytics",
        "API Access",
        "White-glove Support",
      ],
      button: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section className="relative bg-[#f5f3fb] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-125 h-125 bg-indigo-300/30 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        {/* heading */}
        <p className="text-xs tracking-[0.25em] font-semibold text-indigo-500 uppercase mb-4">
          Pricing
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-5">
          Simple, transparent, premium.
        </h2>

        <p className="text-gray-600 md:text-lg mb-16">
          Professional tools at creator-friendly pricing.
        </p>

        {/* cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`
                relative
                rounded-3xl
                p-8
                text-left
                backdrop-blur-xl
                border
                transition-all
                duration-500

                ${
                  plan.highlight
                    ? `
                  bg-white/80
                  border-indigo-500
                  shadow-xl
                  scale-[1.03]
                  `
                    : `
                  bg-white/60
                  border-white/40
                  shadow-sm
                  hover:shadow-lg
                  hover:-translate-y-1
                  `
                }
              `}
            >
              {/* popular badge */}
              {plan.highlight && (
                <div
                  className="
                  absolute
                  -top-3
                  left-1/2
                  -translate-x-1/2
                  px-4 py-1
                  text-xs
                  font-semibold
                  rounded-full
                  bg-linear-to-r
                  from-indigo-600
                  to-purple-500
                  text-white
                  shadow
                "
                >
                  MOST POPULAR
                </div>
              )}

              {/* title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {plan.name}
              </h3>

              {/* price */}
              <div className="flex items-end gap-2 mb-1">
                <span
                  className="
                  text-4xl
                  font-bold
                  bg-linear-to-r
                  from-indigo-600
                  to-purple-500
                  bg-clip-text
                  text-transparent
                "
                >
                  {plan.price}
                </span>

                <span className="text-gray-500 text-sm">{plan.period}</span>
              </div>

              {/* saving */}
              <div className="text-sm text-indigo-600 font-medium mb-6">
                {plan.save}
              </div>

              {/* features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span
                      className="
                      w-5 h-5
                      flex items-center justify-center
                      rounded-full
                      bg-indigo-100
                      text-indigo-600
                    "
                    >
                      <LuCheck size={14} />
                    </span>

                    {f}
                  </li>
                ))}
              </ul>

              {/* button */}
              <button
                className={`
                  w-full
                  py-3
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-300
                  cursor-pointer

                  ${
                    plan.highlight
                      ? `
                    text-white
                    bg-linear-to-r
                    from-indigo-600
                    to-purple-500
                    hover:shadow-lg
                    `
                      : `
                    bg-white
                    border
                    border-indigo-200
                    hover:bg-indigo-50
                    `
                  }
                `}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
