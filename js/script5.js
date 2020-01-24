$(document).ready(function(){
function setContent(){
if($(window).width()<=767){	
var headerHeight=$("#header").outerHeight();
$('#page3').css('margin-top',headerHeight+35);
}
else{
	$('#page3').css('margin-top',40);
}
}

window.addEventListener("resize",setContent);
  window.addEventListener("orientationChange",setContent);
  
  setTimeout(function(){ setContent()},100);
});