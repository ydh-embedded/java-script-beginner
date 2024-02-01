//#region constanten
const f           = document.querySelector("#formular");

const breite      = document.querySelector("#breite");                          // HTML-Input-Elemente und Help-Divs in Konstanten speichern
// const breiteHelp  = document.querySelector("#breiteHelp");

const lange       = document.querySelector("#lange");
// const langeHelp   = document.querySelector("#langeHelp");

const inputs      = document.querySelectorAll(".form-control");                 // alle Input-Felder und alle Help-Divs in Arrays ablegen
// const helpContents= document.querySelectorAll(".form-text");

//#endregion

function meldungenLeeren() {                                                    // Aufräum-Funktion
  /* breiteHelp.innerHTML  = ""   ;
  langeHelp.innerHTML   = ""   ; */
}
function price() {
/* 	var menge  = document.getElementById("Summe").formstarke.value; */
    var starke = document.getElementById("formStarke").value;
    
    console.log(starke);
    
    with (document.getElementById("formStarke")) {
      
      switch (formStarke.options.selectedIndex) {

        case 0:
          starke = 1;
          break;
        case 1:
          starke = 1000;
          break;
        case 2:
          starke = 1000 * 1000;
          break;
        case 3:
          starke = 1000 * 1000 * 1000;
          break;
        case 4:
          starke = 1000 * 1000;
          break;
        case 5:
          starke = 1000 * 1000 * 100;
          break;
        }
        alert(starke);
  
  /* 		cmm.value = menge * tausender;
      ccm.value = menge * tausender / 1000;
      cdm.value = menge * tausender / 1000 / 1000;
      cm.value = menge * tausender / 1000 / 1000 / 1000; */
  
  
  /* 		liter.value = menge * tausender / 1000 / 1000;
      hektoliter.value = menge * tausender / 1000 / 1000 / 100;
   */
  
  
  
    }
  };
  

function validate(event) {                                                      // Formular nach betätigen des Sende-Buttons validieren

  meldungenLeeren();
  let error = breiteerr = langeerr = false ;
  let breiteerrmsg      =  ""   ;
  let langeerrmsg       =  ""   ;

/* 1. Kontrolle der Breite */
if( breite.value.trim() === "" ) {
  breiteerr             = true;
  breiteerrmsg          = "Das Feld darf nicht leer sein!";
} else if( breite.value > 180 ) {
  breiteerr             = true;
  breiteerrmsg          = "Die eingegebene Breite darf 180 nicht überschreiten";
}

  
if( breiteerr ) {                                             // Reaktion auf die Prüfung

    breite.classList                .remove       ("is-valid");
    breite.classList                .add          ("is-invalid");
/*  breiteHelp.classList            .remove       ("valid-feedback"); */
/*  breiteHelp.classList            .add          ("invalid-feedback"); */
/*  breiteHelp.innerHTML = breiteerrmsg; */
    breite                          .focus();
    error = true;
} else {

    breite.classList                .remove    ("is-invalid");
    breite.classList                .add       ("is-valid");
    breite.classList                .remove    ("invalid-feedback");
/*  breiteHelp.classList            .add       ("valid-feedback"); */
/*  breiteHelp.innerHTML = "Die Breite ist korrekt!"; */
}

/* 2. Kontrolle der Längen Eingabe  */
if( lange.value.trim()              === "" ) {
    langeerr                            = true;
    langeerrmsg         = "Das Feld Länge darf nicht leer sein!";
} else if( lange.value.value > 450 ) {
    langeerr                            = true;
    langeerrmsg         = "Die Länge ist nicht korrekt!";
}

if( langeerr ) {                                              // Reaktion auf die Prüfung lange

    lange.classList                     .remove ("is-valid");
    lange.classList                     .add    ("is-invalid");
/*  langeHelp.classList                 .remove ("valid-feedback"); */
/*  langeHelp.classList                 .add    ("invalid-feedback"); */
/*  langeHelp.innerHTML = langeerrmsg ; */
    lange                               .focus();
    error = true;
} else {

    lange.classList                     .remove     ("is-invalid");
    lange.classList                     .add        ("is-valid");
    lange.classList                     .remove     ("invalid-feedback");
/*  langeHelp.classList                 .add        ("valid-feedback"); */
/*  langeHelp.innerHTML = "Die eingegebene Länge ist korrekt!"; */
}
if( error ){
  alert("Die Eingabe ist nicht korrekt");
  console.log(error)
  
  event                         .preventDefault();
}else{
  /* f.action            = "https://test.jaderbass.de/formtester.php" ; */          //wir setzen zum versenden die Attribute
  /* f.method            = "post" ; */                                              //wir wenden die post methode an
  /* f.submit(); */                                                                 //wir senden es ab mit submit
  price();
}

}

function reset() {                                                              // Formular zurücksetzen
  const msg = confirm("Das Formular wird zurückgesetzt. Sind Sie sicher?");

  if(msg) {
    meldungenLeeren();
    f.action = "";
    f.reset();
  }
}

function init(event) {                                                          // Events an die HTML-Elemente binden
  document.querySelector("input[type='submit']").addEventListener("click", validate);
  document.querySelector("input[type='reset']").addEventListener("click", reset);
  
}

document.addEventListener("DOMContentLoaded", init);                            // DOM schützen