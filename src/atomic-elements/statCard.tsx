    import React from "react";

    interface StatCardProps {
    title: string;
    count: string | number;
    }

    const StatCard: React.FC<StatCardProps> = ({ title, count }) => {
    return (
        <div
        style={{
            width: "184px",
            height: "111px",
            borderRadius: "15px",
            background: "linear-gradient(90deg, #FFD12B 2.27%, #D78E28 99.93%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            color: "#fff",
            fontFamily: "Poppins, sans-serif",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
        >
        <div
            style={{
            background: "white",
            width: "100%",
            height: "50%",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#D78E28",
            fontWeight: 600,
            fontSize: "16px",
            }}
        >
            {title}
        </div>
        <div
            style={{
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 600,
            fontSize: "22px",
            }}
        >
            {count}
        </div>
        </div>
    );
    };

    export default StatCard;
