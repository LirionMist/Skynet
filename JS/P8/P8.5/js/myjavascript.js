let paragraph = document.querySelector("#myParagraph");
let person={
    
surname: 'Ожегов',
name : 'Николай',
patronymic : 'Алексеевич',
occupation : 'Директор',
degree : ['Среднее профессиональное',' Высшее',' Дополнительное профессиональное'],
category : 'Первая',
education : 'ГБПОУ ПКК ОНИКС',
discipline : ['Информатика', 'Математика','Физика'],
note : '',

};

paragraph.innerHTML = '<h2>' + person.surname + ' ' + person.name + ' ' + person.patronymic + '</h2>' + "<i>" + "Должность " + "</i>" + person.occupation +'<br>' + "Уровень образования " + person.degree+'<br>' + "Категория " + person.category +'<br>' + "Образование " + person.education +'<br>' + "Дисциплина " + person.discipline +'<br>' + "Примечание " + person.note ;

