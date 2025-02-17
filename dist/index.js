"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const trainer_1 = require("./trainer");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function startGame() {
    rl.question('Give a name to the first trainer: ', (name1) => {
        let trainer1 = new trainer_1.Trainer(name1);
        rl.question('Give a name to the second trainer: ', (name2) => {
            let trainer2 = new trainer_1.Trainer(name2);
            gameLoop(trainer1, trainer2, 0);
        });
    });
}
function gameLoop(trainer1, trainer2, index) {
    if (index >= 6) {
        console.log("All Pokeballs have been used by both trainers.");
        rl.question('Do you want to restart the game? (yes/no): ', (answer) => {
            if (answer.toLowerCase() === 'yes') {
                startGame();
            }
            else {
                console.log("Thanks for playing!");
                rl.close();
            }
        });
        return;
    }
    console.log(`${trainer1.name} throws Pokeball ${index + 1}`);
    let charmander1 = trainer1.throwPokeball(index);
    if (charmander1)
        charmander1.battlecry();
    console.log(`${trainer2.name} throws Pokeball ${index + 1}`);
    let charmander2 = trainer2.throwPokeball(index);
    if (charmander2)
        charmander2.battlecry();
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
