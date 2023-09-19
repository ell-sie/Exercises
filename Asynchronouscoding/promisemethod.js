// const promiseOne = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('promiseOne Resolved!');
//     }, 500);
//   });
  
//   const promiseTwo = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//     //   resolve('promiseTwo Resolved!');
//       reject('promiseTwo rejected');
//     }, 600);
//   });
  
//   const promiseThree = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('promiseThree Resolved!');
//     }, 700);
//   });
  
//   const fetchData = async () => {
//     try {
//     //   const responseOne = await promiseOne();
//     //   const responseTwo = await promiseTwo();
//     //   const responseThree = await promiseThree();
//     const response = await Promise.all([promiseOne(),promiseTwo(),promiseThree()])
//       console.log('response of the promises', response);
//     } catch (error) {
//       console.log('error: ', error);
//     }
//   };
  
//   fetchData();
Promise.resolve('Success')
  .then(result => {
    console.log('Resolved:', result);
    throw new Error('Simulated error');
  })
  .catch(error => {
    console.log('Caught Error:', error);
  })
  .finally(() => {
    console.log('Finally, cleanup code here.');
  });
//In the new code, I added a .catch block after the creation of the rejectedPromise to handle the error and prevent an unhandled promise rejection. Additionally, I made sure to handle the error thrown in the then block of the last Promise chain by adding a .catch block for proper error handling.







  