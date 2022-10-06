import React from "react";
import styles from "./select.module.css";

type SelectOption = {
  label: string;
  value: number;
};
type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export default function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClear = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    onChange?.(undefined);
    setIsOpen(false);
  };

  return (
    <div
      tabIndex={0}
      className={styles.container}
      onClick={() => setIsOpen((open) => !open)}
      onBlur={() => setIsOpen(false)}
    >
      <span className={styles.value}>{value?.label}</span>
      <button className={styles["clr-btn"]} onClick={(e) => onClear(e)}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={`${styles.caret} ${isOpen ? styles.open : ""}`}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option) => (
          <li
            key={option.value}
            className={`${styles.option} ${
              value?.value === option.value ? styles.selected : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onChange?.(option);
              setIsOpen(false);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
