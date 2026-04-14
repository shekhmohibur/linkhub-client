import female_model from "../../../assets/female_model.webp";
import hero_temp from "../../../assets/phone_pre_temp.webp";
const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* left content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[0.6875rem] font-bold tracking-widest uppercase mb-6">
            <span className="material-symbols-outlined text-[14px]">
              auto_awesome
            </span>
            Next Gen Bio Links
          </div>

          <h1 className="font-headline text-6xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-8">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Ethereal
            </span>{" "}
            Link in Bio
          </h1>

          <p className="text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
            Moving beyond the grid. Create a curated digital space where your
            brand breathes through intentional asymmetry and tonal layering.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-md bg-primary text-on-primary font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all active:scale-95">
              Claim Your Link
            </button>

            <button className="px-8 py-4 rounded-md bg-surface-container-highest text-primary font-bold text-lg hover:bg-surface-container-high transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        {/* mockup */}
        <div className="relative flex justify-center">
          <div className="absolute -z-10 w-[500px] h-[500px] bg-gradient-to-tr from-primary/10 to-secondary/10 blur-[100px] rounded-full animate-pulse"></div>

          <div className="relative w-[320px] h-[640px] bg-white rounded-[3rem] border-[8px] border-on-surface/5 shadow-2xl overflow-hidden p-3 ring-1 ring-on-surface/10">
            <div className="h-full w-full bg-surface-container-low rounded-[2rem] overflow-y-auto no-scrollbar flex flex-col items-center pt-12 p-6">
              {/* avatar */}
              <div className="w-24 h-24 rounded-full bg-white mb-4 p-1 shadow-md">
                <img
                  alt="profile"
                  className="w-full h-full rounded-full object-cover"
                  src={female_model}
                />
              </div>

              <h3 className="font-headline font-bold text-xl mb-1 text-on-surface">
                Aria Vance
              </h3>

              <p className="text-xs text-on-surface-variant mb-8">
                Architect & Digital Curator
              </p>

              {/* links */}
              <div className="w-full space-y-3">
                <div className="w-full h-14 bg-white/70 backdrop-blur-md rounded-md shadow-sm flex items-center px-4 gap-3 border border-white/20">
                  <span className="material-symbols-outlined text-primary">
                    palette
                  </span>

                  <span className="text-xs font-medium text-on-surface">Design Portfolio</span>
                </div>

                <div className="w-full h-14 bg-white/70 backdrop-blur-md rounded-md shadow-sm flex items-center px-4 gap-3 border border-white/20">
                  <span className="material-symbols-outlined text-primary">
                    shopping_bag
                  </span>

                  <span className="text-xs font-medium text-on-surface">Shop My Presets</span>
                </div>

                <div className="w-full h-40 bg-white/70 backdrop-blur-md rounded-md shadow-sm overflow-hidden border border-white/20 relative">
                  <img
                    alt="project"
                    className="w-full h-full object-cover"
                    src={hero_temp}
                  />

                  <div className="absolute bottom-2 left-4 text-[10px] font-bold text-white uppercase tracking-widest drop-shadow-md">
                    Latest Project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
