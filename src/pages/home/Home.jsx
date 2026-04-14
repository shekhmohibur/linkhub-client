import Hero from "../../components/sections/Hero/Hero";
import CTA from "./CTA";
import Features from "./Features";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Features/>
            <Pricing/>
            <Testimonials/>
            <CTA/>
        </div>
    );
};

export default Home;