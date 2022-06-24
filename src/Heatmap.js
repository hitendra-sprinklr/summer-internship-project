import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Importing geojson data
import india from "./data/india.json";
import usa from "./data/usa.json";
import russia from "./data/russia.json";
import china from "./data/china.json";
import HeatmapPopup from "./HeatmapPopup";

const Heatmap = () => {
  const countryStyle = {
    fillColor: "red",
  };

  // Function for adding styles and eventlisteners to each region of heatmap where country is the region object from geojson data and layer is that particular layer which is added to the map
  const onEachCountry = (country, layer) => {
    const countryprops = country.properties;

    layer.bindPopup(HeatmapPopup({ data: countryprops })); // Binds a popup over each region which opens on click

    layer.options.fillOpacity = Math.random(); // Fill the opacity of region with random value between 0-1

    layer.on({
      click: (event) => {
        // Makes the bonundaries of a region bold on click
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
      <h1>Heatmap</h1>
      <MapContainer center={[20, 100]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
        <GeoJSON
          style={countryStyle}
          data={russia.features}
          onEachFeature={onEachCountry}
        />
        <GeoJSON
          style={countryStyle}
          data={china.features}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
    </div>
  );
};

export default Heatmap;
