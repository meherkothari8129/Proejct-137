video = "";
object_name = "";

function preload()
{
}

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 480, 380);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("object_name").value;
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResults(results)
{
    if(results.length > 0)
    {
        rigthWristY = results[0].pose.rightWrist.y;
        rigthWristX = results[0].pose.rightWrist.x;
        scorerightWrist = results[0].pose.keypoints[10].score;
    }
}