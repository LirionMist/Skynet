<?php
$host = "db4.myarena.ru";      // Адрес сервера базы данных
$dbname = "u19978_b05";        // Имя базы данных
$user = "u19978_b05";          // Имя пользователя
$password = "mD0kT6hL8r";      // Пароль

try {
    $connection = new PDO('mysql:host=' . $host . ';dbname=' . $dbname . ';charset=utf8', $user, $password);

    } catch (PDOException $e) {
        die("Ошибка подключения: " . $e->getMessage());
    }

    $result = $connection->query('SELECT * FROM  `product`');

    if ($result){
    if ($result->rowCount() == 0) {
        echo "Запрос не вернул результатов.";
    } else {

        echo "<table border='1'>";
        // Вывод заголовков таблицы
        echo "<tr>";
        
        for ($i = 0; $i < $result->columnCount(); $i++) {
            $column = $result->getColumnMeta($i);
            echo "<th>{$column['name']}</th>";
        }
        echo "</tr>";
        
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            echo "<tr>";
            foreach ($row as $value) {
                echo "<td>".$value."</td>";
            }
            echo "</tr>";
        }
        echo "</table>";
        }}

            else {
                echo "Запросвыполнен с ошибкой ";
            }
?>