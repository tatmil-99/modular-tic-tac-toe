const gameBoard = (function () {
  const cell = [
    ["o", "x", "x"],
    ["o", "x", "o"],
    ["o", "o", "o"],
  ];

  const column1 = [];
  const column2 = [];
  const column3 = [];

  const hasThreeInArow = () => {
    cell.forEach((row) => {
      column1.push(row[0]);
      column2.push(row[1]);
      column3.push(row[2]);

      // if (row.every((val) => val === "x")) {
      //   console.log("true");
      // } else if (row.every((val) => val === "o")) {
      //   console.log("true");
      // } else {
      //   console.log("false");
      // }
    });

    // repeat 3 in a row check for columns
    if (column1.every((element) => element === "x")) {
      console.log("true");
    } else if (column1.every((element) => element === "o")) {
      console.log("true");
    } else {
      console.log("false");
    }
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
