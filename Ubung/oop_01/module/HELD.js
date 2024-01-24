export class HELD extends MENSCH{
    constructor(vorname , nachname , heroname ){

        super(vorname,nachname);
        this.heroname = heroname ;
    }


    fSagHallo(){
        console.log(
        `Hallo mein Name ist ${this.vorname} ${this.nachname}
        und ich bin ${this.heroname}`);
    }


}