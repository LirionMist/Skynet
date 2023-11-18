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

addTagsToHtml('header', 'header');
addTagsToHtml('div', 'colorField');

let secondClass = document.querySelector('.header');
secondClass.classList.add('text-center');

addTextToHtml('header', 'ПРАКТИКА 10.FUN', 'h1');


const btn = document.querySelector(".RandomColor");
const btn1 = document.querySelector(".mouseMovie");
const field = document.querySelector('.colorField');

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