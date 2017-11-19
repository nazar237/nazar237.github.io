var video = document.getElementById("bg__video"),
	playPause = document.querySelector("#hero__video .hero__but__play"),
	mute = document.querySelector("#hero__video .hero__but__mute"),
	unmute = document.querySelector("#hero__video .hero__but__unmute"),
	fullVideo = document.querySelector("#hero__video .hero__but__fullscreen");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
	video.removeAttribute("autoplay");
	video.pause();
	playPause.style.backgroundImage = 'url(images/play-button.svg)';
}

var videoTextH = document.querySelector("#hero__video .baner__text"),
	videoBut = document.querySelector("#hero__video .but__tn"),
	videoTextP = document.querySelector("#hero__video .hero__info"),
	
	videoTimer = window.setTimeout(function(){
	video.play();
	playPause.style.backgroundImage = 'url(images/pause-button.svg)';
	video.classList.remove("stopfade");
	videoTextH.style.opacity = 0;
	videoBut.style.opacity = 0;
	videoTextP.style.opacity = 0;
	playPause.style.opacity = .4;
	fullVideo.style.opacity = .4;
	mute.style.opacity = .4;
	unmute.style.opacity = .4;
}, 7000);

video.addEventListener('ended', function(){
	video.pause();
	video.classList.add("stopfade");
});

playPause.addEventListener("click", function() {

	if (video.paused) {
		video.play();
		playPause.style.backgroundImage = 'url(images/pause-button.svg)';
		video.classList.toggle("stopfade", false);
		videoTextH.style.opacity = 0;
		videoBut.style.opacity = 0;
		videoTextP.style.opacity = 0;
		window.clearTimeout (videoTimer);
		playPause.style.opacity = .4;
		fullVideo.style.opacity = .4;
		mute.style.opacity = .4;
		unmute.style.opacity = .4;
	} else {
		video.pause();
		playPause.style.backgroundImage = 'url(images/play-button.svg)';
		video.classList.toggle("stopfade", true);
		videoTextH.style.opacity = 1;
		videoBut.style.opacity = 1;
		videoTextP.style.opacity = 1;
		playPause.style.opacity = .8;
		fullVideo.style.opacity = .8;
		mute.style.opacity = .8;
		unmute.style.opacity = .8;
	}
});

function volume() {
	if(mute.style.display == "none") {
		mute.style.display = "inline-block",
		unmute.style.display = "none";
		video.muted = true;
	} else {
		mute.style.display = "none",
		unmute.style.display = "inline-block";
		video.muted = false;
	}
}

fullVideo.addEventListener("click", function() {

	if (video.requestFullscreen) {
		video.requestFullscreen();
		video.classList.toggle("stopfade", false);
	} else if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen();
		video.classList.toggle("stopfade", false);
	} else if (video.webkitRequestFullScreen) {
		video.webkitRequestFullScreen();
		video.classList.toggle("stopfade", false);
	} else if (video.msRequestFullscreen) {
		video.msRequestFullscreen();
		video.classList.toggle("stopfade", false);
	} else {
		
		if (video.exitFullscreen) {
			video.exitFullscreen();
			video.classList.toggle("stopfade", true);
		} else if (video.mozCancelFullscreen) {
			video.mozCancelFullscreen();
			video.classList.toggle("stopfade", true);
		} else if (video.webkitExitFullscreen) {
			video.webkitCancelFullScreen();
			video.classList.toggle("stopfade", true);
		} else if (video.msExitFullscreen) {
			video.msExitFullscreen();
			video.classList.toggle("stopfade", true);
		}
	}
});