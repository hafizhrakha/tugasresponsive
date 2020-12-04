function gantijudulweb(){
	var judul = window.prompt("Nama judul webmu?");
	document.getElementById("judulweb").innerHTML = judul;
}
function notifwebselesaidimuat(a){
	window.alert(a);
}
function exitweb(){
	var val1 = window.confirm("Apakah anda yakin ingin keluar website ini?");
	if(val1){
		window.history.back();
	}
}
/* Carousel */
/* Carousel geser*/
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
/* end */
/* Carousel auto geser*/
var slideIndex = 0;
showSlides();
function showAutoSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showAutoSlides, 2000); // Change image every 2 seconds
}
	/* end */
/* end */