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
    holder : ['cone','cup','stick'],
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
        setTimeout(()=>{
            console.log('The fruit has been chopped')
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
                setTimeout(()=>{
                    console.log('The machine was started')
                    setTimeout(()=>{
                        console.log(`icecream was placed on the ${stocks.holder[0]}`)
                        setTimeout(()=>{
                            console.log(`This ${stocks.toppings[1]} was added as topping`)
                            setTimeout(()=>{
                                console.log('serve icecream')
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },0)
}

order(0,production)