
const circ = (diameter : number) => {
 return diameter*Math.PI
}
 console.log(circ(7.5 ))

 //arrays

let names = ['luigi','mario','yoshi']
names.push('elsie')
names.push('leon')

// as type number

let number = [ 3, 5, 7 , 9]
number.push(0)
number.push(2)

//as mixed types 

let mixed = ['leon', 3, true, 'penine', 7, 10]
mixed.push(false)
mixed.push(50)
mixed.push('elsie')

// you cant cant reassing your variable after assign it anything at the start


//objects

let ninja ={
    name: 'mario',
    belt: 'black',
    age: 21
}

// you can assing new values to your properties as long as you dont change theirs typesninja.

ninja.name = 'penine'
ninja.age = 30

// you can also reassign the object but it strictly remains an object as for when it was initialised, also its structure can not change you must have the same properties you can not remove any or add any

ninja = {
    name: 'leon',
    belt: 'orange',
    age: 22
}

// explicit types
let character: string
let age: number
let isLoggedIN: boolean

age = 21

isLoggedIN = true

// arrays
let ninjas: string[] = []
ninjas.push('shaun')

// union types
let mixedarr: (string|number|boolean)[] = []

mixedarr.push('hello')
mixedarr.push(24)
mixedarr.push(false)
console.log(mixedarr)
// objects

let ninjaOne: object;
ninjaOne = {name: 'yoshi', age: 30}

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}

ninjaTwo = { name: 'elsie', age: 30, beltColour: 'black'}

// dynamic (any)) type

let old : any = 25

old = true
old = 'hello'
old ={name: 'elsie'}
console.log(old)

let mixedup: any[] = []

mixedup.push(5)
mixedup.push('mario')
mixedup.push(false)
console.log(mixedup)

let person: {name:any, age: any}
person = {name: 'yoshi', age: 25}
person = {name: 25 , age: 'yoshi'}

console.log(person)
let test: string = 'elsie'
console.log(test)