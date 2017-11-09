var clock = {
	getTime: function () {
		return moment().format("h:mm");
	}
}

document.querySelector('#clock .content').innerHTML = clock.getTime();

setInterval(function () {
	document.querySelector('#clock .content').innerHTML = clock.getTime();
}, 1000 * 15)