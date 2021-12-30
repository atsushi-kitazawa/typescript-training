let person: {
    id: number
    name: string
    phone?: string //optional property
    [key: number]: boolean
} 
person = {
    id: 1,
    name: 'foo',
    phone: '000-0000-0000',
    1: true, 2: false
}
console.log(person)

let product: {
    readonly id: number
    readonly name: string
}
product = {
    id: 0,
    name: 'bar'
}
console.log(product)
console.log(product.id)
console.log(product.name)
// product = 10 // reassing error because readonly property

type Cat = {name: string, purrs: boolean}
type Dog = {name: string, purrs: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog // Cat, Dog, or Both
let catdog: CatOrDogOrBoth = {
    name: 'foo',
    purrs: true
}
catdog = {
    name: 'foo',
    purrs: true,
    wags: false
}
let catanddog: CatAndDog = {
    name: 'bar',
    purrs: false,
    wags: false
}