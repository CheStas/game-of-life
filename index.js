import * as readline from 'readline';
import * as util from 'util';
import Game from './game.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = util.promisify(rl.question).bind(rl);

rl.question(`Would you like to start The Game of Life?`, async answer => {
  if (!answer) {
    console.log('no answer');
  } else if (answer === 'n') {
    rl.close();
  } else {
    const startField = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ]
    const game = new Game(startField);
    await gameTick(game);
    console.log(`${answer}!`);
  }
});

async function gameTick(game, iteration = 1) {
  const newMap = game.deepCloneArray(game.matrix);
  const mapString = newMap.map(el => el.join(' ')).join('\n');
  const userChoise = await question(`tick ${iteration}: \n${mapString}`);
  if (!userChoise) {
    return gameTick(game, iteration + 1);
  }
}

