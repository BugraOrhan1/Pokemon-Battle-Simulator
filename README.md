# Pokémon Battle Simulator

## Overview
The Pokémon Battle Simulator is a simple text-based game that allows players to interact with a Charmander Pokémon. Players can name their Charmander and trigger its battle cry, simulating a Pokémon battle experience.

## Project Structure
```
pokemon-battle-simulator
├── src
│   ├── index.ts          # Entry point for the simulator
│   ├── pokemon.ts        # Base class for Pokémon
│   └── charmander.ts     # Charmander class extending Pokémon
├── package.json          # npm configuration file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites
- Node.js installed on your machine
- TypeScript installed globally (you can install it using `npm install -g typescript`)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd pokemon-battle-simulator
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Simulator
To start the Pokémon battle simulator, run the following command:
```
ts-node src/index.ts
```

### Gameplay
- Upon starting the simulator, you will be prompted to name your Charmander.
- You can trigger the battle cry of your Charmander, which will display a message in the console.

## Contributing
Feel free to submit issues or pull requests to enhance the functionality of the Pokémon Battle Simulator.