//localStorage variables
var profilePhoto = localStorage.getItem("profilePhoto");
var fname = localStorage.getItem("fname");
var lname = localStorage.getItem("lname");
var phone = localStorage.getItem("phone");
var email = localStorage.getItem("email");
var password = localStorage.getItem("password");

$(document).ready(getValues);

console.log(profilePhoto);

//change profile photo
$(".change-btn").click(function(){
  //upload photo
  $("#change-photo-modal").modal("show");
});

//delete profile photo
$(".delete-btn").click(function(){

  localStorage.setItem("profilePhoto", "images/default_profile.jpg");
  $(".profile-photo").attr("src", localStorage.getItem("profilePhoto"));
  //toast
  $("#img-toast-delete").fadeIn(400).delay(3000).fadeOut(400);
});

//setting new values
$(".save-btn").click(setValues);

//setter function
function setValues(){
  var firstName = $("#fname");
  var lastName = $("#lname");
  var phoneNumber = $("#phone");
  var emailAddress = $("#email");
  var pword = $("#password");
  var pword2 = $("#password2");
  var checkFlag, count = 0;
  //6 + 1 condition value

  if(firstName.val()){
    $("#fname-error").css("display","none");
    checkFlag = true;
    count++;
  } else {
    checkFlag = false;
    $("#fname-error").css("display","block");
  }

  if(lastName.val()){
    $("#lname-error").css("display","none");
    checkFlag = true;
    count++;
  } else {
    checkFlag = false;
    $("#lname-error").css("display","block");
  }

  if(phoneNumber.val()){
    $("#phone-error").css("display","none");
    checkFlag = true;
    count++;
  } else {
    checkFlag = false;
    $("#phone-error").css("display","block");
  }

  if(emailAddress.val()){
    $("#email-error").css("display","none");
    checkFlag = true;
    count++;
  } else {
    checkFlag = false;
    $("#email-error").css("display","block");
  }

  if(pword.val()){
    $("#password-error").css("display","none");
    checkFlag = true;
    count++;
  } else {
    checkFlag = false;
    $("#password-error").css("display","block");
  }

  if(pword2.val()){
    $("#password2-error").css("display","none");
    checkFlag = true;
    count++;
  } else {
    checkFlag = false;
    $("#password2-error").css("display","block");
  }

  if(pword.val() === pword2.val()){
    $("#passwords-match-error").css("display", "none");
    checkFlag = true;
    count++;
  } else {
    checkFlag = false;
    $("#passwords-match-error").css("display", "block");
  }

  //show toasts
  if(count%7 == 0 && checkFlag){
    //save values
    localStorage.setItem("fname", firstName.val());
    localStorage.setItem("lname", lastName.val());
    localStorage.setItem("phone", phoneNumber.val());
    localStorage.setItem("email", emailAddress.val());
    localStorage.setItem("password", pword.val());
    //success toast
    $("#save-changes-toast-success").fadeIn(400).delay(3000).fadeOut(400);
  } else {
    //fail toast
    $("#save-changes-toast-fail").fadeIn(400).delay(3000).fadeOut(400);
  }
}

//getting saved values
function getValues(){
  $(".profile-photo").attr("src", profilePhoto);
  $("#fname").val(fname);
  $("#lname").val(lname);
  $("#phone").val(phone);
  $("#email").val(email);
  $("#password").val(password);
  $("#password2").val(password);
}
