let inputs = document.querySelectorAll('.input input');
let select = document.querySelector('select[name=service]');
let button = document.querySelector('.btn');
let container = document.querySelector('.container');

let div = false;
button.onclick = function() {
    if (div) return;

    let tip = (inputs[0].value / inputs[1].value) * (select.value / 100);
    tip = isNaN(tip) ? 0 : tip.toFixed(2);

    div = document.createElement('div');
    div.classList.add('tip');
    div.innerHTML = `Tip $${tip} each`;
    container.append(div);

    setTimeout(() => {
        div.remove();
        div = false;
    }, 2000);

} 