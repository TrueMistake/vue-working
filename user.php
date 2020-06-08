<?php
if ($_POST()) {
    $firstName = $_POST['name']; // создаем переменную firstName, которая содержит переданные скрипту через HTTP метод POST данные (с ключом firstName)
    $phone = $_POST['phone']; // создаем переменную lastName, которая содержит переданные скрипту через HTTP метод POST данные (с ключом lastName)
    $email = $_POST['email'];
}

echo json_encode($_POST);
?>
