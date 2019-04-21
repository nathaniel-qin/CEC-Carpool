function nextPage(data) {
  $("#submitting").fadeOut();
  setTimeout(function() {
    alert("Thanks for submitting! You should receive a confirmation email shortly.");
    window.location.href = nextUrl;
  }, 400);
}

function alertError(data) {
  alert("There was an error processing your response. Please try again. If it persists, contact Nathaniel ASAP.")
}

function requestedDay(day) {
  var radios = document.getElementsByName("Ride_for");
  if(day === "Friday") {
    if(radios[0].checked || radios[2].checked) {
      return true;
    }
  } else if(day === "Sunday") {
    if(radios[1].checked || radios[2].checked) {
      return true;
    }
  }
  return false;
}

function showNeedRide() {
  $('#need-ride').slideDown();
}

function showNeedRideFriday() {
  $('#friday').slideDown();
  $('#sunday').slideUp();
  $('#fri-sun-br').slideUp();
  clearDay('Sunday');
  showNeedRide();
}

function showNeedRideSunday() {
  $('#friday').slideUp();
  $('#sunday').slideDown();
  $('#fri-sun-br').slideUp();
  clearDay('Friday');
  showNeedRide();
}

function clearDay(name) {
  var radios = document.getElementsByName(name);
  for(var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
  var sug = document.getElementsByName(name + '_Sug');
  sug[0].value = "";
}

function showNeedRideBoth() {
  showNeedRide();
  $('#friday').slideDown();
  $('#fri-sun-br').slideDown();
  $('#sunday').slideDown();
}

function hideNeedRide() {
  $('#sunday-sug').slideUp();
  $('#friday-sug').slideUp();
  $('#first-time').slideUp();

  clearDay('Sunday');
  clearDay('Friday');

  clearInfo();

  var name = document.getElementsByName('Name');
  var firstRadios = document.getElementsByName('Is_New');
  var comments = document.getElementsByName("Comments");

  name[0].value = "";
  comments[0].value = "";

  for(var i = 0; i < firstRadios.length; i++) {
    firstRadios[i].checked = false;
  }

  $('#need-ride').slideUp();
}

function hideFridaySug() {
  $('#friday-sug').slideUp();
  $('#fri-alert').hide();
}

function showFridaySug() {
  $('#friday-sug').slideDown();

  var radios = document.getElementsByName('Friday');
  if(radios[2].checked) {
    $('#fri-alert').show();
  } else {
    $('#fri-alert').hide();
  }
}

function hideSundaySug() {
  $('#sunday-sug').slideUp();
  $('#sun-alert').hide();
}

function showSundaySug() {
  $('#sunday-sug').slideDown();

  var radios = document.getElementsByName('Sunday');
  if(radios[2].checked) {
    $('#sun-alert').show();
  } else {
    $('#sun-alert').hide();
  }
}

function hideInfo() {
  $('#first-time').slideUp();
  clearInfo();
}

function clearInfo() {
  var loc = document.getElementsByName('Location');
  var email = document.getElementsByName('Phone');
  loc[0].value = "";
  email[0].value = "";
}

function showInfo() {
  $('#first-time').slideDown();
}
