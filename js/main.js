


$(document).ready(function () {

		// Fire LocalScroll
		$('body').localScroll();
	
		// Size Full-Screen Videos, Images, & Slideshows to window height.
		$('.full-screen').css('min-height',$(window).height());
		$('.article-slider').css('min-height',$(window).height());

		$(window).resize(function() {
			$('.full-screen').css('min-height',$(window).height());
			$('.article-slider').css('min-height',$(window).height());
		});

	//Menu Toggle
	$('#primary-nav').addClass('closed');
	$('#main').addClass('menu-closed');

   
	$('#toggle').click(function(){
		$(this).toggleClass('close');
	$('#primary-nav').toggleClass('closed');
	$('#primary-nav').toggleClass('open');
	$('#main').toggleClass('menu-open');
	$('#main').toggleClass('menu-closed');
	$('body').toggleClass('overflow-hidden');
	  });
	
	  
  	$('#main').click(function(){
  		$('#primary-nav').addClass('closed');
  		$('#primary-nav').removeClass('open');
		$('#main').removeClass('menu-open');
		$('#main').addClass('menu-closed');
		$('#toggle').removeClass('close');
		$('body').removeClass('overflow-hidden')
  	 });
   
	$('#primary-nav a').click(function(){
	$('#primary-nav').addClass('closed');
	$('#primary-nav').removeClass('open');
  	});

   
   //Show Top Link After Scrolling
   $('#top').addClass('fadeout')
   $(window).scroll(function() {
       var y_scroll_pos = window.pageYOffset;
       var scroll_pos_test = 400;             
   	// set to whatever you want it to be
       if(y_scroll_pos > scroll_pos_test) {
   	   $('#top').addClass('fadein');
	   $('#top').removeClass('fadeout');
       }
   	else
   	{
		$('#top').removeClass('fadein');
   		$('#top').addClass('fadeout');
   	}
   });
   
   
   //Fire Swipe Classes for Sliders
   window.orgfigures = $('#orgfigures').Swipe().data('Swipe');
   window.grantacc = $('#grantacc').Swipe().data('Swipe');
   //window.highlightedgrantees = $('#highlighted-grantees').Swipe().data('Swipe');
   
   
   
  // Show and Play Full Screen Videos
  	$(".play-video").click(function(){
  		$('.video-overlay').css("display","block");
  		$('#header').css("display","none");
  	});

  	$(".close-video").click(function(){
  		$('.video-overlay').css("display","none");
  		$('#header').css("display","block");
  	});
 
   
   
// TABS Initiations
	   
	   
	   $('#granteeTab a').click(function (e) {
	     e.preventDefault()
	     $(this).tab('show')
	   })
	   
	   $('#riderTab a').click(function (e) {
	     e.preventDefault()
	     $(this).tab('show')
	   })
	   // You can activate individual tabs in several ways:
	   // 
	   // $('#myTab a[href="#profile"]').tab('show') // Select tab by name
	   // $('#myTab a:first').tab('show') // Select first tab
	   // $('#myTab a:last').tab('show') // Select last tab
	   // $('#myTab li:eq(2) a').tab('show') // Select third tab (0-indexed)


});
   
