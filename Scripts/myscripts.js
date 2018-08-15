function alertEmpty(guess) {
  if(guess === "") {
    alert("You have to actually type something...");
    return true;
  }
  return false;
}

function toSuccess(number) {
  alert("Wowzers!");
  window.location.href = "../success.html?puzzle=" + number;
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

function showHint() {
  $('#hint').slideDown(300);
  $('#hint-button').slideUp(300);
}

function checkAnswer1(guess) {
  if(!alertEmpty(guess)) {
    if(/albuquerque/i.test(guess)) {
      toSuccess(1);
    } else {
      alertWrong();
    }
  }
}

function checkAnswer2(guess) {
  if(!alertEmpty(guess)) {
    if(/sky/i.test(guess)) {
      toSuccess(2);
    } else {
      alertWrong();
    }
  }
}

function checkAnswer3(guess) {
  if(!alertEmpty(guess)) {
    if(/pineapple belongs on pizza/i.test(guess) || /pineapplebelongsonpizza/i.test(guess)) {
      toSuccess(3);
    } else {
      alertWrong();
    }
  }
}

function checkAnswer4(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "3221") {
      toSuccess(4);
    } else {
      alertWrong();
    }
  }
}

function checkAnswer5(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "aioyi") {
      toSuccess(5);
    } else {
      alertWrong();
    }
  }
}

function checkAnswer6(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "gnt") {
      toSuccess(6);
    } else {
      alertWrong();
    }
  }
}

function checkAnswer7(guess) {
  var correct = true;

  var colors = 'redgreenblue';
  var red = colors.slice(3, 8);
  var green = colors.slice(8);
  var blue = colors.slice(0, 3);

  var sequence = [red, red, green, blue, blue, green, red, green];

  for(var i = 0; i < 8; i++) {
    if(guess[i] !== sequence[i]) {
      correct = false;
      break;
    }
  }

  if(correct) {
    toSuccess(7);
    return true;
  } else {
    alertWrong();
    return false;
  }
}

function checkAnswer8(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "76") {
      toSuccess(8);
    } else {
      alertWrong();
      return false;
    }
  }
}
