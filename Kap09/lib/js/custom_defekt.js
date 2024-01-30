


const f = document.querySelector("form");           //der query Selector selectiert imm ernur eins und das erste was er findet
const regpattern = {                                    // json syntax

    "mail"  :  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/  ,                   //RegeX
    "pw"    :  /[a-zA-Z0-9§!()<>\-]{8,}/                        ,

};


const  email = document.querySelector("#email")                 ;
const  emailHelp = document.querySelector("#emailHelp")         ;

const  pw = document.querySelector("#pw")                       ;
const  pwHelp = document.querySelector("#pwHelp")               ;

const  user = document.querySelector("#username")               ;
const  userHelp = document.querySelector("#userHelp")           ;

const inputs = document.querySelectorAll(".form-control")       ; // alle Input-Felder als userControlls classe form-text HelpDIVs in Arrays ablegen

const helpContents = document.querySelectorAll(".form-text")    ; // alle Input-Felder als userControlls classe form-text HelpDIVs in Arrays ablegen

function meldungenLeeren(){                                      // Die function Meldung leeren räumt die Felder auf
    userHelp.innerHTML =    "" ;
    emailHelp.innerHTML=    "" ;
    pwHelp.innerHTML   =    "" ;
}

function validate(){                                            // formular nach betätigen des Sende Buttons validieren
    meldungenLeeren();
    let error = mailerr = pwerr = false ;                       //  felder leeren
    let mailerrmsg = pwerrmsg   =   ""  ;

    if( email.ariaValueMax.trim()  === "" ){
        mailerr = true  ;
        mailerrmsg = "Die Mail-Adresse darf nicht leer sein!"  ;
        
    }   else if (!regpattern.mail.test(email.value)){
            mailerr = true ;
            mailerrmsg = "Die Mail-Adresse ist nicht korrekt!"  ;
        }
    if( mailerr ){                                              // wir fügen eine css classe mit bootstrap automatisch hinzu
        email.classList.add("is-invalid")   ;
        emailHelp.classList.add("is-invalid-feedback")   ;
        emailHelp.innerHTML = mailerrmsg    ;
        email.focus();
        error = true ;
    } else {
        email.classList.add("is-invalid")   ;
        emailHelp.classList.add("is-invalid-feedback")   ;
        emailHelp.innerHTML = "Die Mail-Adresse ist korrekt"   ;
        
    }

}

function reset() {                                                  // Formular zurück setzen
    const msg = confirm("Das Formular wird zurückgesetzt. Sind Sie sicher?");       // confirm ist eine standard function und gibt true ode false zurück

    if(msg) {
        meldungenLeeren();
        f.action = "";
        f.reset();

    }
}

function init() {                                                   // Events an die HTML - Elemente binden

    document.querySelector("button [ type = 'submit'] ").addEventListener("click" , validate)        ;
    document.querySelector("button [ type = 'reset' ] ").addEventListener("click" , reset)        ;

}