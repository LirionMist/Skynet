<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log In</title>
</head>
<body>
    
    <form action="action.php" method="post">
        <p>В данном примере, форма ссылается сама на себя</p>
        <p>Ваше имя: <input type="text" name="name" require></p>
        <p>Ваш возраст: <input type="number" name="age" min="1" require></p>
        <p><input type="submit"></p> 
        </form>
</body>
</html>