let paragraph = document.querySelector("#myParagraph");
let person={
    
surname: 'Ожегов',
name : 'Николай',
patronymic : 'Алексеевич',
occupation : 'Директор',
degree : 'Среднее профессиональное',
category : 'Первая',
education : 'ГБПОУ ПКК ОНИКС',
discipline : 'Информатика',
note : '',

};

paragraph.innerHTML = "ФИО " + person.surname + ' ' + person.name + ' ' + person.patronymic +'<br>' + "Должность " + person.occupation +'<br>' + "Уровень образования " + person.degree+'<br>' + "Категория " + person.category +'<br>' + "Образование " + person.education +'<br>' + "Дисциплина " + person.discipline +'<br>' + "Примечание " + person.note ;

