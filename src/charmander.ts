import { Pokemon } from './pokemon';

export class Charmander extends Pokemon {
    constructor(name: string) {
        super(name, 'Fire', 'Water', 39, 52);
    }

    battlecry() {
        console.log(`${this.name} says: Char!`);
    }
}