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
