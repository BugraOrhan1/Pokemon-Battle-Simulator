import { Pokeball } from './pokeball';
import { Charmander } from './charmander';
import { List } from './list';

export class Trainer {
    name: string;
    belt: List<Pokeball>;

    constructor(name: string) {
        this.name = name;
        this.belt = new List<Pokeball>();

        for (let i = 0; i < 6; i++) {
            this.belt.add(new Pokeball(new Charmander(`Charmander ${i + 1}`)));
        }
    }

    addPokeball(pokeball: Pokeball) {
        if (this.belt.size() >= 6) {
            throw new Error("Cannot add more than 6 Pokeballs to the belt.");
        }
        this.belt.add(pokeball);
    }

    throwPokeball(index: number): Charmander | null {
        if (index >= 0 && index < this.belt.size()) {
            return this.belt.get(index).throw();
        } else {
            throw new Error('Invalid Pokeball index');
        }
    }

    returnPokeball(index: number, charmander: Charmander) {
        if (index >= 0 && index < this.belt.size()) {
            this.belt.get(index).return(charmander);
        } else {
            throw new Error('Invalid Pokeball index');
        }
    }
}
