import { Trainer } from './trainer';
import { Battle } from './battle';

export class Arena {
    static roundsFought: number = 0;
    static battlesFought: number = 0;

    static fightBattle(trainer1: Trainer, trainer2: Trainer): string {
        const battle = new Battle(trainer1, trainer2);
        const result = battle.fight();
        this.battlesFought++;
        this.roundsFought += 6; // Each battle consists of 6 rounds
        return result;
    }

    static getScoreboard(): string {
        return `Battles fought: ${this.battlesFought}, Rounds fought: ${this.roundsFought}`;
    }
}
