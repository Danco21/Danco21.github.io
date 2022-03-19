let swirl1_surface;

window.onload = function(){
 console.log('loading.'); 
  swirl1_surface = document.getElementById("swirl1_surface");
  swirl1_surface.style.backgroundColor = "#282a36";
  resizeCanvas();
  draw();
}
window.onresize = function(){
 console.log('resizing.'); 
  resizeCanvas();

}
function resizeCanvas(){
 swirl1_surface.width = window.innerWidth;
  swirl1_surface.height = window.innerHeight;
  
}

function draw(){
 let swirl1_surface = swirl1_surface.getContext("2d");
 let width = swirl1_surface.width * 0.2;
 let height = swirl1_surface.height * 0.2;
 let xpos = swirl1_surface.width/2 - width/2;
 let ypos = swirl1_surface.height/2 - height/2;
  
}
