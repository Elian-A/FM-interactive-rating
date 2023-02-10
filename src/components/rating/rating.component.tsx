import { Dispatch, FC, SetStateAction } from "react";
import OptionWrapper from "../optionWrapper/optionWrapper.component";
import "./rating.styles.css";
interface RatingInterface {
  setSubmited: Dispatch<SetStateAction<boolean>>;
  setRating: Dispatch<SetStateAction<number | null>>;
  submited: boolean;
  rating: number | null;
}
const Rating: FC<RatingInterface> = ({
  submited,
  setSubmited,
  setRating,
  rating,
}) => {
  const handleSubmit = () => {
    if (rating === null) return;
    setSubmited(!submited);
  };
  return (
    <div className="rating">
      <OptionWrapper disabled />
      <div className="text-wrapper">
        <h3 className="title">How did we do?</h3>
        <p className="paragraph">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="options">
        <OptionWrapper option="1" setRating={setRating} />
        <OptionWrapper option="2" setRating={setRating} />
        <OptionWrapper option="3" setRating={setRating} />
        <OptionWrapper option="4" setRating={setRating} />
        <OptionWrapper option="5" setRating={setRating} />
      </div>
      <button onClick={handleSubmit} className="button">
        Submit
      </button>
    </div>
  );
};

export default Rating;
