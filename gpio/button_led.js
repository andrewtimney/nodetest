var Gpio = require("onoff").Gpio;

var buttonPin = 18;
var button = new Gpio(buttonPin, 'in', 'both');
var ledPin = 17;// GPIO17
var led = new Gpio(ledPin, 'out');

button.watch(function(er, value){
	console.log('button changed', value);
	led.writeSynce(value);
});

function exit() {
  button.unexport();
  led.unexport();
  process.exit();
}
 
process.on('SIGINT', exit);