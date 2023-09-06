let stocks = {
    Friuts : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cone','cup','stick'],
    toppings: [ 'chocolate', 'peanuts']
}

let is_shop_open = true;

let toppings_choice = ()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(
                console.log('What topping would you like ?')
            )
            
        },3000)
    })
}

async function Kitchen(){
    console.log(`A`)
    console.log(`B`)
    console.log(`C`)

    await toppings_choice()
    
    console.log(`D`)
    console.log(`E`)
}

Kitchen()

console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking more orders")