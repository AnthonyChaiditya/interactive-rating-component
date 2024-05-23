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

// boolean for form submittion to determine conditional rendering
let submittedForm;

// if submit button is clicked, clear the display for the container
let endDisplay = document.getElementsByClassName('component-container-end');

function turnThankYouDisplayOn() {
  return endDisplay[0].attributes[1].value = 'display: flex'
}

let initialDisplay = document.getElementsByClassName('component-container-start');

function turnInitialDisplayOff() {
  return initialDisplay[0].attributes[1].value = 'display: none';
}

console.log(endDisplay[0].attributes)

let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
  // take the rating
  // invoke the thank you display
  turnInitialDisplayOff();
  turnThankYouDisplayOn();
})





