var Gpio = require("onoff").Gpio;

var pin = 18;
var button = new Gpio(pin, 'in', 'both');

button.watch(function(er, value){
	console.log('button changed', value);
});