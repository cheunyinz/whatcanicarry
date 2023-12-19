import React from "react";
import styles from "./A5Link.module.scss";

export type A5LinkProps = {
  text: string;
  link: string;
  target?: string;
};

const A5Link: React.FC<A5LinkProps> = ({ text, link, target }) => {
  return (
    <a href={link} className={styles.a5link} target={target}>
      {text}
    </a>
  );
};

export default A5Link;
