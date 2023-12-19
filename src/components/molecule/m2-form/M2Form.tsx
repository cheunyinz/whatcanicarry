import React from "react";
import styles from "./M2Form.module.scss";

import A1Heading from "../../atoms/a1-heading/A1Heading";
import A3Select, { A3SelectProps } from "@/components/atoms/a3-select/A3Select";
import A4Toggle, { A4ToggleProps } from "@/components/atoms/a4-toggle/A4Toggle";

export type M2FormProps = {
  heading: string;
  select?: Array<A3SelectProps>;
  toggle?: A4ToggleProps;
};

const M2Form: React.FC<M2FormProps> = ({ heading, select, toggle }) => {
  return (
    <section className={styles.m2Form}>
      <A1Heading heading={heading} variant="default" />
      <form className={styles.innerForm}>
        {select &&
          select?.map((select, index) => (
            <div key={index}>
              <A3Select
                name={select.name}
                onChange={select.onChange}
                id={select.id}
              >
                {select.children}
              </A3Select>
            </div>
          ))}

        {toggle && (
          <A4Toggle
            firstToggle={toggle.firstToggle}
            secondToggle={toggle.secondToggle}
            toggleName={toggle.toggleName}
          />
        )}
      </form>
    </section>
  );
};

export default M2Form;
