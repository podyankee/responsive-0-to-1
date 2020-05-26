$(function  () {
	$(".top-slider").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="assets/img/next.svg" alt=""></button>',
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="assets/img/prev.svg" alt=""></button>',
		responsive: [
			{breakpoint: 1024,
			settings: {
			}
		},
			{breakpoint: 640,
			settings: {
				arrows: false
			}
		}
		]
	});

	$(".testimonials__items").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	});

// Scroll js

	const scrolling = (upSelector) => {
		const upElem = document.querySelector(upSelector);
		console.log(upElem);



		// Scrolling with request animation frame

		let links = document.querySelectorAll('[href^="#"]'),
			speed = 0.3;

		links.forEach(link => {
			link.addEventListener('click', function(e) {
				e.preventDefault();
				let widthTop = document.documentElement.scrollTop,
					hash = this.hash,
					toBlock = document.querySelector(hash).getBoundingClientRect().top,
					start = null;
				requestAnimationFrame(step);

				function step(time) {
					if (start === null) {
						start = time;
					}
					let progress = time - start,
						r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

					document.documentElement.scrollTo(0, r);

					if (r != widthTop + toBlock) {
						requestAnimationFrame(step);
					} else {
						location.hash = hash;
					}
				}
			});
		});
	};

	scrolling('.up__link');

});