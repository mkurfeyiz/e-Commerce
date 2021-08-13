$(".forgot-btn").click(function() {
  var jqxhr = $.post("login.html", function() {
      alert("success");
    })
    .done(function() {
      $("#forgot-success").fadeIn(400).delay(3000).fadeOut(400);
    })
    .fail(function() {
      $("#forgot-fail").fadeIn(400).delay(3000).fadeOut(400);
    });

});


// Perform other work here ...

// Set another completion function for the request above
/*jqxhr.always(function() {
  alert( "second finished" );
});*/
