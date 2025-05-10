const gameBoard = (function () {
  const cell = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  return {
    cell,
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

// Game Logic
/* function game():
    declare player1 obj;

    player1 choose cell
      create "mark" setter on gameBoard
        iterate through cell array
          set 3 column vars (value references)
          set 3 mark counters for columns
          ^^^should these be private vars on gameBoard?
             and should this logic apply to rows? 
             state will need to persist between player turns

          iterate through rows
            check if all 3 cells are one of a kind

            if each element is same as value in respective column var
              add 1 to counter
            else 
              set respective column var to element value, and 
              add one to respective counter
          
          if any column counters == 3 return a winner
 */

const game = (function () {
  const player1 = newPlayer("X", "guy");

  console.log(gameBoard.cell);
})();
