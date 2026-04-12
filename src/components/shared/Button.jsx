import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const Button = ({
  label,

  btnStyle = "",

  onClick,

  to,

  type = "button",

  loading = false,

  showIcon = true,

  disabled = false,
}) => {
  const baseStyle = `

inline-flex

items-center

justify-center

gap-2

rounded-xl

transition-all

duration-300

cursor-pointer

whitespace-nowrap

${disabled ? "opacity-60 cursor-not-allowed" : ""}

`;

  const content = (
    <>
      {label}

      {showIcon && !loading && <FaArrowRightLong className="text-sm" />}

      {loading && <span className="animate-spin">•</span>}
    </>
  );

  /* link button */

  if (to) {
    return (
      <Link to={to} className={`${baseStyle} ${btnStyle}`}>
        {content}
      </Link>
    );
  }

  /* normal button */

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${btnStyle}`}
    >
      {content}
    </button>
  );
};

export default Button;
