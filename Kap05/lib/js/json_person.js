"use strict";
let person1 = {
    "name": "Max Mustermann",
    "alter": 25,
    "geschlecht": "männlich",
    auskunft: function() {
        console.log("Ich heisse " + this.name + " und bin " + this.alter + " Jahre alt.")
    }
}

console.log("JSON: " + person1);
person1.auskunft();