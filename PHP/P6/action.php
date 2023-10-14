<?php 
        if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit;
        
            if(empty($_POST['age']) || empty($_POST['name'])) exit('Поля не заполнены! <form action="index.php" method="post">
            <p style="text-align: left"><button>На главную</button>
            </form>');

            if(empty($_POST['age'])) exit('Поле "возраст" не заполнено <form action="index.php" method="post">
            <p style="text-align: left"><button>На главную</button>
           </form>');
            
            if((int)$_POST['age'] < 1) exit('Поле "возраст" < 1 <form action="index.php" method="post">
            <p style="text-align: left"><button>На главную</button>
           </form>');

           if (preg_match('/\d+/', $_POST['name'])) exit('в поле возраст введены спецсимволы <form action="index.php" method="post">
           <p style="text-align: left"><button>На главную</button>');

            echo 'Здравствуйте, '.htmlspecialchars($_POST['name']).'. <br>';
            echo 'Вам '.(int)$_POST['age'].' лет.'.'<br>';
        
    ?>

 <form action="index.php" method="post">
 <p style="text-align: left"><button>На главную</button>
</form>