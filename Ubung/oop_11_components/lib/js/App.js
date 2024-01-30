import "./custom-card.js";                                              // Wir parsen diese Datei und geben nix an die aufrufende Stelle zurück(export entfällt hier)


document.addEventListener("DOMContentLoaded" , function() {

        let actionTrigger = document.querySelector("#action-trigger");
        actionTrigger.addEventListener("click" , function(){
            console.log('! action !');
            
        });
});