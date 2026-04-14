import { useState } from "react";

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: 0,
      highlight: false,
      button: "Start Free",
      features: ["10 Bio Links", "Basic Tonal Themes", "intobio.me/yourname"],
    },

    {
      name: "Creator Pro",
      price: 6,
      highlight: true,
      badge: "Most Popular",
      button: "Get Creator Pro",
      features: [
        "Everything in Starter",
        "Custom Domain Connection",
        "Advanced Editorial Editor",
        "Priority 1:1 Support",
      ],
    },

    {
      name: "Enterprise",
      price: 29,
      highlight: false,
      button: "Contact Sales",
      features: [
        "Multi-seat Dashboard",
        "White-label Interface",
        "Dedicated Account Manager",
      ],
    },
  ];

  const yearlyPrice = (price) => (price * 12 * 0.8).toFixed(0);
  const period = yearly ? "yr" : "mo";

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight mb-6 text-on-surface-variant">
            Transparent Value
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm font-medium ${!yearly ? "text-on-surface" : "text-on-surface-variant"}`}
            >
              Monthly
            </span>

            <button
              onClick={() => setYearly(!yearly)}
              className="w-12 h-6 bg-surface-container-high rounded-full relative p-1"
            >
              <div
                className={`w-4 h-4 bg-primary rounded-full transition-transform ${
                  yearly ? "translate-x-6" : ""
                }`}
              />
            </button>

            <span
              className={`text-sm font-medium ${yearly ? "text-on-surface" : "text-on-surface-variant"}`}
            >
              Yearly
              <span className="text-primary text-[10px] font-bold uppercase ml-1 px-1.5 py-0.5 bg-primary/10 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
          {plans.map((plan, index) => {
            const price = yearly ? yearlyPrice(plan.price) : plan.price;

            return (
              <div
                key={index}
                className={`bg-surface-container-lowest rounded-lg transition-all duration-300
                ${
                  plan.highlight
                    ? "p-12 border-2 border-primary shadow-2xl shadow-primary/10 relative scale-105 z-10"
                    : "p-10 border border-transparent hover:border-outline-variant/10 bg-surface-container-low hover:bg-surface-container-lowest"
                }`}
              >
                {/* badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-linear-to-r from-primary to-secondary text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest">
                    {plan.badge}
                  </div>
                )}

                {/* title */}
                <div
                  className={`text-[0.6875rem] font-bold tracking-widest uppercase mb-4
                  ${
                    plan.highlight ? "text-primary" : "text-on-surface-variant"
                  }`}
                >
                  {plan.name}
                </div>

                {/* price */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span
                    className={`font-bold text-primary ${
                      plan.highlight ? "text-5xl" : "text-4xl"
                    }`}
                  >
                    ${price}
                  </span>

                  <span className="text-on-surface-variant text-sm">
                    /{period}
                  </span>
                </div>

                {/* features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-3 text-sm
                      ${
                        plan.highlight
                          ? "text-on-surface"
                          : "text-on-surface-variant"
                      }`}
                    >
                      <span
                        className="material-symbols-outlined text-primary text-lg"
                        style={
                          plan.highlight
                            ? { fontVariationSettings: '"FILL" 1' }
                            : {}
                        }
                      >
                        check_circle
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>

                {/* button */}
                <button
                  className={`w-full py-4 rounded-DEFAULT font-bold transition-all
                  ${
                    plan.highlight
                      ? "bg-linear-to-r from-primary to-secondary text-on-primary shadow-lg shadow-primary/30 hover:scale-105 active:scale-95"
                      : "bg-surface-container-low text-on-surface hover:bg-surface-container-high rounded-sm outline-1 outline-outline-variant hover:outline-primary/50 active:outline-primary/70"
                  }`}
                >
                  {plan.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
