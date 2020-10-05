// const backgroundColor = [230,220,190];
const myCanvas = { width: 750, height: 700};
const backgroundColor = [156, 255, 238];
const lineColor = [255, 165, 140];
const activeLineColor = [255, 204, 176];
const lineWidth = 10;
const activelineWidth = 9;
const sounds = Array.from({ length: 6 });

const ball1 = {//white
    x: 300,
    y: 550,
    size: 110,
    speed: 5,
    fillColor: [199, 250, 252],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 2000,
} 

const ball2 = {//yellow
    x: 300,
    y: 450,
    size: 50,
    speed: 5,
    fillColor: [232, 255, 201],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 1000,
} 

const ball3 = {//light pink
    x: 300,
    y: 100,
    size: 30,
    speed: 2,
    fillColor: [227, 237, 252],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 500,
} 

const ball4 = {//light grey
    x: 300,
    y: 200,
    size: 40,
    speed: 3,
    fillColor: [220, 245, 243],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 500,
} 

const ball5 = {//light green
    x: 300,
    y: 300,
    size: 50,
    speed: 5,
    fillColor: [199, 255, 234],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 500,
} 

const ball6 = {//grey green
    x: 300,
    y: 350,
    size: 70,
    speed: 3,
    fillColor: [147, 237, 236],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 500,
} 

const ball7 = {//pink
    x: 300,
    y: 500,
    size: 120,
    speed: 9,
    fillColor: [241, 215, 247],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 500,
} 

const ball8 = {//green
    x: 300,
    y: 500,
    size: 80,
    speed: 5,
    fillColor: [126, 230, 192],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 500,
} 

const ball9 = {//bluegreen
    x: 300,
    y: 600,
    size: 100,
    speed: 7,
    fillColor: [24, 197, 204],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 500,
} 

const ball10 = {//blue
    x: 300,
    y: 550,
    size: 80,
    speed: 4,
    fillColor: [126, 200, 252],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 500,
} 

const leftEdge = {
    x1: 100,
    y1: 50,
    x2: 100,
    y2: 650,
    color: lineColor,
    width: lineWidth,

}

const bottomEdge = {
    x1: 100,
    y1: 50,
    x2: 650,
    y2: 50,
    color: lineColor,
    width: lineWidth,

}

const topEdge = {
    x1: 100,
    y1: 650,
    x2: 650,
    y2: 650,
    color: lineColor,
    width: lineWidth,

}

const rightEdge = {
    x1: 650,
    y1: 50,
    x2: 650,
    y2: 650,
    color: lineColor,
    width: lineWidth,
}




const balls = [ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10];



function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.mp3`)
    })

    console.log(sounds);

    ball1.rightSound = sounds[0];
    ball1.leftSound = sounds[1];

    ball2.rightSound = sounds[0];
    ball2.leftSound = sounds[1];

    ball3.rightSound = sounds[0];
    ball3.leftSound = sounds[1];

    ball4.rightSound = sounds[0];
    ball4.leftSound = sounds[1];

    ball5.rightSound = sounds[0];
    ball5.leftSound = sounds[1];

   ball6.rightSound = sounds[0];
    ball6.leftSound = sounds[1];

   ball7.rightSound = sounds[0];
    ball7.leftSound = sounds[1];

  ball8.rightSound = sounds[0];
   ball8.leftSound = sounds[1];

    ball9.rightSound = sounds[0];
    ball9.leftSound = sounds[1];

  ball10.rightSound = sounds[0];
    ball10.leftSound = sounds[1];

    // for(let i = 0; i < sounds.length; i++){
    //     sounds[i] = loadSound(`sounds/${i}.mp3`)
    // }
}

function setup(){
    createCanvas(myCanvas.width, myCanvas.height);
    background(backgroundColor);
}



function draw(){
    
    background(backgroundColor);

    balls.forEach((ball) => {
        updateBall(ball);
        displayBall(ball);
    })
    drawLine(leftEdge);
    drawLine(rightEdge);

    drawLine(topEdge);
    drawLine(bottomEdge);
}


function updateBall(ball){
    console.log(ball.x);
    if(ball.x + ball.size/2 > rightEdge.x1 ){
        ball.speed *= -1;
        ball.rightSound.play();
        activateLine(rightEdge);
    } else if(ball.x - ball.size/2 < leftEdge.x1 ){
        ball.speed *= -1;
        ball.leftSound.play();
        activateLine(leftEdge);
    }
    ball.x+= ball.speed;
}


const displayBall = ({x, y, size, strokeColor, fillColor, ballStrokeWeight}) => {
        stroke(strokeColor);
        fill(fillColor);
        strokeWeight(ballStrokeWeight);
        ellipse(x, y, size);
}

function drawLine({x1, y1, x2, y2, color, width}){
    stroke(color);
    strokeWeight(width);
    line(x1, y1, x2, y2);
}



function activateLine(line){

    line.color = activeLineColor;
    line.width = activelineWidth;

    setTimeout(() => resetLines(line), 500);
}


function resetLines(line){
    line.color = lineColor;
    line.width = lineWidth;
}