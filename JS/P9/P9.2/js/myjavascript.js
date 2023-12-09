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

const template = document.getElementById('myTemplate');
const path = document.querySelector('.content');

function addTemplateToHtml(textElementTitle, textElement) {
    const clone = document.importNode(template.content, true);
    clone.querySelector('h3').textContent = textElementTitle;
    clone.querySelector('p').textContent = textElement;
    path.appendChild(clone);
}

addTemplateToHtml('Dolor sit amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend sem a ligula sagittis, ac finibus mauris aliquet. ');


addTemplateToHtml('PapichNuts', 'Открою тебе секрет - кем бы вы ни были, у всех вас нету будущего. То есть, так же само, как у тебя эээ, ни у кого нету будущего. По вселенским масштабам нет ни у кого никакого будущего. То есть, вы, вы являетесь примитивным организмом. Вы всего лишь жалкие людишки. Занимайся тем, что тебе приносит удовольствие просто, займись какой-то физкультурой. Вот мне, мне, лично, всегда помогает физкультура. Я не могу понять, как вообще, как, как можно не заниматься физкультурой и как кому-то может не помогать физкультура, потому что по дефолту, когда делаешь какие-то физические упражнения, когда ты эээ, двигаешься. Движение же - это, по сути, жизнь. Когда ты сидишь на месте и грустишь - это, ну, как бы. Это антоним жизни. Это, это, конечно, еще не смерть, но явное движение, наверное, к смерти. Когда ты двигаешься, у тебя, организм начинает, ну, как бы, жить. И ты по-любому получаешь плюс мораль, ты получаешь, ту, ты чувствуешь, ну, внутри себя тепло. Ты живешь.');

addTemplateToHtml('Aliquam eleifend', 'Aliquam eleifend consequat purus, a tincidunt odio vehicula eget. Sed sollicitudin, urna vitae elementum iaculis, leo tellus tristique tortor, quis condimentum justo sem sit amet sem. Fusce mattis metus metus, sed egestas tellus faucibus quis.  ');

addTemplateToHtml('Nunc a ante feugiat', 'Nunc a ante feugiat, hendrerit nunc sed, tristique ipsum. In hac habitasse platea dictumst. Etiam dapibus mattis nulla a consequat. Phasellus nec nunc et dui condimentum tristique.   ');

addTemplateToHtml('Ut consequat auctor enim et dictum', 'Ut consequat auctor enim et dictum. Maecenas venenatis et diam porta egestas. Suspendisse id erat lorem. Aenean consequat magna vitae eleifend accumsan. Suspendisse rhoncus pulvinar interdum. Aliquam vitae diam sed massa fermentum elementum.   ');

addTemplateToHtml('Sed ultricies mauris quam', 'Sed ultricies mauris quam, vel feugiat leo iaculis vitae. Donec nulla ex, maximus ac dapibus posuere, sagittis at nisi.   ');

addTagsToHtml('footer', 'footer');
addTextToHtml('footer', 'Практику выполнил Ожегов Николай Алексеевич', 'span');
addTextToHtml('footer', '', 'br');
addTextToHtml('footer', '© ГБПОУ "Пермский краевой колледж "ОНИКС"', 'span');