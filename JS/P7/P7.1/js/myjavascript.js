let userString = prompt("Введите любое значение");
let summOfFirstHalf = 0;
let summOfSecondHalf = 0;

let correctMessage = "верно";
let wrongMessage = "неверно";

for (let i = 0; i < 3; i++) {
    summOfFirstHalf = summOfFirstHalf + +userString[i];
}

for (let i = 3; i < 6; i++) {
    summOfSecondHalf = summOfSecondHalf + +userString[i];
}

if (summOfFirstHalf === summOfSecondHalf) {
    alert(correctMessage);
} else {
    alert(wrongMessage);
}