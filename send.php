<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];

    $name = trim(urldecode(htmlspecialchars($name)));
    $email = trim(urldecode(htmlspecialchars($email)));
    $msg = trim(urldecode(htmlspecialchars($msg)));

    
    if(mail("a9ata9er@gmail.com", "Заявка на создание сайта",
    "<h1>На сайте оставили заявку</h1> 
    <br> от пользователя по имени: <b>".$name."</b>
    <br>У него бфл email: <b>".$email."</b>
    <br>и оставил комментарий ".$msg."
    <br><h3>Поздравляем с новой заявкой!</h3>",
    "From: aga@gmail.com\r\n"."Conten-tupe: text/html\r\n"))
    {
        echo '{"status": "ok"}';
    }else{
        echo '{"status": "error"}';
    }
?>