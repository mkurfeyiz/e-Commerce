$(".signup-btn").click(signupControls);

function signupControls() {
  var firstName = $("#fname");
  var lastName = $("#lname");
  var phoneNumber = $("#phone");
  var emailAddress = $("#emailInput");
  var pword = $("#password");
  var pword2 = $("#password2");
  var checkFlag, count = 0;
  //6 + 1 condition value

  if (firstName.val()) {
    $("#fname-error").css("display", "none");
    checkFlag = true;
    count++;
  } else {
    checkFlag = false;
    $("#fname-error").css("display", "block");
  }

  if (lastName.val()) {
    $("#lname-error").css("display", "none");
    checkFlag = true;
    count++;
  } else {
    checkFlag = false;
    $("#lname-error").css("display", "block");
  }

  if (phoneNumber.val()) {
    $("#phone-error").css("display", "none");
    checkFlag = true;
    count++;
  } else {
    checkFlag = false;
    $("#phone-error").css("display", "block");
  }

  if (emailAddress.val()) {
    $("#email-error").css("display", "none");
    checkFlag = true;
    count++;
  } else {
    checkFlag = false;
    $("#email-error").css("display", "block");
  }

  if (pword.val()) {
    $("#password-error").css("display", "none");
    checkFlag = true;
    count++;
  } else {
    checkFlag = false;
    $("#password-error").css("display", "block");
  }

  if (pword2.val()) {
    $("#password2-error").css("display", "none");
    checkFlag = true;
    count++;
  } else {
    checkFlag = false;
    $("#password2-error").css("display", "block");
  }

  if (pword.val() === pword2.val()) {
    $("#passwords-match-error").css("display", "none");
    checkFlag = true;
    count++;
  } else {
    checkFlag = false;
    $("#passwords-match-error").css("display", "block");
  }

  //show toasts
  if (count % 7 == 0 && checkFlag) {
    //save values
    console.log("successfully created an account");
  } else {
    //fail toast
    console.log("Account creation failed");
  }
}
