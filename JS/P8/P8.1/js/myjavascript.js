let paragraph = document.getElementById("myParagraph");
let surname ='Ожегов'; 
let name ='Николай'; 
let patronymic ='Алексеевич'; 
let ocupation ='Директор'; 
let degree ='Среднее проффесиональное'; 
let category ='Первая'; 
let education ='ГБПОУ ПКК ОНИКС'; 
let discipline ='Информатика'; 
let note =''; 
 
paragraph.innerHTML = "ФИО " + surname + name + patronymic +'<br>' + "Должность " + ocupation +'<br>' + "Уровень образования " + degree +'<br>' + "Категория " + category +'<br>' + "Образование " + education +'<br>' + "Дисциплина " + discipline+'<br>' + "Примечание " + note ;