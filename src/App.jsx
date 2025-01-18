import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';
import { useState, useEffect } from 'react';

const App = () => {
  const [feedbackType, setFeedbackType] = useState(() => {
    const savedFeedback = window.localStorage.getItem('saved-feedback');
    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const statuses = Object.keys(feedbackType);

  useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify(feedbackType));
  }, [feedbackType]);

  const updateFeedback = feedbackType => {
    setFeedbackType(prev => {
      return {
        ...prev,
        [feedbackType]: prev[feedbackType] + 1,
      };
    });
  };
  const totalFeedback =
    feedbackType.good + feedbackType.neutral + feedbackType.bad;
  const positiveFeedback = Math.round(
    (feedbackType.good / totalFeedback) * 100
  );
  const resetFeedback = () => {
    setFeedbackType({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        statuses={statuses}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackType={feedbackType}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
