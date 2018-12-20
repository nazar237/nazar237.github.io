//FIXED HEADER AT SCROLL
(function() {
	window.onscroll = function() {headerScroll()};

	let header = document.getElementById('headerScroll');
	let sticky = header.offsetTop;

	function headerScroll() {
		//comparison of vertical scroll and header height
		if (window.pageYOffset > sticky) {
			header.classList.add('scrolled');
		} else {
			header.classList.remove('scrolled');
		}
	}
})();

//*******************************************************************
//BURGER MENU TOGGLE
(function() {
	navIcon = document.getElementById('nav-icon');

	navIcon.addEventListener('click', function() {
		navIcon.classList.toggle('open');
	});
})();

//*******************************************************************
//BANNER CAROUSEL
(function() {
	var left = document.getElementById('slide-left'),
		right = document.getElementById('slide-right'),
		totalImg = document.querySelectorAll('.baner-slide'),
		totalDots = document.querySelectorAll('.baner-dot'),
		idx = 0,
		slideInterval = setInterval(nextSlide,4000);

	function nextSlide() {
		goToSlide(idx+1);
	}

	function prevSlide() {
		goToSlide(idx-1);
	}

	function goToSlide(n) {
		totalImg[idx].classList.remove('slide-on');
		totalDots[idx].classList.remove('dot-active');
		idx = (n+totalImg.length)%totalImg.length;
		totalImg[idx].classList.add('slide-on');
		totalDots[idx].classList.add('dot-active');
	}

	right.onclick = function(){
		nextSlide();
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide,4000);
	}

	left.onclick = function(){
		prevSlide();
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide,4000);
	}
})();

//*******************************************************************
//MENU CLICK SROLLING AND AUTO HIGHLIGHT
(function() {
	$(document).ready(function(){
		var $sections = $('section');

		$(window).scroll(function(){
			var currentScroll = $(this).scrollTop();
			var $currentSection;

			$sections.each(function(){
				var divPosition = $(this).offset().top;

				if( divPosition - 1 < currentScroll ){
					$currentSection = $(this);
				}

				var id = $currentSection.attr('id');

				$('a').removeClass('active-anchor');
				$("[href=#"+id+"]").addClass('active-anchor');
			})
		});

		$("nav").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;

			$('body,html').animate({scrollTop: top}, 500);
		});
	});
})();

// window.onscroll = function(ev) {
// 	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
// 		//
// 	}
// };

//*******************************************************************
//CARD HOVER FOR *CHOOSE US* BLOCK
(function() {
	let currentElem = null;
	let cards = document.getElementById('cardHover');
	let hover = document.getElementsByClassName('choose-title-hover');

	cards.onmouseover = function(event) {
		//current element check filtering
		if (currentElem) {
			return;
		}

		//cursor view
		let target = event.target;

		//DIV block detecting
		while (target != this) {
			if (target.tagName == 'DIV') break;
			target = target.parentNode;
		}
		if (target == this) return;

		//add class
		currentElem = target;
		target.children[3].classList.add('choose-show', 'zoomIn');
	};

	cards.onmouseout = function(event) {
		//ignore when cursor outside of element
		if (!currentElem) return;

		//cursor cheking
		let relatedTarget = event.relatedTarget;
		if (relatedTarget) {
			while (relatedTarget) {
				//check parrent for ignore children
				if (relatedTarget == currentElem) return;
				relatedTarget = relatedTarget.parentNode;
			}
		}

		//delete class
		currentElem.children[3].classList.remove('choose-show', 'zoomIn');
		currentElem = null;
	};
})();

//*******************************************************************
//iPad SCROLL ANIMATION
(function() {
	$(document).ready(function() {
		// Check if element is scrolled into view
		function isScrolledIntoView(elem) {
			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();

			var elemTop = $(elem).offset().top;
			var elemBottom = elemTop + $(elem).height();

			return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
		}
		// If element is scrolled into view, fade it in
		$(window).scroll(function() {
			$('.scroll-animations .animated').each(function() {
				if (isScrolledIntoView(this) === true) {
					$(this).addClass('bounceInLeft');
				}
			});
		});
	});
})();

//*******************************************************************
//iPad COLOR ANIMATION
(function() {
	var totalImg = document.querySelectorAll('.ipad'),
		idx = 0,
		slideInterval = setInterval(nextImage,3000);

	function nextImage() {
		goTo(idx+1);
	}

	function goTo(n) {
		totalImg[idx].classList.remove('ipad-on');
		idx = (n+totalImg.length)%totalImg.length;
		totalImg[idx].classList.add('ipad-on');
	}
})();