import React from "react";

const Footer = () => {
  const footer = {
    brand: "inToBio",

    copyright: "© 2026 inToBio. Built for the modern creator.",

    links: [
      {
        label: "Privacy Policy",
        href: "#",
      },

      {
        label: "Terms of Service",
        href: "#",
      },

      {
        label: "Cookies",
        href: "#",
      },

      {
        label: "API Documentation",
        href: "#",
      },
    ],
  };

  return (
    <section className="w-full border-slate-100 dark:border-slate-800 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 max-w-7xl mx-auto">
        {/* brand */}

        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="text-md font-bold text-slate-900 mb-2">
            {footer.brand}
          </div>

          <p className="font-['Inter'] text-[0.6875rem] tracking-widest uppercase text-slate-400">
            {footer.copyright}
          </p>
        </div>

        {/* links */}

        <div className="flex flex-wrap justify-center gap-8">
          {footer.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="font-['Inter'] text-[0.6875rem] tracking-widest uppercase text-slate-400 hover:text-indigo-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
