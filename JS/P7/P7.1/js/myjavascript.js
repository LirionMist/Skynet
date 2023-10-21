let mass = [2, 5, 9, 15, 0, 4];
let paragraph = document.getElementById("myParagraph");

for (let i = 0; i < mass.length; i++) {
    if (mass[i] > 3 && mass[i] < 10) {
        paragraph.innerHTML = paragraph.innerHTML + "<br>" + mass[i];
    }
}