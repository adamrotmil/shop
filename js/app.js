$(document).ready(function() {
	console.log("jQuery is loaded");
	$('.ascii').hide();

	$(".credits").mousedown(function() {
		console.log("Clicked on credits");
		$('.input-box').hide();
		$('.list-items').hide();
		$('.list-items-container').hide();
		$('.list-items-list').hide();
		$('.logo').hide();
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
		$('.list-items-container').show();
		$('.list-items-list').show();
		$('.logo').show();
		console.log("Show the input box")
		$('.shop').toggleClass("active");
		$('.credits').toggleClass("active");
	});

	// APPEND LIST

	$('input').keydown(function() {


		if (event.which == 13) {
			$(".list-items-list").append(
				$('<li><button class="unchecked"></button>' + $('input')
					.val() + '<button class="xbox"></button>' + '</li>'));
		};



		$('input').keydown(function(e) {
			console.log("A key was pressed.");
			if (event.which == 13) {
				$('input').val(" ");
				e.preventDefault();
			}
		});
	});



	$('input').mousedown(function() {
		console.log("Mouse is down!");
		$('input').val(" ");
	});

});

// CLEARABLE INPUT
//
//

function tog(v) {
	return v ? 'addClass' : 'removeClass';
}
$(document).on('input', '.clearable', function() {
	$(this)[tog(this.value)]('x');
}).on('mousemove', '.x', function(e) {
	$(this)[tog(this.offsetWidth - 20 < e.clientX - this.getBoundingClientRect().left)]('onX');
}).on('touchstart click', '.onX', function(ev) {
	ev.preventDefault();
	$(this).removeClass('x onX').val('').change();
});



// CLEARABLE LIST ITEMS
//
//
//$(document).on('click', 'li', function() {
//	console.log("clicked a list item")
//	$(this).closest('li').toggleClass('cleared');
//	$(this).children('button.unchecked').toggleClass('unchecked checked');
//});



$(document).on('click', 'button.unchecked', function() {
	console.log("clicked a checkbox")
	$(this).toggleClass('unchecked checked');
});

$(document).on('click', 'button.checked', function() {
	console.log("clicked a checked box")
	$(this).toggleClass('unchecked checked');
});

$(document).on('mouseover', 'li', function() {
	console.log("mouseover li")
	$(this).closest('li').toggleClass('hover');
	$('.xbox').toggleClass('reveal');
});
$(document).on('mouseout', 'li', function() {
	$(this).closest('li').toggleClass('hover');
	$('.xbox').toggleClass('reveal');
});

$(document).on('click', 'button.xbox', function() {
	console.log("clicked an x box");
	$(this).closest('li').remove();
	// remove that list item
});



// *** BUGS
//
// When you remove list items, the toggling on the red box gets stuck
// Clicking on an LI directly, if it has an effect, cancels out the same effect of checkbox
// ** OK ** multiple columns in list causes jumping
// ** OK ** multiple cols. in list when clicked cuts word in half
// ** OK ** list item when clicked, append next item is duplicated
//
// 



//