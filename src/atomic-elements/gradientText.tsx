import React from "react";

interface GradientTextProps {
  className?: string;
  labels: [string, string, string];
}

const GradientText: React.FC<GradientTextProps> = ({
  className = "",
  labels,
}) => {
  const textStyle: React.CSSProperties = {
    width: "274px",
    height: "23px",
    flexShrink: 0,
    textAlign: "center" as const,
    fontFamily: '"General Sans Variable", sans-serif',
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "0.2px",
    background: "linear-gradient(90deg, #F2C029 0%, #8C6F18 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div style={textStyle} className={className}>
      {labels[0]} • {labels[1]} • {labels[2]}
    </div>
  );
};

export default GradientText;
