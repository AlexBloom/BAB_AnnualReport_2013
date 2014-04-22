

	<footer class="clearfix" id="footer">
		<nav class="clearfix" id="external-nav"> 
			<ul>
				<li><a href="http://bikeandbuild.org" target=_blank> Bike &amp; Build Home </a> </li>
				<li><a href="http://bikeandbuild.org/AH" target=_blank> Affordable Housing Resources </a> </li>
				<li><a href="mailto:info@bikeandbuild.org" target=_blank> Contact Us </a> </li>
			</ul>
		</nav>
		<small class="clearfix" id="copyright">All content &copy; Bike &amp; Build 2014. Site by <a href="http://digitalfrontiersman.com">Alex Bloom</a></small>
	</footer>

 	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
	
	<script>
		var tag = document.createElement('script');
		tag.src = "//www.youtube.com/player_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	</script>

	<script src="js/plugins.js"></script>
	<script type="text/javascript" src="js/jquery.scrollTo.min.js"></script>
	<script type="text/javascript" src="js/jquery.localScroll.min.js"></script>
	<script src="js/swipe.js"></script>
	<script src="js/main.js"></script>
	
	<script>
	// VIDEO VANILLA JS

		function onYouTubePlayerAPIReady() {

		}
		//Function for Player
		var player;

		function onYouTubePlayerAPIReady() {
		  // create the global player from the specific iframe (#video)
		  player = new YT.Player('ah-video', {
		    events: {
		      // call this function when player is ready to use
		      'onReady': onPlayerReady
		    }
		  });
		}

		//Function For Player Event
		function onPlayerReady(event) {

		  // bind events
		  var playButton = document.getElementById("play-home");
		  playButton.addEventListener("click", function() {
		    player.playVideo();
		  });

		  var pauseButton = document.getElementById("close-home");
		  pauseButton.addEventListener("click", function() {
		    player.pauseVideo();
		  });

		}
	</script>

	<script>
	    var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
	    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
	    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
	    s.parentNode.insertBefore(g,s)}(document,'script'));
	</script>

</body>
</html>