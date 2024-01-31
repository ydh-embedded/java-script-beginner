let counter = 0;
/* === DOM schützen === */
document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("#b1").onclick = () => {                                 /* === Speichern von Informationen === */
    
    localStorage.setItem("key" + counter++, Math.random());                     // fortlaufend nummerierten Eintrag mit einer Zufallszahl im lokalen Speicher speichern
  };


  document.querySelector("#b2").onclick = () => {                                   /* === Lesen von Informationen === */

    let ausg = document.querySelector("#ausgabe");                                  // Variablen deklarieren
    let j = 0;


    ausg.innerHTML = "";                                                                // leere Zeichenkette zuweisen


    for( let i in localStorage) {                                                     // Speicherinhalt zeilenweise durchlaufen

      if(localStorage.key(j) !== null) {                                                  // Prüfen ob der Inhalt nicht NULL ist

        ausg.innerHTML += localStorage.key(j++) + ": " + localStorage.getItem(i) + "<br>";                // Schlüssel und Wert ausgeben
      }
    }
  };


  document.querySelector("#b3").onclick = () => {                                     /* === Löschen von Informationen === */

    counter = 0;                                                                      // Counter resetten

    localStorage.clear();                                                                 // Speicher leeren

    document.querySelector("#ausgabe").innerHTML = "";                                        // Ausgabe-Div leeren
  };
});