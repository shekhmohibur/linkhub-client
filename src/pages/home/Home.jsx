import Cta from "./Cta";
import Hero from "./Hero";
import PhilosophySection from "./Philosophy";
import Pricing from "./Pricing";
import ToolkitSection from "./Toolkit";

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <Hero />
      {/* Philosophy section */}
      <PhilosophySection />
      {/* Toolkit section */}
      <ToolkitSection />
      {/* Pricing section */}
      <Pricing />
      {/* Cta Section */}
      <Cta/>
    </div>
  );
};

export default Home;
