'use strict';

// function render(root) {
// 	root.empty();
//
// 	if(state.screen == null) {
// 		root.append(Home(function () {
// 			render(root);
// 		}))
// 	}else if(state.screen == "about"){
// 		root.append(About(function () {
// 			render(root);
// 		}));
// 	}else if(state.screen == "projects"){
// 		root.append(Projects(function () {
// 			render(root);
// 		}));
// 	}
// }
//
// var state = {
// 	screen: null
// };

$(function() {
		// var root =$('#root');
		// render(root);


	// $(document).on("click", ".close_button", function () {
	// 	$(this).closest(".grown").toggleClass("spot grown clickable");
	// });

	$(document).on("click", ".menu", function () {
		$('.home__nav--js').toggleClass("open menu");
	});

	$(window).scroll(function () {
		var sc = $(window).scrollTop()
		if (sc > 100) {
			$("#navbar-main").addClass("navbar-small")
		} else {
			$("#navbar-main").removeClass("navbar-small")
		}
	});


	// if($(document).scrollTop() > 260 ) {
	// 	if(transparent) {
	// 		transparent = false;
	// 		$('.navbar-color-on-scroll').removeClass('navbar-transparent');
	// 	}
	// } else {
	// 	if( !transparent ) {
	// 		transparent = true;
	// 		$('.navbar-color-on-scroll').addClass('navbar-transparent');
	// 	}
	// }

	// $('#toggle').on('click',function (event) {
	// 	event.preventDefault();
	// 	$('#nav-header').toogleClass('open');
	// 	// $('#body').classList.toggle("overflow-hidden");
	//
	// });

	$('#more-js').on('click', function () {
		header.addClass('page-moveToLeftEasing');

		setTimeout(function () {
			update();
		},1000);
	});
	$('#project-js').on('click', function () {
		header.addClass('page-moveToRightEasing');
		setTimeout(function () {
			update();
		},1000);
	});

});
