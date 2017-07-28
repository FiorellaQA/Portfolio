'use strict';

function About() {
	// rowSkills
	// 	.append(col1)
	// 	.append(col2);
	//
	// container
	// 	.append(rowTitle)
	// 	.append(rowDescription)
	// 	.append(rowSkills);
	//
	// section
	// 	.append(logo)
	// 	.append(diagonals)
	// 	.append(container);
	//
	// return section;

	var section = $('<section id="about"></section>');
	var logo = $('<div class="container-fluid">' +
					'<div class="row">' +
						'<div class="col-xs-6 center-block">' +
							'<a href="http://fiorellaquispe.com">' +
								'<img class="img-responsive logo" src="assets/img/logo-fiorella.png">' +
							'</a>' +
						'</div>' +
						'</div>' +
					'</div>');

	var diagonals = $('<div class="diagonals">' +
					'<span></span>' +
					'<span></span> ' +
					'<span></span> ' +
					'</div>');

	var container = $('<div class="container"></div>');

	var rowTitle = $('<div class="row">' +
					'<h1 class="about__title col-sm-12 text-center">About</h1>' +
					'</div>');

	var rowDescription = $('<div class="row">' +
		'<div class="about__description col-sm-offset-2 col-sm-8">' +
			'<p class="about__description--info">' +
				'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem' +
				'Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un' +
				'impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de' +
				'textos y los mezcló de tal manera que logró hacer un libro de textos. ' +
			'<p class="about__description--contact">' +
				'Feel free to check<a href="/fiorellaquispe.pdf" target="_blank" class="about__link"> my resume.</a><br>' +
				'If you’d like to chat<a href="mailto:person.soy@gmail.com" target="_blank" class="about__link"> contact me.</a>' +
			'</p>' +
			'<p class="about__description--network">You can also find me there : </p>' +
			'<ul class="about__social-networks list-inline">' +
				'<li class="about__social-network"><a href="https://github.com/FiorellaQA" target="_blank" class="about__link">Github</a></li>' +
				'<li class="about__social-network"><a href="https://www.linkedin.com/in/fiorellaquispearotinco/" target="_blank" class="about__link">LinkedIn</a></li>' +
				'<li class="about__social-network"><a href="https://twitter.com" target="_blank" class="about__link">Twitter</a></li>' +
			'</ul>' +
		'</div>' +
		'</div>');

	var rowSkills = $('<div class="row"></div>');

	var col1 = $('<div class="col-sm-6">' +
		'<div class="skills__contenido">' +
			'<h2 class="skills__contenido--title">lorem</h2>' +
			'<div class="skills__contenido--description">' +
				'<ul>' +
					'<li>Comprobaciones dinámicas de KYC y AML, basadas en análisis de riesgo y para todos los destinatarios</li>' +
					'<li>Cotejo con listas de sanciones y requisitos de la OFAC a partir de la API</li>' +
					'<li>Seguimiento del umbral de tributación del IRS y ayuda con el formulario 1099</li>' +
					'<li>Filtrado de listas negras del sector de tarjetas de pago</li>' +
					'<li>Licencias para la transmisión de dinero en los EE. UU. y de la FCA en el Reino Unido.</li>' +
					'<li>Filtrado de ciberdelincuentes para que no puedan usar datos de la red Stripe</li>' +
				'</ul>' +
			'</div>' +
		'</div>' +
		'</div>');

	var col2 = $('<div class="col-sm-6">' +
		'<div class="skills__contenido">' +
			'<h2 class="skills__contenido--title">lorem</h2>' +
			'<div class="skills__contenido--description">' +
				'<ul>' +
					'<li>Comprobaciones dinámicas de KYC y AML, basadas en análisis de riesgo y para todos los destinatarios</li>' +
					'<li>Cotejo con listas de sanciones y requisitos de la OFAC a partir de la API</li>' +
					'<li>Seguimiento del umbral de tributación del IRS y ayuda con el formulario 1099</li>' +
					'<li>Filtrado de listas negras del sector de tarjetas de pago</li>' +
					'<li>Licencias para la transmisión de dinero en los EE. UU. y de la FCA en el Reino Unido.</li>' +
					'<li>Filtrado de ciberdelincuentes para que no puedan usar datos de la red Stripe</li>' +
				'</ul>' +
			'</div>' +
		'</div>' +
		'</div>');


}



