var vid = document.getElementById("bg__video");
var pauseButton = document.querySelector("#hero__video .hero__but__play");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
  vid.removeAttribute("autoplay");
  vid.pause();
  pauseButton.style.backgroundImage = 'url(images/play-button.svg)';
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
vid.pause();
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.style.backgroundImage = 'url(images/pause-button.svg)';
  } else {
    vid.pause();
    pauseButton.style.backgroundImage = 'url(images/play-button.svg)';
  }
})
