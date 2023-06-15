nosex=0;
nosey=0;
rightwristx=0;
leftwristx=0;
difference=0;
function setup(){
video=createCapture(VIDEO);
video.size(500,560);
canvas=createCanvas(500,560);
canvas.position(500,200);
posenet=ml5.poseNet(video,modeloaded);
posenet.on('pose',gotposes);
}
function modeloaded(){
console.log('posenet is initialized');
}
