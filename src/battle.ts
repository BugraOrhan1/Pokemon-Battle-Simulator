import { Trainer } from './trainer';
import { Pokemon } from './pokemon';

export class Battle {
    trainer1: Trainer;
    trainer2: Trainer;

    constructor(trainer1: Trainer, trainer2: Trainer) {
        this.trainer1 = trainer1;
        this.trainer2 = trainer2;
    }

    fight(): string {
        let rounds = 0;
        let trainer1Wins = 0;
        let trainer2Wins = 0;

        while (rounds < 6) {
            const pokemon1 = this.trainer1.throwPokeball(rounds);
            const pokemon2 = this.trainer2.throwPokeball(rounds);

            if (pokemon1 && pokemon2) {
                const result = this.fightRound(pokemon1, pokemon2);
                if (result === 1) {
                    trainer1Wins++;
                } else if (result === 2) {
                    trainer2Wins++;
                }
            }

            rounds++;
        }

        if (trainer1Wins > trainer2Wins) {
            return `${this.trainer1.name} wins the battle!`;
        } else if (trainer2Wins > trainer1Wins) {
            return `${this.trainer2.name} wins the battle!`;
        } else {
            return "It's a draw!";
        }
    }

    private fightRound(pokemon1: Pokemon, pokemon2: Pokemon): number {
        if (pokemon1.type === 'Fire' && pokemon2.type === 'Grass' ||
            pokemon1.type === 'Grass' && pokemon2.type === 'Water' ||
            pokemon1.type === 'Water' && pokemon2.type === 'Fire') {
            return 1;
        } else if (pokemon2.type === 'Fire' && pokemon1.type === 'Grass' ||
                   pokemon2.type === 'Grass' && pokemon1.type === 'Water' ||
                   pokemon2.type === 'Water' && pokemon1.type === 'Fire') {
            return 2;
        } else {
            return 0;
        }
    }
}
