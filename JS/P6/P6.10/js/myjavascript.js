let userString = prompt("Введите любое значение");
let summ = 0;

for (let i = 0; i < 3; i++) {
    summ = summ + +userString[i];
}

alert('сумма равна ' + summ);