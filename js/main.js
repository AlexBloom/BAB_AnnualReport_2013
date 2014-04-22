


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
		$('#main').removeClass('menu-open');
		$('#main').addClass('menu-closed');
		$('#toggle').removeClass('close');
		$('body').removeClass('overflow-hidden')
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
	
	
	function onYouTubePlayerAPIReady() {

	}
	//Function for Player
	var player;

	function onYouTubePlayerAPIReady() {
	  // create the global player from the specific iframe (#video)
	  player = new YT.Player('video', {
	    events: {
	      // call this function when player is ready to use
	      'onReady': onPlayerReady
	    }
	  });
	}
	
	//Function For Player Event
	function onPlayerReady(event) {
  
	  // bind events
	  var playButton = document.getElementById("play-button");
	  playButton.addEventListener("click", function() {
	    player.playVideo();
	  });
  
	  var pauseButton = document.getElementById("pause-button");
	  pauseButton.addEventListener("click", function() {
	    player.pauseVideo();
	  });
  
	}
 
   
   
// TABS Initiations
	   
	   
	   $('#grantee-tabs a').click(function (e) {
	     e.preventDefault()
	     $(this).tab('show')
	   })
	   
	   $('#rider-tabs a').click(function (e) {
	     e.preventDefault()
	     $(this).tab('show')
	   })
	   
	   $('#alumni-tabs a').click(function (e) {
	     e.preventDefault()
	     $(this).tab('show')
	   })
	   // You can activate individual tabs in several ways:
	   // 
	   // $('#myTab a[href="#profile"]').tab('show') // Select tab by name
	   // $('#myTab a:first').tab('show') // Select first tab
	   // $('#myTab a:last').tab('show') // Select last tab
	   // $('#myTab li:eq(2) a').tab('show') // Select third tab (0-indexed)


// Active Link Highlighting

 // Add Current Class to ScrollNav of Currently Depressed Item
  	$('.scrollnav-link').click(function() {
  		$('.scrollnav-link').removeClass('current');
  		$(this).addClass('current');
  	});	   
	
//Side Nav The Long Hard Stupid Way  
	
$(function(){
    $(document).scroll(function(){
        $('.anchor').each(function(){
            var $this = $(this),
            pos   = $this.offset().top - $(window).scrollTop();
            if(pos < 50 ){
                $('.scrollnav-link').removeClass('current');
                $('.scrollnav-link[href="#'+$this.attr('id')+'"]').addClass('current');
            }
        });
        
    });
});

	   // Close of Doc Ready Function
});
   
