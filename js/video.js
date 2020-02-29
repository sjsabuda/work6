var video;


function getVid(){
	let video = document.querySelector("#myVideo");
	// video = document.getElementById("myVideo");
	// console.log(video);
}

function playVid() { 
	// video.play();
	// console.log("Play Video");

	// volume.innerHTML = video.volume * 100 + "%";
	let video = document.querySelector("#myVideo");
	console.log("Play Video");
	video.play();
}


function pauseVid() { 
	let video = document.querySelector("#myVideo");
	console.log("Pause Video");
	video.pause();
} 

function decreaseSpeed() { 
	let video = document.querySelector("#myVideo");
	video.playbackRate *= 0.80;
  	console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
	let video = document.querySelector("#myVideo");
	video.playbackRate *= 1.25;
	console.log("Speed is " + video.playbackRate);
} 

function skipAhead() {
    let video = document.querySelector("#myVideo");
    if (video.currentTime + 60 < video.duration){
        video.currentTime += 60;
        console.log("Current location is " + video.currentTime);}
    else {
        video.currentTime = 0;
        video.playbackRate = 1;
        console.log("Current location is " + video.currentTime);
    }
}

function mute() { 
  	let video = document.querySelector("#myVideo");
  	if (video.muted) {
  		video.muted = false;
  		console.log("Unmuted");
  		document.querySelector("#mute").innerHTML = "Mute";
  	}
  		else{
  			video.muted = true;
  			console.log("Muted");
  			document.querySelector("#mute").innerHTML = "Unmute";
  		}	
}

function changeVolume() {
	let video = document.querySelector("#myVideo");
	let slider = document.querySelector("#volumeSlider");
	console.log(slider.value);
	video.volume = (slider.value / 100);
	console.log("Volume is " + video.volume);
	volume.innerHTML = (slider.value) + "%";
}
       

function gray() { 
	let video = document.querySelector("#myVideo");
	video.classList.toggle("grayscale");
	console.log("In grayscale")
}

function color() {
	let video = document.querySelector("#myVideo");
	video.classList.toggle("grayscale");
	console.log("In color")
}