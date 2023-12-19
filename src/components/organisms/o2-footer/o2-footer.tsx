import React from "react";
import styles from "./o2-footer.module.scss";

export type O2FooterProps = {
  text: string;
};

const O2Footer: React.FC<O2FooterProps> = ({ text }) => {
  return (
    <footer className={styles.O2Footer}>
      <p>{text}</p>
    </footer>
  );
};

export default O2Footer;
