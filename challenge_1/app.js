const board = [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  [undefined, undefined, undefined]
];
var playerCounter = 0;
var player = '';

function checkRow(id) {

  var row = findRow(id)
row.forEach(index)
  console.log('Check row row: ', row)
}

function checkColumn() {
}

function checkDiagonial() {
}



var findRow = function (id) {
  console.log('find Row id: ', id)
  var index = id;
  if (index < 3) {
    return board[0];
  } else if (index < 6) {
    return board[1];
  } else {
    return board[2];
  }
};

var findIndex = function (id) {
  console.log('findIndex id: ', id);
  var index = id;
  if (index < 3) {
    return index;
  } else if (index < 6) {
    return index - 3;
  } else {
    return index - 6;
  }
};

function saveToBoard(playerCounter) {
  if (playerCounter % 2 !== 0) {
    player = 'X';

  } else {
    player = 'O';
  }
  return player;
}

function placePiece() {
  playerCounter++; // on all odd numbers X will be a player
  var id = event.target.id - 1;
  var row = findRow(id);
  var rowIndex = findIndex(id)
  checkRow(id);
  saveToBoard(playerCounter)
  row[rowIndex] = player;
  event.target.innerHTML = player;



  console.log('row and index value: ', row[rowIndex])
  console.log('row: ', row)
  console.log('row index: ', rowIndex)
  console.log('event.target.innerHTML: ', event.target.innerHTML);


}
const block = document.getElementsByClassName('block');
for (var i = 0; i < block.length; i++) {
  block[i].addEventListener(("click"), placePiece)
};