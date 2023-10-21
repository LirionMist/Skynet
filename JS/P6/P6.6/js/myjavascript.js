let day = +prompt("Введите значение a");

if (day > 10 && day < 21) {
    alert("вторая декада");
} else if (day > 20) {
    alert("третья декада");
} else {
    alert("первая декада");
}