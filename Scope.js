let a = "global"
function other() {
  let b = "other"

  function inner() {
    let c = "inner"

    console.log(a)
    console.log(b)
    console.log(c)

  }
  
inner();
}
other();
