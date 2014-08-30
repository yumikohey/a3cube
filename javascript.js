$('.carousel').carousel({
  interval: 5000
});



$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds

      pagination: false,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
    $("#soft-products").owlCarousel({
      pagination: false,
      items : 3,
      pagination:false,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });

     $("#hard-products").owlCarousel({
      pagination: false,
      items : 3,
      pagination:false,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
});




    <!-- jQuery Version 1.11.0 -->

    <!-- Custom Theme JavaScript -->

    <script>
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
        
    </script>
    
    <script src="http://www.kirupa.com/prefixfree.min.js"></script>
    <script>

        var requestAnimationFrame = window.requestAnimationFrame || 
                                    window.mozRequestAnimationFrame || 
                                    window.webkitRequestAnimationFrame ||
                                    window.msRequestAnimationFrame;

        var transforms = ["transform", 
                          "msTransform", 
                          "webkitTransform", 
                          "mozTransform", 
                          "oTransform"];

        var transformProperty = getSupportedPropertyName(transforms);

        var imageContainer = document.querySelector(".header");

        var scrolling = false;
        var mouseWheelActive = false;

        var count = 0;
        var mouseDelta = 0;

        //
        // vendor prefix management
        //
        function getSupportedPropertyName(properties) {
            for (var i = 0; i < properties.length; i++) {
                if (typeof document.body.style[properties[i]] != "undefined") {
                    return properties[i];
                }
            }
            return null;
        }

        function setup() {
            window.addEventListener("scroll", setScrolling, false);

            // deal with the mouse wheel
            window.addEventListener("mousewheel", mouseScroll, false);
            window.addEventListener("DOMMouseScroll", mouseScroll, false);

            animationLoop();
        }
        setup();

        function mouseScroll(e) {
            mouseWheelActive = true;

            // cancel the default scroll behavior
            if (e.preventDefault) {
                e.preventDefault();
            }

            // deal with different browsers calculating the delta differently
            if (e.wheelDelta) {
                mouseDelta = e.wheelDelta / 120;
            } else if (e.detail) {
                mouseDelta = -e.detail / 3;
            }
        }

        //
        // Called when a scroll is detected
        //
        function setScrolling() {
            scrolling = true;
        }

        //
        // Cross-browser way to get the current scroll position
        //
        function getScrollPosition() {
            if (document.documentElement.scrollTop == 0) {
                return document.body.scrollTop;
            } else {
                return document.documentElement.scrollTop;
            }
        }

        //
        // A performant way to shift our image up or down
        //
        function setTranslate3DTransform(element, yPosition) {
            var value = "translate3d(0px" + ", " + yPosition + "px" + ", 0)";
            element.style[transformProperty] = value;
        }

        function animationLoop() {
            // adjust the image's position when scrolling
            if (scrolling) {
                setTranslate3DTransform(imageContainer, 
                                        -1 * getScrollPosition() / 2);
                scrolling = false;
            }

            // scroll up or down by 10 pixels when the mousewheel is used
            if (mouseWheelActive) {
                window.scrollBy(0, -mouseDelta * 10);
                count++;

                // stop the scrolling after a few moments
                if (count > 20) {
                    count = 0;
                    mouseWheelActive = false;
                    mouseDelta = 0;
                }
            }

            requestAnimationFrame(animationLoop);
        }
 
</script>