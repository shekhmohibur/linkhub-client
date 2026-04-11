import { LuBadgeCheck } from "react-icons/lu";
import { motion } from "framer-motion";
import Button from "../../components/shared/Button";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-indigo-300 via-purple-100 to-transparent" />

      <motion.div
        className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8 md:gap-10 py-16 md:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* badge */}
        <motion.span
          className="
            flex items-center gap-2
            bg-purple-200/70
            backdrop-blur-md
            px-4 py-2
            rounded-2xl
            text-sm md:text-base
            font-semibold
            border border-purple-300/40
          "
          variants={itemVariants}
        >
          <LuBadgeCheck size={18} className="text-purple-700" />
          Trusted by 50,000+ top-tier creators
        </motion.span>

        {/* heading */}
        <motion.h1
          className="
            font-manrope
            font-extrabold
            leading-tight
            text-4xl
            sm:text-5xl
            md:text-7xl
            lg:text-8xl
          "
          variants={itemVariants}
        >
          One link for all your
          <span
            className="
            block
            bg-gradient-to-r
            from-indigo-600
            to-purple-500
            bg-clip-text
            text-transparent
          "
          >
            digital magic.
          </span>
        </motion.h1>

        {/* description */}
        <motion.p
          className="
            max-w-2xl
            text-sm
            sm:text-base
            md:text-lg
            text-gray-700/80
            font-manrope
            font-medium
          "
          variants={itemVariants}
        >
          Transform your bio link into a high-end editorial gallery. Showcase
          your work, sell products, and grow your audience with unparalleled
          precision.
        </motion.p>

        {/* buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
          variants={itemVariants}
        >
          <Button
            btnStyle="
              w-fit sm:w-auto
              bg-gradient-to-r
              from-indigo-600
              to-indigo-400
              hover:from-indigo-700
              hover:to-indigo-500
              text-white
              text-base md:text-lg
              px-8
              py-8
              rounded-xl
              shadow-lg
              hover:shadow-xl
              transition-all
              duration-300
              border-none
            "
            label="Start your Gallery"
          />

          <Button
            btnStyle="
              w-fit sm:w-auto
              bg-white/70
              backdrop-blur-md
              border border-indigo-200
              hover:bg-indigo-50
              text-gray-800
              text-base md:text-lg
              px-8
              py-8
              rounded-xl
              transition-all
              duration-300
            "
            label="View Showcase"
            isIcon="hidden"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
