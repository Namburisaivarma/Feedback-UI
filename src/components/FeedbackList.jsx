import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem handleDelete={handleDelete} key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
