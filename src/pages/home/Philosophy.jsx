import { FiLink } from "react-icons/fi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { RiRocketLine } from "react-icons/ri";

export default function PhilosophySection() {
  const features = [
    {
      icon: <FiLink />,
      title: "Curate Links",
      description:
        "Connect everything you create. Socials, newsletters, storefronts, and portfolios in one premium unified hub.",
    },
    {
      icon: <HiOutlineColorSwatch />,
      title: "Design Editorially",
      description:
        "Customize with professional typography and asymmetrical layouts that feel like a high-end luxury magazine.",
    },
    {
      icon: <RiRocketLine />,
      title: "Go Live",
      description:
        "One bio link to rule them all. Optimized for technical SEO and lightning-fast loading globally.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f5f3fb] py-20">
      
      {/* background number */}
      <div className="absolute right-6 md:right-20 top-10 text-[90px] md:text-[150px] font-bold text-purple-200 opacity-40 select-none">
        01-03
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-widest text-indigo-500 uppercase mb-3">
            The Philosophy
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Built for the modern aesthetic.
          </h2>

          <p className="text-gray-600 text-base md:text-lg">
            We break the rigid grid. Your presence deserves more than a standard
            list of buttons. It deserves a high-performance editorial gallery.
          </p>
        </div>

        {/* features */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >

              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 text-2xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}