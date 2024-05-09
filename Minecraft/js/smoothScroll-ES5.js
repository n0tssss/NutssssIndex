"use strict";
window.addEventListener("load",function()
{
	function scrollIt(destination, duration, easing) 
	{
	if(destination==null)
	{
		console.log("scroll destination: "+destination);
		return;
	}
	  var easings = {
		"linear":function(t) {
		  return t;
		},
		"smooth":function(t) {
		  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
		}
	  };

	  var start = window.pageYOffset;
	  var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

	  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
	  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
	  var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
	  var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

	  if ('requestAnimationFrame' in window === false) 
	  {
		window.scroll(0, destinationOffsetToScroll);
		return;
	  }
	  
	  function scroll() 
	  {
		var now = 'now' in window.performance ? performance.now() : new Date().getTime();
		var time = Math.min(1, ((now - startTime) / duration));
		var timeFunction = easings[easing](time);
		window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

		if (Math.abs(window.pageYOffset- destinationOffsetToScroll)<1) {
		  return;
		}
		requestAnimationFrame(scroll);
	  }
	  scroll();
	}

	var all_scroll_on_click_elements=document.getElementsByClassName("scrollOnClick");
	if(all_scroll_on_click_elements.length!=0)
	{
		for(var i=0;i<all_scroll_on_click_elements.length;i++)
		all_scroll_on_click_elements[i].addEventListener('click', 
		function(e)  
		{
			var d=e.currentTarget;
			var duration=d.getAttribute("duration");
			if(duration=="" || duration==null) duration=500;
			duration=parseInt(duration);
			var easing=d.getAttribute("easing");
			if(easing=="" || easing==null) easing="smooth";
			var id=d.getAttribute("scrollTo");
			scrollIt(
				document.getElementById(id),
				duration,
				easing
			  );
		});
	}else{
		console.log("WARNING: No elements with class scrollOnClick found.");
	}
});
