$(function() {
    sayHelloLorem()
})

function sayHelloLorem() {
    const $p = $('<p>')
    $p.html(`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nemo dolorum laboriosam hic ea modi debitis vitae vero enim nisi expedita, 
        nostrum odit quisquam necessitatibus, dolore eaque error accusantium ratione 
        sed.`)
    $('body').append($p)
}