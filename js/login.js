$(".login-btn").click( loginControls );

function loginControls(){
  var email = $("#emailInput");
  var password = $("#password");
  var loginFlag, count = 0;

  if(email.val()){
    count++;
    loginFlag = true;
    $("#email-error").css("display","none");
  } else {
    loginFlag = false;
    $("#email-error").css("display","block");
  }

  if(password.val()){
    count++;
    loginFlag = true;
    $("#password-error").css("display","none");
  } else {
    loginFlag = false;
    $("#password-error").css("display","block");
  }

  if(count%2 == 0 && loginFlag){
    console.log("success");
  } else {
    console.log("fail");
  }

}
