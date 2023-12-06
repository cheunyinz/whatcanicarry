import React from "react";
import styles from "./A1Heading.module.scss";

export type A1HeadingProps = {
  text: string;
};

const A1Heading: React.FC<A1HeadingProps> = ({ text }) => {
  return <h2 className={styles.a1heading}>{text}</h2>;
};

export default A1Heading;
