HP_Theme_song = "";
PP_Song = "";


function setup(){
    canvas= createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide()
}

function draw(){
    image(video , 0, 0, 600 , 500);
}

function preload(){
    HP_Theme_song = loudSound("HP_Theme_song.mp3");
    PP_Song = loudSound("PP_Song.mp3");
}
