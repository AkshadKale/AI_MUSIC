HP_Theme_song = "";
PP_Song = "";
left_WristX = "";
left_WristY = "";
right_WristX = "";
right_WristY = "";

function setup(){
    canvas= createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
    image(video , 0, 0, 600 , 500);
}

function preload(){
    HP_Theme_song = loudSound("HP_Theme_song.mp3");
    PP_Song = loudSound("PP_Song.mp3");
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        left_WristX = results[0].pose.leftWrist.x;
        left_WristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + left_WristX + "left Wrist Y = " + left_WristY);

        right_WristX = results[0].pose.rightWrist.x;
        right_WristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + right_WristX + "Right Wrist Y = " + right_WristY);
    
    }
}
