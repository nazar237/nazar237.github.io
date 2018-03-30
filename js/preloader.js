if (sessionStorage.getItem("dontLoad") == null) {
	
	(function() {

		sessionStorage.setItem("dontLoad", "true");

		function loadbar() {
			
			var ovrl = document.getElementById("overlay"), //preload container
				stat = document.getElementById("progstat"), //percent progress
				ress = document.getElementById("progress"), //loading progress
				logo = document.getElementById("prellogo"),
				img = document.images,
				c = 0;
				tot = img.length;
			
			ovrl.classList.remove("hidePerloader");
			document.body.classList.remove("body")

			if (tot == 0) return doneLoading();

			function imgLoaded() {
				c += 1;
				
				var perc = ((100/tot*c) << 0) + "%";
					ress.style.width = perc;
					stat.innerHTML = "Loading" + perc;
				
				if (c===tot) {
					stat.style.opacity = 0;
					
					setTimeout(function() {
						stat.style.display = "none";
					}, 1000);
					
					setTimeout(function(){
						logo.style.opacity = 1;					
					}, 500);
					
					setTimeout(function() {
						return doneLoading();
					}, 2000);
				}
			}

			function doneLoading() {
				ovrl.style.opacity = 0;
				setTimeout(function() {
					ovrl.style.display = "none";
					document.body.style.overflow = "visible";
				}, 1200);
			}

			for(var i=0; i<tot; i++) {
				var tImg     = new Image();
				tImg.onload  = imgLoaded;
				tImg.onerror = imgLoaded;
				tImg.src     = img[i].src;
			}
		}

		document.addEventListener('DOMContentLoaded', loadbar, false);

	}());
}