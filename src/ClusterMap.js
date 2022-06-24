import React from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster-v2";
import "leaflet/dist/leaflet.css";
//import { coordinates } from "./data/staticClusterData";
import markersData from "./data/randomClusterData";
import PopupDetails from "./PopupDetails";
import TooltipDetails from "./TooltipDetails";
import ClusterDetails from "./ClusterDetails";

const customIcon = new L.Icon({
  iconUrl: require("./location.svg").default,
  iconSize: new L.Point(40, 47),
});

const createClusterCustomIcon = function (cluster) {
  const childMarkers = cluster.getAllChildMarkers();
  const childCount = cluster.getChildCount();

  let clusterStyle;
  if (childCount < 50) clusterStyle = "small";
  else if (childCount >= 50 && childCount <= 100) clusterStyle = "medium";
  else clusterStyle = "large";

  let clusterInsights = 0,
    clusterMentions = 0,
    clusterStars = 0;
  for (let i = 0; i < childMarkers.length; i++) {
    clusterInsights += parseInt(childMarkers[i].options.customData.insights);
    clusterMentions += parseInt(childMarkers[i].options.customData.mentions);
    clusterStars += parseInt(childMarkers[i].options.customData.stars);
  }

  cluster.bindTooltip(
    ClusterDetails({
      insights: clusterInsights,
      mentions: clusterMentions,
      stars: clusterStars,
      child: childCount,
    })
  );

  return L.divIcon({
    html: `<span>${childCount}</span>`,
    className: "cluster" + clusterStyle,
    iconSize: L.point(33, 33, true),
  });
};

const ClusterMap = () => {
  return (
    <div className="container">
      <h1>Cluster Map</h1>
      <MapContainer
        style={{ height: "80vh" }}
        center={[51.505, -0.09]}
        zoom={3}
        maxZoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          // onClick={(e) => console.log("onClick", e.layer.getAllChildMarkers())}
          maxClusterRadius={150}
          spiderfyOnMaxZoom={true}
          showCoverageOnHover={true}
          iconCreateFunction={createClusterCustomIcon}
        >
          {markersData.map((marker) => (
            <Marker
              position={marker.position}
              icon={customIcon}
              key={marker.id}
              customData={marker}
            >
              <Popup>
                <PopupDetails
                  lat={marker.position[0]}
                  lng={marker.position[1]}
                />
              </Popup>
              <Tooltip>
                <TooltipDetails
                  insights={marker.insights}
                  mentions={marker.mentions}
                  stars={marker.stars}
                />
              </Tooltip>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default ClusterMap;
