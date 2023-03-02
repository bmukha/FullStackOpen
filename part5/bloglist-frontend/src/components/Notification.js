import { useEffect } from 'react';

const Notification = ({ message, setMessage }) => {
  const { text, type } = message;
  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  });

  return (
    <div style={{ color: `${type === 'error' ? 'red' : 'green'}` }}>{text}</div>
  );
};

export default Notification;
