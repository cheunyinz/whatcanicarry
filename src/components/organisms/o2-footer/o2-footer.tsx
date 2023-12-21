import React from "react";
import styles from "./o2-footer.module.scss";
import A5Link from "@/components/atoms/a5-link/A5Link";

export type O2FooterProps = {
  text: string;
};

const O2Footer: React.FC<O2FooterProps> = ({ text }) => {
  return (
    <footer className={styles.O2Footer}>
      <p>{text}</p>
      <A5Link text="Cheun Yin" link="https://www.cheunyinzhang.com/" />
    </footer>
  );
};

export default O2Footer;
