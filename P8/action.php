<?php 

    if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit;

    $link = "<a href ='index.php'><button>Back</button></a>" ;
    $link1 = "<a href ='Untitled.php'><button>Back</button></a>" ;
    
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

    session_start();
    $_SESSION["login"]=$_POST['login'];

    $pwd = $_POST['password'];
    $pwd_hash = password_hash($pwd, PASSWORD_DEFAULT);

    $userLogin = $_POST['login'];
    $userPassword = $_POST['password'];
    
    $select = $connection->prepare("SELECT `password` FROM `users` WHERE `login` = ? or `email` = ?;");
    $select->execute([$userLogin, $userLogin]);
    $row = $select->fetch();
    
    if ($row && password_verify($userPassword, $row['password'])) exit("login successful"."<br>". $link1);
    
    else {
        echo "неправильный логгин или пароль";
    }
    ?>

 <form action="index.php" method="post">
 <p style="text-align: left"><button>Back</button>
</form>