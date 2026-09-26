function makeCounter() {
  let count = 0

  function increment() {
  count++
    return count
  } 
  return increment
 

  
}
const counter = makeCounter()
const counter2 = makeCounter()
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter2())

// count is created inside makeCounter(), and the inner function increment remembers and keeps access to count even after makeCounter() has finished.
