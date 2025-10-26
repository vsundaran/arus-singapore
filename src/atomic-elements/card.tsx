import React from "react";

interface ServiceCardProps {
  children?: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  children,
  className = "",
}) => {
  const ServiceCardStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    gap: "12px",
    position: "relative",
    width: "100%",
    maxWidth: "614px",
    overflow: "hidden",
    maxHeight: "225px",
    borderRadius: "20px",
    border: "1px solid rgba(177, 187, 188, 0.50)",
    background: "#FFF",
  };

  return (
    <div style={ServiceCardStyle} className={className}>
      {children}
    </div>
  );
};

export default ServiceCard;
