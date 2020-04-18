const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

getposition();

async function createMap(lat, lon) {
  var satIcon = L.icon({
    iconUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F27%2FFP_Satellite_icon.svg%2F1024px-FP_Satellite_icon.svg.png&f=1&nofb=1",
    iconSize: [50, 50],
  });
  const mymap = L.map("satmap").setView([lat, lon], 5);
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const tiles = L.tileLayer(tileUrl, { attribution });
  tiles.addTo(mymap);
  L.marker([lat, lon], { icon: satIcon, watch: true, setView: true }).addTo(
    mymap
  );
}

async function getposition() {
  const response = await fetch(api_url);
  const data = await response.json();
  const { latitude, longitude } = data;
  console.log(data);
  document.getElementById("lat").textContent = latitude;
  document.getElementById("lon").textContent = longitude;
  createMap(latitude, longitude);
}
