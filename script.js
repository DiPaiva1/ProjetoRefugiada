function localizar(){
  navigator.geolocation.getCurrentPosition(showPosition)
  
}
function showPosition(pos){
  var lt = pos.coords.latitude
  var lg = pos.coords.longitude

  document.getElementById("geo").innerHTML=
    "Latitude: " + lt + ", Logitude: " + lg

  var map = L.map('map').setView([lt,lg], 15);
}
