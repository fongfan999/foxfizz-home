$(function() {
  $(".button-collapse").sideNav({ edge: 'right' });

  // Smooth scroll anchor link
  $(document).on('click', 'a', function(event){
    if ($.attr(this, 'href').charAt(0) == '#') {
     event.preventDefault();

     $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
   }
 });

  $('.persistent').click(function(e) {
    e.preventDefault();
  });

  $('.close-side-nav').click(function(e) {
    console.log("hii");
    e.preventDefault();
    $('.button-collapse').sideNav('hide');
  });
});