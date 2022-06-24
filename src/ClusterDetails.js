// Returns a tooltip for the cluster for the custom data

const ClusterDetails = ({ insights, mentions, stars, child }) => {
  return `<div>
      <h2>${child} Locations</h2>
      <hr></hr>
      <div className="insights"><b>Insights</b> : ${insights}</div>
      <div className="mentions"><b>Mentions</b> : ${mentions}</div>
      <div className="stars"><b>Stars</b> : ${stars}</div>
    </div>`;
};

export default ClusterDetails;
