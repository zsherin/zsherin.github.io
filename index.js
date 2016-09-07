(function() {
    "use strict";


    $(function () {
		
		
		var titles=["Zach Sherin",
		            "Einstein's Playground",
					"A Slower Speed of Light",
					"Virtual Mars Project",
					"Photogrammetry Dome",
					"Hololens Sidekick",
					"Finite Element Rest Pose Solver",
					"The Virtual Museum For All"];
		var images=["./Images/me.PNG",
		            "./Images/einstein.jpg",
					"./Images/orb.png",
					"./Images/Mars.png",
					"./Images/dome.PNG",
					"./Images/hololens.jpg",
					"./Images/finite.jpg",
					"./Images/vrmfa.PNG"];
		var texts =["Who am I? I went to MIT from 2011-2015 for a degree in Electrical Engineering and Computer Science, and finished a Master's in 2016. Click through to view my resume, if you're interested.",
		            "My Master's thesis, a Full Dome projected experience for understanding special relativity. Nominated for a Science Media Award, it lets participants test their understanding in an entertaining and simple environment.",
					"This game simulates the effects of traveling near the speed of light, while remaining accessible and engaging to a wider audience.",
					"The Virtual Mars Project uses an Oculus Rift and a Vicon motion tracking system to place the user on Mars and let them walk around the planet. The virtual experience was found to be far better for mission planning, collaboration and understanding of Martian terrain than the previously used panorama method.",
					"This dome, using over 90 1-Watt LEDs, flashes special patterns of light onto an object, and is able to use the photos it collects to produce a texture for 3D rendering. It essentially takes a real world object, and lets you use it in your virtual environment.",
					"Built at the same lab as the Virtual Mars Project, Sidekick uses Microsoft's Hololens to aid astronauts on the International Space Station with their daily tasks.",
					"This software allows the user to find a model that will come to rest in a desired pose, if made from a certain material. Given a 3D model and the material properties, the system will spit out a new model that will deform under gravity into the correct shape.",
					"The vrmfa is a daily constructed virtual museum using art drawn from the website DeviantArt. It's built for use with the Google Cardboard, to lower the barrier to entry for virtual reality. It is an attempt to allow anyone with a phone to access a museum experience, and a rebuke of the classical standards that determines what art appears in museums.",];
		$(".texter").on('transitionend webkitTransitionEnd', function(e){
        // Callback function
    });
		var listWidth = $('.square').map(function(){
			var cw = $(this).attr("index");
			$(this).css({'background-image':'url(' + images[cw] + ')'});
		}).get();
		function is_touch_device() {
			return 'ontouchstart' in window // works on most browsers 
				|| 'onmsgesturechange' in window; // works on ie10
		};
		 //Set everything up for a touchscreen
		 if(is_touch_device())
		 {
			 var listy = $(".content").css("display","none");
		 }
		 else
		 {
			 $("#headsup").css("display","none");
		 }
		 var lastIndex=0;
		$(".square").mouseenter(function()
		{
			if(!is_touch_device())
			{
			//$("#stretch-img").attr('src',"./Images/stretch2.png");
			//$("#stretch-img").animate({height: 400, width: 250});
			
			$(".texter").text(texts[$(this).attr("index")]);
			$(".texter").css({'line-height':'35px'});
			$(".texter").css({'color':'#3A5897'});
			
			$(".text-header").text(titles[$(this).attr("index")]);
			$(".text-header").css({'line-height':'35px'});
			$(".text-header").css({'color':'#3A5897'});
			/*$('html, body').animate({
				scrollTop: $(document).height()
				}, 'slow');
			*/
			}
		});
		$(".square").click(function()
		{
			//$("#stretch-img").attr('src',"./Images/stretch2.png");
			//$("#stretch-img").animate({height: 400, width: 250});
			
			$("#content-"+lastIndex).css("display","none");
			$(".texter").text(texts[$(this).attr("index")]);
			$(".texter").css({'line-height':'35px'});
			$(".texter").css({'color':'#3A5897'});
			
			$("#content-"+$(this).attr("index")).css("display","initial");
			$(".text-header").text(titles[$(this).attr("index")]);
			$(".text-header").css({'line-height':'35px'});
			$(".text-header").css({'color':'#3A5897'});
			lastIndex = $(this).attr("index");
			/*$('html, body').animate({
				scrollTop: $(document).height()
				}, 'slow');
			*/
		});
		/*$(".square").mouseleave(function()
		{
			//$(".texter").text("");
			$(".texter").css({'line-height':'0px'});
			$(".texter").css({'color':'transparent'});
			$(".texter").attr('index', -1);
			
			$(".text-header").css({'line-height':'0px'});
			$(".text-header").css({'color':'transparent'});
			$(".text-header").attr('index', -1);
		});*/
	});
}());
