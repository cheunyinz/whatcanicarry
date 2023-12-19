import React from "react";
import styles from "./A1Heading.module.scss";

export type A1HeadingProps = {
  heading: string;
  variant?: "default" | "dynamic";
};

const A1Heading: React.FC<A1HeadingProps> = ({ heading, variant }) => {
  return (
    <h2 data-variant={variant} className={styles.a1heading}>
      {heading}
    </h2>
  );
};

export default A1Heading;
