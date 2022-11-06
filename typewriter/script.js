let h1 = document.querySelector('.container h1');

// let quotes = ['Привет, красотка', 'Хочу тебе сказать, что ты очаровательная и очень хорошая', 'Ты делаешь меня счастливее',
//             'Я невероятно ценю тебя', 'И очень тебя люблю!'];

getQuote();

async function getQuote() {
    let url = `https://api.quotable.io/random`;
    let response = await fetch(url);
    if (response.ok) {
        let json = await response.json();
        let quote = json.content;
        let timerId;
        let i = 0;
        let result = '';

        timerId = setInterval(function() {
            result += quote[i];
            h1.innerHTML = result + '<span>▮</span>';
            i++;
            if (i == quote.length) {
                h1.querySelector('span').classList.add('glimmer-square');
                
                clearInterval(timerId);

                setTimeout(() => {
                    h1.innerHTML = '<span class="glimmer-square">▮</span>';
                }, 2000);

                setTimeout(function() {
                    getQuote();
                }, 3000);
            };
        }, 80)
    } else {
        alert('Ошибка');
    }
}




