function myFunction(imgs) 
{
	var expandImg = document.getElementById("expandedImg");
	var img = document.getElementById("img");
	expandImg.src = imgs.src;
	img.innerHTML = imgs.alt;
	expandImg.parentElement.style.display = "block";
}
