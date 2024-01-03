import React, { ChangeEvent } from "react";
import styles from "./A4Toggle.module.scss";

export type A4ToggleProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  firstToggle: string;
  secondToggle: string;
  toggleName: string;
};

const A4Toggle: React.FC<A4ToggleProps> = ({
  firstToggle,
  secondToggle,
  toggleName,
  onChange,
}) => {
  return (
    <div className={styles.a4Toggle}>
      <label className={styles.btnSwitch}>
        <input
          type="checkbox"
          name={toggleName}
          id={toggleName}
          defaultChecked
          onChange={onChange}
        ></input>
        <label
          htmlFor={toggleName}
          data-on={secondToggle}
          data-off={firstToggle}
          className={styles.btnSwitchInner}
        />
      </label>
    </div>
  );
};

export default A4Toggle;
