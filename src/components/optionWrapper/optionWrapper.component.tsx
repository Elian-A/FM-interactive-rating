import { Dispatch, FC, SetStateAction } from "react";
import "./optionWrapper.styles.css";

interface OptionWrapperInterface {
  option?: string;
  disabled?: boolean;
  setRating?: Dispatch<SetStateAction<number | null>>;
}

const OptionWrapper: FC<OptionWrapperInterface> = ({
  option,
  disabled = false,
  setRating,
}) => {
  const handleClick = () => {
    if (option === undefined || !setRating) return;
    setRating(+option);
  };
  return (
    <button
      onClick={handleClick}
      className={`option-wrapper ${disabled && "disabled"}`}
    >
      {option === undefined ? <img src="icon-star.svg" /> : option}
    </button>
  );
};

export default OptionWrapper;
