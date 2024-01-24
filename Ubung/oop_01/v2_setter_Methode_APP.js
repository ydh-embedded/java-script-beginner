class Mensch {
    /* wir erstellen eigenschaften*/




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

/*     wir weisen mit der setter Methode einen Wert zu in dem Fall Name */
    set mVollerName(Name){
/*     wir erzeugen ein Array aus einem String/Zeichenkette mit split */
                                                                                /** Trenner-Zeichen und die Anzahl */
        let werte       = Name.split(" ",2)      ;                                            /** Die Split Methode erwartet 2 Parameter */
        this.vorname    = werte[0];
        this.nachname   = werte[1];

    };




}

let o1_Mensch =   new Mensch("Max" , "Mustermann")     ;

    o1_Mensch.fSagHallo();
    console.log('o1_Mensch.mVollerName');
    
    
    /*     wir greifen auf das Array zu und weisen neue Werte  für Array[0] und Arrray [1] zu */
    o1_Mensch.mVollerName = 'Martin Mustermann';
    
    
    
    console.log('o1_Mensch.mVollerName');
    o1_Mensch.fSagHallo();


