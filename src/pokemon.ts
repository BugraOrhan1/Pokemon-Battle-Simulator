interface PokemonInterface {
    name: string;
    type: string;
    weakness: string;
    hp: number;
    attack: number;
}

export class Pokemon {
    name: string;
    type: string;
    weakness: string;
    hp: number;
    attack: number;

    constructor(name: string, type: string, weakness: string, hp: number, attack: number) {
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

export class Charmander extends Pokemon {
    constructor(name: string) {
        super(name, 'Fire', 'Water', 39, 52);
    }

    battlecry() {
        console.log(`${this.name} says: Char!`);
    }
}

export class Pokeball {
    private charmander: Charmander | null;

    constructor(charmander: Charmander | null = null) {
        this.charmander = charmander;
    }

    throw() {
        if (this.charmander) {
            console.log(`Pokeball thrown!`);
            this.charmander.battlecry();
            const releasedCharmander = this.charmander;
            this.charmander = null;
            return releasedCharmander;
        } else {
            console.log(`Pokeball is empty!`);
            return null;
        }
    }

    return(charmander: Charmander) {
        if (this.charmander === null) {
            this.charmander = charmander;
            console.log(`Charmander returned to the Pokeball!`);
        } else {
            console.log(`Pokeball already contains a Charmander!`);
        }
    }
}
