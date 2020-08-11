$(".prod-logo").hover(function () {
	$(".inner").addClass("inner-hover");
	$(".nav-li").slideDown(500);
},
function () {
	$(".inner").removeClass("inner-hover");
	$(".nav-li").slideUp(500);
}
);

$(document).ready(function() {

	// document.querySelector('.header').addEventListener('click', headerTransition);
	setTimeout(headerTransition, 1000);

})

function headerTransition(e) {

	const el = (e && e.currentTarget) || document.querySelector('.header');
	console.log(el)
	
	el.removeEventListener('click', headerTransition);

	const headerLeft = document.querySelector('.header__left__img');
	const headerRight = document.querySelector('.header__right__img');

	headerLeft.classList.remove('noTransition');
	headerRight.classList.remove('noTransition');

	headerLeft.style.backgroundPosition = "0 36.4%";
	headerRight.style.backgroundPosition = "0 65%";


	setTimeout(function() {

		headerLeft.style.backgroundPosition = "0 58.6%";
		headerRight.style.backgroundPosition = "0 30%";

		setTimeout(function() {

			headerLeft.style.backgroundPosition = "0 97%";
			headerRight.style.backgroundPosition = "0 11.3%";

			setTimeout(function() {

				// Reset header

				headerLeft.classList.add('noTransition');
				headerRight.classList.add('noTransition');
				headerLeft.removeAttribute('style');
				headerRight.removeAttribute('style');
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