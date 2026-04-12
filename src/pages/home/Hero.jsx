import { LuBadgeCheck } from "react-icons/lu";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

import Button from "../../components/shared/Button";

const HeroSection = () => {
  const navigate = useNavigate();

  /* scroll helper */
  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${id}`);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      className="

relative

px-4 sm:px-6 lg:px-8

pt-24 md:pt-28 lg:pt-32

pb-16 md:pb-24

overflow-hidden

"
    >
      {/* background */}

      <div
        className="

absolute inset-0

bg-gradient-to-b

from-purple-100/70

via-indigo-100/40

to-transparent

"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="

relative

max-w-5xl

mx-auto

flex flex-col

items-center

text-center

gap-6

"
      >
        {/* badge */}

        <motion.div
          variants={item}
          className="

flex items-center gap-2

px-4 py-1.5

rounded-full

bg-purple-100/80

text-purple-700

text-sm

font-medium

"
        >
          <LuBadgeCheck size={16} />
          Trusted by 50,000+ creators
        </motion.div>

        {/* headline */}

        <motion.h1
          variants={item}
          className="

font-manrope

font-extrabold

leading-[1.05]

text-3xl

sm:text-4xl

md:text-5xl

lg:text-6xl

max-w-3xl

"
        >
          One link for all your
          <span
            className="

block mt-2

bg-gradient-to-r

from-indigo-600

to-purple-500

bg-clip-text

text-transparent

"
          >
            digital magic
          </span>
        </motion.h1>

        {/* description */}

        <motion.p
          variants={item}
          className="

max-w-xl

text-gray-600

text-sm sm:text-base md:text-lg

"
        >
          Transform your bio link into a premium page that converts visitors
          into followers.
        </motion.p>

        {/* buttons */}

        <motion.div
          variants={item}
          className="

flex flex-col sm:flex-row

gap-3

mt-2

"
        >
          {/* register */}

          <Button
            label="Start your Gallery"
            onClick={() => navigate("/register")}
            btnStyle="

bg-gradient-to-r

from-indigo-600

to-indigo-400

hover:from-indigo-700

hover:to-indigo-500

text-white

px-6 py-3

rounded-xl

shadow-md

hover:shadow-lg

transition

cursor-pointer

"
          />

          {/* scroll */}

          <Button
            label="View Showcase"
            onClick={() => scrollTo("showcase")}
            btnStyle="

bg-white/70

hover:bg-indigo-50

text-gray-800

px-6 py-3

rounded-xl

transition

cursor-pointer

"
            isIcon="hidden"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
