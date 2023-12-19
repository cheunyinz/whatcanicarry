import React from "react";
import styles from "./M1InfoSection.module.scss";

import A1Heading from "../../atoms/a1-heading/A1Heading";
import A2Data, { A2DataProps } from "../../atoms/a2-data/A2Data";

export type M1InfoSectionProps = {
  heading: string;
  dataset: Array<A2DataProps>;
};

const M1InfoSection: React.FC<M1InfoSectionProps> = ({ heading, dataset }) => {
  return (
    <section className={styles.m1InfoSection}>
      <A1Heading heading={heading} variant="dynamic" />
      <ul>
        {dataset.map((data, index) => (
          <li key={index}>
            <A2Data
              number={data.number}
              unit={data.unit}
              description={data.description}
              isMetric={data.isMetric}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default M1InfoSection;
