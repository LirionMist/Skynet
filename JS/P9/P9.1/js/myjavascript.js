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

    document.body.appendChild(block); 
}

addTagsToHtml('header', 'header'); 


