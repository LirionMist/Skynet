let paragraph = document.getElementById("myParagraph");

let array = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < 8; i++) {
    if (array[i] === 4) {
        alert('цифра 4 есть');
        break;
    }
}

paragraph.innerHTML = array;

alert('Массив ' + array + "\n" + 'Сумма положительных ' + sum);