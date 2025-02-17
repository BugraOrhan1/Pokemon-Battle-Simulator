import * as readline from 'readline';
import { Trainer } from './trainer';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startGame() {
    rl.question('Give a name to the first trainer: ', (name1: string) => {
        let trainer1 = new Trainer(name1);

        rl.question('Give a name to the second trainer: ', (name2: string) => {
            let trainer2 = new Trainer(name2);

            gameLoop(trainer1, trainer2, 0);
        });
    });
}

function gameLoop(trainer1: Trainer, trainer2: Trainer, index: number) {
    if (index >= 6) {
        console.log("All Pokeballs have been used by both trainers.");
        rl.question('Do you want to restart the game? (yes/no): ', (answer: string) => {
            if (answer.toLowerCase() === 'yes') {
                startGame();
            } else {
                console.log("Thanks for playing!");
                rl.close();
            }
        });
        return;
    }

    console.log(`${trainer1.name} throws Pokeball ${index + 1}`);
    let charmander1 = trainer1.throwPokeball(index);
    if (charmander1) charmander1.battlecry();

    console.log(`${trainer2.name} throws Pokeball ${index + 1}`);
    let charmander2 = trainer2.throwPokeball(index);
    if (charmander2) charmander2.battlecry();

    if (charmander1) {
        console.log(`${trainer1.name} returns Charmander to Pokeball ${index + 1}`);
        trainer1.returnPokeball(index, charmander1);
    }

    if (charmander2) {
        console.log(`${trainer2.name} returns Charmander to Pokeball ${index + 1}`);
        trainer2.returnPokeball(index, charmander2);
    }

    gameLoop(trainer1, trainer2, index + 1);
}

// Start the game
startGame();
