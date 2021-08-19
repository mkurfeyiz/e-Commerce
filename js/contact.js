$(".send-btn").click( contactControl );

function contactControl(){
  var firstName = $("#fname");
  var lastName = $("#lname");
  var phoneNumber = $("#phone");
  var emailAddress = $("#emailInput1");
  var checkFlag, count = 0;
  //4 condition value

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


  if(count % 4 == 0 && checkFlag){
    console.log("success");
  } else {
    console.log("fail");
  }
}
