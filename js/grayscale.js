/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// jQuery updating phto-card classes when scrolled into view
$(function() {
  var scrollChecker = function() {
    var markers = $('.view-marker');
    if (markers.length == 0) {
      $(document).off('scroll.scrollchecker');
    } else {
      markers.each(function () {
        var scrollTop = (window.screen.availHeight * 0.9 ) + $(document).scrollTop();
        if ($(this).offset().top < scrollTop) {
          $(this).removeClass('view-marker');
          setTimeout(function () {
            $(this).addClass('in-view');
          }.bind(this), 2600);
        }
      });
    }
  };
  $(document).on('scroll.scrollchecker', scrollChecker);
  scrollChecker();
  //$(this).on(addClass('in-view');
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

function initMap() {
  // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
  var imageCake = 'img/map-cake-layered.png';
  var imageChurch = 'img/map-church.png';

  // Mapstyle generated by snazzymaps
  var mapStyle = [{"featureType":"all","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]}]

  //var mapCenter = new google.maps.LatLng(56.816665, 14.833333)
  var mapCenter = new google.maps.LatLng(56.8113344, 14.8319706)
  //maps/place/Farmen+Rent+%26+Event+i+V%C3%A4xj%C3%B6+AB/@56.8113344,14.8319706,15.75z/data=!4m12!1m6!3m5!1s0x0:0x8ce198a58a6eb3b7!2sFarmen+Rent+%26+Event+i+V%C3%A4xj%C3%B6+AB!8m2!3d56.8116487!4d14.8349648!3m4!1s0x0:0x8ce198a58a6eb3b7!8m2!3d56.8116487!4d14.8349648?hl=sv
  var mapRinkabyCenter = new google.maps.LatLng(56.8113344, 14.8319706)
  ///maps/place/Tävelsås+Church,+Svenska+Churchn+Växjö/@56.7672869,14.8170383,15z/data=!4m5!3m4!1s0x0:0x6a8aa556a0176517!8m2!3d56.7758266!4d14.8266989?hl=sv
  var mapChurchCenter = new google.maps.LatLng(56.7672869, 14.8170383)

  // Create the Google Map using out element and options defined above
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: mapCenter,
    disableDefaultUI: true,
    scrollwheel: true,
    draggable: true,
    styles: mapStyle
  });

  new google.maps.Marker({
    position: mapRinkabyCenter,
    map: map,
    label: "Rinkabygård",
    icon: imageCake
  });
  new google.maps.Marker({
    position: mapChurchCenter,
    map: map,
    label: "Kyrkan",
    icon: imageChurch
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Du befinner dig här!');
    });
  }
  // Re-center the wider map on window resize
  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(mapCenter);
  });
}
