import { Pokemon } from './pokemon';

export class Pokeball<T extends Pokemon> {
    private pokemon: T | null;

    constructor(pokemon: T) {
        this.pokemon = pokemon;
    }

    throw(): T | null {
        const temp = this.pokemon;
        this.pokemon = null;
        return temp;
    }

    return(pokemon: T) {
        this.pokemon = pokemon;
    }
}
