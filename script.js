var MemoObject = { date: date(), time: date(), content: 'hello meir' };
memos.push(MemoObject);





function Person (firstName, lastname, age) {
    this.firstName = firstName;
    this.lastname = lastname;
    this.age = age;
    this.email = "admin";
}

Person.prototype.validate= function(){
    const keys = Object.keys(this);
    for (let i=0; i < keys.length; i++) {
        if (this[keys[i]] === "admin") {
            throw keys[i] + " error found";
        }
    }
}

//var p1 = new Person("meir", "ilson", 5);
var p1 = new Person("                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ", "ilson", 5);

function buildForm(obj, $form1) {
    const keys = Object.keys(obj);
    console.log(keys);


    for (let i=0; i < keys.length; i++) {
        const $element = document.createElement('input');
        $element.placeholder =  $element.id = keys[i];
        $form1.appendChild($element);
        $element.value = obj[keys[i]];
    }
}

const $form1 = document.getElementById('form1');
buildForm(p1, $form1);

//document.getElementById('btnSend').addEventListener("click", function() {
    const buti = document.getElementById('btnSend');
    buti.addEventListener("click", function() {
    try {
        p1.validate();
    }
    catch(ex) {
        document.getElementById('error').innerHTML = ex;
    }
});

function Student (firstName, lastname, age, course) {
    Person.call(this,firstName, lastname, age);
    this.course = course;
}

var s1 = new Student("john bryce", "judy", 49, "c#");
const $form2 = document.getElementById('form2');
buildForm(s1, $form2);

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
        }, 1000); //2000
      });
  }

  const btn = document.getElementById('btnPromise');
  btn.addEventListener("click", function() {

    add1()
    .then(function(v) {
        alert('promise: ' + v); 
    })
    .catch(function(error) {
        alert('promise: ' + error); 
    });
});
