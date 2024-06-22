document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
        document.body.style.overflow = "auto"; // Allow scrolling after loading
    }, 2000); // Set timeout duration to 2 seconds
});

document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const stopButton = document.getElementById('stop-button');
    const volumeSlider = document.getElementById('volume-slider');

    playButton.addEventListener('click', function() {
        audioPlayer.play();
    });

    pauseButton.addEventListener('click', function() {
        audioPlayer.pause();
    });

    stopButton.addEventListener('click', function() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });

    volumeSlider.addEventListener('input', function() {
        audioPlayer.volume = volumeSlider.value;
    });
});
