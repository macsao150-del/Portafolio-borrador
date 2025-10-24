import './GradientText.css';

export default function GradientText({
  children,
  className = 'custom-class',
  colors=["#d5eefa", "#1c61a2ff", "#ceeefc", "#4cc0fb", "#d9f4ff"],
  animationSpeed = 10,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
