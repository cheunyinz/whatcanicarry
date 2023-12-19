import React from "react";
import styles from "./A4Toggle.module.scss";
import classNames from "clsx";

export type A4ToggleProps = {
  firstToggle: string;
  secondToggle: string;
  toggleName: string;
};

const A4Toggle: React.FC<A4ToggleProps> = ({
  firstToggle,
  secondToggle,
  toggleName,
}) => {
  return (
    <div className={styles.a4Toggle}>
      {/* <label className="switch btn-color-mode-switch">  */}
      <label className={styles.btnSwitch}>
        <input
          type="checkbox"
          name={toggleName}
          id={toggleName}
          value="1"
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
