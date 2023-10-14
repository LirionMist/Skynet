let userLoogin = prompt("Введите логин");
let wrongMessage = "доступ закрыт";

if (userLoogin =='Админ'|| userLoogin =='admin'){
    let password = prompt('Введите пароль');

    if (password =='Я главный'){
        alert('Здраствуйте!')
    }
    else{
        alert(wrongMessage);
    }
}
else{
    alert(wrongMessage);
}
