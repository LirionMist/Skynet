let paragraph = document.getElementById("myParagraph");
let arr={

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

paragraph.innerHTML = "ФИО " + arr.surname + '&nbsp ' + arr.name + '&nbsp ' + arr.patronymic +'<br>' + "Должность " + arr.occupation +'<br>' + "Уровень образования " + arr.degree+'<br>' + "Категория " + arr.category +'<br>' + "Образование " + arr.education +'<br>' + "Дисциплина " + arr.discipline +'<br>' + "Примечание " + arr.note ;

