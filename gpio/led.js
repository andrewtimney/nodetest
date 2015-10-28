var Gpio = require("onoff").Gpio;

var led = new Gpio(11, 'out');

led.writeSync(0);

setTimeout(function(){
	led.writeSync(1);s
}, 10000);