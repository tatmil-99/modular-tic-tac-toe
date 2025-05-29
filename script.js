const gameBoard = (function () {
  const cell = [
    ["x", "o", "o"],
    [null, null, null],
    [null, null, null],
  ];

  const hasThreeInArow = () => {
    cell.forEach((row) => {
      if (row.every((val) => val === "x")) {
        console.log("true");
      } else if (row.every((val) => val === "o")) {
        console.log("true");
      } else {
        console.log("false");
      }
    });
  };

  return {
    cell,
    hasThreeInArow,
  };
})();

// namespace for tracking player number
const counter = (function () {
  let count = 0;

  const increment = () => {
    count++;
  };

  const getCount = () => count;

  return { increment, getCount };
})();

function newPlayer(mark, name = null) {
  counter.increment();

  if (!name) name = `Player${counter.getCount()}`;

  const capitalize = (name) => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  };

  const setName = (newName) => {
    name = capitalize(newName);
  };

  const getName = () => capitalize(name);

  return { mark, setName, getName };
}

/* object: game
    create player1
    create player2

    init counter to 0

    cont game if not 3 in a row or board not full
      if counter even, player1 choose cell
      else, player2 choose cell
      counter++

    return winner
 */

const game = (function () {
  const player1 = newPlayer("X", "guy");

  gameBoard.hasThreeInArow();
})();
