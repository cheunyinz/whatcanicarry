import React, { ChangeEvent, ReactElement } from "react";
import styles from "./A3Select.module.scss";

export type A3SelectProps = {
  name: string;
  id: string;
  children: ReactElement<HTMLOptionElement>[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const A3Select: React.FC<A3SelectProps> = ({
  children,
  name,
  id,
  onChange,
}) => {
  return (
    <select className={styles.a3Select} name={name} id={id} onChange={onChange}>
      {children}
    </select>
  );
};

export default A3Select;
