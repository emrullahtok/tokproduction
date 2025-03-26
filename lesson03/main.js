let canvasOyun;

function startCanvas(){
    canvasOyun= new component(50,50,"red",10,50);
    OyunAlan.start();
}


var OyunAlan={
    canvas:document.createElement("canvas"),
    start:function(){
        this.canvas.width=500;
        this.canvas.height=500;
        this.context=this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas,document.body.childNodes[0]);
        this.interval=setInterval(updateOyun,5)
 
    },
    clear: function(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
}


function component(width,height,color,x,y){
    this.width=width;
    this.height=height;
    this.x=x;
    this.y=y;
    this.update=function(){
        
            context=OyunAlan.context;
            context.fillStyle=color;
            context.fillRect(this.x,this.y,this.width,this.height)
       
       
    }
}
let NumberX=4;
function updateOyun(){
    OyunAlan.clear();
   
         if(NumberX==1){canvasOyun.y-=1};
         if(NumberX==2){canvasOyun.y+=1};
         if(NumberX==3){canvasOyun.x-=1};
         if(NumberX==4){canvasOyun.x+=1};
 
   
    canvasOyun.update();
}

function YonVer(x){
  NumberX=Number(x);

}


















/** 

cpen.beginPath();
cpen.moveTo(20,20);
cpen.lineTo(20,200);
cpen.lineTo(200,200);
cpen.lineTo(200,20);
cpen.lineTo(20,20);
cpen.strokeStyle="blue";
cpen.stroke();


cpen.beginPath();
cpen.moveTo(110,320);
cpen.lineTo(20,500);
cpen.lineTo(200,500);
cpen.lineTo(110,320);
cpen.strokeStyle="red";
cpen.stroke();

cpen.fillStyle="black"
cpen.fillRect(300,300,120,120)
 
cpen.strokeStyle="cyan"
cpen.lineWidth=8;
cpen.strokeRect(300,150,120,120)

 
cpen.fillStyle="yellow"
cpen.fillRect(300,10,120,120)

cpen.strokeStyle="red"
cpen.lineWidth=8;
cpen.strokeRect(300,10,120,120)
 
cpen.beginPath();
cpen.arc(350,500,50,0,2*Math.PI/3)
cpen.stroke();



*/