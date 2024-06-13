function printText() {
    const inputDOM = document.getElementById('inputText')
    const inputText =  inputDOM.value

    const parDOM = document.getElementById('helloText')
    parDOM.innerHTML = inputText

}