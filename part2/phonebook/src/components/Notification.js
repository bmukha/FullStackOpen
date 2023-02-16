const Notification = ({ message, setMessage }) => {
  if (message === null) {
    return null;
  }

  setTimeout(() => {
    setMessage(null);
  }, 5000);

  return <div className={`message ${message.type}`}>{message.text}</div>;
};

export default Notification;
