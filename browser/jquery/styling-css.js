$(function() {
    sayHello()
})

function sayHello() {
    $('#hello-txt').html('Hello World')
    $('#hello-txt').css({'color': 'red', 'background-color': 'black'})
}