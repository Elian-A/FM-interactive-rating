import { FC } from "react";
import "./optionWrapper.styles.css";

const OptionWrapper: FC<{ option?: string; disabled?: boolean }> = ({
  option,
  disabled = false,
}) => {
  return (
    <button className={`option-wrapper ${disabled && "disabled"}`}>
      {option === undefined ? <img src="icon-star.svg" /> : option}
    </button>
  );
};

export default OptionWrapper;
