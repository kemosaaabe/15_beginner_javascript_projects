let input = document.querySelector('.input input');
let button = document.querySelector('.input button');
let containerInner = document.querySelector('.container_inner');

button.onclick = createItem;

input.onkeydown = function(event) {
    if (event.code == 'Enter') {
        createItem();
    }
}

function createItem() {
    let text = input.value;
    let id = Math.random();
    let item = `
            <div class="item" id=${id}>
                <div class="text">${text}</div>
                <div class="icons">
                    <i class="fa-solid fa-square-check check"></i>
                    <i class="fa-solid fa-trash trash"></i>
                </div>
            </div>
            `
    containerInner.insertAdjacentHTML('beforeend', item);

    let icons = containerInner.querySelectorAll('.item .icons');
    for (let icon of icons) {
        icon.onclick = function(event) {
            if (event.target.classList.contains('check')) {
                event.target.classList.toggle('done');
            } 
            if (event.target.classList.contains('trash')) {
                let target = event.target.closest('.item');

                if (!target) return;

                target.remove();
            }
        }
    }
    input.value = '';
}

