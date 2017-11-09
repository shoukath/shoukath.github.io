var clock = {
	getTime: function () {
		return moment().format("h:mm");
	}
}

document.querySelector('#clock .content').innerHTML = clock.getTime();

setInterval(function () {
	document.querySelector('#clock .content').innerHTML = clock.getTime();
}, 1000 * 15)


function clickHandler() {
	document.fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen;

	function requestFullscreen(element) {
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.webkitRequestFullScreen) {
			element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	}

	if (document.fullscreenEnabled) {
		requestFullscreen(document.documentElement);
	}
}

document.querySelector('#clock .content').addEventListener('click', clickHandler, false);
