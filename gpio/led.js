var gpio = require("pi-gpio");

gpio.open(11, "output", function(err){
	gpio.write(11, 1, function(){
		setTimeout(function(){
			gpio.close(16);
		}, 10000);
	});
})