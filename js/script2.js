$(document).ready(function(){

var viewType;
if($(window).width>767){
viewType="desktop";
}
else{
viewType="mobile";
}
$(window).on('beforeunload',function(){

$(this).scrollTop(0);
});
$('.menuicon').on('click',function(){
console.log("data 1");
if($('.main-nav ul').css('display')=='none'){
console.log("data 1");
$('.main-nav ul').slideDown(1500);
}
else{
console.log("data 2");
$('.main-nav ul').slideUp(1500);
}
});

function listControl(){

if($(window).width()>767 && viewType=="mobile"){
$('.main-nav ul').show();
viewType="desktop"
}
else if($(window).width()<=767 && viewType== "desktop"){
$('.main-nav ul').hide();
viewType="mobile";
}
}
window.addEventListener("resize", listControl);
window.addEventListener("orientationChange", listControl);
});

