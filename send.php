<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>


<?php
if($_POST)
{
$to = "goooogle.gmaaail@gmail.com";
$from = 'ME';
$subject = "Сообщение с сайта INSTAGRAMM";
$message = 'Имя: '.$_POST['name'].';<br>Телефон: '.$_POST['telephone'].';<br>E-mail: '.$_POST['email'].';<br>VKID: '.$_POST['vkid'];
$headers = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: Сайт INSTAGRAMM\r\n";
$result = mail($to, $subject, $message, $headers);

if ($result){ 
echo "Cообщение успешно отправлено. Пожалуйста, оставайтесь на связи";
}
}
?>

</body>
</html>