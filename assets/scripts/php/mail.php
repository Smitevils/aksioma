<?php

//message
if (isset($_POST['name'])) {$name = $_POST['name'];} else {$name = "Имя не указано.";};
if (isset($_POST['phone'])) {$phone = $_POST['phone'];} else {$phone = "Телефон не указан.";};
if (isset($_POST['comment'])) {$comment = $_POST['comment'];} else {$comment = "Комментарий не указан!";};
if (isset($_POST['foundation'])) {$foundation = $_POST['foundation'];} else {$foundation = "Основание для письма не указано!";};

$to = "smitevils@mail.ru"; /*УКАЗАТЬ СВОЙ АДРЕС!*/
$headers = "Content-type: text/plain; charset = utf-8";
$subject = "Aksioma - Натяжные потолки";
$message = "Основание: $foundation \nИмя: $name \nНомер телефона: $phone \nКомментарий: $comment";
$send = mail ($to, $subject, $message, $headers);

//echo $name." ".$phone." ".$email." ".$city;
?>

