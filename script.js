const gameBoard = (function () {
  const board = [
    [null, null, null], // row1
    [null, null, null], // row2
    [null, null, null], // row3
  ];

  return { board };
})();

// namespace for tracking player number
const counter = (function () {
  let count = 0;

  const increment = () => {
    count++;
    console.log(`Current count: ${count}`);
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

const player1 = newPlayer("X", "guy");
const player2 = newPlayer("O");
