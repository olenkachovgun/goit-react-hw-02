import Notification from '../Notification/Notification';

// eslint-disable-next-line react/prop-types
const Feedback = ({ feedbackType, totalFeedback = 0, positiveFeedback }) => {
  {
    if (totalFeedback === 0) {
      return <Notification />;
    }
  }
  return (
    <div>
      <h3>Feedback Statistics</h3>
      <ul>
        <li>Good : {feedbackType.good}</li>
        <li>Neutral : {feedbackType.neutral}</li>
        <li>Bad : {feedbackType.bad}</li>
        <li>Total : {totalFeedback}</li>
        <li>Positive : {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
