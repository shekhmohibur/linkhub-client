import Cta from "./Cta";
import Hero from "./Hero";
import PhilosophySection from "./Philosophy";
import Pricing from "./Pricing";
import ToolkitSection from "./Toolkit";

const Home = () => {

return (

<div>

<section id="hero">
<Hero/>
</section>

<section id="features">
<PhilosophySection/>
</section>

<section id="showcase">
<ToolkitSection/>
</section>

<section id="pricing">
<Pricing/>
</section>

<section id="cta">
<Cta/>
</section>

</div>

);

};

export default Home;