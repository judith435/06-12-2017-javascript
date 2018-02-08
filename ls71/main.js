var MemoObject = { date: memoDate, time: memoTime, content: memoContent };
memos.push(MemoObject);



function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = 'admin';
}

var p1 = new Person('Haim', 'admin ', 18);
// var p1 = new Person('Haim', 'Moshe', 18);

Person.prototype.validate = function() {
    const keys = Object.keys(this);
    for(let i=0; i < keys.length; i++) {
        if (this[keys[i]] === 'admin') {
            throw keys[i] + ' Not good!';
        }
    }
}
    


function buildForm(obj, $form1) {
    const keys = Object.keys(obj);
    
    for(let i=0; i < keys.length; i++) {
        const $element = document.createElement('input');
        $element.placeholder = $element.id = keys[i];
        $form1.appendChild($element);
        $element.value = obj[keys[i]];     
    }
}

const $form1 = document.getElementById('form1');
buildForm(p1, $form1);

document.getElementById('send').addEventListener('click', function() {
    try {
        p1.validate();
    }
    catch(ex) {
        document.getElementById('error').innerText = ex;
    }
})


