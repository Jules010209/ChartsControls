const back = require('androidjs').back;

back.on("first", function() {
	back.send("second", null);
});