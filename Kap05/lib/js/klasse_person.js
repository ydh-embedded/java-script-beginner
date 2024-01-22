"use strict";

class Person {
    constructor(name, alter, geschlecht) {
        this.name = name;
        this.alter = alter;
        this.geschlecht = geschlecht;
    }
}
// Instanziieren der Klasse mit einigen beispielhaften Personen.
let person1 = new Person("Max Mustermann", 25, "männlich");
let person2 = new Person("Susi Sorglos", 32, "weiblich");
let person3 = new Person("Hans Hansen", 45, "männlich");

console.log("Klasse: " + person1);

console.log("Klasse: " + person2);

console.log("Klasse: " + person3);