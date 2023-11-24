function addTagsToHtml(Tag, className = 'default') {
    const element = document.createElement(Tag);
    element.classList.add(className);
    document.body.append(element);
}

function addTextToHtml(findElementByClass, textElement, tag) {
    const block = document.querySelector('.' + findElementByClass);
    const newTag = document.createElement(tag);
    const textNode = document.createTextNode(textElement);
    newTag.appendChild(textNode);
    block.appendChild(newTag);
    document.body.prepend(block);
}

function addTextToHtmlDown(findElementByClass, textElement, tag) {
    const block = document.querySelector('.' + findElementByClass);
    const newTag = document.createElement(tag);
    const textNode = document.createTextNode(textElement);
    newTag.appendChild(textNode);
    block.appendChild(newTag);
    document.body.append(block);
}

addTagsToHtml('header', 'header');
addTagsToHtml('div', 'colorField');

let secondClass = document.querySelector('.header');
secondClass.classList.add('text-center');

addTextToHtml('header', 'ПРАКТИКА 10.FUN', 'h1');
addTagsToHtml('p', 'log');

addTagsToHtml('div', 'list');

addTextToHtmlDown('list', 'Бесплатный онлайн-инструмент, с помощью которого можно повторить текст несколько раз. В параметрах установите количество реплик и укажите символ, который будет использоваться между фрагментами текста. Бесплатный онлайн-инструмент, с помощью которого можно повторить текст несколько раз. В параметрах установите количество реплик и укажите символ, который будет использоваться между фрагментами текста. Бесплатный онлайн-инструмент, с помощью которого можно повторить текст несколько раз. В параметрах установите количество реплик и укажите символ, который будет использоваться между фрагментами текста.', 'p');

const btn = document.querySelector(".RandomColor");
const btn1 = document.querySelector(".mouseMovie");
const field = document.querySelector('.colorField');
const line = document.querySelector(".writeLn");
const log = document.querySelector(".log");
const lineForSpace = document.querySelector(".writeLnForSpace");


function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    field.style.backgroundColor = rndCol;
});

btn1.addEventListener("mousemove", () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    field.style.backgroundColor = rndCol;
});

line.addEventListener("keydown", logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
  }

lineForSpace.addEventListener("keydown", function (spaceKey){
    if (event.keyCode === 32) {
        alert('Вы нажали пробел');
    }
});

let showHideBlock = document.querySelector(".list");
function showHide() {
    if (showHideBlock.style.display === "none") {
        showHideBlock.style.display = "block";
    } else {
        showHideBlock.style.display = "none";
    }
  }