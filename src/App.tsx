import { useState } from "react";
import "./App.css";
import Rating from "./components/rating/rating.component";
import ThankYou from "./components/thankYou/thankYou.component";

function App() {
  const [submited, setSubmited] = useState(false);
  const [rating, setRating] = useState<null | number>(null);

  return (
    <div className="app">
      <div className="card-wrapper">
        {submited ? (
          <ThankYou rating={rating as number} />
        ) : (
          <Rating
            submited={submited}
            setSubmited={setSubmited}
            setRating={setRating}
            rating={rating}
          />
        )}
      </div>
    </div>
  );
}

export default App;
