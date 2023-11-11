let paragraph = document.querySelector("#myParagraph");
let person = {

    surname: 'Ожегов',
    name: 'Николай',
    patronymic: 'Алексеевич',
    occupation: 'Директор',
    degree: ['Среднее профессиональное', ' Высшее', ' Дополнительное профессиональное'],
    category: 'Первая',
    education: 'ГБПОУ ПКК ОНИКС',
    discipline: ['Информатика', 'Математика', 'Физика'],
    note: '',

};

let disciplinePointText = '';
for (let index = 0; index < person.degree.length; index++) {
    disciplinePointText = disciplinePointText + "<li>" + person.degree[index] + "</li>";
}

paragraph.innerHTML = '<h2>' + person.surname + ' ' + person.name + ' ' + person.patronymic + '</h2>' + "<i>" + "Должность: " + "</i>" + person.occupation + '<br>' + "<i>" + "Уровень образования: " + "</i>" + person.degree + '<br>' + "<i>" + "Категория: " + "</i>" + person.category + '<br>' + "<i>" + "Образование: " + "</i>" + person.education + '<br>' + "<i>" + "Дисциплина: " + "</i>" + "<ul>" + disciplinePointText + "</ul>" + '<br>';

paragraph.innerHTML = paragraph.innerHTML + "<i>" + "Примечание: " + "</i>" + person.note;