// select the rating buttons from the DOM

const ratingButtons = document.querySelectorAll('.button');

ratingButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // turn the background color of the button white
    button.classList.add('active');
  })
})