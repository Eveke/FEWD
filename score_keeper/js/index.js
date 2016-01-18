$(document).ready(function() {

var total = 0;

$('.zero').click(function() {
  total = 0;
  $('.result').text(total);
  console.log(total);
}); // end zero click

$('.add5').click(function() {
  total = total + 5;
  $('.result').text(total);
  console.log(total);
});

$('.add10').click(function() {
  total = total + 10;
  $('.result').text(total);
  console.log(total);
});

$('.sub1').click(function() {
  total = total - 1;
  $('.result').text(total);
  console.log(total);
  // changeTotal(total);
});

// function changeText(newText) {
//   $('.result').text(newText);
// }


});
