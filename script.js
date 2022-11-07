document.querySelectorAll('.faq-question').forEach((item) => {
    item.addEventListener('click', (event) => {
        item.nextElementSibling.classList.toggle('show');
        item.classList.toggle('bold');
        item.classList.toggle('collapsing');

    });
});




