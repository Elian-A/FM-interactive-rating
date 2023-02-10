import OptionWrapper from "../optionWrapper/optionWrapper.component";
import "./rating.styles.css";
const Rating = () => {
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
        <OptionWrapper option="1" />
        <OptionWrapper option="2" />
        <OptionWrapper option="3" />
        <OptionWrapper option="4" />
        <OptionWrapper option="5" />
      </div>
      <button className="button">Submit</button>
    </div>
  );
};

export default Rating;
