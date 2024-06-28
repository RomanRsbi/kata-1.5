let slideAll = document.querySelector('.swiper-wrapper');
let listLength = document.querySelectorAll('.swiper-slide');
let slide11 = slideAll.querySelector('.swiper-slide:last-child');
let slide10 = slideAll.querySelector('.swiper-slide:nth-last-of-type(2)');
let slide9 = slideAll.querySelector('.swiper-slide:nth-last-of-type(3)');

if (window.innerWidth <= 767) {
	slide9.remove();
	slide10.remove();
	slide11.remove();
}

let swiper = new Swiper('.swiper', {

	direction: 'horizontal',
	loop: true,
	grabCursor: true,
	spaceBetween: 20,
	slidesPerView: 'auto',
	speed: 500,

	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},

	keyboard: {
		enable: true,
		onlyInViewport: true
	},

	autoplay: {
		delay: 2000,
		disableOnInteraction: true,
		stopOnLastSlide: false
	},
});

if (window.innerWidth > 767) {
	swiper.destroy();
	swiper = 0;
}

window.addEventListener('resize', function(event) {
	if (event.target.innerWidth > 767 && swiper) {
		swiper.destroy();
		swiper = 0;
	} else if (event.target.innerWidth <= 767 && !swiper) {
			swiper = new Swiper('.swiper', {

			direction: 'horizontal',
			loop: true,

			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},

			grabCursor: true,
			spaceBetween: 20,
			slidesPerView: 'auto',

			keyboard: {
				enable: true,
				onlyInViewport: true,
			},

			autoplay: {
				delay: 2000,
				disableOnInteraction: true,
				stopOnLastSlide: false
			},
		});
	}
}, true);

let buttonShow = document.querySelector('.brands__show-all');
buttonShow.addEventListener('click', (event) => {
	forHidden = document.querySelectorAll('.hidden-for-tablet, .hidden-slide');
	if (forHidden[0].classList.contains('show-hidden')) {
		forHidden.forEach(element => {
			element.classList.remove('show-hidden');
		});
		buttonShow.textContent = 'Показать все';
		buttonShow.classList.remove('brands__show-all--active');
	} else {
		forHidden.forEach(element => {
			element.className += ' show-hidden';
		});
		buttonShow.textContent = 'Скрыть';
		buttonShow.className += ' brands__show-all--active'
	}
})