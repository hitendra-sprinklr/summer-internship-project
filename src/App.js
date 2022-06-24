import "./App.css";
import Heatmap from "./Heatmap";
//import DraggableMarker from "./DraggableMarker";
import ClusterMap from "./ClusterMap";

function App() {
  return (
    <div className="App">
      <ClusterMap />
      <Heatmap />
      {/* <DraggableMarker /> */}
    </div>
  );
}

export default App;
