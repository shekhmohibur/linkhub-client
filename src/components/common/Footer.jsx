const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f5f3fb] border-t border-gray-200">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* logo */}
          <h3 className="text-indigo-600 font-semibold text-lg">
            Digital Curator
          </h3>


          {/* links */}
          <div className="flex items-center gap-8 text-gray-600 text-sm">

            <a
              href="#"
              className="hover:text-indigo-600 transition"
            >
              Twitter
            </a>

            <a
              href="#"
              className="hover:text-indigo-600 transition"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="hover:text-indigo-600 transition"
            >
              Terms
            </a>

            <a
              href="#"
              className="hover:text-indigo-600 transition"
            >
              Privacy
            </a>

          </div>

          {/* copyright */}
          <p className="text-gray-400 text-sm">
            © {year} inToBio.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;