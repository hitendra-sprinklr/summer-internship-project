// Return a tooltip for the marker for the custom data

const TooltipDetails = ({ insights, mentions, stars }) => {
  return (
    <div className="tooltip">
      <h2>Tooltip</h2>
      <hr />
      <div className="insights">Insights : {insights}</div>
      <div className="mentions">Mentions : {mentions}</div>
      <div className="stars">Stars : {stars}</div>
    </div>
  );
};

export default TooltipDetails;
