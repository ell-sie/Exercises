// // Asynchronous
// console.log('I')
// console.log('eat')
// setTimeout(()=>{
//     console.log('ice cream')
// },4000)
// console.log('with a')
// console.log('spoon')

// function one(call_two){
//     console.log('step 1 complete. Please call two')
//     call_two()
// }

// function two(){
//     console.log('step 2')
// }
// one(two)
let stocks = {
    Friuts : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    toppings: [ 'chocolate', 'peanuts']
}

let order = (Fruit_name, call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.Friuts[Fruit_name]} was selected`)
        call_production()
    },2000)
    
}

let production = ()=>{
    setTimeout(()=>{
        console.log('production has started')
    },0)
}

order(0,production)