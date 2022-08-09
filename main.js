noseX=0;
noseY=0;

function preload() {
    //clown_nose = loadImage('https://i.postimg.cc/hGL2YVgn/pngfind-com-nose-png-482965.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function draw() {
      image(video, 0, 0, 300, 300);
      fill(0,255,255);
      stroke(0,255,255);
      circle(noseX, noseY, 20);
      //mage(clown_nose, noseX, noseY, 20, 20);
    }

function take_snapshot() {
    save('myFilterImage.png')
}
function modelLoaded(){
    console.log("poseNet Model Loaded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -5;
        noseY = results[0].pose.nose.y -5;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = "  + results[0].pose.nose.y);
    }
}