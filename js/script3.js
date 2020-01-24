$(window).on("load",function(){
//SET THESE VARS
 if ($('.bxslider img').length > 0) {
    
    // Cache the thumb selector for speed
    var thumb = $('#gallery-thumbs').find('.thumb');
    
    // How many thumbs do you want to show & scroll by
    var visibleThumbs = 8;

    // Put slider into variable to use public functions
    var gallerySlider = $('.bxslider').bxSlider({
        controls: true,
        pager: false,
        easing: 'easeInOutQuint',
        infiniteLoop: false,
        speed: 500,
        nextText: '&gt;',
        prevText: '&lt;',

        onSlideAfter: function ($slideElement, oldIndex, newIndex) {
            thumb.removeClass('pager-active');
            thumb.eq(newIndex).addClass('pager-active');
            // Action next carousel slide on one before the end, so newIndex + 1
            slideThumbs(newIndex + 1, visibleThumbs);
        }
    });

    // When clicking a thumb
    thumb.click(function (e) {

        // -6 as BX slider clones a bunch of elements
        gallerySlider.goToSlide($(this).closest('.thumb-item').index());

        // Prevent default click behaviour
        e.preventDefault();
    });

    // Function to calculate which slide to move the thumbs to
    function slideThumbs(currentSlideNumber, visibleThumbs) {
        
        // Calculate the first number and ignore the remainder
        var m = Math.floor(currentSlideNumber / visibleThumbs);
        // Multiply by the number of visible slides to calculate the exact slide we need to move to
        var slideTo = m;

        // Tell the slider to move
        thumbsSlider.goToSlide(slideTo);
    }

    // When you click on a thumb
    $('#gallery-thumbs').find('.thumb').click(function () {

        // Remove the active class from all thumbs
        $('#gallery-thumbs').find('.thumb').removeClass('pager-active');

        // Add the active class to the clicked thumb
        $(this).addClass('pager-active');

    });

    // Thumbnail slider
    var thumbsSlider = $('#gallery-thumbs').bxSlider({
       
		controls: false,
        pager: false,
        easing: 'easeInOutQuint',
        //displaySlideQty: visibleThumbs,
        //moveSlideQty: visibleThumbs,
        infiniteLoop: false,
        slideWidth: 140,
        minSlides: visibleThumbs,
        maxSlides: visibleThumbs,
        slideMargin: 10
        
    });
	/*var thumbsSlider = $('#gallery-thumbs').bxSlider({
	//mode: 'vertical',
    minSlides: visibleThumbs,
    minSlides: visibleThumbs,
	slideWidth: 275,
    slideMargin: 10,
    moveSlides:1,
    controls:false,
    pager:false
	});*/

}
function changeImage(change){
	if(change== 1)
	{	
	 var nextThumbitem=$("#gallery-thumbs .thumb.pager-active").closest(".thumb-item").next();
	  var nextModalSlide=$(".mainSlider .bxslider li.activeslide").next();
		if(nextThumbitem.length==1 && nextModalSlide.length==1){
			$(nextThumbitem).find(".thumb").trigger("click");
			$(nextModalSlide).siblings().removeClass('activeslide');
			$(nextModalSlide).addClass('activeslide');
			var nextImagePath=$(nextModalSlide).find("img").attr("src");
			$("#myModal .modal-image").attr("src",nextImagePath);
		}
	}
	else{
			var prevThumbitem=$("#gallery-thumbs .thumb.pager-active").closest(".thumb-item").prev();
			var prevModalSlide=$(".mainSlider .bxslider li.activeslide").prev();
			if(prevThumbitem.length==1 && prevModalSlide.length == 1){
			$(prevThumbitem).find(".thumb").trigger("click");
			$(prevModalSlide).siblings().removeClass('activeslide');
			$(prevModalSlide).addClass('activeslide');
			var prevImagePath=$(prevModalSlide).find("img").attr("src");
			$("#myModal .modal-image").attr("src",prevImagePath);
		}
	}
}
function callBack(){
	     event.stopPropagation();
		
		if (event.keyCode == '37') {
            changeImage(-1) //left <- show Prev image
        } else if (event.keyCode == '39') {
            // right -> show next image
            changeImage(1);
        }
	}
$(".mainSlider .bxslider li").on("click",function(e){
	e.stopPropagation();
	var imgPath= $(e.currentTarget).find('img').attr("src");
	$(e.currentTarget).addClass('activeslide');
	$(e.currentTarget).siblings().removeClass('activeslide');
	$("#myModal  .modal-image").attr("src",imgPath);
	$("#myModal").show();
	document.addEventListener("keydown",callBack);
});
$(".close").on("click",function(){
			
			$("#myModal").hide();
			document.removeEventListener("keydown",callBack);
});
function customizeCarousel(){
if($(window).width()<=767){	
var headerHeight=$("#header").outerHeight();
$('.slideshow').css('margin-top',headerHeight+10);
}
else{
	$('.slideshow').css('margin-top',0);
}
var halfscreen=(($(window).height())-($('.slideshow').offset().top)-20);
console.log(halfscreen);
if($(window).width()>767){
$('.slideshow').css('height',halfscreen);
$('.slideshow .mainSlider .bx-viewport').height(halfscreen*.85);
$('.slideshow .mainSlider .bx-viewport img').height(halfscreen*.85);
$('.slideshow .gallery-thumbs-container .bx-viewport').height(halfscreen*.10);
$('.slideshow .gallery-thumbs-container .bx-viewport img').height(halfscreen*.10);
}
else{
	var halfscreen2=(halfscreen*.6)
$('.slideshow').css('height',halfscreen2/2);
$('.slideshow .mainSlider .bx-viewport').height((halfscreen2*.68));
$('.slideshow .mainSlider .bx-viewport img').height((halfscreen2*.68));
$('.slideshow .gallery-thumbs-container .bx-viewport').height((halfscreen2*.10));
$('.slideshow .gallery-thumbs-container .bx-viewport img').height((halfscreen2*.10));
}
setTimeout(function(){gallerySlider.reloadSlider();
thumbsSlider.reloadSlider();},100);

}
 
window.addEventListener("resize", customizeCarousel);
window.addEventListener("orientationChange", customizeCarousel);
setTimeout(function(){customizeCarousel()},100);
});