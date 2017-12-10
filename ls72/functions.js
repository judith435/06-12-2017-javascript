var spinner = new Spinner().spin();

function sayHello(name) {
    return 'Hello ' + name;
}

function waitTwoSeconds(callback) {
    document.body.appendChild(spinner.el);
    setTimeout(callback, 2 * 1000);
}

waitTwoSeconds(function() {
    spinner.stop();
    console.log('callback: hi');
})




// Promise
  
function add1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
          const randNum = Math.ceil(Math.random()*10);
          if (randNum % 2 == 0) {
            resolve('success ' + randNum);
          }
          else {
            reject('error ' + randNum);
          }
        }, 2000);
      });
  }
  
  add1()
  .then(function(v) {
    console.log('promise: ' + v); 
  }).catch(function(error) {
    console.log('promise: ' + error); 
    
  });
 