window.addEventListener('load', init, false)

let screenElement

function init() {
  screenElement = document.querySelector(".screen");

  initNumberButtonsListeners()
  initDeleteButtonListener()
}

function initNumberButtonsListeners() {
    const buttons = document.querySelectorAll('.js-number-button')

    for (const button of buttons) {
      addButtonListener(button)
    }
}

function initDeleteButtonListener()  {
  const clearButton = document.querySelector(".clear");
  clearButton.addEventListener('click', cleanScreen)
}

function addButtonListener(button) {
  const value = button.getAttribute('data-value')

  button.addEventListener('click', function (event) {
    screenElement.innerHTML += value
  })
}

function cleanScreen() {
  screenElement.innerHTML = "";
}