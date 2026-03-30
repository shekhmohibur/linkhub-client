import { LuBadgeCheck } from "react-icons/lu";
import Button from "../../components/shared/Button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden px-4">
      
      {/* background gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-indigo-300 via-purple-100 to-transparent -z-10"></div>

      <div className="flex flex-col items-center text-center max-w-5xl mx-auto md:space-y-10 py-12 md:py-38">

        {/* badge */}
        <span className="flex items-center gap-2 badge bg-purple-200/70 backdrop-blur-md py-4 px-4 rounded-2xl font-semibold border border-purple-300/40">
          <LuBadgeCheck size={20} />
          Trusted by 50,000+ top-tier creators
        </span>

        {/* heading */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-manrope font-extrabold leading-tight">
          One link for all your
          <span className="block bg-linear-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
            digital magic.
          </span>
        </h1>

        {/* description */}
        <p className="max-w-2xl text-on-surface/80 font-manrope font-medium md:text-lg">
          Transform your bio link into a high-end editorial gallery. Showcase
          your work, sell products, and grow your audience with unparalleled
          precision.
        </p>

        {/* buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">

          <Button
            btnStyle="
              bg-gradient-to-r 
              from-indigo-600 
              to-indigo-400 
              hover:from-indigo-700 
              hover:to-indigo-500
              rounded-xl 
              text-lg
              px-8 
              py-8
              shadow-lg
              hover:shadow-xl
              border-none
            "
            textColor="text-white"
            label="Start your Gallery"
          />

          <Button
            btnStyle="
              bg-white/70
              backdrop-blur-md
              border
              border-indigo-200
              hover:bg-indigo-50
              rounded-xl
              text-lg
              px-8
              py-8
              border-none
            "
            label="View Showcase"
            isIcon="hidden"
          />

        </div>

      </div>
    </div>
  );
};

export default Hero;