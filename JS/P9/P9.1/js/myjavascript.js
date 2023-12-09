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

let secondClass = document.querySelector('.header');
secondClass.classList.add('text-center');

addTextToHtml('header', 'ПРАКТИКА 9', 'h1');
addTagsToHtml('main', 'content');


addTextToHtml('content', 'Lorem ipsum', 'h2');
addTextToHtml('content', 'Dolor sit amet', 'h3');
addTextToHtml('content', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend sem a ligula sagittis, ac finibus mauris aliquet. ', 'p');
addTextToHtml('content', 'Aliquam eleifend', 'h3');
addTextToHtml('content', 'Aliquam eleifend consequat purus, a tincidunt odio vehicula eget. Sed sollicitudin, urna vitae elementum iaculis, leo tellus tristique tortor, quis condimentum justo sem sit amet sem. Fusce mattis metus metus, sed egestas tellus faucibus quis. ', 'p');
addTextToHtml('content', 'Nunc a ante feugiat', 'h3');
addTextToHtml('content', 'Nunc a ante feugiat, hendrerit nunc sed, tristique ipsum. In hac habitasse platea dictumst. Etiam dapibus mattis nulla a consequat. Phasellus nec nunc et dui condimentum tristique.  ', 'p');
addTextToHtml('content', 'Ut consequat auctor enim et dictum', 'h3');
addTextToHtml('content', 'Ut consequat auctor enim et dictum. Maecenas venenatis et diam porta egestas. Suspendisse id erat lorem. Aenean consequat magna vitae eleifend accumsan. Suspendisse rhoncus pulvinar interdum. Aliquam vitae diam sed massa fermentum elementum.', 'p');
addTextToHtml('content', 'Sed ultricies mauris quam', 'h3');
addTextToHtml('content', 'Sed ultricies mauris quam, vel feugiat leo iaculis vitae. Donec nulla ex, maximus ac dapibus posuere, sagittis at nisi.', 'p');

addTagsToHtml('footer', 'footer');
addTextToHtml('footer', 'Практику выполнил Ожегов Николай Алексеевич', 'span');
addTextToHtml('footer', '', 'br');
addTextToHtml('footer', '© ГБПОУ "Пермский краевой колледж "ОНИКС"', 'span');
