function Home(update) {
	var header = $('<header></header>');
	var diagonals = $('<div class="diagonals">' +
					'<span></span>' +
					'<span></span> ' +
					'<span></span> ' +
					'<span></span> ' +
					'</div>');
	var jumbotron = $('<div class="jumbotron"> ' +
						'<div class="container"> ' +
							'<div class="row"> ' +
								'<div class="col-xs-12 col-sm-12 text-center"> ' +
									'<h1 class="title">Hello!</h1> ' +
									'<p class="subtitle">I am a creative front-end developer, I enjoy building ' +
									'beautiful and reflective user experiences, I also like to mix amazing ' +
									'visual codes and nice interactions.</p>' +
									'<div class="buttons"></div> ' +
								'</div> ' +
							'</div> ' +
						'</div> ' +
					'</div>');
	var learnMore = $('<a class="btn btn-lg" href="#skills" role="button">Learn more</a>');
	var seeAllProject = $('<a class="btn btn-lg atc" href="#" role="button">See all project</a>');
	learnMore.on('click', function () {
		header.addClass('page-moveToLeftEasing');
		state.screen = "about";
		setTimeout(function () {
			update();
		},1000);
	});







	jumbotron.find('.buttons')
							.append(learnMore)
							.append(seeAllProject);
	header
		.append(diagonals)
		.append(jumbotron);

	return header;
}