let month = +prompt("Введите значение месяца");

if (month < 3 || month === 12) {
    alert("Зима");
} else if (month < 6) {
    alert("Весна");
} else if (month < 9) {
    alert("Лето");
} else if (month < 12) {
    alert("Осень");
}