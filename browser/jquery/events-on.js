$(function() {
    $('#btn').on('click', () => changeBg())
})

function changeBg() {
    $('body').css({'background-color':'red'})
}