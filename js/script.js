const headerText = ['design', 'innovation', 'brand'];


window.addEventListener("load", function() {

	console.log('loaded');

	let img = document.querySelector('.imgRight');
	console.log(img)

	img.addEventListener('load', function(){console.log('loadedright')})

	// setTimeout(init, 6000)
	setTimeout(headerTransition, 9000);


});

function init() {

	const preloader = document.querySelector('.preloader');

	preloader.style.opacity = 0;
	document.querySelector('.parallax').style.display = "block";

	setTimeout(function(){preloader.style.display = "none"}, 750)

	setTimeout(headerTransition, 3000);
}

$('.gallery ul li a').click(function() {
	var itemID = $(this).attr('href');
	$('.gallery ul').addClass('item_open');
	$(itemID).addClass('item_open');
	return false;
});
$('.close').click(function() {
	$('.port, .gallery ul').removeClass('item_open');
	return false;
});

$(".gallery ul li a").click(function() {
	$('html, body').animate({
		scrollTop: parseInt($("#top").offset().top)
	}, 400);
});

function headerTransition(e) {

	const el = (e && e.currentTarget) || document.querySelector('.header');
	console.log(el)
	
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