import { MapContainer, Marker, TileLayer } from "react-leaflet";

const Markers = () => {
  return (
    <div className="container">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}></Marker>
        <Marker position={[51.51, -0.1]}></Marker>
        <Marker position={[51.51, -0.12]}></Marker>
        <Marker position={[51.52, -0.12]}></Marker>
      </MapContainer>
    </div>
  );
};

export default Markers;
