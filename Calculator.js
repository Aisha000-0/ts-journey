// Online JavaScript compiler (editor)
// Write and run JavaScript online using this JS editor.function addDeclaration(a, b) {
  function add(a, b) {
  return a + b
}
function substraction(a, b) {
  return a - b
}
function multiplication(a, b) {
  return a*b
}
function division(a, b) {
  if (b == 0) {
    return "cannot devide by 0"
  }
  return a/b
}
function calculate(operation, a, b) {

  return operation(a, b)
}



console.log(calculate(add, 5, 3))
console.log(calculate(substraction, 5, 3))

console.log(calculate(multiplication, 5, 3))
console.log(calculate(division, 9, 3))
