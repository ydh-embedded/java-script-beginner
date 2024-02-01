



function testeZeichen   ( forminhalt , erlaubteZeichen ){
    let alleZeichenOK =true ;
     for ( let i = 0 ; i < forminhalt.lenght ; i++){
 
 
 
 /*      if (erlaubteZeichen.regExp /[0-9]_\// ){
             alleZeichenOK = false;
             break ;
         } */
 
 
 
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

     const form = document.querySelector("#configPlate");                            /* wir prüfen auf eingabefeld */

     //#region  function checkForm : wir prüfen ob das Feld leer ist
     if( form.nachname.value.trim()  === "" ){
         fehlermeldung += " Bitte geben Sie Ihren Nachnamen ein!                 <br>"   ;
     }
     if( form.balken.value.trim()   === "" ){
         fehlermeldung += " Bitte geben Sie Ihren Nummer ein!                    <br>"   ;
     }
     if( form.farbe.value.trim() === "" ){
         fehlermeldung += " Bitte geben Sie Ihre farbe ein!                         <br>"   ;
     }
     if( form.finish.value.trim() === "" ){
         fehlermeldung += " Bitte geben Sie Ihre finish ein!                        <br>"   ;
     }
     if( form.breite.value.trim() === "" ){
         fehlermeldung += " Bitte geben Sie Ihre Breite ein!                        <br>"   ;
     }
     if( form.lange.value.trim() === "" ){
         fehlermeldung += " Bitte geben Sie Ihre Länge ein!                        <br>"   ;
     }
     if( form.starke.value.trim() === "" ){
         fehlermeldung += " Bitte geben Sie Ihre Stärke ein!                        <br>"   ;
     }



     //#region  function checkForm : wir prüfen die Eingabe
     if  ( ! testeZeichen ( form.balken.value , "123456789-/")){
         fehlermeldung += "Bitte geben Sie für die Nummer gültige Zeichen ein    <br>"   ;
     }





     //#region  function checkForm : wir geben eine FehlerMeldung aus wenn
     if  ( fehlermeldung !== ""){
         event.preventDefault();
         putStatus(fehlermeldung);
      return false;
     }   else    {
         return confirm("Möchten Sie Ihre Eingabe jetzt berechnen ?");
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
     const form = document.querySelector("#configPlate") ;
     form.onsubmit           = checkForm     ;                                               /*     wir reagieren auf das submit ereignis */
     form.onreset            = checkReset    ;                                               /*     wir reagieren auf das reset ereignis */
     
 
 
     form.form.onfocus        = () => {
         putStatus('Bitte geben Sie hier Ihre Tischplattenform ein');
     }
     form.form.onblur = clearStatus ;
 
 
 
     form.nachname.onfocus        = () => {
         putStatus('Bitte geben Sie hier Ihren Nachnamen ein');
     }
     form.nachname.onblur = clearStatus ;
 
 
 
     form.balken.onfocus    = () => {
         putStatus('Bitte geben Sie hier nur Ziffern ein');
     }                                                                                       /*     wir reagieren auf den focus */
     form.balken.onblur     = clearStatus ;
 
 
 
     form.farbe.onfocus  = () => {
         putStatus('Bitte geben Sie hier den Namen Ihrer Straße ein');
     }
     form.farbe.onblur   = clearStatus ;
 
 
 
     form.finish.onfocus  = () => {
         putStatus('Bitte geben Sie hier den Namen Ihrer Straße ein');
     }
     form.finish.onblur   = clearStatus ;
 
 
 
     form.breite.onfocus  = () => {
         putStatus('Bitte geben Sie hier den Namen Ihrer Straße ein');
     }
     form.breite.onblur   = clearStatus ;
 
 
 
     form.lange.onfocus  = () => {
         putStatus('Bitte geben Sie hier den Namen Ihrer Straße ein');
     }
     form.lange.onblur   = clearStatus ;
 
 
 
     form.starke.onfocus  = () => {
         putStatus('Bitte geben Sie hier den Namen Ihrer Straße ein');
     }
     form.starke.onblur   = clearStatus ;

 
 
 
 } );
 
 
 
 