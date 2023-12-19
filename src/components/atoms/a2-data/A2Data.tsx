import React from "react";
import styles from "./A2Data.module.scss";

export type A2DataProps = {
  number: number;
  unit: "cm" | "in" | "kg" | "lbs";
  description?: string;
  isMetric?: boolean;
};

const A2Data: React.FC<A2DataProps> = ({
  number,
  unit,
  isMetric = true,
  description,
}) => {
  unit =
    isMetric === false && "cm"
      ? "in"
      : isMetric === false && "kg"
      ? "lbs"
      : unit;
  number =
    unit === "in" ? number * 0.3937 : unit === "lbs" ? number * 2.2046 : number;

  return (
    <div className={styles.a2Data}>
      <p className={styles.number}>
        {number} <span className={styles.unit}>{unit}</span>
      </p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default A2Data;
