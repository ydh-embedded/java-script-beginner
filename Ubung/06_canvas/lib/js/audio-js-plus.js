function getAudioElement() {
  let oAudio = null;
  if(window.HTMLAudioElement) {
    oAudio = document.querySelector("#myaudio");
  }
  return oAudio;
}

function playAudio() {
  let oAudio = getAudioElement();
  if(oAudio !== null) {
    const oBtn = document.querySelector("#play"); 

    // teste, ob der Song pausiert
    if(oAudio.paused) {
      oAudio.play();
      // oBtn.innerHTML = "Pause";
      oBtn.classList.remove("icon-control-play");
      oBtn.classList.add("icon-control-pause");
    } else {
      oAudio.pause();
      // oBtn.innerHTML = "Abspielen";
      oBtn.classList.remove("icon-control-pause");
      oBtn.classList.add("icon-control-play");
    }
  }
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

document.addEventListener("DOMContentLoaded", () => {
  const aBtn = document.querySelectorAll("button");
  const oCurrTime = document.querySelector("#currTime");
  const oLine = document.querySelector("#timeLine > div");
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

  const oAudio = getAudioElement();
  
  // Zeitanzeige und Zeitleiste
  if(oAudio !== null) {
    oAudio.ontimeupdate = () => {
      let fCurrTime = oAudio.currentTime; // aktuelle Abspielzeit
      let fDuration = oAudio.duration; // Länge der Mediendatei
      let sCurrMinutes = (Math.floor(fCurrTime / 60)).toString().padStart(2, "0");
      let sCurrSeconds = (Math.floor(fCurrTime) % 60).toString().padStart(2, "0");

      // Ausgabe-Zeichenketten verbinden
      let sCurrTime = sCurrMinutes + ":" + sCurrSeconds;
      let sDuration = Math.floor(fDuration / 60) + ":" + Math.floor(fDuration % 60);

      // Zeitausgabe
      oCurrTime.textContent = sCurrTime + " / " + sDuration;
      
      // Zeitleiste
      // Abspielzeit in Prozent
      let sDurPercent = (fCurrTime * 100 / fDuration).toString();
      
      // Prozentwert mit Einheit der Breite der Linie hinzufügen
      oLine.style.width = sDurPercent + "%";
    };

    // Lautstärke
    const oVol = document.querySelector("#vol");

    oVol.onchange = () => {
      let fVol = parseFloat(oVol.value) / 100;
      oAudio.volume = fVol;
    };
  }


});