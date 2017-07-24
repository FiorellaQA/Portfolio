function Projects() {
	var wrapper = $('<section id="projects"></section>');
	var arrow = $('<button id="arrow"><span>↓</span></button>');
	var contenedor = $('<div id="pagepiling"></div>');

	var section1 = $('<div class="section" id="section1">' +
		'<div class="container">' +
		'<div class="row">' +
		'<div class="col-xs-4">' +
		'<p>Aplicación donde podrás encontrar información de cada uno de los pokemón, descripción, altura,' +
		'peso, tipo, y debilidad.Aplicación donde podrás encontrar información de cada uno de los' +
		'pokemón, descripción, altura,' +
		'peso, tipo, y debilidad.' +
		'</p>' +
		'</div>' +
		'<div class="col-xs-4 col-xs-offset-4">' +
		'<a class="btn btn-lg" href="#skills" role="button">Learn more</a>' +
		'<a class="btn btn-lg" href="#skills" role="button">Learn more</a>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>');

	var section2 = $('<div class="section" id="section2">' +
		'<div class="container">' +
		'<div class="row">' +
		'<div class="col-xs-4">' +
		'<p>Aplicación donde podrás encontrar información de cada uno de los pokemón, descripción, altura,' +
		'peso, tipo, y debilidad.Aplicación donde podrás encontrar información de cada uno de los' +
		'pokemón, descripción, altura,' +
		'peso, tipo, y debilidad.' +
		'</p>' +
		'</div>' +
		'<div class="col-xs-4 col-xs-offset-4">' +
		'<a class="btn btn-lg" href="#skills" role="button">Learn more</a>' +
		'<a class="btn btn-lg" href="#skills" role="button">Learn more</a>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>');

	var section3 = $('<div class="section" id="section3">' +
		'<div class="container">' +
		'<div class="row">' +
		'<div class="col-xs-4">' +
		'<p>Aplicación donde podrás encontrar información de cada uno de los pokemón, descripción, altura,' +
		'peso, tipo, y debilidad.Aplicación donde podrás encontrar información de cada uno de los' +
		'pokemón, descripción, altura,' +
		'peso, tipo, y debilidad.' +
		'</p>' +
		'</div>' +
		'<div class="col-xs-4 col-xs-offset-4">' +
		'<a class="btn btn-lg" href="#skills" role="button">Learn more</a>' +
		'<a class="btn btn-lg" href="#skills" role="button">Learn more</a>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'</div>');

	var manejadores = $('<div id="pp-nav" class="right" style="color: rgb(0, 0, 0); margin-top: -33.5px;">' +
		'<ul>' +
		'<li data-tooltip=""><a href="#" class="active"><span style="border-color: rgb(0, 0, 0);"></span></a></li>' +
		'<li data-tooltip=""><a href="#" class=""><span style="border-color: rgb(0, 0, 0);"></span></a></li>' +
		'<li data-tooltip=""><a href="#" class=""><span style="border-color: rgb(0, 0, 0);"></span></a></li>' +
		'</ul>' +
		'</div>');

	contenedor
		.append(section1)
		.append(section2)
		.append(section3);
	wrapper
		.append(arrow)
		.append(contenedor)
		.append(manejadores);

	$('#pagepiling').pagepiling({
		verticalCentered: false,
		css3: false,
		sectionsColor: ['white', '#E8E8E8', '#f2f2f2', '#EC008C'],
		onLeave: function (index, nextIndex, direction) {

			//fading out the txt of the leaving section
			$('.section').eq(index - 1).find('h1, p').fadeOut(700, 'easeInQuart');

			//fading in the text of the destination (in case it was fadedOut)
			$('.section').eq(nextIndex - 1).find('h1, p').fadeIn(700, 'easeInQuart');


			//reaching our last section? The one with our normal site?
			if (nextIndex == 4) {
				$('#arrow').hide();

				//fading out navigation bullets
				$('#pp-nav').fadeOut();

				$('#section4').find('.content').animate({
					top: '0%'
				}, 700, 'easeInQuart');
			}

			//leaving our last section? The one with our normal site?
			if (index == 4) {
				$('#arrow').show();

				//fadding in navigation bullets
				$('#pp-nav').fadeIn();

				$('#section4 .content').animate({
					top: '100%'
				}, 700, 'easeInQuart');
			}
		},
	});

	$('#arrow').click(function () {
		$.fn.pagepiling.moveSectionDown();
	});	$('#pagepiling').pagepiling({
		verticalCentered: false,
		css3: false,
		sectionsColor: ['white', '#E8E8E8', '#f2f2f2', '#EC008C'],
		onLeave: function (index, nextIndex, direction) {

			//fading out the txt of the leaving section
			$('.section').eq(index - 1).find('h1, p').fadeOut(700, 'easeInQuart');

			//fading in the text of the destination (in case it was fadedOut)
			$('.section').eq(nextIndex - 1).find('h1, p').fadeIn(700, 'easeInQuart');


			//reaching our last section? The one with our normal site?
			if (nextIndex == 4) {
				$('#arrow').hide();

				//fading out navigation bullets
				$('#pp-nav').fadeOut();

				$('#section4').find('.content').animate({
					top: '0%'
				}, 700, 'easeInQuart');
			}

			//leaving our last section? The one with our normal site?
			if (index == 4) {
				$('#arrow').show();

				//fadding in navigation bullets
				$('#pp-nav').fadeIn();

				$('#section4 .content').animate({
					top: '100%'
				}, 700, 'easeInQuart');
			}
		},
	});

	$('#arrow').click(function () {
		$.fn.pagepiling.moveSectionDown();
	});

 return wrapper;
}
