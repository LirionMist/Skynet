<?php 

    if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit;

    $link = "<a href ='index.php'><button>На главную</button></a>" ;
    
    if(empty($_POST['login']) || empty($_POST['email']) || empty($_POST['password']) ||empty($_POST['repassword'])) {
        echo "Необходимые поля не зполнены";
    }

    if (strlen($_POST['login']) < 9) {
        exit('Логин должен быть минимум 8 символов ' . $link);
    }

    if (strlen($_POST['password']) < 8) {
        exit('Пароль должен быть минимум 8 символов ' . $link);
    }

    if($_POST['password'] !== $_POST['repassword']) exit('пароли не совпадают' . $link);

    //conection to database
    $host = "db4.myarena.ru";      
    $dbname = "u19978_b05";       
    $user = "u19978_b05";         
    $password = "mD0kT6hL8r";     

    try {
        $connection = new PDO('mysql:host=' . $host . ';dbname=' . $dbname . ';charset=utf8', $user, $password);
    
        } catch (PDOException $e) {
            die("Ошибка подключения: " . $e->getMessage());
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

    $pwd = $_POST['password'];
    $pwd_hash = password_hash($pwd, PASSWORD_DEFAULT);
    // Create new USER
    $data = [ $_POST['login'], $pwd_hash, $_POST['email'] ];
    $res = $connection->prepare( "INSERT INTO `users` (`login`, `password`, `email`) VALUES (?,?,?);" ); 
    $res = $res->execute( $data);

    if( $res ){
        exit( 'Регистрация прошла успешно' );
    }
    
    exit('Ошибка регистрации... (2) ' . $link );
    ?>

 <form action="index.php" method="post">
 <p style="text-align: left"><button>На главную</button>
</form>