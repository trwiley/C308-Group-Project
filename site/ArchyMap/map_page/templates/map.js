/**********************************************************
Script Name: mapscript
Purpose: to render the map using the Google Maps API
Programmer: Michael Barney
**********************************************************/
var endpoint = '/data';

function initMap() {
  var uluru = {lat: 40, lng: -86};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: uluru,
    streetViewControl: false
  });

  $.ajax({
    method: "GET",
    url: endpoint,
    success: function(data) {
      console.log(data);
      //render the makers
      for (var i = 0; i < data.length; i++) {
        var marker = new google.maps.Marker({
          position: data[i],
          map: map,});
      }
    },
    error: function(error_data) {
      console.log("Error");
      console.log(error_data);
    }
  });

}