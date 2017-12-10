function divide(x,y) {
	
	return x/y;
}


function divide(x,y) {
	if (y === 0)
		throw "cannot divide by zero";
	return x/y;
}

// without try catch
var x = Number.parseInt(prompt('enter x'));
var y = Number.parseInt(prompt('enter y'));
alert(divide(x,y));

console.log('hello');

// with try catch
try {
    var x = Number.parseInt(prompt('enter x'));
    var y = Number.parseInt(prompt('enter y'));
    alert(divide(x,y));
}
catch (ex) {
    alert(ex);
}
finally {
    console.log('final');
}
console.log('hello');