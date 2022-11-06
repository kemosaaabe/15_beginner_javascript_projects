let eraser = document.querySelector('.enter i');
let items = document.querySelector('.items');
let input = document.querySelector('.enter input');

eraser.onclick = function() {
    items.innerHTML = '';
}

items.onclick = function(event) {
    let target = event.target;
    if (event.target.tagName != 'SPAN') return;

    target.classList.toggle('line');
}

input.onkeydown = function(event) {
    if (event.code == 'Enter') {
        let item = items.insertAdjacentHTML('beforeend', 
            `<h2><span>- ${this.value}</h2></span>`);
        
            this.value = '';
    }
}