const headerText = ['design', 'innovation', 'brand'];


(function onLoad() {

	console.log('in onLoad');

	// image loading

	let image = new Image();
	image.addEventListener('load', function() {

		console.log('image1 loaded');

		let image2 = new Image();
		image2.addEventListener('load', function() {

			console.log("image2 loaded");
			setTimeout(init, 1000);
			setTimeout(headerTransition, 3000);
		})

		image2.src = './images/right.webp';

	})

	image.src = './images/left.webp';


})();

function init() {

	console.log("in init")
	const preloader = document.querySelector('.preloader');

	preloader.style.opacity = 0;
	document.querySelector('.parallax').style.display = "block";

	setTimeout(function(){preloader.style.display = "none"}, 750)

	setTimeout(headerTransition, 3000);
}

// ----------------------

$('.gallery .item a').click(function() {
	var itemID = $(this).attr('href');
	$('.gallery .row').addClass('item_open');
	$(itemID).addClass('item_open');
	$('.gallery').css('maxHeight', '1200px');
	$('.gallery').css('minHeight', '750px');
	return false;
});
$('.close').click(function() {
	$('.port, .gallery .row').removeClass('item_open');
	$('.gallery').css('maxHeight', 'unset');
	$('.gallery').css('minHeight', 'unset');
	return false;
});

$(".gallery .item a").click(function() {
	$('html, body').animate({
		scrollTop: parseInt($("#top").offset().top)
	}, 400);
});

// ---------------------------------

function headerTransition(e) {

	const el = (e && e.currentTarget) || document.querySelector('.header');
	
	el.removeEventListener('click', headerTransition);

	const headerLeft = document.querySelector('.header__left__img');
	const headerRight = document.querySelector('.header__right__img');
	const text = document.querySelector('.text');

	headerLeft.classList.remove('noTransition');
	headerRight.classList.remove('noTransition');
	text.classList.remove('noTransition');

	headerLeft.style.backgroundPosition = "0 36.4%";
	headerRight.style.backgroundPosition = "0 65%";
	text.style.transform = "translateY(-40px)";



	setTimeout(function() {

		headerLeft.style.backgroundPosition = "0 58.6%";
		headerRight.style.backgroundPosition = "0 30%";
		text.style.transform = "translateY(-80px)";

		setTimeout(function() {

			headerLeft.style.backgroundPosition = "0 97%";
			headerRight.style.backgroundPosition = "0 11.3%";
			text.style.transform = "translateY(-120px)";

			setTimeout(function() {

				// Reset header

				text.classList.add('noTransition');
				headerLeft.classList.add('noTransition');
				headerRight.classList.add('noTransition');
				headerLeft.removeAttribute('style');
				headerRight.removeAttribute('style');
				text.removeAttribute('style');
				el.addEventListener('click', headerTransition);

			}, 1800)

		}, 1800)

	}, 1800)
	
}