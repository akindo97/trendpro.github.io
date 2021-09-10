<?php
 $subject = $_POST['subject'];
 $email = $_POST['email'];
 $msg = $_POST['msg'];
 //...sendMail.php
 //...
 //..

//...
//...
//...sendmail.php
if(!empty($subject) || !empty($email) || !empty($msg)){
$to = 'reciving.email@host.com';
$headers = 'From:' . $email;
//...sendmail.php if function
//...
//...
$msg = $_POST['msg'] . "\nFrom: " . $email;
$headers = 'From: My contact form';
//...
//...
//...sendmail.php if function
mb_language("uni");
mb_internal_encoding("UTF-8");
mb_send_mail($to,$subject,$msg,$headers);
//...sendmail.php if function
//...
//...
/...
//...
//...sendmail.php if function
 $respondMsg = 'message body.';
 $respondSubject = 'message subject';
 $respondHeaders = 'From: noreply@mail.com';
          mb_send_mail($email,$respondSubject,$respondMsg,$respondHeaders);
}else {
  echo '403';
 }?>
 <html>
<body>
  <div>
    <form>
      <div>
        <label for="email">Email</label>
        <input id="emailInput" type="email" placeholder="Enter your email" name="email" required />
      </div>
      <div>
        <label for="subject">Subject</label>
        <input id="subjectInput" type="text" placeholder="Enter subject" name="subject" accept-charset="utf-8" required />
      </div>
      <div class="form-group">
        <label for="poruka">Message</label>
        <textarea id="msgInput" type="text" placeholder="Enter message" rows="5" name="msg" accept-charset="utf-8" required></textarea>
      </div>
    </form>
    <div>
      <button id="submitBtn" type="button" onclick="sendMail()">Send</button>
    </div>
    <div id="ajaxResponseSuccess" role="alert"> </div>
    <div id="ajaxResponseFail" role="alert"></div>
  </div>
  <script src="mailJS.js"></script>
</body>
</html>