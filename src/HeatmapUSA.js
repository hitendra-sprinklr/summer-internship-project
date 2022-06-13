import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import usa from "./data/usa.json";

const HeatmapUSA = () => {
  const countryStyle = {
    fillColor: "red",
  };

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.NAME;
    console.log(countryName);
    layer.bindPopup(countryName);
    // layer.bindTooltip("hey there");

    layer.options.fillOpacity = Math.random();

    layer.on({
      click: (event) => {
        event.target.setStyle({
          color: "black",
        });
      },
      // mouseover: (event) => {
      //   event.target.setStyle({
      //     fillOpacity: 1,
      //     color: "green",
      //   });
      // },

      // mouseout: (event) => {
      //   layer.resetStyle(event.target);
      // },
    });
  };

  return (
    <div className="country">
      <MapContainer center={[20, 100]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          style={countryStyle}
          data={usa.features}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
    </div>
  );
};

export default HeatmapUSA;