import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({label, btnStyle, textColor, bgColor}) => {
    return (
        <div>
            <button className={`${btnStyle} rounded-xl py-7 btn ${bgColor} ${textColor} `}>{label}<FaArrowRightLong /></button>
        </div>
    );
};

export default Button;