<html>
<head><title>Mail Tester</title></head>
<body>
<?php

/* All form fields are automatically passed to the PHP script through the array $HTTP_POST_VARS. */

$ouremail = 'admin@texasradiation.org';

$fname = $HTTP_POST_VARS['fname'];
$lname = $HTTP_POST_VARS['lname'];
$phone = $HTTP_POST_VARS['phone'];
$phonetime = $HTTP_POST_VARS['phonetime'];
$email = $HTTP_POST_VARS['email'];
$subject = $HTTP_POST_VARS['subject'];
$notemessage = $HTTP_POST_VARS['notemessage'];

$notetext = "$fname $lname \nPhone: $phone \nBest time to call: $phonetime \nEmail: $email \n \n$notemessage \n \n";

if (!preg_match("/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/", $email)) {
  echo "<h4>Invalid email address</h4>";
  echo "<a href='javascript:history.back(1);'>Back</a>";
} elseif ($subject == "") {
  echo "<h4>No subject</h4>";
  echo "<a href='javascript:history.back(1);'>Back</a>";
}

/* Sends the mail and outputs the "Thank you" string if the mail is successfully sent, or the error string otherwise. */
elseif (mail($ouremail,$subject,$notetext)) {
/*  echo "<h4>$fname, Thank you for sending email</h4>"; */
	function redirect($filename) {
	   if (!headers_sent())
	       header('Location: '.$filename);
	   else {
	       echo '<script type="text/javascript">';
	       echo 'window.location.href="'.$filename.'";';
	       echo '</script>';
	       echo '<noscript>';
	       echo '<meta http-equiv="refresh" content="0;url='.$filename.'" />';
	       echo '</noscript>';
	   }
	}
	redirect('http://www.texasradiation.org/positive_email_response.html');
} else {
  echo "<h4>$fname, I am sorry but $email doesn't seem to be a valid email address</h4>";
}
?>
</body>
</html> 