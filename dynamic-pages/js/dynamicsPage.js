/*
	1. When a navigation button is clicked...
	2. Change the hash tag of the URL
	3. When the hash tag in the URL changes...
	4. Fade out the old content
	5. Load and fade in the new content...
	6. Update the current navigation highlighting
*/

$(function() {

	var newHash = "",
		$mainContent = $("#main-content"),
		$pageWrap = $("#page-wrap"),
		baseHeight = 0,
		$el;

	$pageWrap.height($pageWrap.height());
	baseHeight = $pageWrap.height() - $mainContent.height();

	$("nav").on("a", "click", function() {
		window.location.hash = $(this).attr("href");
		return false;
	});

	$(window).bind('hashchange', function(){

		newHash = window.location.hash.substring(1);

		if(newHash) {
			$mainContent
				.find("#guts")
				.fadeOut(200, function (){
					$mainContent.hide().load(newHash + "guts", function () {
						$mainContent.fadeIn(200, function(){
							$pageWrap.animate({
								height: baseHeight + $mainContent.height() + "px"
							});
						});
						$("nav a").removeClass("current");
						$("nav a[href=‘" + newHash +"']").addClass("current");
					});
				});
		};
	});

	$(window).trigger('hashchange');
});


/*
	Any event handlers attached with .on() or one of its shortcut methods are 
	triggered when the corresponding event occurs. They can be fired manually, 
	however, with the .trigger() method. A call to .trigger() executes the handller
	in the same order they would be if the event were triggered naturally
	by the user.
*/
