function checkform() {
  var rideRadios = document.getElementsByName('Ride_for');

  if(rideRadios[3].checked) {
    return true;
  } else if(rideRadios[0].checked || rideRadios[1].checked || rideRadios[2].checked) {
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
    if(infoRadios[0].checked) {
      return true;
    } else if(infoRadios[1].checked || infoRadios[2].checked) {
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

function showNeedRide() {
  $('#need-ride').slideDown();
}

function showNeedRideFriday() {
  showNeedRide();
  $('#friday').slideDown();
  $('#sunday').slideUp();
}

function showNeedRideSunday() {
  showNeedRide();
  $('#friday').slideUp();
  $('#sunday').slideDown();
}

function showNeedRideBoth() {
  showNeedRideFriday();
  $('#sunday').slideDown();
}

function hideNeedRide() {
  $('#need-ride').slideUp();
}

function hideFridaySug() {
  $('#friday-sug').slideUp();
}

function showFridaySug() {
  $('#friday-sug').slideDown();
}

function hideSundaySug() {
  $('#sunday-sug').slideUp();
}

function showSundaySug() {
  $('#sunday-sug').slideDown();
}

function hideInfo() {
  $('#first-time').slideUp();
}

function showInfo() {
  $('#first-time').slideDown();
}
