function myfunc() {
  const b1 = document.getElementById("box1").value;
  const b2 = document.getElementById("box2").value;
  const b3 = document.getElementById("box3").value;
  const b4 = document.getElementById("box4").value;
  const b5 = document.getElementById("box5").value;
  const b6 = document.getElementById("box6").value;
  const b7 = document.getElementById("box7").value;
  const b8 = document.getElementById("box8").value;
  const b9 = document.getElementById("box9").value;
  //const boxes = document.getElementById("box").value;
  //-----------------for player one----------------
  if (
    (b1 == "x" || b1 == "X") &&
    (b2 == "x" || b2 == "X") &&
    (b3 == "x" || b3 == "X")
  ) {
    document.getElementById("result").innerHTML = "player 1 win";
  } else if (
    (b4 == "x" || b4 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b6 == "x" || b6 == "X")
  ) {
    document.getElementById("result").innerHTML = "player 1 win";
  } else if (
    (b7 == "x" || b7 == "X") &&
    (b8 == "x" || b8 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("result").innerHTML = "player 1 win";
  } else if (
    (b1 == "x" || b1 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("result").innerHTML = "player 1 win";
  } else if (
    (b2 == "x" || b2 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b8 == "x" || b8 == "X")
  ) {
    document.getElementById("result").innerHTML = "player 1 win";
  } else if (
    (b3 == "x" || b3 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b7 == "x" || b7 == "X")
  ) {
    document.getElementById("result").innerHTML = "player 1 win";
  }
  //------------------for player two---------------------
  else if (
    (b1 == "0" || b1 == "o" || b1 == "O") &&
    (b2 == "0" || b2 == "o" || b2 == "O") &&
    (b3 == "0" || b3 == "o" || b3 == "O")
  ) {
    document.getElementById("result").innerHTML = "player 2 win";
  } else if (
    (b4 == "0" || b4 == "o" || b4 == "O") &&
    (b5 == "0" || b5 == "o" || b5 == "O") &&
    (b6 == "0" || b6 == "o" || b6 == "O")
  ) {
    document.getElementById("result").innerHTML = "player 2 win";
  } else if (
    (b7 == "0" || b7 == "o" || b7 == "O") &&
    (b8 == "0" || b8 == "o" || b8 == "O") &&
    (b9 == "0" || b9 == "o" || b9 == "O")
  ) {
    document.getElementById("result").innerHTML = "player 2 win";
  } else if (
    (b1 == "0" || b1 == "o" || b1 == "O") &&
    (b5 == "0" || b5 == "o" || b5 == "O") &&
    (b9 == "0" || b9 == "o" || b9 == "O")
  ) {
    document.getElementById("result").innerHTML = "player 2 win";
  } else if (
    (b2 == "0" || b2 == "o" || b2 == "O") &&
    (b5 == "0" || b5 == "o" || b5 == "O") &&
    (b8 == "0" || b8 == "o" || b8 == "O")
  ) {
    document.getElementById("result").innerHTML = "player 2 win";
  } else if (
    (b3 == "0" || b3 == "O" || b3 == "o") &&
    (b5 == "0" || b5 == "O" || b5 == "o") &&
    (b7 == "0" || b7 == "O" || b7 == "o")
  ) {
    document.getElementById("result").innerHTML = "player 2 win";
  }

  //---------------tie game..............
  else if (
    (b1 == "X" || b1 == "0" || b1 == "x" || b1 == "o" || b1 == "O") &&
    (b2 == "X" || b2 == "0" || b1 == "x" || b1 == "o" || b1 == "O") &&
    (b3 == "X" || b3 == "0" || b1 == "x" || b1 == "o" || b1 == "O") &&
    (b4 == "X" || b4 == "0" || b1 == "x" || b1 == "o" || b1 == "O") &&
    (b5 == "X" || b5 == "0" || b1 == "x" || b1 == "o" || b1 == "O") &&
    (b6 == "X" || b6 == "0" || b1 == "x" || b1 == "o" || b1 == "O") &&
    (b7 == "X" || b7 == "0" || b1 == "x" || b1 == "o" || b1 == "O") &&
    (b8 == "X" || b8 == "0" || b1 == "x" || b1 == "o" || b1 == "O") &&
    (b9 == "X" || b9 == "0" || b1 == "x" || b1 == "o" || b1 == "O")
  ) {
    document.getElementById("result").innerHTML = "Match Tie";
  }
  //function changecolor() {
  // if (boxes == "x" || boxes == "X") {
  // boxes.style.color = "red";
  //} else if (boxes == "0" || boxes == "o" || boxes == "O") {
  // boxes.style.color = "blue";
  //}
  //}
}

//-------------------reset game------------------
function resetinput() {
  location.reload();
}
//function for music---------------------
function formusic() {
  const audiomusic = new Audio("news-ting-6832.mp3");
  audiomusic.play();
}
