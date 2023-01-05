/**
 * eq() indicate the index: https://api.jquery.com/eq/#eq-index
 */

(function($) {
    $.fn.timeline = function() {
        // Create selector as getting image path
        // Selector is image
        var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline-img", // get the image
        };


        // To add the active class the first image
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
            "background-image",
            "url(" +
                selectors.item
                .first() // Select to the first item:  https://api.jquery.com/first/
                .find(selectors.img) // Find to much the same element which is nested element: https://api.jquery.com/find/
                .attr("src") +
            ")"
        );

        var itemLength = selectors.item.length;
        // Show the image when Winndow scroll 
        $(window).scroll(function() {
            var max, min;
            var pos = $(this).scrollTop();

            // Function
            selectors.item.each(function(i) {
                // Set the position and offset
                // min is offset, max is height plus offset so it's distance
                min = $(this).offset().top;
                max = $(this).height() + $(this).offset().top;

                // add fade effectto the first image
                var that = $(this);
                if(i == itemLength - 2 && pos > min + $(this).height() / 2) {
                    selectors.item.removeClass(selectors.activeClass);
                    selectors.id.css(
                        "background-image",
                        "url(" +
                            selectors.item
                            .last()
                            .find(selectors.img)
                            .attr("src") +
                            ")"
                    );
                    // Add active class to second image
                    selectors.item.last().addClass(selectors.activeClass);
                // If scroll down or up then select item and remove the class
                } else if(pos <= max - 40 && pos >= min) {
                    selectors.id.css(
                        // selectors/img/src/...
                        "background-image",
                        "url(" +
                            $(this)
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    // Switch the image
                    selectors.item.removeClass(selectors.activeClass);
                    $(this).addClass(selectors.activeClass);
                }
            });
       });
    };
})(jQuery);

$("#timeline-1").timeline();