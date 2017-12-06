var myObj = {
    firstName: "yaakov",
    lastName: 'Hatam',
    a: function() {
        return 'hello';
    }
}


function buildObject(a, b, c) {
    this.a = a;
    this.b = b;
}

var p1 = buildObject('a', 'a'); // to global scope
var p2 = new buildObject('b', 'b'); // new object

// object create
o = Object.create(Object.prototype, {
    // foo is a regular 'value property'
    foo: {
      writable: true,
      configurable: true,
      value: 'hello'
    },
    // bar is a getter-and-setter (accessor) property
    bar: {
      configurable: false,
      get: function() { return 10; },
      set: function(value) {
        console.log('Setting `o.bar` to', value);
      }
      
    }
});


// define properties


// object by reference
var sampleObj = {};
sampleObj.$ = 10;
testObject(sampleObj); 
// by value:
// testObject({...sampleObj});
console.log('sampleObj: '+ sampleObj.$)


function testObject(a) {
    a.$ = 5;
    console.log('testObject: ' + a.$);
}
















