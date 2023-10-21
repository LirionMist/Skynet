let paragraph = document.getElementById("myParagraph");

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let str = '';
for (let i = 0; i < 9; i++) {
    str += "-";
    str += array[i];
}

paragraph.innerHTML = str;