window.onload = updateNums;

let expression = document.querySelectorAll('.expression h1');
let answers = document.querySelector('.answers');
let operator = expression[1].innerHTML;
let audio = document.getElementById('audio');
audio.volume = 0.7;

answers.addEventListener('click', function(event) {
    let target = event.target.closest('.answer');
    if (!target) return;

    let result;

    switch(operator) {
        case "+":
            result = +expression[0].innerHTML + +expression[2].innerHTML;
            break;
        case "-":
            result = +expression[0].innerHTML - +expression[2].innerHTML;
            break;
        case "*":
            result = +expression[0].innerHTML * +expression[2].innerHTML;
            break;
        case "/":
            result = (+expression[0].innerHTML / +expression[2].innerHTML).toFixed(1);
            break;    
    }

    if (result == +target.innerHTML) {
        updateNums();
    } else {
        audio.play();
    }
})

function updateNums() {
    let results;
    switch(operator) {
        case "+":
            expression[0].innerHTML = Math.floor(Math.random() * 13);
            expression[2].innerHTML = Math.floor(Math.random() * 13);
            results = [+expression[0].innerHTML + +expression[2].innerHTML, 
                        Math.floor(Math.random() * 13), Math.floor(Math.random() * 13)]
            break;

        case "-":
            expression[0].innerHTML = Math.floor(Math.random() * 13);
            expression[2].innerHTML = Math.floor(Math.random() * 13);

            while (+expression[0].innerHTML < expression[2].innerHTML) {
                expression[2].innerHTML = Math.floor(Math.random() * 13);
            }

            results = [+expression[0].innerHTML - +expression[2].innerHTML, 
                        Math.floor(Math.random() * 13), Math.floor(Math.random() * 13)]
            break;

        case "*":
            expression[0].innerHTML = Math.floor(Math.random() * 11);
            expression[2].innerHTML = Math.floor(Math.random() * 11);
            results = [+expression[0].innerHTML * +expression[2].innerHTML, 
                        Math.floor(Math.random() * 13), Math.floor(Math.random() * 13)]
            break;

        case "/":
            expression[0].innerHTML = Math.floor(Math.random() * 11) + 1;
            expression[2].innerHTML = Math.floor(Math.random() * 11) + 1;

            while (+expression[0].innerHTML < expression[2].innerHTML) {
                expression[2].innerHTML = Math.floor(Math.random() * 11) + 1;
            }

            results = [(+expression[0].innerHTML / +expression[2].innerHTML).toFixed(1), 
                        (Math.random() * 4).toFixed(1), (Math.random() * 4).toFixed(1)]
            break;    
    }
    
    shuffle(results);

    for (let i = 0; i < answers.children.length; i++) {
        answers.children[i].innerHTML = results[i];
    }
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
}