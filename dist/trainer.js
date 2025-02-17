"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trainer = void 0;
const pokeball_1 = require("./pokeball");
const charmander_1 = require("./charmander");
const list_1 = require("./list");
class Trainer {
    constructor(name) {
        this.name = name;
        this.belt = new list_1.List();
        for (let i = 0; i < 6; i++) {
            this.belt.add(new pokeball_1.Pokeball(new charmander_1.Charmander(`Charmander ${i + 1}`)));
        }
    }
    addPokeball(pokeball) {
        if (this.belt.size() >= 6) {
            throw new Error("Cannot add more than 6 Pokeballs to the belt.");
        }
        this.belt.add(pokeball);
    }
    throwPokeball(index) {
        if (index >= 0 && index < this.belt.size()) {
            return this.belt.get(index).throw();
        }
        else {
            throw new Error('Invalid Pokeball index');
        }
    }
    returnPokeball(index, charmander) {
        if (index >= 0 && index < this.belt.size()) {
            this.belt.get(index).return(charmander);
        }
        else {
            throw new Error('Invalid Pokeball index');
        }
    }
}
exports.Trainer = Trainer;
