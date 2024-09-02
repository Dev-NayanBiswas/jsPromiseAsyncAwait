let setTimeoutID;
let setTimeoutID2;
const prom = new Promise((res,rej)=>{

    let data = Math.floor(Math.random()*10)
    if(data < 2){
    // ! Throwing Error When Rejected
        throw new Error (`${data} Error from Promise - 1`);
    }
    else{
        setTimeoutID = setTimeout(()=>{
            res("Yess! I'm Executed");
        }
        ,500)
        console.log(data)
    }
})

const promMe = new Promise((res, rej)=>{
    let data = Math.floor(Math.random()*50);
    if(data > 40){
    // !Throw new Error when the Promise is rejected❓
        throw new Error(`${data} Error From Promise - 2`)
    }
    else{
        setTimeoutID2 =setTimeout(()=>{
            res("Successfully!! Executed from Promise2");
        },500)
    }
})

    //! Promise.all: Promise.all/allSettled/race/any/resolve/reject expects an iterable (such as an array) as its argument😮
// const allPromise = Promise.all([prom,promMe])
const allPromise = Promise.allSettled([prom,promMe])


// prom.then(res=>res.json())
allPromise.then(data=>console.log(data)).catch(error=>{
    console.log(error.message);

    //! Clear TimeOut ID when Error 😏
    clearTimeout(setTimeoutID);
    clearTimeout(setTimeoutID2);
})
    // ! Finally won't be executed immediately let it wait until the promise is resolved or to get Rejected 😑
.finally(()=>console.log("Execution Completed")) 