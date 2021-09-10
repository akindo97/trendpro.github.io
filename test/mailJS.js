function sendMail() {
  var email = document.getElementById("emailInput").value;
  var subject = document.getElementById("subjectInput").value;
  var msg = document.getElementById("msgInput").value;

  var errorMsg = "Please enter all information.";

  if (email == "" || subject == "" || msg == "") {
    document.getElementById("ajaxResponseFail").style.display = "block";
    document.getElementById("ajaxResponseFail").innerHTML = errorMsg;
  } else {

    var successMsg = "Mail sent. You will get confirmation soon.";
    var failMsg = "Mail not sent. Please try again.";
    //... sendMail() function
    //...
    //...
  }
  //Paste this code snippet outside and before of sendMail() function
document.getElementById("emailInput").addEventListener("focus", function() {
    document.getElementById("ajaxResponseFail").style.display = "none";
    document.getElementById("ajaxResponseSuccess").style.display = "none";
  })
  document.getElementById("subjectInput").addEventListener("focus", function() {
    document.getElementById("ajaxResponseFail").style.display = "none";
    document.getElementById("ajaxResponseSuccess").style.display = "none";
  })
  document.getElementById("msgInput").addEventListener("focus", function() {
    document.getElementById("ajaxResponseFail").style.display = "none";
    document.getElementById("ajaxResponseSuccess").style.display = "none";
  })
//...
//...
//...sendMail() function
var formdata = new FormData();
formdata.append("email", email);
formdata.append("subject", subject);
formdata.append("msg", msg);
//...sendMail() function
//...
//...ư
//...
//...
//... sendMail() function
var xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("ajaxResponseFail").style.display = "none";
    document.getElementById("ajaxResponseSuccess").style.display = "block";
    document.getElementById("ajaxResponseSuccess").innerHTML = successMsg;
  } else if (this.readyState == 4 && this.status != 200) {
    document.getElementById("ajaxResponseSuccess").style.display = "none";
    document.getElementById("ajaxResponseFail").style.display = "block";
    document.getElementById("ajaxResponseFail").innerHTML = failMsg;
  }
}
xhttp.open("POST", "sendMail.php", true);
xhttp.send(formdata);
}  