function checkform() {
  var rideRadios = document.getElementsByName('Ride_for');

  if(rideRadios[3].checked) {
    setTimeout(function() {
      window.location.href = document.getElementsByName('_next')[0].value;
    }, 0)
    return false;
  }

  var now = new Date();
  var day = now.getDay();
  switch(day) {
    case 0:
      if(requestedDay('Sunday') && hour <= 9) {
        alert("You missed the deadline for Sunday :(");
        return false;
      } else {
        alert("It's too early :)");
        return false;
      }
    case 1:
    case 2:
      alert("It's too early :)");
      return false;
    case 3:
      var hour = now.getHours();
      if(hour < 12) {
        alert("It's too early :)");
        return false;
      }
      break;
    case 4:
      var hour = now.getHours();
      if(requestedDay('Friday') && hour >= 21) {
        alert("You missed the deadline for Friday :(");
        return false;
      }
      break;
    case 5:
      if(requestedDay('Friday')) {
        alert("You missed the deadline for Friday :(");
        return false;
      }
      break;
    case 6:
      var hour = now.getHours();
      if(requestedDay('Sunday') && hour >= 21) {
        alert("You missed the deadline for Sunday :(");
        return false;
      }
      if(requestedDay('Friday')) {
        alert("It's too early to request Friday :)");
        return false;
      }
      break;
    default:
      alert("You should never see this message!");
      return false;
  }

  if(rideRadios[0].checked || rideRadios[1].checked || rideRadios[2].checked) {
    if(document.ride_sign_up.Name.value === "") {
      alert("Please enter your name.");
      return false;
    }
    if(rideRadios[0].checked || rideRadios[2].checked) {
      var friRadios = document.getElementsByName('Friday');
      if(!friRadios[0].checked && !friRadios[1].checked && !friRadios[2].checked) {
        alert("Please select where you're going afterwards on Friday.");
        return false;
      }
    }
    if(rideRadios[1].checked || rideRadios[2].checked) {
      var sunRadios = document.getElementsByName('Sunday');
      if(!sunRadios[0].checked && !sunRadios[1].checked && !sunRadios[2].checked) {
        alert("Please select where you're going afterwards on Sunday.");
        return false;
      }
    }
    var infoRadios = document.getElementsByName('Is_New');
    if(infoRadios[1].checked) {
      return true;
    } else if(infoRadios[0].checked || infoRadios[2].checked) {
      if(document.ride_sign_up.Location.value === "") {
        alert("Please enter a location.");
        return false;
      }
      if(document.ride_sign_up.Email.value === "") {
        alert("Please enter an email.");
        return false;
      }
      if(document.ride_sign_up.Email.value.search('@') < 0) {
        alert("Please enter a valid email.");
        return false;
      }
      return true;
    }
    alert("Please select if you've given your information before.");
    return false;
  }
  alert("Please select if you need a ride.");
  return false;
};

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
  var email = document.getElementsByName('Email');
  loc[0].value = "";
  email[0].value = "";
}

function showInfo() {
  $('#first-time').slideDown();
}
