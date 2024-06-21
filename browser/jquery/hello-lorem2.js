$(function() {
    sayHelloLorem()
})

function sayHelloLorem() {
$(`<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nemo dolorum laboriosam hic ea modi debitis vitae vero enim nisi expedita, 
        nostrum odit quisquam necessitatibus, dolore eaque error accusantium ratione 
        sed.</div>`).appendTo($('body'))
}