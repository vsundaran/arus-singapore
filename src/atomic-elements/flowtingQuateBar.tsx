import React from "react";

interface FlowtingQuateBarProps {
  children?: React.ReactNode;
  className?: string;
}

const FlowtingQuateBar: React.FC<FlowtingQuateBarProps> = ({
  children,
  className = "",
}) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    maxWidth: "1214px",
    width: "100%",
    minHeight: "117px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexShrink: 0,
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.95)",
    boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
    backgroundColor: "#FFFFFFF2",
    borderColor: "#FFFFFF1A",
    border: "10px solid rgba(149, 149, 149, 0.1)",
  };

  return (
    <div style={containerStyle} className={className}>
      {children}
    </div>
  );
};

export default FlowtingQuateBar;
