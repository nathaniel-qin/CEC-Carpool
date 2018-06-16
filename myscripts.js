function alertEmpty() {
  alert("You have to actually type something...");
}

function toSuccess(number) {
  alert("Wowzers!");
  window.location.href = "../Successes/success" + number + ".html";
}

function alertWrong() {
  var seed = Math.floor(Math.random()*10);
  switch(seed) {
    case 0:
      alert("Try a little harder (:")
      break;
    case 1:
      alert("Try again ):")
      break;
    case 2:
      alert("Not even close... o.O")
      break;
    case 3:
      alert("Excuse me? -__-")
      break;
    case 4:
      alert("Not quite c:")
      break;
    case 5:
      alert("Nope... =.=")
      break;
    case 6:
      alert("Huh? |:")
      break;
    case 7:
      alert("Guess again. *_*")
      break;
    case 8:
      alert("Was this too hard? ._.")
      break;
    case 9:
      alert("Keep guessing, I believe in you xD")
      break;
    default:
      alert("If you see this message you have hacked the system. +_+")
  }
}

function checkAnswer1(guess) {
  if(guess === "") {
    alertEmpty();
  } else if(guess === "albuquerque") {
    toSuccess(1);
  } else {
    alertWrong();
  }
}

function checkAnswer2(guess) {
  if(guess === "") {
    alertEmpty();
  } else if(guess === "pineapple belongs on pizza" || guess === "pineapplebelongsonpizza") {
    toSuccess(2);
  } else {
    alertWrong();
  }
}
