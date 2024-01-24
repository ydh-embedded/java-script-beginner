class Mensch {
    /* wir erstllen eigenschaften*/
    constructor( vorname , nachname ){
        this.nachname    = nachname ;
        this.vorname     = vorname  ;
    }

    fSagHallo(){
        console.log(`Hello der Name der Function lautet ${this.vorname}`);
    }
    get mVollerName(){
        return `${this.vorname} ${this.nachname}`       ;
    }
}

let o1_Mensch =   new Mensch("Max " , "Mustermann")     ;

    o1_Mensch.fSagHallo();
    console.log('o1_Mensch.mVollerName');
    

let o2_Mensch =   new Mensch("Tina " , "Mustermann")    ;

    o2_Mensch.fSagHallo();

