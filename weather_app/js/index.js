$( document ).ready(function() {

	// $('.readmore a').click(function(event) {
	// 	  event.preventDefault();
	// 		$('.show-this-on-click').slideDown(400)
	// 		$('.readless').show()
	// 		$('.readmore').hide()
	//
	// 	});

var temp = 0;

// capture temperature input


$('.btn').click(function() {
  temp = temp * 1.8 + 32;
  $('.result').text(temp);
});

if (temp >= 72 ) {
	$('body').addClass('red')
}

else {
	$('body').addClass('blue')
}


// display converted temperature


});

// $('.actions').click(function() {
// 	$('.hipsterSpeak').slideToggle(600)
//
// });
