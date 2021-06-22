song="";
leftWristY = "";
rightWristY = "";

function preload()
{
    song = loadSound("music.mp3");
    play();
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;

        if(leftWristY < 250)
        {
            song = loadSound("music.mp3");
            play();
        }

        if(rightWristY < 250)
        {

            play();
        }
    }
}

function play()
{
    song.play();
}