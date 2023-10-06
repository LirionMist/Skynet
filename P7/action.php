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

    if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit;
    
    if(empty($_POST['login']) || empty($_POST['email']) || empty($_POST['password']) ||empty($_POST['repassword'])) {
        echo "Необходимые поля не зполнены";
    }

    if($_POST['password'] !== $_POST['repassword']) exit('пароли не совпадают <form action="index7.php" method="post">
    <p style="text-align: left"><button>На главную</button>
    </form>');

    if (strlen($_POST['password']) < 8) {
        exit('Пароль должен быть минимум 8 символов <form action="index7.php" method="post">
        <p style="text-align: left"><button>На главную</button>
        </form>');
    }

    if (strlen($_POST['login']) < 9) {
        exit('Логин должен быть минимум 8 символов <form action="index7.php" method="post">
        <p style="text-align: left"><button>На главную</button>
        </form>');
    }
    


    $select = $connection->prepare( "SELECT COUNT(`id`) as cnt FROM `users` WHERE `login` = ?;" ); 
    $res = $select->execute([ $_POST['login'] ] );
    $row = $select->fetch();
    if(!$res ){
        exit( 'Ошибка регистрации...');
    }

    if( $res && isset($row['cnt']) && $row[0] > 0 ){
    exit( 'Ошибка регистрации... (Пользователь уже существует)' );
    }

    // Create new USER
    $data = [ $_POST['login'], $_POST['password'], $_POST['email'] ];
    $res = $connection->prepare( "INSERT INTO `users` (`login`, `password`, `email`) VALUES (?,?,?);" ); 
    $res = $res->execute( $data);

    if( $res ){
        exit( 'Регистрация прошла успешно' );
    }
    
    exit('Ошибка регистрации... (2)' );
    ?>

 <form action="index7.php" method="post">
 <p style="text-align: left"><button>На главную</button>
</form>