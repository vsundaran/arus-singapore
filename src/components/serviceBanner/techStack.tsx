import { Box, Grid, Typography } from "@mui/material";
import React from "react";

// Types
interface TechItem {
  label: string;
  level: "expert" | "advanced" | "intermediate";
}

interface TechCardProps {
  item: TechItem;
}

interface LevelButtonProps {
  level: TechItem["level"];
}

// Constants
const TECH_STACK: TechItem[] = [
  { label: "Apache Spark", level: "expert" },
  { label: "AWS", level: "advanced" },
  { label: "PostgreSQL", level: "advanced" },
  { label: "Python", level: "expert" },
  { label: "Apache Kafka", level: "advanced" },
  { label: "Google Cloud", level: "advanced" },
  { label: "MongoDB", level: "intermediate" },
  { label: "SQL", level: "advanced" },
  { label: "Apache Airflow", level: "intermediate" },
  { label: "Azure", level: "intermediate" },
  { label: "Redis", level: "intermediate" },
  { label: "Scala", level: "intermediate" },
  { label: "Pandas", level: "expert" },
  { label: "Snowflake", level: "advanced" },
  { label: "Elasticsearch", level: "intermediate" },
  { label: "R", level: "intermediate" },
  { label: "Dask", level: "intermediate" },
  { label: "Data Bricks", level: "advanced" },
  { label: "S3 & Data Lakes", level: "advanced" },
];

const CATEGORIES = [
  "Data Processing",
  "Cloud Platforms",
  "Database & Storage",
  "Programming Languages",
] as const;

const LEVEL_CONFIG = {
  expert: { label: "Expert", color: "#00C951" },
  advanced: { label: "Advanced", color: "#21A6DF" },
  intermediate: { label: "Intermediate", color: "#FFCD17" },
} as const;

// Shared styles
const styles = {
  categoryTitle: {
    color: "#2162B8",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "0.2px",
  },
  techCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "258px",
    height: "49px",
    padding: "10px 20px",
    gap: "20px",
    flexShrink: 0,
    borderRadius: "10px",
    background: "#EEF8FD",
  },
  techLabel: {
    color: "#000",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "0.2px",
    whiteSpace: "nowrap",
  },
  levelButton: {
    display: "flex",
    width: "74px",
    height: "24px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexShrink: 0,
    borderRadius: "5px",
  },
  levelText: {
    color: "#FFF",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "0.2px",
  },
};

// SVG as a constant to avoid recreation
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.83602 5.5L7.59602 3.473L8.33602 1.5H4.50002C4.35719 1.50069 4.21779 1.54384 4.09955 1.62397C3.98131 1.7041 3.88958 1.81759 3.83602 1.95L1.51302 7.757C1.50223 7.78384 1.49819 7.81292 1.50124 7.84169C1.50429 7.87046 1.51435 7.89804 1.53054 7.92202C1.54672 7.946 1.56854 7.96564 1.59407 7.97924C1.61961 7.99283 1.64809 7.99996 1.67702 8H6.64202L5.91002 10.013L4.82802 12.988C4.79822 13.0706 4.79777 13.1609 4.82675 13.2438C4.85573 13.3266 4.91236 13.397 4.98713 13.443C5.0619 13.489 5.15023 13.5079 5.23726 13.4964C5.3243 13.4849 5.40473 13.4438 5.46502 13.38L12.421 5.989C12.4599 5.9478 12.4858 5.89612 12.4957 5.84033C12.5055 5.78455 12.4988 5.72711 12.4763 5.67511C12.4539 5.6231 12.4167 5.5788 12.3694 5.54769C12.3221 5.51657 12.2667 5.49999 12.21 5.5H6.83602ZM9.56202 2.5L9.79702 1.873C9.8757 1.66335 9.90241 1.43775 9.87487 1.21552C9.84733 0.993295 9.76635 0.781048 9.63886 0.596948C9.51138 0.412849 9.34119 0.26238 9.14285 0.158419C8.94452 0.0544577 8.72395 0.000100743 8.50002 0H4.50002C3.59402 0 2.78002 0.552 2.44302 1.393L0.120016 7.2C0.0181992 7.45446 -0.0197005 7.72999 0.00963355 8.00249C0.0389677 8.27499 0.134641 8.53614 0.288282 8.7631C0.441923 8.99006 0.648848 9.1759 0.890948 9.30437C1.13305 9.43283 1.40294 9.5 1.67702 9.5H4.50002L3.95502 11L3.41802 12.475C3.26954 12.8823 3.26622 13.3283 3.40862 13.7378C3.55103 14.1473 3.83042 14.495 4.19958 14.7222C4.56875 14.9495 5.00505 15.0424 5.43476 14.9851C5.86447 14.9278 6.26124 14.724 6.55802 14.408L13.514 7.017C13.7536 6.76253 13.9134 6.4435 13.9738 6.09926C14.0342 5.75502 13.9925 5.40064 13.8538 5.07983C13.7152 4.75902 13.4856 4.48581 13.1935 4.29393C12.9014 4.10204 12.5595 3.99986 12.21 4H9.00002L9.56202 2.5Z"
      fill="black"
    />
  </svg>
);

// Optimized components
const LevelButton = React.memo(({ level }: LevelButtonProps) => {
  const config = LEVEL_CONFIG[level];

  return (
    <Box
      sx={{
        ...styles.levelButton,
        backgroundColor: config.color,
      }}
    >
      <Typography sx={styles.levelText}>{config.label}</Typography>
    </Box>
  );
});

LevelButton.displayName = "LevelButton";

const TechCard = React.memo(({ item }: TechCardProps) => {
  return (
    <Box sx={styles.techCard}>
      <ArrowIcon />
      <Typography sx={styles.techLabel}>{item.label}</Typography>
      <LevelButton level={item.level} />
    </Box>
  );
});

TechCard.displayName = "TechCard";

// Main component
export default function TechStack() {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {CATEGORIES.map((category, index) => (
          <Grid
            key={category}
            size={3}
            mb={index === CATEGORIES.length - 1 ? "40px" : 0}
          >
            <Typography sx={styles.categoryTitle}>{category}</Typography>
          </Grid>
        ))}

        {TECH_STACK.map((item) => (
          <Grid size={3} key={item.label}>
            <TechCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
