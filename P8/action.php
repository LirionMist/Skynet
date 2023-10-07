<?php 

    if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit;

    $link = "<a href ='index.php'><button>На главную</button></a>" ;
    
    if(empty($_POST['login']) || empty($_POST['password'])) {
        echo "Необходимые поля не зполнены";
    }

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

    $pwd = $_POST['password'];
    $pwd_hash = password_hash($pwd, PASSWORD_DEFAULT);

    $select = $connection->prepare( "SELECT `password` FROM `users` WHERE `login` = ?;" ); 
    $res = $select->execute([ $_POST['login'] ] );

        if(!$res ){
            exit( 'неправильный логин или пароль');
        }

    ?>

 <form action="index.php" method="post">
 <p style="text-align: left"><button>На главную</button>
</form>