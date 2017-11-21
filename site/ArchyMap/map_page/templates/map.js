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

  //Is there a way to have the modal pop up when a marker is clicked?

  // Get the modal
  var modal = document.getElementById('myModal');
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  } 
}