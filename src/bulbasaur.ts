import { Pokemon } from './pokemon';

export class Bulbasaur extends Pokemon {
    constructor(name: string) {
        super(name, 'Grass', 'Fire', 45, 49);
    }

    battlecry() {
        console.log(`${this.name} says: Bulba!`);
    }
}
