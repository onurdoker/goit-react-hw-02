import "./App.css";
import {useEffect, useState} from "react";
import Description from "./description/Description.jsx";
import Option from "./option/Option.jsx";
import Feedback from "./feedback/Feedback.jsx";

function App() {
  const [good, setGood] = useState (() => {
    return parseInt (localStorage.getItem ("good")) || 0;
  });
  const [neutral, setNeutral] = useState (() => {
    return parseInt (localStorage.getItem ("neutral")) || 0;
  });
  const [bad, setBad] = useState (() => {
    return parseInt (localStorage.getItem ("bad")) || 0;
  });

  useEffect (() => {
        localStorage.setItem ("good",
            good);
        localStorage.setItem ("neutral",
            neutral);
        localStorage.setItem ("bad",
            bad);
      },
      [
        good,
        neutral,
        bad]);

  const handleCount = (choice) => {
    if (choice === "Good") {
      setGood (prev => prev + 1);
    } else if (choice === "Neutral") {
      setNeutral (prev => prev + 1);
    } else if (choice === "Bad") {
      setBad (prev => prev + 1);
    } else if (choice === "Reset") {
      setGood (0);
      setNeutral (0);
      setBad (0);
    }
  };

  return (
      <div>
        <Description/>

        <Option handleCount={handleCount}/>

        <Feedback good={good}
                  bad={bad}
                  neutral={neutral}/>

      </div>
  );
}

export default App;
