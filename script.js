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
var p1 = new Person("admin", "ilson", 5);

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