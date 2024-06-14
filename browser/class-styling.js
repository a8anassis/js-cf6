const containerDOM = document.getElementById('container')
const cls = ['container', 'text-center']
//containerDOM.classList.add('container', 'text-center')

containerDOM.classList.add(...cls)
containerDOM.innerHTML = "<p>Hello CSS Styling through JS</p>"