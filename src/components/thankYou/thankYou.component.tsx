import { FC } from "react";
import "./thankYou.styles.css";
const ThankYou: FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="thank-you">
      <img
        src="/illustration-thank-you.svg"
        alt="orange dot and credict card floating around a cellphone which have a curvy paper emerging from within"
      />
      <div className="selected-rating">
        <p>You selected {rating} out of 5</p>
      </div>
      <div className="text-wrapper text-center">
        <h3 className="title">Thank you!</h3>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
