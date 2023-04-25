let video = document.getElementById('video');
let btnActivarVideo = document.getElementById('btnActivarVideo');
let btnDesactivarVideo = document.getElementById('btnDesactivarVideo');
let btnActivarAudio = document.getElementById('btnActivarAudio');
let btnDesactivarAudio = document.getElementById('btnDesactivarAudio');

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(function(stream) {
    video.srcObject = stream;
}).catch(function(err) {
    console.log("Error: " + err);
});

btnActivarVideo.addEventListener('click', function() {  
    video.muted = false;
});

btnDesactivarVideo.addEventListener('click', function() {
    video.muted = true;
});

btnActivarAudio.addEventListener('click', function() {
    video.volume = 1;
});

btnDesactivarAudio.addEventListener('click', function() {
    video.volume = 0;
});