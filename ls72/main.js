function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = 'admin';
}


// ------------- Dynamic form ----------- //
function buildForm(obj, $form1) {
    const keys = Object.keys(obj);
    for(let i=0; i < keys.length; i++) {
        const $element = document.createElement('input');
        $element.placeholder = $element.id = keys[i];
        $element.className = [
            'input-element', 
            'input-required'
        ].join(' ');
        $form1.appendChild($element);
        $element.value = obj[keys[i]];
    }
}

var p1 = new Person('Haim', 'Moshe', 18);
const $form1 = document.getElementById('form1');
buildForm(p1, $form1);


Person.prototype.validate = function() {
    console.log('gh');
    const keys = Object.keys(this);
    for(let i=0; i < keys.length; i++) {
        if (this[keys[i]] === 'admin') {
            throw keys[i] + ' Not good!';
        }
    }
}
    

document.getElementById('send').addEventListener('click', function() {
    try {
        p1.validate();
    }
    catch(ex) {
        document.getElementById('error').innerText = ex;
    }
})




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call



  function Student(firstName, lastName, age, course) {
    Person.call(this, firstName, lastName, age);
    this.course = course;
  }
 
  var s1 = new Student('Student', 'last', 21, 'Full stack');
  const $form2 = document.getElementById('form2');
  buildForm(s1, $form2);


