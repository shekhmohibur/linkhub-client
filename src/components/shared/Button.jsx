import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({label, btnStyle, textColor, bgColor, textSize, isIcon}) => {
    return (
        <div>
            <button className={`transition-all duration-300 ${btnStyle} rounded-xl btn ${bgColor} ${textColor} ${textSize}`}>{label}<FaArrowRightLong className={isIcon}/></button>
        </div>
    );
};

export default Button;