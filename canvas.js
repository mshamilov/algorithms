
let width = window.innerWidth;
let height = window.innerHeight;
let quantityDots = 8;

let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = width;
canvas.height = height;
canvas.style.background = '#181818';
document.body.appendChild(canvas);


function drawLine(mystate,ctx) {
  ctx.clearRect(0,0,width,height);

  ctx.lineWidth = 1;
  ctx.fillStyle = '#fff';
  ctx.strokeStyle = '#2d2d2c';
  // console.log(mystate[0]);



  // drawing lines
  ctx.beginPath();
  ctx.moveTo(width/quantityDots, mystate[1]);
  for (var i = 1; i < quantityDots; i++) {
    ctx.lineTo(i*width/quantityDots,mystate[i]);
    ctx.stroke();
  }
  ctx.closePath();

  // drawing lines between logo and items
  ctx.beginPath();
  for (var i = 1; i < quantityDots; i++) {
    ctx.moveTo(width/2, 200);
    ctx.lineTo(i*width/quantityDots,mystate[i]);
    ctx.stroke();
  }
  ctx.closePath();
  
  // drawing lines outside canvas
  // left side
  // #1
  ctx.beginPath();
  ctx.moveTo(width/quantityDots - 100, -200);
  ctx.lineTo(width/2, 200);
  ctx.stroke();
  // #2
  ctx.moveTo(width/quantityDots - 100, -200);
  ctx.lineTo(width/quantityDots,mystate[1]);
  ctx.stroke();
  // #3
  ctx.moveTo(width/quantityDots - 100, -200);
  ctx.lineTo(Math.floor(quantityDots/2)*width/quantityDots, mystate[Math.floor(quantityDots/2)]);
  ctx.stroke();
  ctx.closePath();
  // right side
  // #1
  ctx.beginPath();
  ctx.moveTo((quantityDots-1)*width/quantityDots + 100, -200);
  ctx.lineTo(width/2, 200);
  ctx.stroke();
  // #2
  ctx.moveTo((quantityDots-1)*width/quantityDots + 100, -200);
  ctx.lineTo((quantityDots-1)*width/quantityDots, mystate[quantityDots-1]);
  ctx.stroke();
  // #3
  ctx.moveTo((quantityDots-1)*width/quantityDots + 100, -200);
  ctx.lineTo(Math.ceil(quantityDots/2)*width/quantityDots, mystate[Math.ceil(quantityDots/2)]);
  ctx.stroke();
  ctx.closePath();


  // drawing dots
  ctx.fillStyle = '#fff';
  for (var i = 1; i < quantityDots; i++) {
    ctx.beginPath();
    ctx.arc(i*width/quantityDots,mystate[i] + 1,12,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  // drawing logo
  ctx.beginPath();
  ctx.fillStyle = '#f95c00';
  ctx.arc(width/2 ,200 ,100,0,2*Math.PI);
  ctx.fill();
  ctx.closePath();
}


var t = 0;

const noiseGen = new FastSimplexNoise(
  { frequency: 0.5, max: height, min: height/2, octaves: 1 });

function render() {
  t++;
  let newstate = [];
  for (var i = 0; i < quantityDots; i++) {
  	newstate.push(
  		noiseGen.scaled([i*5, t/2000])
  	);
  }
  console.log(newstate);
  drawLine(newstate,ctx);
  window.requestAnimationFrame(render);

}
render();

