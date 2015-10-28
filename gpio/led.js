var Gpio = require("onoff").Gpio;

var led = new Gpio(11, 'out');



setTimeout(function(){
	led.writeSync(1);
	setTimeout(function(){
		led.write(0, function(er, val){
			console.log(er, val);
			led.unexport();
		});
	});
}, 10000);

