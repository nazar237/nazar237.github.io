(function() {
	
	function id(e) {
		return document.getElementById(e);
	}

	function loadbar() {
		
		var ovrl = id("overlay"), //background
			stat = id("progstat"), //percent progress
			ress = id("progress"), //loading progress
			logo = id("prellogo"),
			img = document.images,
			c = 0;
			tot = img.length;
			if (tot == 0) return doneLoading();

		function imgLoaded() {
			c += 1;
			
			var perc = ((100/tot*c) << 0) +"%";
				ress.style.width = perc;
				stat.innerHTML = "Loading" + perc;
			
			if (c===tot) {
				stat.style.opacity = 0;
				ress.style.opacity = 0;
				
				setTimeout(function() {
					stat.style.display = "none";
					ress.style.display = "none";
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