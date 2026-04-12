// components/Toggle.jsx

const Toggle = ({ value, onChange }) => {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`w-12 h-7 rounded-full relative transition cursor-pointer ${value ? "bg-black" : "bg-gray-200"}`}
    >
      <div
        className={`

absolute top-1

w-5 h-5

rounded-full bg-white shadow-sm

transition

${value ? "left-6" : "left-1"}

`}
      />
    </button>
  );
};

export default Toggle;
