//#region constanten
const f           = document.querySelector("#formular");

const lange       = document.querySelector("#lange");
const langeHelp   = document.querySelector("#langeHelp");

const inputs      = document.querySelectorAll(".form-control");                 // alle Input-Felder und alle Help-Divs in Arrays ablegen
const helpContents= document.querySelectorAll(".form-text");
//#endregion

function meldungenLeeren() {                                                    // Aufräum-Funktion
  langeHelp.innerHTML  = ""   ;
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
    let error = langeerr  = false ;
    let langeerrmsg       = ""    ;

  /* 2. Kontrolle der Längen Eingabe  */
  if( lange.value.trim()  === "" ) {
    langeerr              = true;
    langeerrmsg           = "Das Feld Länge darf nicht leer sein!";
  } else if( !lange.value.value <= 450 ) {
    langeerr              = true;
    langeerrmsg           = "Die Länge ist nicht korrekt!";
  }

  if( lange.value.value <= 450 ) {                                              // Reaktion auf die Prüfung lange

    lange.classList               .remove ("is-valid");
    lange.classList               .add    ("is-invalid");
    langeHelp.classList           .remove ("valid-feedback");
    langeHelp.classList           .add    ("invalid-feedback");
    langeHelp.innerHTML = langeerrmsg ;
    lange                         .focus();
    error = true;
  } else {

    lange.classList               .remove     ("is-invalid");
    lange.classList               .add        ("is-valid");
    lange.classList               .remove     ("invalid-feedback");
    langeHelp.classList           .add        ("valid-feedback");
    langeHelp.innerHTML = "Die eingegebene Länge ist korrekt!";
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