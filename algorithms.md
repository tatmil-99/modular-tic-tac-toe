### check for 3 in a row

set arr for 3 columns
set 3 column counters
^should these be private vars on gameBoard?
and should this logic apply to rows?
state will need to persist between player turns

### mark setter method on gameboard

- iterate through cell array
  - iterate through rows
    - if element == null, then update
    - else tell player to choose unmarked cell
