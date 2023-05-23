let localStream;
let remoteStream;

const video = document.getElementById('video');
const videoS = document.getElementById('videoS');

const configuration = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    { urls: 'stun:stun2.l.google.com:19302' }
  ]
};

const constraints = {
  video: true,
  audio: true
};

navigator.mediaDevices.getUserMedia(constraints)
  .then(stream => {
    localStream = stream;
    video.srcObject = stream;
  })
  .catch(error => {
    console.error('getUserMedia error:', error);
  });

const peerConnection = new RTCPeerConnection(configuration);

peerConnection.ontrack = event => {
  remoteStream = event.streams[0];
  videoS.srcObject = remoteStream;
};

peerConnection.onicecandidate = event => {
  if (event.candidate) {
    sendToServer({ type: 'candidate', candidate: event.candidate });
  }
};

function sendToServer(message) {
    fetch('https://conectandosentidos.me/html/reunion.html', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      // lógica para manejar la respuesta del servidor
    }).catch(error => {
      console.error('Error al enviar mensaje al servidor:', error);
    });
  }

function startCall() {
    const btnIniciarLlamada = document.getElementById('btnIniciarLlamada');
    btnIniciarLlamada.onclick = () => {
        localStream.getTracks().forEach(track => {
            peerConnection.addTrack(track, localStream);
          });
        
          const offerOptions = {
            offerToReceiveAudio: true,
            offerToReceiveVideo: true
          };
        
          peerConnection.createOffer(offerOptions)
            .then(offer => {
              return peerConnection.setLocalDescription(offer);
            })
            .then(() => {
              sendToServer({ type: 'offer', offer: peerConnection.localDescription });
            })
            .catch(error => {
              console.error('createOffer error:', error);
            });
    };
  }

function handleAnswer(answer) {
  peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
}

function handleCandidate(candidate) {
  peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
}
