document.addEventListener('DOMContentLoaded', function() {
    let videoS = document.getElementById('videoS');
    let video = document.getElementById('video');
    let btnActivarVideo = document.getElementById('btnActivarVideo');
    let btnDesactivarVideo = document.getElementById('btnDesactivarVideo');
    let btnActivarAudio = document.getElementById('btnActivarAudio');
    let btnDesactivarAudio = document.getElementById('btnDesactivarAudio');
  
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(function(stream) {
        videoS.srcObject = stream;
        video.srcObject = stream;
    }).catch(function(err) {
        console.log("Error: " + err);
    });
  
    btnActivarVideo.addEventListener('click', function() {  
        videoS.srcObject.getVideoTracks()[0].enabled = true;
        video.srcObject.getVideoTracks()[0].enabled = true;
    });
  
    btnDesactivarVideo.addEventListener('click', function() {
        videoS.srcObject.getVideoTracks()[0].enabled = false;
        video.srcObject.getVideoTracks()[0].enabled = false;
    });
  
    btnActivarAudio.addEventListener('click', function() {
        videoS.srcObject.getAudioTracks()[0].enabled = true;
        video.srcObject.getAudioTracks()[0].enabled = true;
    });
  
    btnDesactivarAudio.addEventListener('click', function() {
        videoS.srcObject.getAudioTracks()[0].enabled = false;
        video.srcObject.getAudioTracks()[0].enabled = false;
    });
});