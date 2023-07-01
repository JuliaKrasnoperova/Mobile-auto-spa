<?php
$fio = $_POST['FIO'];
$phone = $_POST['PHONE'];
$text = $_POST['TEXT'];
$headers = 'From: webmaster@example.com';
mail("julia.krasnoperova97@gmail.com", "Заявка с сайта Mobile Auto SPA", "ФИО:" . $fio . ". Телефон: " . $phone . ". Сообщение от пользователя: " . $text, $headers);


header("Location: thankyou.html");
exit();
