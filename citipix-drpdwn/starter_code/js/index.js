$(document).ready(function(){


// $entry.submit(changePhoto);
// car city = 'default';
// function changePhoto
// var city = $entry.val()
// if 'nyc' || 'New York' || 'New York City'
// $('background')replace(nyc-img)
// else if 'san francisco' || 'sf'
// $('background')replace(sf-img)
// else $('background')replace(default-img)
// *puesdo code notes*


var bg = 0;

var options = [
              'Los Angeles',
              'New York City',
              'San Francisco',
              'Sydney',
              'Austin'
              ];

$.each(options, function(index, value) {
    $('.city-type').append('<option>' + value + '</option>');
});


$('.city-type').change(changePhoto);

function changePhoto(event) {
  event.preventDefault();
  city = $('.city-type').val();
  if (city === 'New York City') {
    $('body').attr('class','nyc');
  } else if (city === 'San Francisco') {
    $('body').attr('class','sf');
  } else if (city === 'Los Angeles') {
    $('body').attr('class','la');
  } else if (city === 'Austin') {
    $('body').attr('class','austin');
  } else if (city === 'Sydney') {
    $('body').attr('class','sydney');
  } else if (city === 'Select a City') {
    $('body').attr('class','bg-default');
  }

  };


}); //end ready

// $('.city-type').empty();

// $( "select option:selected" ).text();
