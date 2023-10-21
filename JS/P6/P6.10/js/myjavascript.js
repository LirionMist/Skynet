let userString = prompt("Введите любое значение");
let correctMessage = "верно";
let wrongMessage = "неверно";

if (userString[0] === "1" || userString[0] === "2" || userString[0] === "3") {
    alert(correctMessage);
} else {
    alert(wrongMessage);
}