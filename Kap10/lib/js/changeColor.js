document.addEventListener("DOMContentLoaded" , event => {
    with(document){
        querySelector("#farbe1").style.backgroundColor = "#fae1ff";
        querySelector("#farbe2").style.backgroundColor = "#efe1ff";
        querySelector("#farbe3").style.backgroundColor = "#fae1ff";
        querySelector("#farbe4").style.backgroundColor = "#efe1ff";
        
        //Erreignishandler für die <li></li> Elemente
        
        let aListe = document.querySelectorAll("li");                                   //a als syntax weil es sich hier um ein array handeln soll
        
            for( let i = 0 ; i < aListe.length; i++ ){
                aListe[i].onclick = () => {
                        changeColor(aListe[i].id);
                }
            }
    }
});



function changeColor(id){

    let selectFarbe  = document.querySelector("#" + id).style.backgroundColor;
    let arrayAbsatze = document.querySelectorAll("p");

    for ( let i = 0 ; i < arrayAbsatze.length; i++){
        arrayAbsatze[i].style.backgroundColor = selectFarbe ;
    }
}

