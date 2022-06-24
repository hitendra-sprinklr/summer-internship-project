// Tested the react-leaflet library features by displaying the map and markers along with other items for learning purpose

import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { features } from "./data/featuresData";

const Markers = () => {
  return (
    <div className="container">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {features.map((feature) => (
          <Marker
            position={feature.geometry.coordinates}
            key={feature.properties.ID}
          >
            <Tooltip>
              <div className="tooltip">
                <div className="name">Name : {feature.properties.NAME}</div>
                <div className="desc">
                  Description : {feature.properties.DESC}
                </div>
                <div className="insight">
                  Insight : {feature.properties.INSIGHTS}
                </div>
              </div>
            </Tooltip>

            <Popup>
              <div className="coordinates">
                <div className="lat">
                  Latitude : {feature.geometry.coordinates[0]}
                </div>
                <div className="lng">
                  Longitude : {feature.geometry.coordinates[1]}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Markers;
