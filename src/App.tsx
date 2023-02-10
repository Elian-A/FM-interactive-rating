import "./App.css";
import Rating from "./components/rating/rating.component";
import ThankYou from "./components/thankYou/thankYou.component";

function App() {
  return (
    <div className="app">
      <div className="card-wrapper">
        <Rating />
        {/* <ThankYou /> */}
      </div>
    </div>
  );
}

export default App;
