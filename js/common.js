$(document).ready(function() {
	
	function heightDetect() {
		$("#home").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$('.parallax-window').parallax({imageSrc: '../img/home-pic.jpg'});
	
	$("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

  	$(".popup_content").magnificPopup({type:"inline", midClick: true});

  	$("#header a[href*='#']").mPageScroll2id();
  	$("#home a[href*='#']").mPageScroll2id();
  	$(".down-arrow a[href*='#']").mPageScroll2id();


    $("#owl-clients").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds

    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]

    });

    $("#owl-comments").owlCarousel({

    items : 2,
    itemsDesktop : [1199,2],
    itemsDesktopSmall : [979,2],
    itemsTablet : [768,2],
    itemsMobile : [479,1],
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    // singleItem:true

    // "singleItem:true" is a shortcut for:
    // items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

    });


	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

}); 