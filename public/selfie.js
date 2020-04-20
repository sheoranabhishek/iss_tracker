// Making a map and tiles
const mymap = L.map("satmap").setView([0, 0], 1);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

// // Making a marker with a custom icon
// const issIcon = L.icon({
//   iconUrl:
//     "https://visualpharm.com/assets/695/Satellite%20Sending%20Signal-595b40b85ba036ed117da2c6.svg",
//   iconSize: [100, 64],
//   iconAnchor: [25, 16],
// });

if ("geolocation" in navigator) {
  console.log("Available");

  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const latitude = document.getElementById("latitude");
    const longitude = document.getElementById("longitude");
    latitude.textContent = lat;
    longitude.textContent = long;
    const marker = L.marker([lat, long]).addTo(mymap);
    centerLeafletMapOnMarker(mymap, marker);
  });
} else {
  console.log("Not Available");
}

function centerLeafletMapOnMarker(map, marker) {
  var latLngs = [marker.getLatLng()];
  var markerBounds = L.latLngBounds(latLngs);
  map.fitBounds(markerBounds);
}
