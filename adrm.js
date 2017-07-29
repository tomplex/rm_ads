
hideGAds();


function hideGAds() {
	gads = document.getElementByID('tads');
	gads.style.display = "none";
}

document.ready(function(){
	hideGAds()
})

