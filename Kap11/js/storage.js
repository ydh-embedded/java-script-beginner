let counter = 0;
/* === DOM schützen === */
document.addEventListener("DOMContentLoaded", () => {
  
  /* === Speichern von Informationen === */
  document.querySelector("#b1").onclick = () => {
    // fortlaufend nummerierten Eintrag mit einer Zufallszahl im lokalen Speicher speichern
    localStorage.setItem("key" + counter++, Math.random());
  };

  /* === Lesen von Informationen === */
  document.querySelector("#b2").onclick = () => {
    // Variablen deklarieren
    let ausg = document.querySelector("#ausgabe");
    let j = 0;

    // leere Zeichenkette zuweisen
    ausg.innerHTML = "";

    // Speicherinhalt zeilenweise durchlaufen
    for( let i in localStorage) {
      // Prüfen ob der Inhalt nicht NULL ist
      if(localStorage.key(j) !== null) {
        // Schlüssel und Wert ausgeben
        ausg.innerHTML += localStorage.key(j++) + ": " + localStorage.getItem(i) + "<br>";
      }
    }
  };

  /* === Löschen von Informationen === */
  document.querySelector("#b3").onclick = () => {
    // Counter resetten
    counter = 0;
    // Speicher leeren
    localStorage.clear();
    // Ausgabe-Div leeren
    document.querySelector("#ausgabe").innerHTML = "";
  };
});