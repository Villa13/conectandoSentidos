const avatar = document.querySelector('#avatar');
const recognition = new webkitSpeechRecognition();

recognition.lang = 'es-ES';
recognition.interimResults = true;

recognition.onresult = function(event) {
  const last = event.results.length - 1;
  const spokenText = event.results[last][0].transcript.toLowerCase();

  if (spokenText.includes('izquierda')) {
    avatar.style.transform = 'translateX(-100px)';
  } else if (spokenText.includes('derecha')) {
    avatar.style.transform = 'translateX(100px)';
  }
}

recognition.start();