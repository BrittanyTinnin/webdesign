// $(document).ready(function () { //when document finishes loading
//   $('h1').click(function () { //select, then click h1 element
//     $(this).css('background-color', '#ff0000'); //on click changes background color to red
//   });
// });

$(document).ready(function () {
  /* For the sticky navigation */
  $('.js--section-features').waypoint(
    function (direction) {
      /* direction will determine whether user is scrolling up or down */
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '60px',
    }
  );

  /* Scroll on buttons -- to plans*/
  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-plans').offset().top },
      2000
    );
  });

  /* Scroll on buttons -- to features*/
  $('.js--scroll-to-start').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-features').offset().top },
      1100
    );
  });

  /* Navigation scroll */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});
