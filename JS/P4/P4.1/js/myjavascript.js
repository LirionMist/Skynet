var firstNum = prompt("Введите первое число");
var secondNum = prompt("Введите второе число");


if (firstNum == secondNum){
    alert("Числа равны");
}

if (firstNum > secondNum){
    firstNum =firstNum*2;
    var message = "Первое число равно: " + firstNum + "\n" + "Второе число равно:"+ secondNum;
    alert(message);
}
else{
    secondNum=+secondNum+10;
    var message = "Первое число равно: " + firstNum + "\n" + "Второе число равно:"+ secondNum;
    alert(message);
}

