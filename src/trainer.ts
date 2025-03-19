import { Pokeball } from './pokeball';
import { Charmander } from './charmander';
import { Squirtle } from './squirtle';
import { Bulbasaur } from './bulbasaur';
import { List } from './list';
import { Pokemon } from './pokemon';

export class Trainer {
    name: string;
    belt: List<Pokeball<Pokemon>>;

    constructor(name: string) {
        this.name = name;
        this.belt = new List<Pokeball<Pokemon>>();

        for (let i = 0; i < 2; i++) {
            this.belt.add(new Pokeball(new Charmander(`Charmander ${i + 1}`)));
            this.belt.add(new Pokeball(new Squirtle(`Squirtle ${i + 1}`)));
            this.belt.add(new Pokeball(new Bulbasaur(`Bulbasaur ${i + 1}`)));
        }
    }

    addPokeball(pokeball: Pokeball<Pokemon>) {
        if (this.belt.size() >= 6) {
            throw new Error("Cannot add more than 6 Pokeballs to the belt.");
        }
        this.belt.add(pokeball);
    }

    throwPokeball(index: number): Pokemon | null {
        if (index >= 0 && index < this.belt.size()) {
            return this.belt.get(index).throw();
        } else {
            throw new Error('Invalid Pokeball index');
        }
    }

    returnPokeball(index: number, pokemon: Pokemon) {
        if (index >= 0 && index < this.belt.size()) {
            this.belt.get(index).return(pokemon);
        } else {
            throw new Error('Invalid Pokeball index');
        }
    }
}
