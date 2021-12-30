let array1 = [0, 1, 2]
// let array1: number[] = [0, 1, 2]
array1.push(3)

for (const e of array1) {
    console.log('for : ' + e)
}

array1.forEach(function (e, index) {
    console.log('forEach : ' + e)
})

array1.forEach((e, index) => console.log('arrow function : ' + e))

// under the tuple. tuple is array sub type. fixed array.
let tuple1: [number] = [0]
let tuple2: [number, number] = [0, 1]
let tuple3: [number, string] = [0, 'foo']
console.log(tuple1)
console.log(tuple2)
console.log(tuple3)