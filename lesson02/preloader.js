const canvas=document.getElementById("preloader");

const canvasText=canvas.getContext("2d");
 canvas.width=200;
 canvas.height =200 ;
const cX=canvas.width /2;
const cY=canvas.height /2;
const radius=50;

let startAngle=0;

function drawPreloader(){
   canvasText.clearRect(0,0,canvas.width,canvas.height);
   canvasText.beginPath();
   canvasText.arc(cX,cY,radius,0,Math.PI*2);
   canvasText.strokeStyle="white";
   canvasText.lineWidth=8;
   canvasText.stroke();
   canvasText.beginPath();
   canvasText.arc(cX,cY,radius,startAngle,startAngle+ Math.PI/2);
   canvasText.strokeStyle="red";
   canvasText.lineWidth=8;
   canvasText.stroke();
   startAngle+=0.02;
   requestAnimationFrame(drawPreloader);
}

drawPreloader();

/**
 

   <canvas id="preloader"></canvas> 
   <script src="preloader.js" type="text/Javascript" ></script>
 */