import * as readline from 'readline';
import { Trainer } from './trainer';
import { Arena } from './arena';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startGame() {
    rl.question('Give a name to the first trainer: ', (name1: string) => {
        let trainer1 = new Trainer(name1);

        rl.question('Give a name to the second trainer: ', (name2: string) => {
            let trainer2 = new Trainer(name2);

            const result = Arena.fightBattle(trainer1, trainer2);
            console.log(result);
            console.log(Arena.getScoreboard());

            rl.question('Do you want to restart the game? (yes/no): ', (answer: string) => {
                if (answer.toLowerCase() === 'yes') {
                    startGame();
                } else {
                    console.log("Thanks for playing!");
                    rl.close();
                }
            });
        });
    });
}

// Start the game
startGame();
