let stocks = {
    Friuts : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cone','cup','stick'],
    toppings: [ 'chocolate', 'peanuts']
}

let is_shop_open = true;
function time(ms){
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve, ms)
        } else{
            reject(console.log("shop is closed"))
        }
    })
}

async function Kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.Friuts[0]} was selected`);
        console.log(`Production has started`);
        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);
        await time(1000);
        console.log(`The machine has started`);
        await time(2000);
        console.log(`Ice cream has been place on ${stocks.holder[0]}`);
        await time(3000);
        console.log(`${stocks.toppings[0]} was selected as topping`);
        await time(2000);
        console.log(`Ice cream has been served`)
    }
    catch(error){
        console.log("customer left", error)
    }
    finally{
        console.log("day has ended, shop is closed")
    }
}

Kitchen()