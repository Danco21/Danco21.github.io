let swirl1_surface;

window.onload = function(){
 console.log('loading.'); 
  swirl1_surface = document.getElementById("swirl1_surface");
  swirl1_surface.style.backgroundColor = "#282a36";
  resizeCanvas();
}
window.onresize = function(){
 console.log('resizing.'); 
  resizeCanvas();

}
function resizeCanvas(){
 swirl1_surface.width = window.innerWidth;
  swirl1_surface.height = window.innerHeight;
  
}
