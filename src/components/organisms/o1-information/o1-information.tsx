import React from "react";
import styles from "./o1-information.module.scss";
import M1InfoSection, {
  M1InfoSectionProps,
} from "../../molecule/m1-info-section/M1InfoSection";
import A5Link from "@/components/atoms/a5-link/A5Link";

export type O1InformationProps = {
  infosections?: Array<M1InfoSectionProps>;
  url: string;
  text: string;
};

const O1Information: React.FC<O1InformationProps> = ({
  infosections,
  url,
  text,
}) => {
  return (
    <section className={styles.O1Information}>
      <div className={styles.wrapper}>
        {infosections && infosections.length > 0 ? (
          infosections.map((infosection) => (
            <M1InfoSection
              key={infosection.heading}
              heading={infosection.heading}
              dataset={infosection.dataset}
            />
          ))
        ) : (
          <p>No information available</p>
        )}
        <A5Link text={text} link={url} target="_blank" />
      </div>
    </section>
  );
};

export default O1Information;
