$(document).ready(function() {
	console.log("jQuery is loaded");
	$('.ascii').hide();

	$(".credits").mousedown(function() {
		console.log("Clicked on credits");
		$('.input-box').hide();
		$('.list-items').hide();
		console.log("Hid the input box and list items")
		$('.ascii').show();
		console.log("Show the ASCII art")
		$('.shop').toggleClass("active");
		$('.credits').toggleClass("active");
	});

	$(".shop").mousedown(function() {
		console.log("Clicked on shop");
		$('.ascii').hide();
		console.log("Hid the ASCII art")
		$('.input-box').show();
		$('.list-items').show();
		console.log("Show the input box")
		$('.shop').toggleClass("active");
		$('.credits').toggleClass("active");
	});

	$('input').keydown(function() {
		// var myValue = $(this).val();
		// append value of input as li in ul
		if (event.which == 13) {

			$(".list-items ul").append(
				$('<li>').append(
					$(this).val()
				));
		};
		$('input').keydown(function(e) {



			if (event.which == 13) {
				$('input').val(" ");
				e.preventDefault();

			} else {
				console.log("Get an icon");

				// add the icon
			};


		});
	});

	$('input').mousedown(function() {
		console.log("Mouse is down!");
		$('input').val(" ");
	});


	//
	//*** When outlook saved, store into variable for 
	//superficial reasons, but also copy into second variable array.  
	//Save this array and use its cells to populate the current list at and time.

	//Part two: style the buttons interface so it looks really nice to use.
	//maybe do some kind of white-on-white gloss for the background? really like white bokeh shadows?
	//



});