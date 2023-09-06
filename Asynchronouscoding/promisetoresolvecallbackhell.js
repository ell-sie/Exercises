let stocks = {
    Friuts : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cone','cup','stick'],
    toppings: [ 'chocolate', 'peanuts']
}

let is_shop_open = true;


let order = (time,work) =>{
 return new Promise((resolve, reject)=>{
 if(is_shop_open){
    setTimeout(()=>{
        resolve(work())
    },time)
    
 }
 else{
    reject(console.log('our shop is closed'))
 } 
 })
}

order(2000, ()=>console.log(`${stocks.Friuts[0]} was selected`))

.then(()=>{
    return order(0, ()=>console.log(`Production has started`))
})


.then(()=>{
    return order(2000, ()=>console.log('The fruit was chopped'))
})


.then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`))
})


.then(()=>{
    return order(1000, ()=>console.log('The machine was started'))
})


.then(()=>{
    return order(2000, ()=>console.log(`Icecream was placed in a ${stocks.holder[1]}`))
})


.then(()=>{
    return order(3000, ()=>console.log(`${stocks.toppings[1]} were added as topping`))
})


.then(()=>{
    return order(2000, ()=>console.log(`The icecream has been served`))
})


.catch(()=>{
    console.log("Customer has left")
})


.finally(()=>{
    console.log("Day ended, our shop is closed")
})