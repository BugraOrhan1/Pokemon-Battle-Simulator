"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Charmander = void 0;
const pokemon_1 = require("./pokemon");
class Charmander extends pokemon_1.Pokemon {
    constructor(name) {
        super(name, 'Fire', 'Water', 39, 52);
    }
    battlecry() {
        console.log(`${this.name} says: Char!`);
    }
}
exports.Charmander = Charmander;
