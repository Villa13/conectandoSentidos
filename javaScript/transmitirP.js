document.addEventListener('DOMContentLoaded', function() {
    let btnCapturar = document.getElementById('btnCapturar');
    let btnDesactivarCap = document.getElementById('btnDesactivarCap');
    let video = document.getElementById('videoCapturado');
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let stream = null;
    
    btnCapturar.addEventListener('click', () => {
      navigator.mediaDevices.getDisplayMedia({ video: true })
        .then(mediaStream => {
          stream = mediaStream;
          video.srcObject = stream;
          video.onloadedmetadata = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            setInterval(() => {
              ctx.drawImage(canvas.width, canvas.height);
            }, 1000 / 30);
          };
        })
        .catch(error => {
          console.error('Error al capturar la pantalla: ', error);
        });
    });
    
    btnDesactivarCap.addEventListener('click', () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
        video.srcObject = null;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });
  });
  