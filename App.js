const heading = React.createElement("h1", {id:'heading'}, "Namaste React")
console.log(heading) // object
const root = document.getElementById('root')
ReactDOM.render(heading, root);