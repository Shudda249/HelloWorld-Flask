$(document).ready(function () {

	// Script to chnage main title
	$('#main-title').dblclick(function () {
		var currentText = $(this).text();
		$(this).hide();
		$(this).after('<input type="text" id="editable-heading" value="' + currentText + '">');
		$('#editable-heading').css('display', 'inline-block');

		$('#editable-heading').focus();

	});

	$(document).on('blur', '#editable-heading', function () {
		var newText = $(this).val();
		$(this).prev('h1').text(newText);
		$(this).prev('h1').show();
		$(this).remove();
		setCookie("title", newText, 30);
	});



	//Script for checking and setting font and title cookies
	// For font cookies
	var fontCookie = getCookie("font");
	if (fontCookie) {
		loadFont(fontCookie);
		$('#font').val(fontCookie);
	}

	$('#font-selector').change(function () {
		var selectedFont = $(this).val();
		loadFont(selectedFont);
		setCookie("font", selectedFont, 30);
	});

	// For title cookies
	var titleCookie = getCookie("title");
	if (titleCookie) {
		$('#main-title').text(titleCookie);
	}

	$('#main-title').change(function () {
		var selectedTitle = $(this).text();
		setCookie("title", selectedTitle, 30);
	});



	function setCookie(name, value, days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + value + expires + "; path=/";
	}

	function getCookie(name) {
		var cookies = document.cookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i].trim();
			if (cookie.indexOf(name + '=') === 0) {
				return cookie.substring(name.length + 1);
			}
		}
		return '';
	}


	// Script for font selector
	// Function to load the selected Google Font
	function loadFont(fontFamily) {
		var fontUrl = 'https://fonts.googleapis.com/css?family=' + fontFamily.replace(' ', '+');
		$('<link/>', {
			rel: 'stylesheet',
			type: 'text/css',
			href: fontUrl
		}).appendTo('head');
		$('.title, .title2').css('font-family', fontFamily);
	}

	// Function to change the website's font
	function changeFont() {
		var selectedFont = $('#font-selector').val();
		loadFont(selectedFont);
	}

	// Event listener for font selection change
	$('#font-selector').on('change', changeFont);



	$('.settings-menu').hide();
	$('#sound-selector').hide();
	$("#settings-button").click(function () {
		$(".settings-menu").slideToggle('slow');
		$("h1").toggleClass("title title2");
		$("#circle_container").toggleClass("circle_container circle_container2");
	});



	// Get the hidden input element
	var hiddenInput = $('#hiddenInput');

	// Get the left and right buttons
	var leftButton = $('#left-triangle');
	var rightButton = $('#right-triangle');

	// Add click event listeners to the buttons
	$(leftButton).add(rightButton).on('click', function () {
		if ($('#word').text() == 'Picture') {
			// Change the name of the hidden input element to "Picture"
			hiddenInput.removeAttr('value', 'picture');
			hiddenInput.attr('value', 'sound');
		}
		else if ($('#word').text() == 'Sound') {
			// Change the name of the hidden input element to "Sound"
			hiddenInput.removeAttr('value', 'sound');
			hiddenInput.attr('value', 'picture');
		}
	});




	//Play circle sounds
	const circle1 = document.getElementById('circle1');
	const circle2 = document.getElementById('circle2');
	const circle3 = document.getElementById('circle3');
	const circle4 = document.getElementById('circle4');
	const circle5 = document.getElementById('circle5');

	const audio1 = document.getElementById('audio1');
	const audio2 = document.getElementById('audio2');
	const audio3 = document.getElementById('audio3');
	const audio4 = document.getElementById('audio4');
	const audio5 = document.getElementById('audio5');

	circle1.addEventListener('click', () => {
		audio1.currentTime = 0;
		audio1.play();
	});

	circle2.addEventListener('click', () => {
		audio2.currentTime = 0;
		audio2.play();
	});

	circle3.addEventListener('click', () => {
		audio3.currentTime = 0;
		audio3.play();
	});

	circle4.addEventListener('click', () => {
		audio4.currentTime = 0;
		audio4.play();
	});

	circle5.addEventListener('click', () => {
		audio5.currentTime = 0;
		audio5.play();
	});


	//Script for moving picture / sound selector
	var words = ['Picture', 'Sound'];
	var currentIndex = 0;

	function slideToLeft() {
		var word = $('#word');
		word.css('transform', 'translateX(-100%)');
		setTimeout(function () {
			currentIndex = (currentIndex - 1 + words.length) % words.length;
			word.text(words[currentIndex]);
			word.css('transform', 'translateX(0)');
		}, 500);
	}

	function slideToRight() {
		var word = $('#word');
		word.css('transform', 'translateX(100%)');
		setTimeout(function () {
			currentIndex = (currentIndex + 1) % words.length;
			word.text(words[currentIndex]);
			word.css('transform', 'translateX(0)');
		}, 500);
	}



	$('#left-triangle').click(slideToLeft);
	$('#right-triangle').click(slideToRight);
	// 




});

