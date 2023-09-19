// function createAlarm(name,time){
//     return  new Promise(function(resolve,reject){
//         (time <= 2) ? reject(`Time ${time} is too short for an alarm!`) : resolve(
//             setTimeout(()=>{
//                 console.log(`Wake upppp ${name} !!!!!!`)
//             },time*1000)
//         )
    
                
// })
//  }

//  const y = createAlarm("elsie", 1)
// .then(value =>{
//     console.log(value)
// })
// const a= y.catch(error=>{
//     return(error)
// })
// console.log(a);



// function myReduce(cb,initial){
//      // nullish coalecing
//     let result = initial ?? this[0]
//     for(let i = initial === undefined ? 1:0; i < this.length; i++){
//         result = cb(result,this[i],i,this)
       
//     }
//     return result 
// }
 
// Array.prototype.myReduce = myReduce

// const array = [1, 2, 3, 4]

// const sum = array.myReduce((acc , curr) => {
// 	return acc - curr 
// }, 3)

// console.log(sum) // 10
// function getFastPosts(){
//     const promise1 = fetch("https://dummyjson.com/posts").then(response => response.json())
//     const promise2 = fetch("https://this-may-not-exist.com/posts").then(response => response.json()).catch(error => console.error(error))
//     const promise3 = fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json())
//     return Promise.any([promise1,promise2,promise3])
//     .then(value => console.log(value))
//     .catch(error => console.error(error))
// }

// getFastPosts()

// const cancel = new AbortController
// const signal = cancel.signal
// let bla = fecth("https://dummyjson.com/posts", {signal})

// function getdata(url, timeout) {
//     const controller = new AbortController();
//     const signal = controller.signal;
  
//     let promise1 = fetch(url, { signal })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log('fetch data first', data);
//         return data;
//       })
//       .catch((error) => {
//         console.error(error);
//         throw error; // Re-throw the error to propagate it.
//       });
  
//     let promise2 = new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve('got here first');
//       }, timeout);
//     });
  
//     return Promise.race([promise1, promise2])
//       .then((data) => {
//         if (data === 'got here first') {
//           controller.abort(); // Abort the fetch request
//           return 'Timeout occurred';
//         } else {
//           return data;
//         }
//       })
//       .catch((error) => {
//        console.error('error')
//        return error
//       });
//   }
  
//   getdata('https://jsonplaceholder.typicode.com/posts/1', 5000)
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));
  

// async function country(url, timeout) {
//    try {
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error 
//     }
//     const data = await response.json()
//     const us = data.Results.filter ((item )=> {
//         return item.Country === "UNITED STATES (USA)"

//     })
//     setTimeout(() => {
//         console.log(us)
//         return us 
//     }, timeout);
    
//    } catch (error) {
//     console.error(error);
//     throw error;
//   }
//   }
//   country('https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2', 2000)
//     .then((result) => {
//       // You can work with the 'result' here if needed
//     })
//     .catch((error) => console.error(error));
  
// function repeat(fn, interval){
//     fn();
//     const int = setInterval(fn, interval)
//     return function stop(){
//         clearInterval(int)
//         console.log("fn stoped")
//     }
    
// }
// function message(){
//     console.log("fn started")
// }

// let answ = repeat(message, 1000)

// setTimeout(answ, 4000)

function fetchLoop(){

 let promise1 = setTimeout(() => {
     fetch(['https://dummyjson.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/1'])
.then(data => {
	console.log(data)
})
.catch(error => {
	console.log(error)
})
 }, 3000);

 let promise2 = setTimeout(() => {
     fetch(['https://jsonplaceholder.typicode.com/users/1','https://unavailable-random-api-/users/1','https://dummyjson.com/users/1'])
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    }) 
 }, 3000);
 
let arr = [promise1, promise2]
return Promise.all([arr])
.then(data => console.log(data))
.catch(err => console.err(err))
}

fetchLoop().then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.error(error)
})