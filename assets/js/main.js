jQuery(document).ready(function($) {
	//For mainmenu
	

	//for slider
	$(".slide-aria").owlCarousel({
		items:1,
		loop:true,
		dots:true,
		nav:false,
		autoplay:false
	});

	//For logo carousule
	$(".logo-carousel").owlCarousel({
		items:5,
		margin:30,
		loop:true,
		dots:false,
		nav:false,
		autoplay:false
	});

	//For munu smooth scrollong
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){

	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if
	});
		// End smooth scrolling

	// Strat BOTTOM SCROLL TOP BUTTON

	// declare variable
	var scrollTop = $(".scrollTop");

	$(window).scroll(function() {
	    // declare variable
	    var topPos = $(this).scrollTop();

	    // if user scrolls down - show scroll to top button
	    if (topPos > 100) {
	      $(scrollTop).css("opacity", "1");

	    } else {
	      $(scrollTop).css("opacity", "0");
	    }
	}); // scroll END

	//Click event to scroll to top
	$(scrollTop).click(function() {
	    $('html, body').animate({
	      scrollTop: 0
	    }, 800);
	    return false;

	}); // click() scroll top EMD

	

});




  