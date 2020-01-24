$(document).ready(function(){
function customizeSection(){
if($(window).width()<=767){	
var headerHeight=$("#header").outerHeight();
$('#page').css('margin-top',headerHeight);
}
else{
	$('#page').css('margin-top',0);
}
}
 
  window.addEventListener("resize", customizeSection);
  window.addEventListener("orientationChange", customizeSection);
customizeSection();

});