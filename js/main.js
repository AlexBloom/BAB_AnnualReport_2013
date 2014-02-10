


$(document).ready(function () {

		// Fire LocalScroll
		$('body').localScroll();
	
		// Size Full-Screen Videos, Images, & Slideshows to window height.
		$('.full-screen').css({height:$(window).height()});

		$(window).resize(function() {
			$('.full-screen').css({height:$(window).height()});
		});
	
	
	//Menu Toggle
	//$('#primary').prepend('<div id="menu-icon">TFI SANDBOX <span> </span> </div>');
	$('#primary-nav').addClass('closed');
	
	$("#logo").click(function(){
	$('#primary-nav').toggleClass('closed');
	$('#primary-nav').toggleClass('open');
   });
   
	$("#primary-nav a").click(function(){
	$('#primary-nav').toggleClass('closed');
	$('#primary-nav').toggleClass('open');
  });

   
   
   //Show Top Link After Scrolling
   $("#top").addClass('fadeout')
   $(window).scroll(function() {
       var y_scroll_pos = window.pageYOffset;
       var scroll_pos_test = 400;             
   	// set to whatever you want it to be
       if(y_scroll_pos > scroll_pos_test) {
   	   $("#top").addClass('fadein');
	   $("#top").removeClass('fadeout');
       }
   	else
   	{
		$("#top").removeClass('fadein');
   		$("#top").addClass('fadeout');
   	}
   });
   
   
  /*
   //Close Secondary & Tertiary Links
   $('.secondary').addClass('visuallyhidden');
   //$('.tertiary').addClass('visuallyhidden');
   
   //Open Specific Secondary Menus
   $("#discover").click(function(){
	   $('#discover-secondary').toggleClass('visuallyhidden');
   });
   
   $("#participate").click(function(){
	   $('#participate-secondary').toggleClass('visuallyhidden');
   });
   
   $("#build").click(function(){
	   $('#build-secondary').toggleClass('visuallyhidden');
   });
   
   //Open Specific Tertiary Menus
   
   */
   
   
   
   //Open and Close Projects
$('.project-content').addClass('collapsed');
       
	   $('#project-1 .project-header').click(function() {
           $('#project-1 .project-content').toggleClass('collapsed');
       });
	   
	   $('#project-2 .project-header').click(function() {
           $('#project-2 .project-content').toggleClass('collapsed');
       });
	   
	   $('#project-3 .project-header').click(function() {
           $('#project-3 .project-content').toggleClass('collapsed');
       });
	   
	   $('#project-4 .project-header').click(function() {
           $('#project-4 .project-content').toggleClass('collapsed');
       });
	   
	   $('#project-5 .project-header').click(function() {
           $('#project-5 .project-content').toggleClass('collapsed');
       });
	   
	   $('#project-6 .project-header').click(function() {
           $('#project-6 .project-content').toggleClass('collapsed');
       });

});
   
