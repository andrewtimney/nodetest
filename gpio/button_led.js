var Gpio = require("onoff").Gpio;

var buttonPin = 18;
var button = new Gpio(buttonPin, 'in', 'both');
var ledPin = 17;// GPIO17
var led = new Gpio(ledPin, 'out');
console.log('Led is: ', led.readSync());

button.watch(function(er, value){
	console.log('button changed', value);
	led.writeSynce(value);
});