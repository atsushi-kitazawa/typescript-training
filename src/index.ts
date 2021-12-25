// console out
console.log('my typescript training!')

// number
let a : number = 10
let b : number = 20
console.log(add(10, 20))

// string
let s : string = 'a'
let t : string = 'b'
console.log(concat(s, t))

// declare
let A = 100
const B = 200
let C : number = 300
let D : 400 = 400
console.log(A)
console.log(B)
console.log(C)
console.log(D)
A = 1000
console.log(A)
// B = 2000 // error

// function
function add(a : number, b : number) {
    return a + b
}

function concat(s : string, t : string) {
    return s.concat(t)
}