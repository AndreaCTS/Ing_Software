function initMap() {
  var options = {
    zoom: 8,
    center: {lat: 4.661458314848927, lng: -74.0597665691994} 
  }
  
  var map = new google.maps.Map(document.getElementById('map'), options);

  var marker = new google.maps.Marker({
    position: {lat: -4.661458314848927, lng: 74.0597665691994},
    map: map
  });
}

window.onload = function() {
  initMap();
};