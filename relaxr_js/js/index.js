$( document ).ready(function() {

	$('.readmore a').click(function(event) {
		  event.preventDefault();
			$('.show-this-on-click').slideDown(400)
			$('.readless').show()
			$('.readmore').hide()

		});

		$('.readless a').click(function(event) {
				event.preventDefault();
				$('.show-this-on-click').slideUp(400)
				$('.readless').hide()
				$('.readmore').show(500)

			});

			$('.learnmore').click(function(event) {
					event.preventDefault();
					$('learnmoretext').slideDown(400)
					$('.learnmoretext').show()
					$('.learnmore').hide()

				});


});

// $('.actions').click(function() {
// 	$('.hipsterSpeak').slideToggle(600)
//
// });
