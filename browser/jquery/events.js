$(function() {
    $('#btn').click(function() {
        changeBg()
    })
})

function changeBg() {
    $('body').css({'background-color':'red'})
}