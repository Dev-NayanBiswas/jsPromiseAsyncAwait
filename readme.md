### *JS Promise*
###### ***Day-63 Sept-2-2024***    [_Inspired By._](https://www.youtube.com/watch?v=9JaDBYPmiJ0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=75 "Code With Harry Youtube Channel")
___

#### *About is Promise!❓*
☑️ *The solution of **CallBack hell/pyramid of Doom** is Promise. A promise is a promise of Code execution. The code either executes or fails, in the both Cases the subscriber/user will be Notified.* 
*The Syntax of promise looks like this.*
```javascript
    const myPromise = new Promise((resolve,reject)=>{
        // This resolve and reject callBack functions are preDefined in Javascript!!
        Promise Body
    })
```
***State:*** *Initially pending, then changes to either "fulfilled" when resolve is called or "rejected" when Reject is Called.*
***Result:*** *Initially undefined, then changes to value, if resolved or Error when is Rejected.*


#### *Consumers: Then & Catch!❓*
☑️*The Consuming code can receive the final result of a promise through then and catch.*
*The most fundamental one is Then.*
```javascript
    myPromidse.then(
        function(result){
            console.log(result)}, 
        function(error){
            console.log(error)}
    )
```
*If we are interested only in successful completions, we can pass only one function argument to.*`.then()`

```javascript
    const myPromise = new Promise((resolve,reject)=>{
        let randomNum = Math.floor(Math.random()*10);
        if(randomNum < 2){
            throw new Error("Can't Run this code now")
            return;
        }
        else{
            setTimeout(()=>{
            resolve("Yess! I'm Executed after 3 seconds");
            },3000)
        }
    }
)


    myPromise.then(data=>console.log(data));       //just for the Resolve value not interested in the Reject one
```
*If we are interested only in errors, we can use **null** as the first argument.*
```javascript
    myPromise.then(null,(error)=>{console.log(error)})
``` 
*or we can use catch,*
```javascript 
    myPromise.catch(err=>console.log(err))
```
```javascript
    myPromise.finally(()=>console.log("Execution Completed"))
``` 
***`myPromise.finally()`** Can be used to perform general cleanups.*




#### *Promise Chaining!❓*
☑️*We can chain Promise and make them pass the resolve values to one another like this.*
```javascript
    myPromise.then(function(result)=>{
        alert(result); 
        return;
    })
    .then(x=>console.log(x))
    .then(()=>console.log())
    .then(()=>console.log())
    .then(()=>console.log())
```
*Here the initial promise resolve in a second (assuming).*
*The next `.then()` handler is then called which is resolved with value of `x`.*
*The next `.then()` gets the result of previous one and this keeps on going.*
*Every call to `.then()` returns a new promise whose value is passed to the next one and so on. we can use custom promises inside `.then()`.*



#### *Promise API(Application Programming Interface)❓*
☑️*There are 6 static methods of Promise class...*
```javascript
    Promise.all([promise1, promise2, promise3, promise4]);
    Promise.allSettled([promise1, promise2, promise3, promise4])
    Promise.race([promise1, promise2, promise3, promise4])
    Promise.any([promise1, promise2, promise3, promise4])
    Promise.resolve("I will be Resolved anyway")
    Promise.reject(new Error("this one is rejected"))
```
#### *About is Promise!❓*
☑️*There is a special syntax to work with promises in JS.*
*An `async function` can be created with a async keyword like this.*
`async function myPromise()`
*An async function always returns a promise, other values are wrapped in a promise automatically.*
*We can do something like this:`myPromise().then(alert)`.*
*So async ensures that the function returns a promise and wraps non promises in it.*

#### *The Await keyword!❓*
☑️*There is another keyword called await that works only inside async function. `let value = await myPromise()` the await keyword makes javascript wait until the promise settles and returns its value. Its just a more elegant syntax of getting the promise result than promise `.then()` and its easier to read and write.*


#### *Error Handling!❓*
☑️*We all make mistakes, Also sometimes our script can have errors.Usually a program halts when an error occurs.*
*The `try{}catch(){}` syntax allows us to catch errors so that the script instead of dying can do something more reasonable.*

```javascript
    async function myPromise(){
        
        try{
        let data = await fetch(link);

        if(!data.ok){
            throw new Error(`Error happens: ${data.status}`)
        }
        else{
            let userData = await data.json();

            //JSON: await data.json() for JSON objects/arrays.
            //Text: await data.text() for plain text or HTML.
            //Blob: await data.blob() for binary data like images or videos.
            //FormData: await data.formData() for form data submissions.
            //ArrayBuffer: await data.arrayBuffer() for raw binary data.
            //Stream: await data.body.getReader() for processing data streams.

            return userData;
        }
        }
        catch(error){
            console.error(error.message)
        }
        finally(
            ()=>console.log("Promise Execution Completed")
        )
    }
```
****Note***: try catch works Synchronously.*
*If an exception happens in scheduled code, like in setTimeout, then `try...catch` won't catch it.*
```javascript
    try{
        setTimeout(
            let userData = await fetch("https link");
            if(!userData.ok){
                throw new Error(`Opps error Ocuures : ${userData.status}`)
            }
            else{
                let data = await userData.json();
            }
        ,1000)
    }
    // Script dies and catch won't work!!
    catch(error){
        console.error(error.message)
    }
```
*Thats because the function itself is executed later, when the engine has already left the `try...catch` construct.*

#### *The error object!❓*
☑️*For all the built in errors, the error object has two main properties.*

```javascript
    catch(error){
        alert(error.message);
        alert(error.name);
        alert(error.stack);
    }
```

#### *Trowing Custom Error❓*
☑️*We can throw our own error by using the throw syntax.*
```javascript
    if(!fetchData.ok){
        throw new Error(`Unable to fetch data from server: ${fetchData.status}`)
    }catch(error){
        console.log(error.message)
    }
```
*We can also throw a particular error by using the built in constructor for standard errors:*
```javascript
    async function myPromise(){
        try{
            let data = await fetch("http-link");
            if(!data.ok){
                throw new SyntaxError("Failed to Load")
            }
            else if(data.length=== 0){
                throw new ReferenceError("invalid Reference")
            }
            else{
                let userData = await data.json();
                return userData
            }
        }
        catch(error){
            if(error instanceof ReferenceError){
                console.error('caught in ReferenceError', error.message)
            }
            else if(error instanceof SyntaxError){
                console.error('caught in SyntaxError', error.message)
            }
            else{
                console.error(error.message)
            }
        }
        finally(()=>console.log("Promise Execution Complete"))
    }
```
***Note:*** *This `finally()` clause will run in all cases, after **try** if there is no errors, or if **caught** any error.*
*either there is a **return** in try block. finally will be executed just before the control returns to the outer code*


[_Hand Notes for Curious one_](https://www.codewithharry.com/)