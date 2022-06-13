import { useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";

const DraggableMarker = () => {
  const center = {
    lat: 51.505,
    lng: -0.09,
  };
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          console.log(marker.getLatLng());
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );

  return (
    <div className="container">
      <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={position}
          key={111}
          draggable={true}
          eventHandlers={eventHandlers}
          ref={markerRef}
        >
          <Popup>
            <h3>Draggable Marker</h3>
            <hr />
            <div className="lat">Latitude : {position.lat}</div>
            <div className="lng">Longitude : {position.lng}</div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default DraggableMarker;
