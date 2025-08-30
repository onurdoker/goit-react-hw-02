import "./App.css";
import {useState} from "react";
import Description from "./description/Description.jsx";
import Option from "./option/Option.jsx";
import Feedback from "./feedback/Feedback.jsx";

function App() {
  const [good, setGood] = useState (0);
  const [neutral, setNeutral] = useState (0);
  const [bad, setBad] = useState (0);

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
