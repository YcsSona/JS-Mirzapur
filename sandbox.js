const search = document.querySelector('.input-control input');
const names = document.querySelectorAll('.card__content');


const filterCharacters = term => {
    Array.from(names).filter(name => {
        return !name.textContent.toLowerCase().includes(term);
    }).forEach(name => {
        name.classList.add('filtered');
    });

    Array.from(names).filter(name => {
        return name.textContent.toLowerCase().includes(term);
    }).forEach(name => {
        name.classList.remove('filtered');
    });

};

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterCharacters(term);
});