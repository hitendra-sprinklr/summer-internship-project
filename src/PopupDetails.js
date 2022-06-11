const PopupDetails = (props) => {
  return (
    <div className="coordinates">
      <h3>Coordinates</h3>
      <hr />
      <div className="lat">Latitude : {props.lat}</div>
      <div className="lng">Longitude : {props.lng}</div>
    </div>
  );
};

export default PopupDetails;
