let paragraph = document.getElementById("myParagraph");

let array = [];

for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 19) - 9;
    array.push(randomNumber);
}

let sum = 0;
for (let i = 0; i < 6; i++) {
    if (array[i] > 0) {
        sum += array[i];
    }
}

paragraph.innerHTML = array;

alert('Массив ' + array + "\n" + 'Сумма положительных ' + sum);