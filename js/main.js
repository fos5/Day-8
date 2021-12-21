let cards = document.querySelectorAll('.cards'),
    prevArrow = document.getElementById('prevArrow'),
    nextArrow = document.getElementById('nextArrow'),
    current = 0;

//reset 
function reset() {
    for (let i = 0; i < cards.length; i++){
        cards[i].style.display = "none";
    }
}
//initializer
function showContent() {
    reset();
    cards[0].style.display = 'block';
}
//Go to Previous 
function prev() {
    reset();
    cards[current - 1].style.display = 'block';
    current--;
}
//Go to Next
function next() {
    reset();
    cards[current + 1].style.display = 'block';
    current++;
}
//Event Listeners for Prev
prevArrow.addEventListener('click', () => {
    if (current === 0) {
        current = cards.length;
    }
    prev();
});
//Event Listeners for Next
nextArrow.addEventListener('click', () => {
    if (current === cards.length - 1) {
        current = -1;
    }
    next();
})
showContent();
