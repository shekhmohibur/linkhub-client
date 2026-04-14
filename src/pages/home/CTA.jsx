const CTA = () => {

  const cta = {
    title: "Build your ethereal space today.",
    description:
      "Join over 10,000 creators who are redesigning the way they present themselves online.",
    placeholder: "intobio.me/yourname",
    buttonText: "Claim Now",
  };


  return (
    <section className="py-24 max-w-7xl mx-auto px-8">

      <div className="bg-indigo-900 rounded-lg p-16 text-center text-on-primary overflow-hidden relative">

        <div className="relative z-10 max-w-2xl mx-auto">

          <h2 className="font-headline text-5xl font-bold mb-6">
            {cta.title}
          </h2>

          <p className="text-lg opacity-80 mb-10">
            {cta.description}
          </p>


          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <input
              type="text"
              placeholder={cta.placeholder}
              className="w-full sm:w-64 px-6 py-4 rounded-sm bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 outline-none transition-all"
            />

            <button className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-900 font-bold rounded-sm hover:scale-105 transition-all">
              {cta.buttonText}
            </button>

          </div>

        </div>


        {/* Abstract Shapes */}

        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />

        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -ml-32 -mb-32" />

      </div>

    </section>
  );
};

export default CTA;