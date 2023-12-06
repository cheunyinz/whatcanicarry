import React from "react";
import styles from "./M1InfoSection.module.scss";
import { type A2DataProps } from "../../components/atoms/a2-data/A2Data";

export type M1InfoSectionProps = {
  text: string;
  dataset: Array<A2DataProps>;
};

const A1Heading: React.FC<M1InfoSectionProps> = ({ text }) => {
  return (
    <section className={styles.M1InfoSection}>
      <A1Heading text={text} />
    </section>
  );
};

export default A1Heading;
