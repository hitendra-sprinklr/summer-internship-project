let markersData = [];

function populate() {
  for (var i = 0; i < 500; i++) {
    var m = getRandomLatLng();
    let instance = {
      insights: Math.floor(Math.random() * 100).toString(),
      mentions: Math.floor(Math.random() * 200).toString(),
      stars: Math.floor(Math.random() * 1000).toString(),
      position: m,
      id: Math.random().toString(),
    };
    markersData.push(instance);
  }
  //console.log(markersData);
}
function getRandomLatLng() {
  let lngSpan = 250;
  let latSpan = 90.5;

  let latlng = [
    -20.505 + latSpan * Math.random(),
    -100.09 + lngSpan * Math.random(),
  ];
  return latlng;
}

populate();

export default markersData;
