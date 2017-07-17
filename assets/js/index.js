'use strict';

function render(root) {
	root.empty();

	if(state.screen == null) {
		root.append(Home(function () {
			render(root);
		}))
	}
}

var state = {
	screen: null
};

$(function() {
		var root =$('#root');
		render(root);
});
