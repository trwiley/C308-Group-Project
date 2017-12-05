/**********************************************************
Script Name: mapscript
Purpose: to render the map using the Google Maps API
Programmer: Michael Barney
**********************************************************/
var endpoint = '/data';

var markers = [];
var mapCenter = {lat: 40, lng: -85};

function addMarker(artifact, mainMap)
{
  var marker = new google.maps.Marker({
    position: { lat: artifact.lat, lng: artifact.lng },
    map: mainMap,
    animation: google.maps.Animation.DROP
  });

  var infoWindow = new google.maps.InfoWindow({
    content: 'Name: ' + artifact.name + '</strong>' +
    '<br>Description: ' + artifact.description +
    '<br>Site No.: ' + artifact.siteno +
    '<br>State: ' + artifact.state +
    '<br>County: ' + artifact.county +
    '<br>Cool image: <img src="http://www.womensimpactinc.com/wp-content/uploads/2015/08/Sheri-Jeavons-150x150.jpg">'
  });
  marker.infoWindow = infoWindow;

  marker.addListener('click', () => {
    marker.infoWindow.open(mainMap, marker);
  });

  markers.push(marker);
}

function renderMarkers(mainMap) {
  $.ajax({
    method: "GET",
    url: endpoint,
    success: function(artifactList) {
      console.log(artifactList)
      //render the makers
      artifactList.forEach((artifact) => {
        addMarker(artifact, mainMap);
      });
    },
    error: function(error_artifactList) {
      console.log("Error");
      console.log(error_artifactList);
    }
  });
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: mapCenter,
    streetViewControl: false
  });
  google.maps.event.addListenerOnce(map, 'idle', function() {
    renderMarkers(map);
  });
}
