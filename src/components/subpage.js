export default function SubPage({ children, colors }) {
  return (
    <div
      className={`border-8 p-20 bg-${colors.color1} border-${colors.color2} text-${colors.textColor}`}
    >
      {children}
    </div>
  );
}
