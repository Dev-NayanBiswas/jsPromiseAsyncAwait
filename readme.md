### *JS Promise*
###### ***Day-63 Sept-2-2024***    [_Inspired By._](https://www.youtube.com/watch?v=9JaDBYPmiJ0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=75 "Code With Harry Youtube Channel")
___

#### *About is Promise!❓*
☑️ *The solution of CallBack hell/pyramid of Doom is Promise. A promise is a promise of Code execution. The code either executes or fails, in the both Cases the subscriber/user will be Notified.* 
*The Syntax of promise looks like this.*
```javascript
    const myPromise = new Promise((resolve,reject)=>{
        // This resolve and reject callBack functions are preDefined in Javascript!!
        // Promise Body
    })
```
*State: Initially pending, then changes to either "fulfilled" when resolve is called or "rejected" when Reject is Called.*
*Result: Initially undefined, then changes to value, if resolved or Error when is Rejected.*


#### *Consumers: Then & Catch!❓*
☑️*The Consuming code can receive the final result of a promise through then and catch.*
*The most fundamental one is Then.*
```javascript
    myPromidse.then(function(result){
        console.log(result)}, function(error){
        console.log(error)
    })
```
*If we are interested only in successful completions, we can pass only one function argument to.*`.then()`

```javascript
    const myPromise = new Promise((res,rej)=>{

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


    myPromise.then(data=>console.log(data));
```
*If we are interested only in errors, we can use **null** as the first argument.*
```javascript
    myPromise.then(null,f(error){console.log(error)})
``` 
*or we can use catch,*
```javascript 
    myPromise.catch(err=>console.log(err))
```
```javascript
    myPromise.finally(()=>console.log("Execution Completed"))
``` 
***`myPromise.finally()`** Can be used to perform general cleanups.*




#### *About is Promise!❓*
☑️*dslsdfsdf.*
#### *About is Promise!❓*
☑️*dslsdfsdf.*
#### *About is Promise!❓*
☑️*dslsdfsdf.*