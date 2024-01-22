"use strict";
var datum = {
    jetzt: new Date()
};
console.log(datum, typeof datum); // object
console.log(datum.jetzt, typeof datum.jetzt); // date-object
console.log("Eigenschaft 'jetzt': " + datum.jetzt, typeof datum.jetzt); // date-object formatiert

var datumString = JSON.stringify(datum); // macht aus einem Objekt eine JSON-Zeichenkette (Type: string)

console.log(datumString, typeof datumString);

var jetztRepro = JSON.parse(datumString); // parst aus dem JSON-String ein Objekt

console.log(jetztRepro, typeof jetztRepro); // objekt
console.log(jetztRepro.jetzt, typeof jetztRepro.jetzt); // string
console.log("Eigenschaft 'jetzt': " + jetztRepro.jetzt, typeof jetztRepro.jetzt); // string