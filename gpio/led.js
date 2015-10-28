var Gpio = require("onoff").Gpio;

var pin = 17;// GPIO17
var led = new Gpio(pin, 'out');


var value = false;
setInterval(function(){
	led.writeSync(value ? 0 : 1);
	value = !value;
}, 500);
