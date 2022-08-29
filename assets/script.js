front.send("first");

front.on("second", function(msg) {
	console.log(msg);
	$('#msg').html(msg);

	setTimeout(() => {
		window.location.href = '../views/firs.html';
	}, 4000);
});