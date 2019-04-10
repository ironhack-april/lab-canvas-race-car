// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };

//   function startGame() {

    
//   }
// };


let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let w = 400;
let h = 511;

let frames = 0; 

function drawBoard() {
  frames++; 
  ctx.beginPath();
  ctx.fillStyle = "rgb(0, 110, 0)";
  ctx.fillRect(0, 0, w, h);
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = "gray";
  ctx.fillRect(25, 0, 350, h);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fillRect(35, 0, 330, h);
  ctx.beginPath();
  ctx.fillStyle = "gray";
  ctx.fillRect(45, 0, 310, h);
  ctx.closePath();
  ctx.beginPath(200, 0);
  ctx.setLineDash([20, 20]);
  ctx.lineWidth = "4"
  ctx.strokeStyle = "white";
  ctx.moveTo(200, 500);
  ctx.lineTo(200, 0);
  ctx.stroke();
}




let carImage = new Image()
carImage.src = "./images/car.png"
// carImage.onload = function(){
//   console.log('car image loaded')
// }

function drawCar(){
  ctx.drawImage(carImage, car.x, car.y, car.accident,80)
}


let car = {
  x:0,
  y:0,
  accident: 40
}

document.onkeydown = function(e) {
  console.log(e.keyCode)
  switch (e.keyCode) {
    case 38: car.y-=5;  break;
    case 40: car.y+=5;  break;
    case 37: car.x-=5;  break;
    case 39: car.x+=5;  break;
    case 32: car.accident = 300; break;
  }
}


 function updateCanvas(){ //BEATING HEART OF YOUR APP
  //console.log('updateCanvas')
  /*In here I'll clear everything and redraw it*/ 
  
  ctx.clearRect(0,0,w,h) //ERASE EVERYTHING
  drawBoard()
  drawCar()

  window.requestAnimationFrame(updateCanvas) //so it calls itself recursively over and over
 }

 updateCanvas()
