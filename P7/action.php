<?php 
        if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit;
        
        if(empty($_POST['login']) || empty($_POST['email']) || empty($_POST['password']) ||empty($_POST['repassword'])) {
            echo "Необходимые поля не зполнены";
        }

        if($_POST['password'] !== $_POST['repassword']) exit('пароли не совпадают <form action="index7.php" method="post">
        <p style="text-align: left"><button>На главную</button>
        </form>');

        if (strlen($_POST['password']) < 9) {
            exit('Пароль должен быть минимум 8 символов <form action="index7.php" method="post">
            <p style="text-align: left"><button>На главную</button>
            </form>');
        }

        if (strlen($_POST['login']) < 9) {
            exit('Логин должен быть минимум 8 символов <form action="index7.php" method="post">
            <p style="text-align: left"><button>На главную</button>
            </form>');
        }
        
    ?>

 <form action="index7.php" method="post">
 <p style="text-align: left"><button>На главную</button>
</form>