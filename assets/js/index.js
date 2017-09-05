'use strict';

$(function() {

    function collapseNavbar() {
        if ($(".home__nav--js").offset().top > 50) {
            $(".home__nav--bar").addClass("top-nav-collapse");
        } else {
            $(".home__nav--bar").removeClass("top-nav-collapse");
        }
    }
    $(window).scroll(collapseNavbar);


	$('a#toggle').on("click", function (e) {
		$('nav').toggleClass("open menu");
        $('li').on("click", function (e) {
            $('nav').removeClass("open menu");
        });
        e.preventDefault();
	});


});
