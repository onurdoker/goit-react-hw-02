const Option = ({
  handleCount,
  totalFeedback,
}) => {

  if (totalFeedback === 0) {
    return (
        <div>
          <button onClick={() => handleCount ("Good")}>Good</button>
          <button onClick={() => handleCount ("Neutral")}>Neutral</button>
          <button onClick={() => handleCount ("Bad")}>Bad</button>
        </div>
    );
  } else {
    return (
        <div>
          <button onClick={() => handleCount ("Good")}>Good</button>
          <button onClick={() => handleCount ("Neutral")}>Neutral</button>
          <button onClick={() => handleCount ("Bad")}>Bad</button>
          <button onClick={() => handleCount ("Reset")}>Reset</button>
        </div>
    );
  }

};

export default Option;