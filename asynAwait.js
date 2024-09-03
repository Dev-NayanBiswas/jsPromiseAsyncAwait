function myAsync() {
  // Simulation for getting data from server
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve("I came after 3 sec");
    }, 3000);
  });
}

console.log("I am Learning Async Await");

let data = myAsync();
data.then((result) => console.log(result));

console.log("I Will execute before data");
console.clear();

// async function newPromise (){
//     return new Promise((resolve, reject)=>{

//         setTimeout(()=>{
//             resolve("I was born in 1996")
//         },5000)
//     })
// }

async function newPromise() {
  try {
    let userData = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!userData.ok) {
      throw new Error(`HTTP! error Status: ${userData.status}`);
    }
    //await userData.text()
    let data = await userData.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

async function runThisOne() {
  console.log("Myself Nayan Biswas");

  //!!Check the difference between using.then and await
  const myData = await newPromise();
  console.log(myData);

  console.log(
    "Learning Async Await function here to manage Asynchronous javaScript",
  );
}

runThisOne();
