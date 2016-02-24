$(function() {

	$(document).ready(function() {
		$.ajax({
	      type: "GET",
	      url: '/1/tweet',
	      success: function(tweet) {

	        $("#tweet").html('"' + tweet[0].text + '"');
	      },
	      error: function() {
	        $("#tweet").html("Unable to load the latest tweet");
	      }
	    });

	  //   $.ajax({
			// type: "GET",
			// url: '/1/location',
			// success: function(tweet) {

			// $("#tweet").html('"' + tweet[0].text + '"');
			// },
			// error: function() {
			// $("#tweet").html("Unable to load the latest tweet");
			// }
	  //   });

	     $.ajax({
			type: "GET",
			url: 'http://www.flocate.com/1/kevinbluer/latest',
			success: function(location) {

			$("#location").html('"' + location.Location.latitude + ',' + location.Location.latitude + '"');
			},
			error: function() {
			$("#location").html("Unable to load the latest location");
			}
	    });

	    
	});

});