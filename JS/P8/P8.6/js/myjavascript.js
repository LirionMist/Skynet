let paragraph = document.querySelector(".myParagraph");
let person = {

    surname: 'Ожегов',
    name: 'Николай',
    patronymic: 'Алексеевич',
    occupation: 'Директор',
    degree: ['Среднее профессиональное', ' Высшее', ' Дополнительное профессиональное', ],
    category: 'Первая',
    education: 'ГБПОУ ПКК ОНИКС',
    discipline: ['Информатика', 'Математика', 'Физика', ],
    note: '',

};

let disciplinePointText = '';
for (let index = 0; index < person.degree.length; index++) {
    disciplinePointText = disciplinePointText + "<li>" + person.degree[index] + "</li>";
}

paragraph.innerHTML = '<h2>' + person.surname + ' ' + person.name + ' ' + person.patronymic + '</h2>';
paragraph.innerHTML = paragraph.innerHTML + "<i>" + "Должность: " + "</i>" + person.occupation + '<br>';
paragraph.innerHTML = paragraph.innerHTML + "<i>" + "Уровень образования: " + "</i>" + person.degree + '<br>';
paragraph.innerHTML = paragraph.innerHTML + "<i>" + "Категория: " + "</i>" + person.category + '<br>';
paragraph.innerHTML = paragraph.innerHTML + "<i>" + "Образование: " + "</i>" + person.education + '<br>';
paragraph.innerHTML = paragraph.innerHTML + "<i>" + "Дисциплина: " + "</i>" + "<ul>" + disciplinePointText + "</ul>" + '<br>';

paragraph.innerHTML = paragraph.innerHTML + "<i>" + "Примечание: " + "</i>" + person.note;

function getRandomColorValue() {
    return Math.floor(Math.random() * 256);
}

for (let index = 1; index <= person.degree.length; index++) {
    let coloresdPointDrop = document.querySelector(`body > p > ul > li:nth-child(${index})`);

    let red = getRandomColorValue();
    let green = getRandomColorValue();
    let blue = getRandomColorValue();

    coloresdPointDrop.style.color = `rgb(${red}, ${green}, ${blue})`;
}