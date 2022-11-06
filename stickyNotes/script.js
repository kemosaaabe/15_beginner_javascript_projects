window.onload = showCover;

let addBtn = document.querySelector('.btn');
let addNote = document.querySelector('.add-note')

addBtn.onclick = function() {
    showCover();
}

addNote.onclick = function(event) {
    let target = event.target;
    if (target.tagName != 'I') return;

    hideCover();
}

addNote.onkeydown = function(event) {
    let target = event.target;
    if (target.tagName != 'TEXTAREA') return;

    if (event.code == 'Enter') {
        let note = document.createElement('note');
        note.classList.add('note');
        note.innerHTML = target.value;
        
        randomNoteStyle(note);

        document.querySelector('.notes').append(note);
        target.value = '';

        note.ondblclick = function() {
            this.remove();
        }
    }
}

let cover;
let body = document.querySelector('body');

function showCover() {
    cover = document.createElement('div');
    cover.setAttribute('id', 'cover-div');

    body.style.overflow = 'hidden';
    body.append(cover);

    addNote.style.display = 'block';
    addNote.style.left = ((document.documentElement.clientWidth / 2) - (addNote.offsetWidth / 2)) + 'px';
    addNote.style.top = (document.documentElement.clientHeight / 2) - (addNote.offsetHeight / 2) + 'px';

    document.querySelector('.add-note textarea').focus();
}

function hideCover() {
    cover.remove();
    body.style.overflow = '';
    addNote.style.display = 'none';        
}

let colors = ['#FFC773', '#d189df', '#899bd8', '#f5a0be'];
shuffle(colors);

function randomNoteStyle(note) {
    let degrees = ['-3deg', '-5deg', '-2deg', '1deg', '2deg'];

    if (colors.length == 0) {
        colors = ['#FFC773', '#d189df', '#899bd8', '#f5a0be'];
        shuffle(colors);
    }

    let randomDegreeIndex = Math.floor(Math.random() * (degrees.length));

    note.style.background = `${colors.pop()}`;
    note.style.transform = `rotate(${degrees[randomDegreeIndex]})`;

    note.onmouseenter = function() {
        this.style.transform += 'scale(1.05)';
    }

    note.onmouseleave = function() {
        this.style.transform = `rotate(${degrees[randomDegreeIndex]}) scale(1)`;
    }
    
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[j], arr[i]] = [arr[i], [arr[j]]];
    }
}