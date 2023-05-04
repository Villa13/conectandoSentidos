document.addEventListener('DOMContentLoaded', function() {
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
        video.srcObject.getVideoTracks()[0].enabled = true;
    });
  
    btnDesactivarVideo.addEventListener('click', function() {
        video.srcObject.getVideoTracks()[0].enabled = false;
    });
  
    btnActivarAudio.addEventListener('click', function() {
        video.srcObject.getAudioTracks()[0].enabled = true;
    });
  
    btnDesactivarAudio.addEventListener('click', function() {
        video.srcObject.getAudioTracks()[0].enabled = false;
    });
  });