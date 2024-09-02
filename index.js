// Synchronous Function
function myAsync() {
  setTimeout(() => console.log("I'm number One"), 1000);

  setTimeout(() => console.log("I'm number two"), 1000);

  console.log("I'm number three");
}

const callBack =(param) => {
  console.log(param);
}


const loadScript = (src, callBack) => {
  let script = document.createElement("script");
  script.src = src;
  script.onload = callBack("Nayan");
  document.head.append(script);
};

loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js',callBack)
