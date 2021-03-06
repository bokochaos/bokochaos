/* Adapted from: https://www.sitepoint.com/create-jquery-digital-clock-jquery4u/ */
function updateClock ( )
	{
		var currentTime = new Date ( );
		var currentHours = currentTime.getHours ( );
		var currentMinutes = currentTime.getMinutes ( );
		var currentSeconds = currentTime.getSeconds ( );

		// Pad the minutes and seconds with leading zeros, if required
		currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
		currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

		// Choose either "AM" or "PM" as appropriate
		//var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

		// Convert the hours component to 12-hour format if needed
		//currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

		// Convert an hours component of "0" to "12"
		//currentHours = ( currentHours == 0 ) ? 12 : currentHours;

		// Compose the string for display
		var currentTimeString = "Dalton's current PST time: " + currentHours + ":" + currentMinutes + ":" + currentSeconds;
		
		
		$("#daltonCurrentTime").text(currentTimeString);
			
	}

$(document).ready(function(){
	$("#greeting").click(function(){
			$("#greeting").text("世界、こんいちわ！");
			//Just to test foreign characters.
			//Might do a full site translation into Japanese if I really try later
		}
	);
	
	$("#about").click(function(){
			$("#about").text("私について。");
			//Just to test foreign characters.
			//Might do a full site translation into Japanese if I really try later
		}
	);
	
	$("#portfolio").click(function(){
			$("#portfolio").text("私のポートフォリオ。");
			//Just to test foreign characters.
			//Might do a full site translation into Japanese if I really try later
		}
	);
	
	
	//Below 3 functions are to change the color schemes of the site. Can help with viewing for certain individuals
	$("#breaker").click(function(){
			$("body").prop("class", null);
			$("body").addClass("breaker");
			//Just to test foreign characters.
			//Might do a full site translation into Japanese if I really try later
		}
	);
	
	$("#california").click(function(){
			$("body").prop("class", null);
			$("body").addClass("california");
			//Just to test foreign characters.
			//Might do a full site translation into Japanese if I really try later
		}
	);
	
	$("#squid").click(function(){
			$("body").prop("class", null);
			$("body").addClass("squid");
			//Just to test foreign characters.
			//Might do a full site translation into Japanese if I really try later
		}
	);
	
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
	//Mozilla Try Catch for Javascript
	//Add timer for reference of my estimated time zone
	try{
		setInterval('updateClock()', 1000);
		$(body).addClass("breaker");
	}
	catch (e) {
		// statements to handle any exceptions
		logMyErrors(e); // pass exception object to error handler
	}
});
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();

