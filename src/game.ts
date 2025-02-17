import { Trainer } from './trainer';

function startGame() {
    const trainer1 = new Trainer('Ash');
    const trainer2 = new Trainer('Misty');

    for (let i = 0; i < 6; i++) {
        console.log(`Round ${i + 1}`);
        
        const charmander1 = trainer1.throwPokeball(i);
        const charmander2 = trainer2.throwPokeball(i);

        if (charmander1) {
            trainer1.returnPokeball(i, charmander1);
        } else {
            console.log(`Trainer 1's Pokeball ${i} is empty.`);
        }
        if (charmander2) {
            trainer2.returnPokeball(i, charmander2);
        } else {
            console.log(`Trainer 2's Pokeball ${i} is empty.`);
        }
    }
}

startGame();
