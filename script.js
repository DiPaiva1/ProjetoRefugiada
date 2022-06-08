function localizar(){
  navigator.geolocation.getCurrentPosition(showPosition)
  
}
function showPosition(pos){
  var lt = pos.coords.latitude
  var lg = pos.coords.longitude

  document.getElementById("geo").innerHTML=
    "Latitude: " + lt + ", Logitude: " + lg

  var map = L.map('map').setView([lt,lg], 15);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZmVybmFuZG9wYWl2YTEiLCJhIjoiY2wzOWMzbjQyMDg5NTNqb2F2dmFlZzE1MiJ9.F1-bX76VmMSy8FqtWGBpcQ'
}).addTo(map);
  var marker = L.marker([lt,lg]).addTo(map);
}