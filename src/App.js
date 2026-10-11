import { useState, useEffect } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  useEffect(() => {
    document.title = "fedback";
  }, []);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (total === 0) {
      return 0;
    }

    return Math.round((good / total) * 100);
  };

  const leaveFeedback = (option) => {
    if (option === "good") {
      setGood(good + 1);
    }

    if (option === "neutral") {
      setNeutral(neutral + 1);
    }

    if (option === "bad") {
      setBad(bad + 1);
    }
  };

  const total = countTotalFeedback();

  return (
    <div>
      <Section title="залиште фідбек">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>

      <Section title="статистика">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <p message="no feedbeck" />
        )}
      </Section>
    </div>
  );
}

export default App;