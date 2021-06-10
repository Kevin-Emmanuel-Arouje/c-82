canvas=document.getElementById ('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var lastPositionX, lastPositionY;
color="black";
widthofLine=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    widthofLine=document.getElementById("widthofLine").value; 
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    currentPosMx=e.clientX-canvas.offsetLeft;
    currentPosMy=e.clientY-canvas.offsetTop;

     if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofLine;
        console.log("last position of x and y cords =");
        console.log("x="+ lastPositionX + "y="+ lastPositionY);
        ctx.moveTo(lastPositionX, lastPositionY);
        console.log("current position of x and y cords =");
        console.log("x="+ currentPosMx + "y="+ currentPosMy);
        ctx.lineTo(currentPosMx, currentPosMy);
        ctx.stroke();
     }
     lastPositionX=currentPosMx;
     lastPositionY=currentPosMy;
}
function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
