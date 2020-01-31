
document.addEventListener("DOMContentLoaded", function() {
function lazyload() {
var lazyloadThrottleTimeout;
if(lazyloadThrottleTimeout){
      clearTimeout(lazyloadThrottleTimeout);
}    
lazyloadThrottleTimeout = setTimeout(function() {
var lazyloadImages = document.querySelectorAll("img.lazyload");  
var scrollTop = window.pageYOffset;
console.log("here "+scrollTop);
lazyloadImages.forEach(function(img) {
if(img.getBoundingClientRect().top < (window.innerHeight + scrollTop)) {
  console.log("image loaded");
  img.src = img.dataset.src;
  img.classList.remove('lazy');
}
});
if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll",lazyload);
          window.removeEventListener("resize",lazyload);
          window.removeEventListener("orientationChange",lazyload);
        }
    }, 20);
}
 
  document.addEventListener("scroll",lazyload);
  window.addEventListener("resize",lazyload);
  window.addEventListener("orientationChange",lazyload);
  lazyload();
  
//

});

function adjustImages(){
	var height=$(window).height();
	var width=$(window).width();
	console.log('height and width :' +height+"  "+ width);
	if(width<=1024 && width>=768 && (width/height)<=1){
		var margin=$("#projectThumbs a.project").css("margin-top");
		var tabHeight=$(".tab").height();
		var marginInt=parseFloat(margin);
		var height2=height-(3*marginInt)-5-tabHeight;
		$('#projectThumbs .project').height(height2*(.33));
	}else if(width<768){
		var imgWidth=$('#projectThumbs .project .project-image .content-fill').width();
		$('#projectThumbs .project').height(imgWidth);
	}else if(height > 900 && width > 1680){
		var imgWidth=$('#projectThumbs .project .project-image .content-fill').width();
		$('#projectThumbs .project').height(imgWidth-20);
	}else{
    var margin=$("#projectThumbs a.project").css("margin-top");
	var marginInt=parseFloat(margin);
	var tabHeight=$(".tab").height();
	var height4=height-(2*marginInt)-5-tabHeight;	
	$('#projectThumbs .project').height(height4*(.5));
	}
}
$(document).ready(function(){
var onTop=true;
$(window).scroll(function(e){
	console.log("scroll");
	if($(window).width()>767){
	
	if(onTop && $(window).scrollTop()>0)
	{
		console.log("from top");
		
		var destination =$('.tab').offset().top+25;
		
		/*else{
			var destination =$('#page').offset().top+3;
		}*/
  //jQuery UI needed for animate function
		$("html,body").animate({scrollTop: destination}, 600);
		onTop=false;
	}
		if($(window).scrollTop() == 0)
	{
		 onTop=true;
	}
	
	}
});     
});

$(window).on("load",function(){
var initSlider=$('.bxslider').bxSlider({
mode:'horizontal',
auto: true,
speed: 1000,
pause: 5000
});
function customizeCarousel(){
if($(window).width()<=767){	
var headerHeight=$("#header").outerHeight();
$('.carouselWrapper').css('margin-top',headerHeight+10);
}
else{
	$('.carouselWrapper').css('margin-top',0);
}
var halfscreen=(($(window).height())-($('.carouselWrapper').offset().top)-10);
console.log(halfscreen);
if($(window).height() > 900 && $(window).width() > 1680){
	console.log('for slider')
$('.carouselWrapper .bx-viewport').css('height',halfscreen);
$('.carouselWrapper .bx-viewport .bxslider img').height(halfscreen-75);
$('.carouselWrapper').css('width',halfscreen/(.8));
}else if($(window).width() > 1024){
$('.carouselWrapper .bx-viewport').css('height',halfscreen);
$('.carouselWrapper .bx-viewport .bxslider img').height(halfscreen);
$('.carouselWrapper').css('width',halfscreen/(.668));	
}else{
$('.carouselWrapper .bx-viewport').css('height',halfscreen/2.7);
$('.carouselWrapper .bx-viewport .bxslider img').height(halfscreen/2.0);
}
setTimeout(function(){initSlider.reloadSlider()},100);
}
window.addEventListener("resize",function(){
	customizeCarousel();
	adjustImages();
	});
window.addEventListener("orientationChange",function(){
    customizeCarousel();
	adjustImages();
});
customizeCarousel();
adjustImages();
});

function openCity(evt, type){
	console.log("in city");
	var scroll=$(".typeFinder[data-type='"+type+"'] .image_wrapper:first-child").offset().top;
var tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }	
  if($(window).width()<768){
	  scroll=scroll-$("#header").outerHeight()+5;
  
  evt.currentTarget.className += " active";
   $('html, body').animate({
        scrollTop: scroll
    }, 100);
  }else{
	  
  evt.currentTarget.className += " active";
   $('html, body').animate({
        scrollTop: scroll-30
    }, 100);
  }
} 