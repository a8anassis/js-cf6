const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']
let noteId = 0

window.addEventListener('DOMContentLoaded', function() {

    this.setInterval(printGRDate, 1000)

    this.document.querySelector('#addNoteBtn').addEventListener('click', function() {
        onInsertHandler(document.querySelector('#inputNote').value.trim())
    })

    this.document.querySelector('#inputNote').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            onInsertHandler(this.value.trim())
        }
    })
})

function printGRDate() {
    const currentDate = new Date()
    const day = currentDate.getDay()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const dayStr = daysGR[day]
    const monthStr = monthsGR[month]

    let dateStr = `${dayStr}, ${date} ${monthStr} ${year}`
    let timeStr = `${(hours < 10) ? '0' : ''}${hours}:${(minutes < 10) ? '0' : ''}${minutes}:${(seconds < 10) ? '0' : ''}${seconds}`

    document.querySelector('#dateTxt').innerHTML = dateStr + '<br>' + timeStr
}

/**
 * Handler for insert button clicked
 * or Enter pressed.
 * 
 * @param {string} data 
 */
function onInsertHandler(data) {
    insertNote(data)
    reset()
}

function insertNote(note) {
    if (!note) return

    noteId++

    let clone = document.querySelector('.note.hidden').cloneNode(true)
    clone.classList.remove('hidden')

    clone.querySelector('#noteCheck').addEventListener('click', function() {
        strikeThrough(clone.querySelector('.note-text'))
    })

    clone.querySelector('.note_del-btn').addEventListener('click', function() {
        deleteNote(this.parentNode)
    })

    let cloneNoteInfo = clone.querySelector('.note-info')
    cloneNoteInfo.children[0].id = 'noteCheck' + noteId
    cloneNoteInfo.children[1].htmlFor = 'noteCheck' + noteId
    clone.children[1].id = 'noteDelBtn' + noteId

    clone.querySelector('.note-text').innerHTML = note
    document.querySelector('.notes-wrapper').appendChild(clone)
}

function strikeThrough(element) {
    element.classList.toggle('line-through')
}

function deleteNote(note) {
    note.remove()
}

function reset() {
    document.querySelector('#inputNote').value = ''
}



