let flashcards = document.querySelector('.flashcards');
let itemStr = localStorage.getItem('items') ? localStorage.getItem('items') : '';

window.onload = function() {
    flashcards.innerHTML = itemStr;

    for (child of flashcards.children) {
        child.querySelector('.answer').style.display = 'none';
    }
}

let form = document.querySelector('.create_item');
form.hidden = true;

form.onkeydown = function(event) {
    if (event.code == 'Enter') {
        createItem();
    }
}

let saveBtn = document.querySelector('.save-btn');
saveBtn.onclick = createItem;

let closeBtn = document.querySelector('.close-btn');
closeBtn.onclick = function() {
    form.hidden = true;
}

let question = document.getElementById('question');
let answer = document.getElementById('answer');

flashcards.addEventListener('click', function(event) {
    let target = event.target;
    let item = target.closest('.item');

    if (target.tagName == 'I') {

        item.remove();
        itemStr = flashcards.innerHTML;
        localStorage.setItem('items', itemStr);
    }

    if (item) {
        let answer = item.querySelector('.answer');
        answer.style.display = answer.style.display == 'none' ? 'block' : 'none';
    }
})

let addCardBtn = document.querySelector('.add-btn');
addCardBtn.onclick = function() {
    form.hidden = false;
}

let delBtn = document.querySelector('.del-btn');
delBtn.onclick = function() {
    flashcards.innerHTML = '';
    itemStr = '';
    localStorage.clear();
}

function createItem() {
    let item = `<div class="item">
                    <div class="remove"><i class="fa-solid fa-minus close"></i></div>
                    <div class="question">${question.value}</div>
                    <div class="answer">${answer.value}</div>
                </div>`
    
    flashcards.insertAdjacentHTML('beforeend', item);

    question.value = '';
    answer.value = '';

    itemStr += item;
    localStorage.setItem('items', itemStr);
}