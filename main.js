function preload () {

}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createrCapture(VIDEO);
    video.size(300,300);
    video.hide();
}
    

function take_snapshot(){
    save('myFilterImage.png')
}
