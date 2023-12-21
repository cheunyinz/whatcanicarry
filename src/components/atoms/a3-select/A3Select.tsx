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
  const sortedChildren = React.Children.toArray(children).sort((a, b) => {
    const aKey = (a as ReactElement<any>).key || "";
    const bKey = (b as ReactElement<any>).key || "";
    return aKey.localeCompare(bKey);
  });
  return (
    <select className={styles.a3Select} name={name} id={id} onChange={onChange}>
      <option disabled selected value="">
        Select airline
      </option>
      {sortedChildren}
    </select>
  );
};

export default A3Select;
