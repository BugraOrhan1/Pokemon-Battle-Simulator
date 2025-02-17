import { Charmander } from './charmander';

export class Pokeball {
    private charmander: Charmander | null;

    constructor(charmander: Charmander | null = null) {
        this.charmander = charmander;
    }

    throw() {
        if (this.charmander) {
            console.log('Pokeball thrown!');
            this.charmander.battlecry();
            const releasedCharmander = this.charmander;
            this.charmander = null;
            return releasedCharmander;
        } else {
            console.log('Pokeball is empty!');
            return null;
        }
    }

    return(charmander: Charmander) {
        if (this.charmander === null) {
            this.charmander = charmander;
            console.log('Charmander returned to Pokeball!');
        } else {
            console.log('Pokeball already contains a Charmander!');
        }
    }
}
