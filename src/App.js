import "./App.css";
//import Countries from "./Countries";
import HeatmapIndia from "./HeatmapIndia";
//import DraggableMarker from "./DraggableMarker";
//import HeatmapUSA from "./HeatmapUSA";
import ClusterMap from "./ClusterMap";
//import Markers from "./Markers";

function App() {
  return (
    <div className="App">
      {/* <Markers /> */}
      <ClusterMap />
      {/* <HeatmapUSA /> */}
      <HeatmapIndia />
      {/* <DraggableMarker /> */}
      {/* <Countries /> */}
    </div>
  );
}

export default App;
