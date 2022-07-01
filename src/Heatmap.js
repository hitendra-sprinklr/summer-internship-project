import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Importing geojson data
import india from "./data/india.json";
import usa from "./data/usa.json";
import russia from "./data/russia.json";
import china from "./data/china.json";
import HeatmapPopup from "./HeatmapPopup";
import getColor from "./getColor";

const Heatmap = () => {
  const countryStyle = {
    fillColor: "red",
  };

  // Function for adding styles and eventlisteners to each region of heatmap where country is the region object from geojson data and layer is that particular layer which is added to the map
  const onEachCountry = (country, layer) => {
    const countryprops = country.properties;

    layer.bindPopup(HeatmapPopup({ data: countryprops })); // Binds a popup over each region which opens on click

    layer.options.fillOpacity = 0.7; // Fill the opacity of region with random value between 0-1
    layer.options.weight = 1; // Sets the weight of the boundaries of the region
    layer.options.color = "white"; // Sets the color of the boundaries of the region

    layer.options.fillColor = getColor({ regionName: countryprops.name });

    layer.on({
      // click: (event) => {
      //   // Makes the bonundaries of a region bold on click
      //   event.target.setStyle({
      //     color: "black",
      //   });
      // },
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
      <h1>Heatmap</h1>
      <MapContainer center={[20, 100]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* Adding Geojson data over the map container */}

        <GeoJSON
          style={countryStyle}
          data={india.features}
          onEachFeature={onEachCountry}
        />
        <GeoJSON
          style={countryStyle}
          data={usa.features}
          onEachFeature={onEachCountry}
        />
        {/* <GeoJSON
          style={countryStyle}
          data={russia.features}
          onEachFeature={onEachCountry}
        />
        <GeoJSON
          style={countryStyle}
          data={china.features}
          onEachFeature={onEachCountry}
        /> */}
      </MapContainer>
    </div>
  );
};

export default Heatmap;
