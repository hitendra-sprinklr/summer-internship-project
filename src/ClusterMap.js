import React from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster-v2";
import "leaflet/dist/leaflet.css";
import { coordinates } from "./data/clusterData";

const customIcon = new L.Icon({
  iconUrl: require("./location.svg").default,
  iconSize: new L.Point(40, 47),
});

const ClusterMap = () => {
  return (
    <div className="container">
      <h1>Cluster Map</h1>
      <MapContainer
        style={{ height: "80vh" }}
        center={[51.505, -0.09]}
        zoom={10}
        maxZoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          onClick={(e) => console.log("onClick", e)}
          maxClusterRadius={150}
          spiderfyOnMaxZoom={true}
          showCoverageOnHover={true}
        >
          {coordinates.map((d) => (
            <Marker position={d} icon={customIcon} />
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default ClusterMap;
