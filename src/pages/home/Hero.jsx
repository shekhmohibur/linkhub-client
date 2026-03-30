import { LuBadgeCheck } from "react-icons/lu";
import Button from "../../components/shared/Button";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center flex-col max-w-6xl mx-auto space-y-4 items-center">
        <span className="badge bg-purple-200/70 py-5 rounded-2xl font-semibold">
          <LuBadgeCheck scale="24"/>
          Trusted by 50,000+ top-tier creators
        </span>
        <h2 className="text-8xl font-manrope font-bold text-center ">One link for all your digital magic.</h2>
        {/* hero btns */}
        <div>
            <Button btnStyle={'bg-linear-to-r from-indigo-600 to-indigo-300 rounded-xl text-xl capitalize'} label={"show your Gallery text-white"}/>
            <Button btnStyle={'bg-linear-to-r from-indigo-700 to-indigo-400 rounded-xl text-xl capitalize'} label={"view Showcase"}/>
            <button className="startYourGallery btn w-fit">Start Your Gallery</button>
        <button className="View Showcases btn w-fit ">View Showcase</button>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
