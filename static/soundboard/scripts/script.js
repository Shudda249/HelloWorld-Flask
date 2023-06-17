$(document).ready(function () {







	$('.settings-menu').hide();
	$('#sound-selector').hide();
	$("#settings-button").click(function () {
		$(".settings-menu").slideToggle('slow');
		$("h1").toggleClass("title title2");
		$("#circle_container").toggleClass("circle_container circle_container2");
	});


	// Script for sending JSON argument for picture / sound choice
	$('#image_submit').submit(function () {
		var elementData = $('#word').text(); // Replace `myElement` with the ID or class of the HTML element you want to extract data from
		$.ajax({
			type: 'POST',
			url: '/soundboard',  // Replace with the appropriate Flask route
			contentType: "application/json",
			dataType: "json",
			data: {
				media_type: elementData,

			},
			success: function (response) {
				console.log(response);
				// Handle the server response here
			}
		});
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

