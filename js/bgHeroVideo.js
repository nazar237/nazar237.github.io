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
}, 7000);

video.addEventListener('ended', function(){
	video.pause();
	video.classList.add("stopfade");
});

playPause.addEventListener("click", function() {

	if (video.paused) {
		video.play();
		playPause.style.backgroundImage = 'url(images/pause-button.svg)';
		video.classList.remove("stopfade");
		videoTextH.style.opacity = 0;
		videoBut.style.opacity = 0;
		videoTextP.style.opacity = 0;
		window.clearTimeout (videoTimer);
	} else {
		video.pause();
		playPause.style.backgroundImage = 'url(images/play-button.svg)';
		video.classList.add("stopfade");
		videoTextH.style.opacity = 1;
		videoBut.style.opacity = 1;
		videoTextP.style.opacity = 1;
	}
});

function volume(){
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

	if (video.requestFullscreen) { // W3C API
		video.requestFullscreen();
		video.classList.remove("stopfade");
	} else if (video.mozRequestFullScreen) { // Mozilla current API
		video.mozRequestFullScreen();
		video.classList.remove("stopfade");
	} else if (video.webkitRequestFullScreen) { // Webkit current API
		video.webkitRequestFullScreen();
		video.classList.remove("stopfade");
	} else if (video.msRequestFullscreen) {
		video.msRequestFullscreen();
		video.classList.remove("stopfade");
	} else {
		
		if (video.exitFullscreen) {
			video.exitFullscreen();
			video.classList.add("stopfade");
		} else if (video.mozCancelFullscreen) {
			video.mozCancelFullscreen();
			video.classList.add("stopfade");
		} else if (video.webkitExitFullscreen) {
			video.webkitExitFullscreen();
			video.classList.add("stopfade");
		} else if (video.msExitFullscreen) {
			video.msExitFullscreen();
			video.classList.add("stopfade");
		}
	}
});
//}, false);