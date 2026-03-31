import { HiOutlineChartBar } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaSpotify } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


const ToolkitSection = () => {
  return (
    <section className="relative bg-[#f5f3fb] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* soft background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-300/30 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">

          <p className="text-xs tracking-[0.2em] font-semibold text-indigo-500 uppercase mb-4">
            The Toolkit
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-5">
            Powerful tools, elegant execution.
          </h2>

          <p className="text-gray-600 md:text-lg">
            Everything you need to grow your digital presence with absolute precision.
          </p>

        </div>


        {/* grid */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* deep customization */}
          <div className="
            lg:col-span-2
            group
            relative
            rounded-3xl
            overflow-hidden
            bg-white/70
            backdrop-blur-xl
            border border-white/40
            shadow-md
            hover:shadow-xl
            transition-all
            duration-500
            flex flex-col md:flex-row
          ">

            <div className="p-8 md:w-1/2 relative z-10">

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Deep Customization
              </h3>

              <p className="text-gray-600 mb-6">
                Craft pixel-perfect pages using our Soft Precision design system
                tailored to your brand identity.
              </p>

              <div className="flex flex-wrap gap-3">

                {["Custom Fonts","Dynamic Palettes","Glass Effects"].map(tag => (

                  <span
                    key={tag}
                    className="
                      px-4 py-2
                      text-sm
                      rounded-xl
                      bg-white/60
                      backdrop-blur-md
                      border border-white/50
                      shadow-sm
                    "
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>


            <div className="md:w-1/2 relative overflow-hidden">

              <img
                src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBzSU1axs8OYKy9F1fatuVoE6g1v_1OPOkuEHmB-OTJTafydgcPOiPaeABH0clXdnBIvoJipmpd0QwS4i-lFvJcyfAQ4BChDxbxj3jJvJBo9I0-CeWDOJ5cLmzEGrYjrOIP5V11mA4qL3f0aa3PpWSTvnW4CoN4hdnYJQFyBz-3Vebr2sPhqFqMgpSE8UW-gkrT5hQqIZyLd35WwfxDsML7FEwjUuUGy5MtNZBPpPcn0QHLargr4aZHdGeZ2k0ZzpcjrU3NHy3yNDo"}
                alt="texture"
                className="
                  w-full h-full object-cover
                  group-hover:scale-105
                  transition duration-700 hidden md:block
                "
              />

              <div className="
                absolute inset-0
                bg-linear-to-r
                from-white/40
                to-transparent
              "></div>

            </div>

          </div>



          {/* analytics */}
          <div className="
            group
            rounded-3xl
            p-8
            text-white
            bg-linear-to-br
            from-indigo-600
            via-indigo-500
            to-purple-500
            shadow-md
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
            duration-500
          ">

            <div className="
              w-12 h-12 flex items-center justify-center
              rounded-xl
              bg-white/20
              backdrop-blur-md
              mb-6
            ">
              <HiOutlineChartBar size={22}/>
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Real-time Analytics
            </h3>

            <p className="text-white/90">
              Track clicks, visitors, and conversions with surgical precision insights.
            </p>

          </div>



          {/* seo */}
          <div className="
            group
            rounded-3xl
            p-8
            bg-purple-200/40
            backdrop-blur-xl
            border border-white/40
            shadow-sm
            hover:shadow-lg
            hover:-translate-y-1
            transition-all
            duration-500
          ">

            <div className="
              w-12 h-12 flex items-center justify-center
              bg-white/60
              rounded-xl
              mb-6
            ">
              <FiSearch size={20}/>
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Advanced SEO
            </h3>

            <p className="text-gray-700">
              High-performance meta tags and social previews keep your brand discoverable.
            </p>

          </div>



          {/* integrations */}
          <div className="
            lg:col-span-2
            group
            rounded-3xl
            p-8
            bg-white/60
            backdrop-blur-xl
            border border-white/40
            shadow-sm
            hover:shadow-lg
            transition-all
            duration-500
            flex flex-col md:flex-row justify-between gap-6
          ">

            <div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Limitless Integrations
              </h3>

              <p className="text-gray-600 mb-6">
                Connect Shopify, Spotify, email tools, and more into one unified ecosystem.
              </p>


              <div className="flex gap-3">

                {[RiShoppingCartLine, FaSpotify, HiOutlineMail].map((Icon, i) => (

                  <span
                    key={i}
                    className="
                      w-11 h-11 flex items-center justify-center
                      bg-white/70
                      backdrop-blur-md
                      rounded-xl
                      shadow-sm
                      hover:scale-110
                      transition
                    "
                  >
                    <Icon/>
                  </span>

                ))}

              </div>

            </div>



            <div className="
              flex flex-col justify-center
              md:border-l
              md:pl-8
              border-white/40
            ">

              <span className="
                text-5xl
                font-bold
                bg-linear-to-r
                from-indigo-600
                to-purple-500
                bg-clip-text
                text-transparent
              ">
                100+
              </span>

              <span className="text-gray-600">
                Native App Connectors
              </span>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
};

export default ToolkitSection;