const f = document.querySelector("form");
const regpattern = {
  "mail": /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
  "pw": /[a-zA-Z0-9§!()<>\-]{8,}/
};

// HTML-Input-Elemente und Help-Divs in Konstanten speichern
const email = document.querySelector("#email");
const emailHelp = document.querySelector("#emailHelp");

const pw = document.querySelector("#pw");
const pwHelp = document.querySelector("#pwHelp");

const user = document.querySelector("#username");
const userHelp = document.querySelector("#userHelp");

// alle Input-Felder und alle Help-Divs in Arrays ablegen
const inputs = document.querySelectorAll(".form-control");
const helpContents = document.querySelectorAll(".form-text");

// Aufräum-Funktion
function meldungenLeeren() {
  userHelp.innerHTML = emailHelp.innerHTML = pwHelp.innerHTML = "";
}

// Formular zurücksetzen
function reset() {
  const msg = confirm("Das Formular wird zurückgesetzt. Sind Sie sicher?");

  if(msg) {
    meldungenLeeren();
    f.action = "";
    f.reset();
  }
}

// #region wir prüfen mit der function validate die Eingabe des Users / Passworte & E-mail-Adresse
// Formular nach betätigen des Sende-Buttons validieren
function validate(event) {
  // Aufräum-Arbeiten
  meldungenLeeren();
  let error = mailerr = pwerr = false;
  let mailerrmsg = pwerrmsg = "";

  /* 1. Kontrolle der Mail-Adresse */
  if( email.value.trim() === "" ) {
    mailerr = true;
    mailerrmsg = "Die Mail-Adresse darf nicht leer sein!";
  } else if( !regpattern.mail.test(email.value) ) {
    mailerr = true;
    mailerrmsg = "Die Mail-Adresse ist nicht korrekt!";
  }

  // Reaktion auf die Prüfung
  if( mailerr ) {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
    emailHelp.classList.remove("valid-feedback");
    emailHelp.classList.add("invalid-feedback");
    emailHelp.innerHTML = mailerrmsg;
    email.focus();
    error = true;
  } else {

    email.classList.remove    ("is-invalid");
    email.classList.add       ("is-valid");
    email.classList.remove    ("invalid-feedback");
    emailHelp.classList.add   ("valid-feedback");
    emailHelp.innerHTML = "Die Mail-Adresse ist korrekt!";
  }

  
  if( pw.value.trim() === "" ) {                                                /* 1. Kontrolle der Passwort kopie von E-Mail Prüfung mit Abwandlungen */
    pwerr = true;
    pwerrmsg = "Die pw-Adresse darf nicht leer sein!";
  } else if( !regpattern.pw.test(pw.value) ) {
    pwerr = true;
    pwerrmsg = "Die pw-Adresse ist nicht korrekt!";
  }


  if( user.value.length < 8 ) {                                                 // Reaktion auf die Prüfung User
    user.classList.remove("is-valid");
    user.classList.add("is-invalid");
    userHelp.classList.remove("valid-feedback");
    userHelp.classList.add("invalid-feedback");
    userHelp.innerHTML = "Der Benutzername hat zu wenig Zeichen (mind. 8)!"
    user.focus();
    error = true;
  } else {

    user.classList.remove    ("is-invalid");
    user.classList.add       ("is-valid");
    user.classList.remove    ("invalid-feedback");
    userHelp.classList.add   ("valid-feedback");
    userHelp.innerHTML = "Der Benutzername ist korrekt!";
  }

  if( pwerr ) {                                                                   // Reaktion auf die Prüfung Passwort
    pw.classList.remove("is-valid");
    pw.classList.add("is-invalid");
    pwHelp.classList.remove("valid-feedback");
    pwHelp.classList.add("invalid-feedback");
    pwHelp.innerHTML = pwerrmsg;
    pw.focus();
    error = true;
  } else {

    pw.classList.remove    ("is-invalid");
    pw.classList.add       ("is-valid");
    pw.classList.remove    ("invalid-feedback");
    pwHelp.classList.add   ("valid-feedback");
    pwHelp.innerHTML = "Das Passwort ist korrekt!";
  }

  if( error ){

    event.preventDefault();

  }else{
    f.action = "https://test.jaderbass.de/formtester.php" ;                     //wir setzen zum versenden die Attribute
    f.method = "post" ;                                                         //wir wenden die post methode an
    f.submit();                                                                 //wir senden es ab mit submit
  }




}
//#endregion
// Events an die HTML-Elemente binden
function init() {
  document.querySelector("button[type='submit']").addEventListener("click", validate);
  document.querySelector("button[type='reset']").addEventListener("click", reset);
}

// DOM schützen
document.addEventListener("DOMContentLoaded", init);