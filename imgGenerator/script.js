let images = document.querySelector('.images');

let loop = document.querySelector('.search i');
let input = document.querySelector('.search input')

loop.onclick = getPhotos;
input.onkeydown = function(event) {
    if (event.code == 'Enter') {
        getPhotos();
    }
}

function getPhotos() {
    images.innerHTML = '';
    let query = document.querySelector('.search input').value;
    getPhoto(query);
}

async function getPhoto(query) {
    let url = `https://api.unsplash.com/search/photos?query=${query}&per_page=9&client_id=UHvBq76npP1mRTnFYDtHDvO44Fswe6KmD0yRjRX0kVs`;
    let response = await fetch(url);
    let json = await response.json();

    console.log(json);

    for (let i = 0; i < json.results.length; i++) {
        loadImg(json, i);
    }
}

async function loadImg(json, i) {
    let img = document.createElement('div');
    img.classList.add('img');
    img.style.backgroundImage = `url(${json.results[i].urls.raw})`;
    images.append(img);

    img.addEventListener('dblclick', function() {
        window.open(`${json.results[i].links.download}`, '_blank');
    })
}
