//#region constanten
const f           = document.querySelector("#formular");

const breite      = document.querySelector("#breite");                          // HTML-Input-Elemente und Help-Divs in Konstanten speichern
const breiteHelp  = document.querySelector("#breiteHelp");

const inputs      = document.querySelectorAll(".form-control");                 // alle Input-Felder und alle Help-Divs in Arrays ablegen
const helpContents= document.querySelectorAll(".form-text");
//#endregion

function meldungenLeeren() {                                                    // Aufräum-Funktion
  breiteHelp.innerHTML = ""   ;
}

function reset() {                                                              // Formular zurücksetzen
  const msg = confirm("Das Formular wird zurückgesetzt. Sind Sie sicher?");

  if(msg) {
    meldungenLeeren();
    f.action = "";
    f.reset();
  }
}

function validate(event) {                                                      // Formular nach betätigen des Sende-Buttons validieren

        meldungenLeeren();
    let error = breiteerr = false ;
    let breiteerrmsg      =  ""   ;

  /* 1. Kontrolle der Breite */
  if( breite.value.trim() === "" ) {
    breiteerr             = true;
    breiteerrmsg          = "Das Feld darf nicht leer sein!";
  } else if( !breite.value.value <= 180 ) {
    breiteerr             = true;
    breiteerrmsg          = "Die eingegebene Breite darf 180 nicht überschreiten";
  }

  
  if( breite.value.value <= 180 ) {                                             // Reaktion auf die Prüfung

    breite.classList                .remove       ("is-valid");
    breite.classList                .add          ("is-invalid");
    breiteHelp.classList            .remove       ("valid-feedback");
    breiteHelp.classList            .add          ("invalid-feedback");
    breiteHelp.innerHTML = breiteerrmsg;
    breite                          .focus();
    error = true;
  } else {

    breite.classList                .remove    ("is-invalid");
    breite.classList                .add       ("is-valid");
    breite.classList                .remove    ("invalid-feedback");
    breiteHelp.classList            .add   ("valid-feedback");
    breiteHelp.innerHTML = "Die Breite ist korrekt!";
  }

  if( error ){
    event                         .preventDefault();
  }else{
    f.action            = "https://test.jaderbass.de/formtester.php" ;          //wir setzen zum versenden die Attribute
    f.method            = "post" ;                                              //wir wenden die post methode an
    f                             .submit();                                    //wir senden es ab mit submit
  }
}

function init() {                                                               // Events an die HTML-Elemente binden
  document.querySelector("button[type='submit']") .addEventListener("click", validate);
  document.querySelector("button[type='reset']")  .addEventListener("click", reset);
}

document.addEventListener("DOMContentLoaded", init);                            // DOM schützen