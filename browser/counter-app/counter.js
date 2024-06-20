let counter = 0

window.addEventListener('DOMContentLoaded', function() {
    this.document.querySelector('#btnDecr').addEventListener('click', () => onDecreaseClicked)
    this.document.querySelector('#btnReset').addEventListener('click', () => onResetClicked)
    this.document.querySelector('#btnIncr').addEventListener('click', () => onIncreaseClicked)
})


/**
 * Actions taken after the 'Decrease' button
 * was clicked. Actions include decrease the counter.
 */
function onDecreaseClicked() {
    decreaseCounter()
}

/**
 * Actions taken after the 'Reset' button
 * was clicked. Actions include reset the counter.
 */
function onResetClicked() {
    resetCounter()
}

/**
 * Actions taken after the 'Increase' button
 * was clicked. Actions include increase the counter.
 */
function onIncreaseClicked() {
    increaseCounter()
}
