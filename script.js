// let scoreBoardVal = 0;
scoreBoardVal = document.getElementById("scoreBoardHome");
scoreBoardVals = document.getElementById("scoreBoardGuest");
// scoreBoardVal += Number(scoreBoardVal);
// let B1 = document.getElementById("box1");
// let B2 = document.getElementById("box2");
// let B3 = document.getElementById("box3");

////FOR HOME
function add1Value() {
  scoreBoardVal.textContent++;
}

function add3Value() {
  scoreBoardVal.textContent = Number(scoreBoardVal.textContent) + 3;
}

function add5Value() {
  scoreBoardVal.textContent = Number(scoreBoardVal.textContent) + 5;
}

function resetHome() {
  scoreBoardVal.textContent = 0;
}

////FOR GUEST
function add1Values() {
  scoreBoardVals.textContent++;
}

function add3Values() {
  scoreBoardVals.textContent = Number(scoreBoardVals.textContent) + 3;
}

function add5Values() {
  scoreBoardVals.textContent = Number(scoreBoardVals.textContent) + 5;
}
function resetGuest() {
  scoreBoardVals.textContent = 0;
}
