/**
* This program is a boilerplate code for the standard tic tac toe game
* Here the “box” represents one placeholder for either a “X” or a “0”
* We have a 2D array to represent the arrangement of X or O is a grid
* Imagine you are playing with the computer so every alternate move should be done by the computer
* X -> player
* O -> Computer
*/

const grid = [];
const GRID_LENGTH = 3;
var you = 'X';
var computer = 'O';
var c00, c01, c02, c10, c11, c12, c20, c21, c22;

function initializeGrid() {
    for (let colIdx = 0;colIdx < GRID_LENGTH; colIdx++) {
        const tempArray = [];
        for (let rowidx = 0; rowidx < GRID_LENGTH;rowidx++) {
            tempArray.push(0);
        }
        grid.push(tempArray);
    }
}


function getRowBoxes(colIdx) {
    let rowDivs = '';
    for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
        let additionalClass = 'darkBackground';
        let content = '';
        const sum = colIdx + rowIdx;
        if (sum%2 === 0) {
            additionalClass = 'lightBackground'
        }
        const gridValue = grid[colIdx][rowIdx];
       
        if(gridValue === 1) {
            content = '<span class="cross">'+you+'</span>';
        }
        else if (gridValue === 2) {
            content = '<span class="cross">'+computer+'</span>';
        }
        rowDivs = rowDivs + '<div id= "'+ colIdx +'-'+ rowIdx+'"  colIdx="'+ colIdx +'" rowIdx="' + rowIdx + '" class="box ' +
            additionalClass + ' card cross">' + content + '</div>';
    }
    return rowDivs;
}

function getColumns() {
    let columnDivs = '';
    for(let colIdx=0; colIdx < GRID_LENGTH; colIdx++) {
        let coldiv = getRowBoxes(colIdx);
        coldiv = '<div class="rowStyle">' + coldiv + '</div>';
        columnDivs = columnDivs + coldiv;
    }
    return columnDivs;
}

function renderMainGrid() {
    const parent = document.getElementById("grid");
    const columnDivs = getColumns();
    parent.innerHTML = '<div class="columnsStyle">' + columnDivs + '</div>';
}

function onBoxClick() {
    let rowIdx = this.getAttribute("rowIdx");
    let colIdx = this.getAttribute("colIdx");
    let fake_id = (colIdx+'-'+rowIdx)
    var check = document.getElementById(fake_id).innerHTML

    if (check === '') {
        document.getElementById(fake_id).innerHTML = you
        let newValue = 1;
        grid[colIdx][rowIdx] = newValue;
        checkSquareValues();
        checkBoardState();
        computerMove();
        checkSquareValues();
        checkBoardState();
    }
    else {
        alert("There is already a move on that square. Please pick a different square.");
    }
}

function addClickHandlers() {
    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        boxes[idx].addEventListener('click', onBoxClick, false);
    }
}

function checkSquareValues() {
    c00 = document.getElementById("0-0").innerHTML;
    c01 = document.getElementById("0-1").innerHTML;
    c02 = document.getElementById("0-2").innerHTML;
    c10 = document.getElementById("1-0").innerHTML;
    c11 = document.getElementById("1-1").innerHTML;
    c12 = document.getElementById("1-2").innerHTML;
    c20 = document.getElementById("2-0").innerHTML;
    c21 = document.getElementById("2-1").innerHTML;
    c22 = document.getElementById("2-2").innerHTML;
  }

  function clearBoard() {
    document.getElementById("0-0").innerHTML = "";
    document.getElementById("0-1").innerHTML = "";
    document.getElementById("0-2").innerHTML = "";
    document.getElementById("1-0").innerHTML = "";
    document.getElementById("1-1").innerHTML = "";
    document.getElementById("1-2").innerHTML = "";
    document.getElementById("2-0").innerHTML = "";
    document.getElementById("2-1").innerHTML = "";
    document.getElementById("2-2").innerHTML = "";
     turn = 0;
  }

  function computerMove() {
      
    // case 1: if there is a chance to win
    if (c00 === "" && ((c01 === computer && c02 === computer) || (c10 === computer && c20 === computer) || (c11 === computer && c22 === computer))) {
      document.getElementById("0-0").innerHTML = computer
    }
    else if (c01 === "" && ((c00 === computer && c02 === computer) || (c11 === computer && c21 === computer))) {
        document.getElementById("0-1").innerHTML = computer
    }
    else if (c02 === "" && ((c00 === computer && c01 === computer) || (c12 === computer && c22 === computer) || (c11 === computer && c20 === computer))) {
        document.getElementById("0-2").innerHTML = computer
    }
    else if (c10 === "" && ((c00 === computer && c20 === computer) || (c11 === computer && c12 === computer))) {
        document.getElementById("1-0").innerHTML = computer
    }
    else if (c11 === "" && ((c10 === computer && c12 === computer) || (c00 === computer && c22 === computer) || (c02 === computer && c20 === computer))) {
        document.getElementById("1-1").innerHTML = computer
    }
    else if (c12 === "" && ((c10 === computer && c11 === computer) || (c02 === computer && c22 === computer))) {
        document.getElementById("1-2").innerHTML = computer
    }
    else if (c20 === "" && ((c21 === computer && c22 === computer) || (c00 === computer && c10 === computer) || (c02 === computer && c11 === computer))) {
        document.getElementById("2-0").innerHTML = computer
    }
    else if (c21 === "" && ((c20 === computer && c22 === computer) || (c01 === computer && c11 === computer))) {
        document.getElementById("2-1").innerHTML = computer
        turn = 0;
    }
    else if (c22 === "" && ((c20 === computer && c21 === computer) || (c02 === computer && c12 === computer) || (c00 === computer && c11 === computer))) {
        document.getElementById("2-2").innerHTML = computer
    }
    // case 2: if there is a chance to block
    else if (c00 === "" && ((c01 === you && c02 === you) || (c10 === you && c20 === you) || (c11 === you && c22 === you))) {
        document.getElementById("0-0").innerHTML = computer

    }
    else if (c01 === "" && ((c00 === you && c02 === you) || (c11 === you && c21 === you))) {
      document.getElementById("0-1").innerHTML = computer
    }
    else if (c02 === "" && ((c00 === you && c01 === you) || (c12 === you && c22 === you) || (c11 === you && c20 === you))) {
        document.getElementById("0-2").innerHTML = computer
    }
    else if (c10 === "" && ((c00 === you && c20 === you) || (c11 === you && c12 === you))) {
        document.getElementById("1-0").innerHTML = computer
    }
    else if (c11 === "" && ((c10 === you && c12 === you) || (c00 === you && c22 === you) || (c02 === you && c20 === you))) {
      document.getElementById("1-1").innerHTML = computer
    }
    else if (c12 === "" && ((c10 === you && c11 === you) || (c02 === you && c22 === you))) {
      document.getElementById("1-2").innerHTML = computer
    }
    else if (c20 === "" && ((c21 === you && c22 === you) || (c00 === you && c10 === you) || (c02 === you && c11 === you))) {
      document.getElementById("2-0").innerHTML = computer
    }
    else if (c21 === "" && ((c20 === you && c22 === you) || (c01 === you && c11 === you))) {
      document.getElementById("2-1").innerHTML = computer
    }
    else if (c22 === "" && ((c20 === you && c21 === you) || (c02 === you && c12 === you) || (c00 === you && c11 === you))) {
      document.getElementById("2-2").innerHTML = computer
    }
    // case 3: center
    else if (c11 === "") {
        document.getElementById("1-1").innerHTML = computer
    }
    // case 4: opposite corner
    else if (c00 === "" && (c02 === you  || c20 === you)) {
        document.getElementById("0-0").innerHTML = computer
    }
    else if (c02 === "" && (c00 === you  || c22 === you)) {
      document.getElementById("0-2").innerHTML = computer
    }
    else if (c22 === "" && (c02 === you  || c20 === you)) {
      document.getElementById("2-2").innerHTML = computer
    }
    else if (c20 === "" && (c00 === you  || c22 === you)) {
      document.getElementById("2-0").innerHTML = computer
    }
    // case 5: corner
    else if (c00 === "") {
      document.getElementById("0-0").innerHTML = computer
    }
    else if (c02 === "") {
      document.getElementById("0-2").innerHTML = computer
    }
    else if (c20 === "") {
      document.getElementById("2-0").innerHTML = computer
    }
    else if (c22 === "") {
      document.getElementById("2-2").innerHTML = computer
    }
    // case 6: empty side
    else if (c01 === "") {
        document.getElementById("0-1").innerHTML = computer
    }
    else if (c12 === "") {
        document.getElementById("1-2").innerHTML = computer
    }
    else if (c21 === "") {
        document.getElementById("2-1").innerHTML = computer
    }
    else if (c10 === "") {
      document.getElementById("1-0").innerHTML = computer
    }
  }


  function checkBoardState() {
    // you wins
    if ((c00 === c01 && c00 === c02 && (c00 === you)) || //first row
      (c10 === c11 && c10 === c12 && (c10 === you)) || //second row
      (c20 === c21 && c20 === c22 && (c20 === you)) || //third row
      (c00 === c10 && c00 === c20 && (c00 === you)) || //first column
      (c01 === c11 && c01 === c21 && (c01 === you)) || //second column
      (c02 === c12 && c02 === c22 && (c02 === you)) || //third column
      (c00 === c11 && c00 === c22 && (c00 === you)) || //diagonal 1
      (c02 === c11 && c02 === c20 && (c02 === you)) //diagonal 2
    ) {
        $("#arena").fadeOut("slow");
        $("#winner").text("You win!");
        $("#result").fadeIn("fast");
    }
    // computer wins
    else if ((c00 === c01 && c00 === c02 && (c00 === computer)) || //first row
      (c10 === c11 && c10 === c12 && (c10 === computer)) || //second row
      (c20 === c21 && c20 === c22 && (c20 === computer)) || //third row
      (c00 === c10 && c00 === c20 && (c00 === computer)) || //first column
      (c01 === c11 && c01 === c21 && (c01 === computer)) || //second column
      (c02 === c12 && c02 === c22 && (c02 === computer)) || //third column
      (c00 === c11 && c00 === c22 && (c00 === computer)) || //diagonal 1
      (c02 === c11 && c02 === c20 && (c02 === computer)) //diagonal 2
    ) {
        $("#arena").fadeOut("slow");
        $("#winner").text("Computer win!");
        $("#result").fadeIn("fast");

    }
    // tie
    else if (c00 && c01 && c02 && c10 && c11 && c12 && c20 && c21 && c22) {
        $("#arena").fadeOut("slow");
        $("#winner").text("Nill!");
        $("#result").fadeIn("fast");
      
    }
  }

  function newgame() {
      var x = document.getElementById("arena");
      var y = document.getElementById("result");
      if (x.style.display === "none") {
          clearBoard()
        x.style.display = "block";
        y.style.display = "none"
      } else {
        x.style.display = "none";
      }
}
initializeGrid();
renderMainGrid();
addClickHandlers();
