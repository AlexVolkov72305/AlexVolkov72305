<!doctype html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
    
    <title>Ваше сообщение успешно отправлено</title>


</head>

<body>

<?php
	$back = "<p><a href=\"javascript: history.back()\">Вернуться назад</a></p>";
	
	if(!empty($_POST['name'])  and !empty($_POST['mail']) and !empty($_POST['message']) and !empty($_POST['select'])){
		$name = trim(strip_tags($_POST['name']));
		$mail = trim(strip_tags($_POST['mail']));
		$message = trim(strip_tags($_POST['message']));
		$select = trim(strip_tags($_POST['select']));
		
		mail('почта_для_получения_сообщений@gmail.com', 'Письмо с адрес_вашего_сайта', 'Вам написал: '.$name.'<br />Его почта: '.$mail.'<br />Его сообщение: '.$message.'<br />Он пользуется: '.$select,"Content-type:text/html;charset=windows-1251");
		
		echo "Ваше сообщение успешно отправлено!<Br> Вы получите ответ в ближайшее время<Br> $back";
		
		exit;
	} 
	else {
		echo "Для отправки сообщения заполните все поля! $back";
		exit;
	}
?>
</body>