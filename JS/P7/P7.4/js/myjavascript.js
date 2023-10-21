let paragraph = document.getElementById("myParagraph");

let array = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < 8; i++) {
    let Num = String(array[i]);
    if (Num[0] === '1' || Num[0] === '2' || Num[0] === '5') {
        alert(Num);
    }
}

paragraph.innerHTML = array;