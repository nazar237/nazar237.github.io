var video = document.getElementById("bg__video"),
	playPause = document.querySelector("#hero__video .hero__but__play"),
	mute = document.querySelector("#hero__video .hero__but__mute"),
	unmute = document.querySelector("#hero__video .hero__but__unmute"),
	fullVideo = document.querySelector("#hero__video .hero__but__fullscreen");

//change video by device
window.onload = function changeVideo() {

	if (window.matchMedia("(min-width: 992px)").matches) {
		video.src = "video/315536202_1280.mp4";
		//video.setAttribute("src", "video/315536202_1280.mp4");
		video.load();
	} else {
		video.src = "video/315536202_480.mp4";
		//video.setAttribute("src", "video/315536202_320.mp4");
		video.load();
	}
}

//remove autoplay for iOS
if (window.matchMedia('(prefers-reduced-motion)').matches) {
	video.removeAttribute("autoplay");
	video.pause();
	playPause.style.backgroundImage = 'url(images/play-button.svg)';
}

//autoplay timer
window.addEventListener("load", videoTimer);

var videoTextH = document.querySelector("#hero__video .baner__text"),
	videoBut = document.querySelector("#hero__video .but__tn"),
	videoTextP = document.querySelector("#hero__video .hero__info"),
	
	videoTimer = window.setTimeout(function() {
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

//opacity for ended video
video.addEventListener('ended', function() {
	video.pause();
	video.classList.add("stopfade");
});

//playPause button
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
		playPause.style.opacity = 1;
		fullVideo.style.opacity = 1;
		mute.style.opacity = 1;
		unmute.style.opacity = 1;
	}
});

//volume button
document.querySelector("#video__buts .mute__but").addEventListener("click", volume);

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

//fullscreen button
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
	} 
	else if (video.exitFullscreen) {
		video.classList.toggle("stopfade", true);
		//video.setAttribute("opacity", "0.2");
	} else if (video.mozCancelFullscreen) {
		video.classList.toggle("stopfade", true);
	} else if (video.webkitExitFullscreen) {
		video.classList.toggle("stopfade", true);
	} else if (video.msExitFullscreen) {
		video.classList.toggle("stopfade", true);
	}
});