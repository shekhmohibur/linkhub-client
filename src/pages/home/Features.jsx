const Features = () => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight mb-4 text-center text-on-surface-variant">
            Beyond Basic Links
          </h2>
          <p className="text-on-surface-variant text-center max-w-2xl mx-auto">
            Stop using rigid templates. Our ethereal architect tool allows you
            to build layers that adapt to your brand's unique soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large Card */}
          <div className="md:col-span-2 bg-surface-container-lowest rounded-lg p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-on-surface-variant">
                Tonal Layering Engine
              </h3>

              <p className="text-on-surface-variant max-w-sm mb-8">
                Move away from "standard" UI. Our engine automatically creates
                depth through translucency and light rather than hard lines.
              </p>

              <button className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                Explore Editor
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            <div className="absolute -right-10 top-0 w-80 h-full bg-linear-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>

            <div className="mt-8 relative h-48 bg-surface-container rounded-DEFAULT overflow-hidden shadow-inner">
              <div className="absolute top-8 left-8 w-64 h-32 bg-white rounded-DEFAULT shadow-xl flex items-center justify-center p-4">
                <div className="w-full h-4 bg-surface-container rounded-full animate-pulse"></div>
              </div>

              <div className="absolute top-16 left-24 w-64 h-32 bg-primary/10 backdrop-blur-xl rounded-DEFAULT shadow-2xl border border-white/30"></div>
            </div>
          </div>

          {/* Small Card 1 */}
          <div className="bg-surface-container-lowest rounded-lg p-10 flex flex-col hover:scale-[1.01] transition-all">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-6">
              <span className="material-symbols-outlined">query_stats</span>
            </div>

            <h3 className="text-xl font-bold mb-3 text-on-surface-variant">Ghost Analytics</h3>

            <p className="text-on-surface-variant text-sm">
              Privacy-first tracking that shows you how users flow through your
              ethereal space without intrusive cookies.
            </p>
          </div>

          {/* Small Card 2 */}
          <div className="bg-surface-container-lowest rounded-lg p-10 flex flex-col hover:scale-[1.01] transition-all">
            <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container mb-6">
              <span className="material-symbols-outlined">brush</span>
            </div>

            <h3 className="text-xl font-bold mb-3 text-on-surface-variant">Asymmetric Layouts</h3>

            <p className="text-on-surface-variant text-sm">
              Reject the rigid grid. Place elements where they feel right,
              creating a curated editorial experience for your audience.
            </p>
          </div>

          {/* Horizontal Card */}
          <div className="md:col-span-2 bg-linear-to-r from-primary to-secondary rounded-lg p-10 flex items-center gap-8 text-on-primary overflow-hidden relative">
            <div className="flex-1 relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-on-primary">
                Enterprise Ready Link Control
              </h3>

              <p className="opacity-80 mb-6">
                Built for creators who need custom domains, API access, and
                multi-user management. High-end editorial meets robust scale.
              </p>

              <button className="px-6 py-3 bg-white text-primary rounded-sm font-bold hover:bg-opacity-90 transition-all">
                Get Enterprise
              </button>
            </div>

            <div className="hidden lg:block relative z-10 w-48 h-48 bg-white/20 backdrop-blur-md rounded-full border border-white/30 md:flex items-center justify-center">
              <span
                className="material-symbols-outlined text-6xl text-white"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                security
              </span>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
