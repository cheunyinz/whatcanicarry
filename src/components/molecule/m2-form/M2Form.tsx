import React from "react";
import styles from "./M2Form.module.scss";

import A1Heading from "../../atoms/a1-heading/A1Heading";
import A3Select, { A3SelectProps } from "@/components/atoms/a3-select/A3Select";

export type M2FormProps = {
  heading: string;
  form: Array<A3SelectProps>;
};

const M2Form: React.FC<M2FormProps> = ({ heading, form }) => {
  return (
    <section className={styles.m2Form}>
      <A1Heading heading={heading} variant="default" />
      <form>
        {form.map((select, index) => (
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
      </form>
    </section>
  );
};

export default M2Form;
