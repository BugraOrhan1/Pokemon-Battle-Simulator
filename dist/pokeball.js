"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokeball = void 0;
class Pokeball {
    constructor(charmander = null) {
        this.charmander = charmander;
    }
    throw() {
        if (this.charmander) {
            console.log('Pokeball thrown!');
            this.charmander.battlecry();
            const releasedCharmander = this.charmander;
            this.charmander = null;
            return releasedCharmander;
        }
        else {
            console.log('Pokeball is empty!');
            return null;
        }
    }
    return(charmander) {
        if (this.charmander === null) {
            this.charmander = charmander;
            console.log('Charmander returned to Pokeball!');
        }
        else {
            console.log('Pokeball already contains a Charmander!');
        }
    }
}
exports.Pokeball = Pokeball;
