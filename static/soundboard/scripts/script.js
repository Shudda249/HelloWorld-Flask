$(document).ready(function () {



	$('.settings-menu').hide();
	$("#settings-button").click(function () {
		$(".settings-menu").slideToggle('slow');
	});

	/*$('#upload-img1, #upload-img2, #upload-img3, #upload-img4, upload-img5').on('change', function () {
		const reader = new FileReader();
		reader.onload = function (e) {
			$('#img1').attr('src', e.target.result);


		}
		reader.readAsDataURL(this.files[0]);
	});
*/
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


	//Jquery for the video upload
	// https://youtu.be/2b1AT4QW7BI

});

