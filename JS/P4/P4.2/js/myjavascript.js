let firstNum = Number(prompt("Введите первое число"));
let secondNum = Number(prompt("Введите второе число"));

let settalment = (firstNum > secondNum) ? alert(`Первое число больше, оно равно: ${firstNum*2}`) : (firstNum < secondNum) ? alert(`Второе число больше, оно равно: ${secondNum+10}`): alert("Числа равны");


