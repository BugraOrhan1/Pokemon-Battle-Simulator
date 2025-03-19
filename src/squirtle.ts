import { Pokemon } from './pokemon';

export class Squirtle extends Pokemon {
    constructor(name: string) {
        super(name, 'Water', 'Electric', 44, 48);
    }

    battlecry() {
        console.log(`${this.name} says: Squirtle!`);
    }
}