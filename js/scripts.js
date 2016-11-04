/* Adapted from: http://materializecss.com/side-nav.html */

// Initialize collapse button
$(document).ready(function(){
	$('.button-collapse').sideNav({
		  menuWidth: 300, // Default is 240
		  edge: 'right', // Choose the horizontal origin
		  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		  draggable: true // Choose whether you can drag to open on touch screens
		}
	  );
	  
	$("#greeting").click(function(){
			$("#greeting").text("世界、こんいちわ！");
		}
	); 
});
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();

