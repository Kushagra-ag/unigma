const headerText = ['design', 'innovation', 'brand'];

window.onload = function() {

	setTimeout(init, 6000)
	setTimeout(headerTransition, 9000);

}

function init() {

	const preloader = document.querySelector('.preloader');
	console.log(preloader)

	preloader.style.opacity = 0;
	document.querySelector('.parallax').style.display = "block";

	setTimeout(function(){preloader.style.display = "none"}, 750)
}

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









// headerLeft.style.backgroundPosition = "0 35%";
// 	headerRight.style.backgroundPosition = "0 64.6%";


// 	setTimeout(function() {

// 		headerLeft.style.backgroundPosition = "0 60.2%";
// 		headerRight.style.backgroundPosition = "0 30.6%";

// 		setTimeout(function() {

// 			headerLeft.style.backgroundPosition = "0 96.8%";
// 			headerRight.style.backgroundPosition = "0 8%";