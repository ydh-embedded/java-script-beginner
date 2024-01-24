


class MENSCH{
    constructor( vorname , nachname ){
        this.nachname    = nachname ;
        this.vorname     = vorname  ;
    }

    fSagHallo(){
        console.log(`Hallo mein Name ist ${this.vorname}`);
    }
    
    get mVollerName(){
        return `${this.vorname} ${this.nachname}`       ;
    }

    set mVollerName(Name){
        let werte       = Name.split(" ",2)      ;
        this.vorname    = werte[0];
        this.nachname   = werte[1];
    };



    static mZeitBisZurGeburt(){
        return "5 Monate ";
    }

}

let o1_Mensch   = new MENSCH    ( "vorname" , "nachname" )                 ;
/* let o1_Held     = new HELD      ( "Peter"   , "Parker" , "Spiderman")      ; */

o1_Mensch.fSagHallo();
/* o1_Held.fSagHallo(); */
