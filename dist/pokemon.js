"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokeball = exports.Charmander = exports.Pokemon = void 0;
class Pokemon {
    constructor(name, type, weakness, hp, attack) {
        this.name = name;
        this.type = type;
        this.weakness = weakness;
        this.hp = hp;
        this.attack = attack;
    }
    battlecry() {
        console.log(`${this.name} says: Pika Pika!`);
    }
}
exports.Pokemon = Pokemon;
class Charmander extends Pokemon {
    constructor(name) {
        super(name, 'Fire', 'Water', 39, 52);
    }
    battlecry() {
        console.log(`${this.name} says: Char!`);
    }
}
exports.Charmander = Charmander;
class Pokeball {
    constructor(charmander = null) {
        this.charmander = charmander;
    }
    throw() {
        if (this.charmander) {
            console.log(`Pokeball thrown!`);
            this.charmander.battlecry();
            const releasedCharmander = this.charmander;
            this.charmander = null;
            return releasedCharmander;
        }
        else {
            console.log(`Pokeball is empty!`);
            return null;
        }
    }
    return(charmander) {
        if (this.charmander === null) {
            this.charmander = charmander;
            console.log(`Charmander returned to the Pokeball!`);
        }
        else {
            console.log(`Pokeball already contains a Charmander!`);
        }
    }
}
exports.Pokeball = Pokeball;
