const Testimonials = () => {
  const testimonials = [
    {
      name: "Julian Marv",
      role: "Creative Director, Flux",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBozAc98oVhi79ZmS6jIgyBkDl48rk-bQLjJqe_WiAP-HEBs_siTii9Hm6kV2zidhWqVsok-XvRKMMngMr_vTNG9MY4j6FmREUwt8FrGh-jgKdFkKKoyoNVEg6k2q_T_bq6Xd-eyiiA5qwF5yA8cC6taS-_GFSz56uFr_8GefrYfRGRm7Z90FvyU0QNwO5uQKU2aEbAs5E7-s_pFqtAsMcRuW6uLEdyA1CQAvhlw__Bu1GtjquFMNCJT0uqT__L6Ul06Gp8OgnkvhuN",
      quote:
        "Finally, a bio link tool that doesn't look like a 2010 mobile site. The tonal layering is exactly what my brand needed.",
    },

    {
      name: "Sara Lin",
      role: "Lifestyle Influencer",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCVTrII0Vjj4okk60o3ouBZG3w40aan4MCYbprOMLm3lZBzNlXLOoz6LNaJL7jtyvpKh5a4A0U3Go3u3F_rnXmcK_Ht2cvjeQGKKj9tI7VTUt8KNPXJGPqNrpLaTO4bc0GwZPGwXNgyqbXxh1HdyMNJW3PKijRkltLJDUQ7wrZ6q44xQjcqQybTlvNl803m3S1oIM2CWNl1Togj8VFtyS8QuntzxtkCEMWaHLQIXSaqX16GxATZsyzvRemmcA-DvAH_NwiKyrua8784",
      quote:
        "My conversion rate on product links jumped by 40% after switching to inToBio. The glassmorphism cards make my content pop.",
    },

    {
      name: "David Chen",
      role: "SaaS Consultant",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAArXnz1o8vAeu2ALWaTIwGbssy_UCXzoK_PBkCAtnjVe-hFn3S_dZSnvcu2L7cCpagozEjkfG6trF6w8XmHn7IPLF6WYj3qwsKhToz7mX0nTxuG1Cg0knRbP3_761HLhv0d8lkGTOjjmhbbD_-YEJnexyVzLxx0adF1eKN_0uTtL13ANdp9RHcNuilymNl8TIN7mZAwqBJKaK3I2o5uFfQvp5ldw5wevJF8oJ5AKWGjtErq9v1V26An423oAUODyvg7RQUmV5E2yp1",
      quote:
        "The analytics are clean and precise. I can actually see the flow of my visitors through my different services. Super high quality.",
    },
  ];

  return (
    <section className="py-24 bg-surface-container-low relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <h2 className="font-headline text-center text-4xl font-bold mb-16 text-on-surface-variant">
          Trusted by Modern Architects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/50 backdrop-blur-xl p-8 rounded-lg shadow-sm border border-white/30 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-sm text-on-surface-variant">
                    {t.name}
                  </h4>

                  <p className="text-xs text-on-surface-variant">{t.role}</p>
                </div>
              </div>

              <p className="text-on-surface italic text-sm leading-relaxed grow">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-20 -left-20 w-100 h-100 bg-primary/5 rounded-full blur-[100px]" />
    </section>
  );
};

export default Testimonials;
