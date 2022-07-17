export default class Game {
  _matrix = [];

  /**
    * @return {(0|1)[][]}
    */
  get matrix() {
    const matrixCopy = this.deepCloneArray(this._matrix);
    for (const [rowIndex, row] of matrixCopy.entries()) {
      for (const [columnIndex, column] of row.entries()) {
        const neighbours = this.getCellNeighboursInMatrix(rowIndex, columnIndex, matrixCopy);
        const cellStatus = matrixCopy[rowIndex][columnIndex];
        const updatedCellStatus = this.getCellStatus(cellStatus, neighbours);
        this._matrix[rowIndex][columnIndex] = updatedCellStatus;
      }
    }

    return this._matrix;
  }

  deepCloneArray(source) {
    return [...source.map(el => Array.isArray(el) ? this.deepCloneArray(el) : el)]
  }
  /*
    * @param {(0|1)[][]} initialMatrix
    */
  constructor(initialMatrix) {
    // TODO validate matrix;
    this._matrix = initialMatrix;
  }

  /**
    * @param {(0|1)} cellStatus
    * @param {number} numberOfNeighbours
    * @return {(0|1)}
    */
  getCellStatus(cellStatus, numberOfNeighbours) {
    if (cellStatus) {
      if (numberOfNeighbours === 2 || numberOfNeighbours === 3) {
        return 1;
      }
      return 0;
    } else {
      return numberOfNeighbours === 3 ? 1 : 0;
    }
  }

  /*
    * @param {number} x
    * @param {number} y
    * @param {(0|1)[][]} matrix
    * @return {number}
    */
  getCellNeighboursInMatrix(x, y, matrix) {
    let neighbours = 0;
    neighbours += (this.getCellIfExist(x,y - 1, matrix) || 0);
    neighbours += (this.getCellIfExist(x,y + 1, matrix) || 0);
    neighbours += (this.getCellIfExist(x + 1,y, matrix) || 0);
    neighbours += (this.getCellIfExist(x - 1,y, matrix) || 0);
    neighbours += (this.getCellIfExist(x + 1,y + 1, matrix) || 0);
    neighbours += (this.getCellIfExist(x + 1,y - 1, matrix) || 0);
    neighbours += (this.getCellIfExist(x - 1,y - 1, matrix) || 0);
    neighbours += (this.getCellIfExist(x - 1,y + 1, matrix) || 0);
    return neighbours;
  }

  getCellIfExist(x, y, matrix) {
    return matrix && matrix[x] && matrix[x][y];
  }
}
