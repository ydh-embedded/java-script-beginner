//#region  wir legen eine function testeZeichen mit checkForm an

function testeZeichen   ( forminhalt , erlaubteZeichen ){
    let alleZeichenOK =true ;
     for ( let i = 0 ; i < forminhalt.lenght ; i++){

        if (erlaubteZeichen.indexOf (formInhalt.charAt(i)) === -1 ){            /* wir prüfen ob jedes zeichen in der erlaubten liste drinnen steht */
            alleZeichenOK = false;
            break ;
        }
    }
    return alleZeichenOK    ;
}
function checkForm      (event)     {
        let fehlermeldung = ""  ;
        const form = document.querySelector("#configPlate");                    /* wir prüfen auf eingabefeld */

        if  ( form.breite.value.trim() === "" ){
                        fehlermeldung += " Bitte geben Sie Ihre Breite ein!                     <br>"   ;           //#region  function checkForm : wir prüfen ob das Feld leer ist
        }
        if  ( form.lange.value.trim() === "" ){
                        fehlermeldung += " Bitte geben Sie Ihre Länge ein!                  <br>"   ;
        }

        //  function checkForm : wir prüfen die Eingabe
        if  ( ! testeZeichen ( form.breite.value , "123456789-/")){
            fehlermeldung += "Bitte geben Sie für die Nummer gültige Zeichen ein    <br>"   ;
        }
        if  ( ! testeZeichen ( form.lange.value , "123456789-/")){
            fehlermeldung += "Bitte geben Sie für die Nummer gültige Zeichen ein    <br>"   ;
        }

        //  function checkForm : wir geben eine FehlerMeldung aus wenn
        if  ( fehlermeldung !== ""){
            putStatus(fehlermeldung);
            event.preventDefault();
        }   else    {
            return confirm("Möchten Sie Ihre Eingabe jetzt berechnen ?");
        }

}
//#endregion
//#region //#region function putStatus : nimm den text aus der variable und packe ihn in das DIV ein
function putStatus      (myText)    {
    document.querySelector("#status")
            .innerHTML      = myText;
}

function clearStatus    ()          {
    document.querySelector("#status")
            .innerHTML      = ""    ;
}

function checkReset     ()          {
    return confirm("Wollen Sie die Eingabe wirklich zurücksetzen?");
}
//#endregion
//#region  event by submit und reset
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#configPlate") ;
    form.onsubmit           = checkForm     ;                                               /*     wir reagieren auf das submit ereignis */
    form.onreset            = checkReset    ;                                               /*     wir reagieren auf das reset ereignis */

    form.breite.onfocus  = () => { putStatus('Bitte geben Sie hier die gewünschte Breite ein'       );}
    form.breite.onblur   = clearStatus ;

    form.lange.onfocus  = () => { putStatus('Bitte geben Sie hier die gewünschte Länge ein'         );}
    form.lange.onblur   = clearStatus ;

    

} );
//#endregion