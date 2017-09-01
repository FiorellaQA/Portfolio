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
        e.preventDefault();
	});



});

//
// $('#more-js').on('click', function () {
// 	header.addClass('page-moveToLeftEasing');
//
// 	setTimeout(function () {
// 		update();
// 	},1000);
// });
// $('#project-js').on('click', function () {
// 	header.addClass('page-moveToRightEasing');
// 	setTimeout(function () {
// 		update();
// 	},1000);
// });
