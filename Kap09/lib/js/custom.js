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

// Formular nach betätigen des Sende-Buttons validieren
function validate() {
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
    email.classList.add("is-invalid");
    emailHelp.classList.add("invalid-feedback");
    emailHelp.innerHTML = mailerrmsg;
    email.focus();
    error = true;
  } else {
    email.classList.add("is-valid");
    emailHelp.classList.add("valid-feedback");
    emailHelp.innerHTML = "Die Mail-Adresse ist korrekt!";
  }
}

// Events an die HTML-Elemente binden
function init() {
  document.querySelector("button[type='submit']").addEventListener("click", validate);
  document.querySelector("button[type='reset']").addEventListener("click", reset);
}

// DOM schützen
document.addEventListener("DOMContentLoaded", init);