import React from "react";
import styles from "./M1InfoSection.module.scss";
import M1InfoSection, {
  M1InfoSectionProps,
} from "../../molecule/m1-info-section/M1InfoSection";

export type O1InformationProps = {
  infosections: Array<M1InfoSectionProps>;
  url: string;
};

const O1Information: React.FC<O1InformationProps> = ({ infosections, url }) => {
  return (
    <section className={styles.O1Information}>
      {infosections.map((infosection, index) => (
        <>
          <M1InfoSection
            text={infosection.text}
            dataset={infosection.dataset}
          />
        </>
      ))}
      <a href={url}>Visit airline website</a>
    </section>
  );
};

export default O1Information;
