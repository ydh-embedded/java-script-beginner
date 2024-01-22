"use strict";
class Person {
    constructor(name, alter, geschlecht) {
        this.name = name;
        this.alter = alter;
        this.geschlecht = geschlecht;
    }
}
class Mitarbeiter extends Person {
    constructor(name, alter, geschlecht, id) {
        super(name, alter, geschlecht);
        this.id = id;
    }
}
let mitarbeiter1 = new Mitarbeiter("Max Mustermann", 25, "männlich", 4711);
console.log(mitarbeiter1);