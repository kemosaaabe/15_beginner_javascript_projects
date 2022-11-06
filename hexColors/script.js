// function generateHex() {
//     let firstPart = Math.floor(Math.random() * 255);
//     let secondPart = Math.floor(Math.random() * 255);
//     let thirdPart = Math.floor(Math.random() * 255);

//     let parts = [firstPart.toString(16), secondPart.toString(16), thirdPart.toString(16)];
//     return parts.map(elem => elem.length == 1 ? '0' + elem : elem).join('');
// }

// let button = document.querySelector('.change-bg-button');
// button.onclick = function() {
//     let body = document.querySelector('body');
//     let firstColor = generateHex();
//     let secondColor = generateHex();

//     body.style.background = `linear-gradient(to right, #${firstColor}, #${secondColor}`;
//     color.innerHTML = `#${firstColor}, #${secondColor}`;


// }

function changeColor() {
    let firstColor = generateHex();
    let secondColor = generateHex();
    document.getElementById('hex-codes').innerHTML = `#${firstColor}, #${secondColor}`;

    document.querySelector('body').style
    .background = `linear-gradient(to right, #${firstColor}, #${secondColor})`;
}

function generateHex() {
    let hex_number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 
        'D', 'E', 'F'];

    let hexcode = '';

    for (let i = 0; i < 6; i++) {
        let random_index = Math.floor(Math.random() * hex_number.length);

        hexcode += hex_number[random_index];   
    }
    
    return hexcode;
}