
document.addEventListener("DOMContentLoaded", () => {
  let aBtn = document.querySelectorAll("button");
  aBtn[0].onclick = playAudio;

  aBtn[1].onclick = () => {
    rewindAudio(30.0);
  };

  aBtn[2].onclick = () => {
    rewindAudio(10.0);
  };

  aBtn[3].onclick = () => {
    forwardAudio(10.0);
  };

  aBtn[4].onclick = () => {
    forwardAudio(30.0);
  };

  aBtn[5].onclick = restartAudio;
});



function playAudio() {
  let oAudio = getAudioElement();
  if(oAudio !== null) {
    let oBtn = document.querySelector("#play");

    // teste, ob der Song pausiert
    if(oAudio.paused) {
      oAudio.play();
      oBtn.innerHTML = "Pause";
    } else {
      oAudio.pause();
      oBtn.innerHTML = "Abspielen";
    }
  }
}


function getAudioElement() {
  let oAudio = null;
  if(window.HTMLAudioElement) {
    oAudio = document.querySelector("#myaudio");
  }
  return oAudio;
}



function rewindAudio(sek) {
  let oAudio = getAudioElement();
  if(oAudio !== null) {
    oAudio.currentTime -= sek;
  }
}

function forwardAudio(sek) {
  let oAudio = getAudioElement();
  if(oAudio !== null) {
    oAudio.currentTime += sek;
  }
}

function restartAudio() {
  let oAudio = getAudioElement();
  if(oAudio !== null) {
    oAudio.currentTime = 0;
  }
}