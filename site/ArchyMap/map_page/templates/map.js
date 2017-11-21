/**********************************************************
Script Name: mapscript
Purpose: to render the map using the Google Maps API
Programmer: Michael Barney
**********************************************************/
var artifacts = []
artifacts.push({lat: 41, lng: -85})
artifacts.push({lat: 42, lng: -85})
artifacts.push({lat: 43, lng: -85})
artifacts.push({lat: 44, lng: -85})

function initMap() {
  var uluru = {lat: 40, lng: -86};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: uluru,
    streetViewControl: false
  });

  //render the makers
  for (var i = 0; i < artifacts.length; i++) {
    var marker = new google.maps.Marker({
      position: artifacts[i],
      map: map,});
  }

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