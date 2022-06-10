import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Markers = () => {
  return (
    <div className="container">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>This is a Popup!</Popup>
        </Marker>
        <Marker position={[51.51, -0.1]}>
          <Popup>This is a Popup!</Popup>
        </Marker>
        <Marker position={[51.51, -0.12]}>
          <Popup>This is a Popup!</Popup>
        </Marker>
        <Marker position={[51.52, -0.12]}>
          <Popup>This is a Popup!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Markers;
