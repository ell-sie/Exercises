const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promiseOne Resolved!');
    }, 500);
  });
  
  const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promiseTwo Resolved!');
    }, 600);
  });
  
  const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promiseThree Resolved!');
    }, 700);
  });
  
  const fetchData = async () => {
    try {
    //   const responseOne = await promiseOne;
    //   const responseTwo = await promiseTwo;
    //   const responseThree = await promiseThree;
    const response = await Promise.all([promiseOne,promiseTwo,promiseThree])
      console.log('response of the promises', response);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  
  fetchData();
  