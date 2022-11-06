const container = document.querySelector('.container');

container.addEventListener('click', function(event) {
    let target = event.target.closest('.card');

    if (!target) return;

    window.open(target.dataset.link, '_blank');
})

