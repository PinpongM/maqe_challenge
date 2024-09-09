# MAQE_challenge

A simple TypeScript bot that simulates movement based on input commands like `R`, `L`, and `W` followed by numbers.

## Features

- Rotates right (R) or left (L)
- Walks a specified distance (W)
- Outputs final coordinates and direction

## Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [TypeScript](https://www.typescriptlang.org/) (v4.x or higher)

## Installation

- Clone the repository:

   ```bash
   git clone https://github.com/yourusername/maqebot.git
   cd maqebot
   ```

- Install dependencies:

    ```bash
    npm install
    ```

- Compile TypeScript to JavaScript:

    ```bash
    npx tsc maqebot.ts
    ```

## Usage

Run the bot with an input string of commands. The format is a sequence of movements, where:

R rotates the bot 90 degrees to the right.\
L rotates the bot 90 degrees to the left.\
W[number] moves the bot forward by the specified number of units.

## Example

```bash
node maqebot.js RW15RW1
```

This will output the final position and direction, for example:

```bash
X: 15, Y: -1, Direction: South
```
