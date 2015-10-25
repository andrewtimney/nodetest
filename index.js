var RaspiCam = require("raspicam");

var camera = new RaspiCam({ mode:'photo', output:'./stest.jpg' });

//to take a snapshot, start a timelapse or video recording
camera.start();

//to stop a timelapse or video recording


//listen for the "start" event triggered when the start method has been successfully initiated
// camera.on("start", function(){
//     //do stuff
// 	console.log('started');
// });
// 
// camera.on("read", function(err, timestamp, filename){ 
//     //do stuffs
// 	console.log('read');
// });
// 
// camera.stop();