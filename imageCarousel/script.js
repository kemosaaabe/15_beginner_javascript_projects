let images = document.querySelector('.images').querySelectorAll('.img');
let dots = document.querySelector('.dots');

for (let i = 0; i < images.length; i++) {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    dots.append(dot);
}

dots.children[0].classList.add('active');

let position = 0;
function showSlide(i) { 
    position += i;

    for (let img of images) {
        img.style.display = 'none';
    }

    for (let dot of dots.children) {
        dot.classList.remove('active');
    }

    if (position > images.length - 1) position = 0;

    if (position < 0) position = images.length - 1;

    images[position].style.display = 'block';
    dots.children[position].classList.add('active');
}


