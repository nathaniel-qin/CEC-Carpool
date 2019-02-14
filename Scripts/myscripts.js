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

function checkAnswer8(x) {
  var allowed = /[gjpqy]/;
  if(!alertEmpty(x[0]) && !alertEmpty(x[1]) && !alertEmpty(x[2])) {
    if(!doubleCheck8(x)) {
      return false;
    } else if(allowed.test(x[0]) && allowed.test(x[1]) && allowed.test(x[2])) {
      toSuccess(8);
    } else {
      alertWrong();
      return false;
    }
  }
}

function doubleCheck8(x) {
  if(x[0] === x[1] || x[0] === x[2] || x[1] === x[2]) {
    alert("You have to bring 3 different things!");
    return false;
  } else if (/apple/i.test(x[0]) || /quilt/i.test(x[0]) || /gasoline/i.test(x[0]) || /apple/i.test(x[1]) || /quilt/i.test(x[1]) || /gasoline/i.test(x[1]) || /apple/i.test(x[2]) || /quilt/i.test(x[2]) || /gasoline/i.test(x[2])) {
    alert("You can't use the things from my example!");
    return false;
  } else {
    return true;
  }
}

function checkAnswer9(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "1 3 1 1 2 2 2 1" ||
       guess === "13112221") {
      toSuccess(9);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer10(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "24763") {
      toSuccess(10);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer11(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "76") {
      toSuccess(11);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer12(guess) {
  if(!alertEmpty(guess)) {
    if(doubleCheck12(guess)) {
      toSuccess(12);
    } else {
      alertWrong();
      return false;
    }
  }
}

function doubleCheck12(guess) {
  var x = [
    'ada',
    'ado',
    'edo',
    'nda'
  ]
  for(var i = 0; i < x.length; i++) {
    if(guess.substring(3, 6) === x[i]) return true;
  }
  return false;
}

function checkAnswer13(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "1") {
      toSuccess(13);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer14(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "pickles are not really food") {
      toSuccess(14);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer15(blue, red) {
  if(!alertEmpty(blue) && !alertEmpty(red)) {
    if(blue === "5" && red === "3") {
      toSuccess(15);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer16(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "79") {
      toSuccess(16);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer17(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "34") {
      toSuccess(17);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer18(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "implicit") {
      toSuccess(18);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer19(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "1") {
      toSuccess(19);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer20(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "it's not only pickles, i also do not like avocados" ||
       guess === "its not only pickles, i also do not like avocados" ||
       guess === "it's not only pickles i also do not like avocados" ||
       guess === "its not only pickles i also do not like avocados") {
         toSuccess(20);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer21(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "peanuts") {
      toSuccess(21);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer22(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "right in front of you" || guess === "right in front of you.") {
      toSuccess(22);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer23(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "31") {
      toSuccess(23);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer24(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "starfield") {
      toSuccess(24);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer25(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "meat") {
      toSuccess(25);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer26(guess) {
  if(!alertEmpty(guess)) {
    if(guess === "silence") {
      toSuccess(26);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer27(guess) {
  if(!alertEmpty(guess)) {
    if(/i'll have ham and eggs/i.test(guess) || /ill have ham and eggs/i.test(guess)) {
      toSuccess(27);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer28(guess) {
  if(!alertEmpty(guess)) {
    if(guess === 'fmamj') {
      toSuccess(28);
    } else {
      alertWrong();
      return false;
    }
  }
}

function checkAnswer29(guess) {
  if(!alertEmpty(guess)) {
    if(guess.charAt(0) === 'e' && guess.charAt(guess.length - 1) === 'e') {
      toSuccess(29);
    } else {
      alertWrong();
      return false;
    }
  }
}
