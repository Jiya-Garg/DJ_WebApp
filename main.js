scoreLeftWrist = 0;
songStatus1 = "";
peterpansong ="";
harrypottersong ="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload() {
    peterpansong = loadSound("music.mp3");
    harrypottersong = loadSound("music.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 600, 500)
    fill("#FFOOOO");
    stroke("FFOOOO");
    //peterpansong.isPlaying(true)
    //songStatus1 = peterpansong;
    if(scoreLeftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        harrypottersong.stop()
        //if(songStatus1 == false) {
            peterpansong.play();
            document.getElementById("SongName").innerHTML = "Song Name = Peter Pan";
        }
}
function modelLoaded() {
    console.log('Model is Loaded!')
}
function gotPoses(results) {
    if(results.length > 0) {
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("ScoreLeftWrist = " + scoreLeftWrist);
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}