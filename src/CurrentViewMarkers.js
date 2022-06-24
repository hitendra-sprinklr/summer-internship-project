// Component which displays the list of markers in current view/zoom level whenever zoom level changes(zoom in/zoom out)

import { useMapEvents } from "react-leaflet";
import { useState } from "react";

function CurrentViewMarkers({ markersData }) {
  const [zoomLevel, setZoomLevel] = useState(3); // initial zoom level provided for MapContainer

  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom());
      const currMarkers = markersData.filter((marker) =>
        mapEvents.getBounds().contains(marker.position)
      );
      console.log("Number of Markers in current view : ", currMarkers.length);
      console.log("Array of these markers : ", currMarkers);
      // console.log(currMarkers);
      //console.log(mapEvents.getBounds().contains([51.5, -0.06]));
    },
  });

  console.log("Current Zoom level : ", zoomLevel);
}

export default CurrentViewMarkers;
