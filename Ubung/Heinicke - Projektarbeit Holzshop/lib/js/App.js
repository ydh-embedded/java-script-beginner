



function testeZeichen   ( forminhalt , erlaubteZeichen ){
    let alleZeichenOK = true ;
        for ( let i = 0 ; i < forminhalt.lenght ; i++){

            if (erlaubteZeichen.indexOf (formInhalt.charAt(i)) === -1 ){            /* wir prüfen ob jedes zeichen in der erlaubten liste drinnen steht */
                alleZeichenOK = false;
                break ;
            }
        }
    return alleZeichenOK    ;

}

 function checkForm      (event)     {
     //#region  function checkForm : wir legen die Variable fehlermeldung an
     let fehlermeldung = ""  ;
     //#endregion
     //#region  function checkForm : wir geben tesweise aus ob die Daten im Formular ankommen
 /*     event.preventDefault();  */
 /*     console.log(form);       */
 //#endregion
     //#region  function checkForm : wir prüfen auf das Eingabefeld
     const form = document.querySelector("#anmeldeform");                            /* wir prüfen auf eingabefeld */
     //#endregion
     //#region  function checkForm : wir prüfen ob das Feld leer ist
     if( form.nachname.value.trim()  === "" ){
         fehlermeldung += " Bitte geben Sie Ihren Nachnamen ein!                 <br>"   ;
     }
     if( form.telefon.value.trim()   === "" ){
         fehlermeldung += " Bitte geben Sie Ihren Nummer ein!                    <br>"   ;
     }
     if( form.anschrift.value.trim() === "" ){
         fehlermeldung += " Bitte geben Sie Ihre Anschrift ein!                  <br>"   ;
     }
     if( form.plz.value.trim()       === "" ){
         fehlermeldung += " Bitte geben Sie Ihre PLZ ein!                        <br>"   ;
     }
     if( form.ort.value.trim()       === "" ){
         fehlermeldung += " Bitte geben Sie Ihren Ort ein!                       <br>"   ;
     }
     if( form.mail.value.trim()      === "" ){
         fehlermeldung += " Bitte geben Sie Ihre E-Mail ein!                     <br>"   ;
     }
 //#endregion
     //#region  function checkForm : wir prüfen die Eingabe der TelefonNummer
     if  ( ! testeZeichen ( form.telefon.value , "123456789-/")){
         fehlermeldung += "Bitte geben Sie für die Nummer gültige Zeichen ein    <br>"   ;
     }
     //#endregion
     //#region  function checkForm : wir prüfen ob die PLZ okay ist
     if  ( ! testeZeichen ( form.plz.value , "123456789")){
         fehlermeldung += "Bitte geben Sie für die Postleitzahl gültige Zeichen ein    <br>"   ;
     }
 
     if (form.plz.value.length !== 5 ) {
         fehlermeldung += "Bitte auf 5 Ziffern eingeben" ;
     }
 //#endregion
     //#region  function checkForm : wir prüfen ob die E-Mail korrekt eingegeben wurde
 if (! checkEmail(form.mail.value) ) {
         fehlermeldung += "Die eingegebene Mail Adresse ist nicht korrekt"   ;
     }
 
 function checkEmail(mailString){
         let suche = /^[\w\.\-]{2,}\@[äöüa-z0-9\-\.]{1,}\.[a-z]{2,4}$/i      ;
         return suche.test(mailString) ;
     }
 //#endregion
     //#region  function checkForm : wir geben eine FehlerMeldung aus wenn
     if  ( fehlermeldung !== ""){
         event.preventDefault();
         putStatus(fehlermeldung);
      return false;
     }   else    {
         return confirm("Möchten Sie Ihre Daten jetzt absenden");
     }
     //#endregion
 }
 function putStatus      (myText)    {
     //#region function putStatus : nimm den text aus der variable und packe ihn in das DIV ein
     document.querySelector("#status")
 
             .innerHTML      = myText;
 }
 function clearStatus    ()          {
     document.querySelector("#status")
 
             .innerHTML      = ""    ;
 }
 function checkReset     ()          {
     return confirm("Wollen Sie das Formular wirklich zurücksetzen?");
 }
 document.addEventListener("DOMContentLoaded", () => {
     const form = document.querySelector("#anmeldeform") ;
     form.onsubmit           = checkForm     ;                                               /*     wir reagieren auf das submit ereignis */
     form.onreset            = checkReset    ;                                               /*     wir reagieren auf das reset ereignis */
     
 
 
     form.vorname.onfocus        = () => {
         putStatus('Bitte geben Sie hier Ihren Vornamen ein');
     }
     form.vorname.onblur = clearStatus ;
 
 
 
     form.nachname.onfocus        = () => {
         putStatus('Bitte geben Sie hier Ihren Nachnamen ein');
     }
     form.nachname.onblur = clearStatus ;
 
 
 
     form.telefon.onfocus    = () => {
         putStatus('Bitte geben Sie hier nur Ziffern ein');
     }                                                                                       /*     wir reagieren auf den focus */
     form.telefon.onblur     = clearStatus ;
 
 
 
     form.anschrift.onfocus  = () => {
         putStatus('Bitte geben Sie hier den Namen Ihrer Straße ein');
     }
     form.anschrift.onblur   = clearStatus ;
 
 
 
     form.plz.onfocus        = () => {
         putStatus('Bitte geben Sie hier Ihre Postleitzahl ein');
     }
     form.plz.onblur = clearStatus ;
 
 
 
     form.ort.onfocus        = () => {
         putStatus('Bitte geben Sie hier Ihren Wohnort ein');
     }
     form.ort.onblur = clearStatus ;
 
 
 
 } );
 
 
 
 