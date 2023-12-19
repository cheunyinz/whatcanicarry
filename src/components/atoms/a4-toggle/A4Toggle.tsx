import React from "react";
import styles from "./A3Select.module.scss";

export type A4ToggleProps = {
  dropdownOptions: Array<HTMLOptionElement>;
};

const A2Data: React.FC<A4ToggleProps> = ({ dropdownOptions }) => {
  return (
    <select className={styles.a4Toggle} name="airlines" id="airlines-select">
      {dropdownOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default A2Data;
