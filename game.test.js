import Game from './game.js';

describe('getCellStatus', () => {
  const game = new Game([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  test('should return correct status for died cell', () => {
    expect(game.getCellStatus(0, 0)).toBe(0);
    expect(game.getCellStatus(0, 1)).toBe(0);
    expect(game.getCellStatus(0, 2)).toBe(0);
    expect(game.getCellStatus(0, 3)).toBe(1);
    expect(game.getCellStatus(0, 4)).toBe(0);
    expect(game.getCellStatus(0, 5)).toBe(0);
  });

  test('should return correct status for live cell', () => {
    expect(game.getCellStatus(1, 0)).toBe(0);
    expect(game.getCellStatus(1, 1)).toBe(0);
    expect(game.getCellStatus(1, 2)).toBe(1);
    expect(game.getCellStatus(1, 3)).toBe(1);
    expect(game.getCellStatus(1, 4)).toBe(0);
    expect(game.getCellStatus(1, 5)).toBe(0);
  });

});

describe('getCellNeighboursInMatrix', () => {
  test('should return correct number of neighbours, when no neighbours', () => {
    const matrix = [[0, 0, 1],[0, 0, 0],[0, 0, 0]];
    const game = new Game(matrix);
    expect(game.getCellNeighboursInMatrix(0, 0, matrix)).toBe(0);
  })
  test('should return correct number of neighbours when right neighbour', () => {
    const matrix = [[0, 1, 1],[0, 0, 0],[0, 0, 0]];
    const game = new Game(matrix);
    expect(game.getCellNeighboursInMatrix(0, 0, matrix)).toBe(1);
  })
  test('should return correct number of neighbours when bottom neighbour', () => {
    const matrix = [[0, 0, 1],[1, 0, 0],[0, 0, 0]];
    const game = new Game(matrix);
    expect(game.getCellNeighboursInMatrix(0, 0, matrix)).toBe(1);
  })
  test('should return correct number of neighbours when left neighbour', () => {
    const matrix = [[1, 0, 1],[0, 0, 0],[0, 0, 0]];
    const game = new Game(matrix);
    expect(game.getCellNeighboursInMatrix(0, 1, matrix)).toBe(2);
  })
  test('should return correct number of neighbours when right bottom neighbour', () => {
    const matrix = [[0, 0, 0],[0, 0, 1],[0, 0, 0]];
    const game = new Game(matrix);
    expect(game.getCellNeighboursInMatrix(0, 1, matrix)).toBe(1);
  })
});

describe('step', () => {

  test('should return matrix', () => {
    const matrix = [[1, 1, 1],[1, 0, 0],[0, 0, 0]];
    const game = new Game(matrix);
    expect(game.matrix).toBeDefined();
  })

  test('should return matrix', () => {
    const matrix = [[1, 1, 1],[1, 0, 0],[0, 0, 0]];
    const game = new Game(Array.from(matrix));

    expect(game.matrix).not.toEqual(matrix);
  })
})

describe('test patterns', () => {
  // still
  const blockPattern = [];
  // moving 
  const blinkerPattern = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ]

  const toadPattern = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ]
  const beaconPattern = [];
  const pulsarPattern = [];
  const gliderPattern = [];
})

