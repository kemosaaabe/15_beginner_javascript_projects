let input = document.querySelector('[name=enter-num]');

let nums = document.querySelector('.nums');

nums.addEventListener('click', function(event) {
    let target = event.target;
    if (!target.classList.contains('btn')) return;

    let operators = ['+', '-', '/', '.', '*'];
    let num = target.innerHTML;

    if (target.classList.contains('clear')) {
        input.value = '';
    } else {
        num = operators.includes(num) ? num : parseInt(target.innerHTML).toString();
        num = isNaN(num) && !operators.includes(num) ? '' : num;
        input.value += num;
    }
})

document.addEventListener('keydown', function(event) {
    input.focus();

    if (event.code == 'Enter') {
        decide();
    }
})



let equal = document.querySelector('.equal');
equal.addEventListener('click', decide)

function decide() {
    try {
        input.value = eval(input.value);
    } catch (SyntaxError) {
        input.value = undefined;
    }
}