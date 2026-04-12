// components/SectionCard.jsx

const SectionCard = ({ title, children, right }) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <h2 className="text-sm text-gray-500">{title}</h2>

      {right}
    </div>

    <div
      className="

bg-white

rounded-2xl

p-5

shadow-sm

space-y-4

"
    >
      {children}
    </div>
  </div>
);

export default SectionCard;
