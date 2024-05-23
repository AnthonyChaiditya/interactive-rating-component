// select the rating buttons from the DOM

const ratingButtons = document.querySelectorAll('input');

ratingButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // turn the background color of the button white
    removeActiveClasses();
    button.classList.add('active');
  })
})

function removeActiveClasses() {
  ratingButtons.forEach(button => {
    button.classList.remove('active');
  })
}
