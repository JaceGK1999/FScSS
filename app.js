// import functions and grab DOM elements

// let state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
plusSlides(n);


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) { slideIndex === 1; }
    if (n < 1) { slideIndex === slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}