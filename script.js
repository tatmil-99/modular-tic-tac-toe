// game board module
const gameBoard = (function () {
  // leave board private and expose it with getters/setters?
  const board = [
    [null, null, null], // row1
    [null, null, null], // row2
    [null, null, null], // row3
  ];

  return {
    board,
  };
})();
