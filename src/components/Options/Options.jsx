const Options = ({
  statuses,
  updateFeedback,
  totalFeedback = 0,
  resetFeedback,
}) => {
  return (
    <div>
      {statuses.map((key) => {
        return (
          <button key={key} onClick={() => updateFeedback(key)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        );
      })}
      {totalFeedback !== 0 && (
        <button onClick={() => resetFeedback()}>Reset</button>
      )}
    </div>
  );
};

export default Options;
