let paragraph = document.getElementById("myParagraph");
let arr=[];

arr['surname'] = 'Ожегов';
arr['name'] = 'Николай';
arr['patronymic'] = 'Алексеевич';
arr['occupation'] = 'Директор';
arr['degree'] = 'Среднее профессиональное';
arr['category'] = 'Первая';
arr['education'] = 'ГБПОУ ПКК ОНИКС';
arr['discipline'] = 'Информатика';
arr['note'] = '';

paragraph.innerHTML = "ФИО " + arr['surname'] + ' ' + arr['name'] + ' ' + arr['patronymic'] +'<br>' + "Должность " + arr['occupation'] +'<br>' + "Уровень образования " + arr['degree']+'<br>' + "Категория " + arr['category'] +'<br>' + "Образование " + arr['education'] +'<br>' + "Дисциплина " + arr['discipline'] +'<br>' + "Примечание " + arr['note'] ;

