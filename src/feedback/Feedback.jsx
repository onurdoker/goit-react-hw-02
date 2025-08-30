import css from "./Feedback.module.css";

const Feedback = ({
  good,
  bad,
  neutral,
}) => {

  const totalFeedback = good + bad + neutral;

  const positiveFeedback = Math.round ((good / totalFeedback) * 100);

  if (totalFeedback === 0) {
    return (

        <div className={css.feedback}>
          No feedback yet
        </div>
    );
  } else {
    return (

        <div className={css.feedback}>
          <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
          </div>
          <div>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positiveFeedback}%</p>
          </div>
        </div>
    );
  }

};

export default Feedback;