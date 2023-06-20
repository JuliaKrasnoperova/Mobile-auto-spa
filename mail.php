<?php
$fio = $_POST['FIO'];
$phone = $_POST['PHONE'];
$text = $_POST['TEXT'];
$headers = 'From: webmaster@example.com';
mail("julia.krasnoperova97@gmail.com", "Заявка с сайта", "ФИО:".$fio.". Телефон: ".$phone.". Сообщение: ".$text,$headers);


header("Location: index.html");
exit();

