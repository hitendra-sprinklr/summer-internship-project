import customData from "./data/customData";
//Returns a random color to fill the region

const getColor = ({ regionName }) => {
  const intensity = customData[regionName].intensity;
  let color;
  if (intensity < 2) color = "#fce591";
  else if (intensity >= 2 && intensity <= 8) color = "#82d09f";
  else color = "#e78f7a";

  return color;
};

export default getColor;
