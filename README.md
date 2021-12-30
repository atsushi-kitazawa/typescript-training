## create project
```
npm init
npm install --save-dev typescript tslint @types/node
```

## execute
```
node_modules\.bin\tsc
node dest\index.js
```

## declare
```
let A = 100
const B = 200
let C : number = 300
let D : 400 = 400
```

## object
```
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

//readonly property
let product: {
    readonly id: number
    readonly name: string
}
```

##array, tuple
```
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
```
