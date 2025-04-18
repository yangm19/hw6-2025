var video;
var currentSpeed = 1; //to track current speed and start at normal

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("video");

	// disable autoplay and loop
	video.autoplay = false;
    video.loop = false;

	// Play button
    document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
        video.play();
        updateVolumeInfo();
    });

    // Pause button
    document.querySelector("#pause").addEventListener("click", function() {
        video.pause();
    });

    // Slow down button
    document.querySelector("#slower").addEventListener("click", function() {
        currentSpeed *= 0.9; // Slow down by 10%
        video.playbackRate = currentSpeed;
        console.log("New speed: " + (currentSpeed * 100).toFixed(2) + "%");
    });

    // Speed up button
    document.querySelector("#faster").addEventListener("click", function() {
        currentSpeed *= 1.1; // Speed up by 10%
        video.playbackRate = currentSpeed;
        console.log("New speed: " + (currentSpeed * 100).toFixed(2) + "%");
    });

    // Skip ahead button
    document.querySelector("#skip").addEventListener("click", function() {
        var newTime = video.currentTime + 10; // Skip ahead by 10 seconds
        if (newTime >= video.duration) {
            video.currentTime = 0; // If exceeded duration, reset to start
        } else {
            video.currentTime = newTime;
        }
        console.log("Current time: " + video.currentTime.toFixed(2) + " seconds");
    });

    // Mute button
    document.querySelector("#mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            document.querySelector("#mute").textContent = "Mute";
        } else {
            video.muted = true;
            document.querySelector("#mute").textContent = "Unmute";
        }
    });

    // Volume slider
    var volumeSlider = document.querySelector("#slider");
    volumeSlider.addEventListener("input", function() {
        video.volume = volumeSlider.value / 100; // Convert slider value to 0-1 range
        updateVolumeInfo();
    });

    // Old School button
    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    // Original button
    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });

    // Update the volume info display
    function updateVolumeInfo() {
        var volumeDisplay = document.querySelector("#volume");
        volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
    }
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

