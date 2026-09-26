function addDeclaration(a, b) {
  return a + b
}

const addExpression = function(a, b) {
  return a + b
}

const addArrow = (a, b) => a + b

console.log(addDeclaration(5, 3))
console.log(addExpression(5, 3))
console.log(addArrow(5, 3))
function greet(name) {
  return `Hello, ${name}`
}
console.log(greet("friend"))
console.log(greet("Ada"))
