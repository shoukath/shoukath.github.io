var clock = {
	getTime: function () {
		return moment().format("h:mm");
	},
	getDate: function () {
		return moment().format("dddd, MMMM Do");
	}
}

function setClock() {
	document.querySelector('#clock .time').innerHTML = clock.getTime();
	document.querySelector('#clock .date').innerHTML = clock.getDate();
}

setClock();

setInterval(setClock, 1000 * 15)


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

var getWeatherInfo = function () {
	$.ajax('http://api.wunderground.com/api/fecf8ea800958a0e/conditions/q/CA/60089.json')
		.then(function(response) {
			$('#weather').html(Math.round(response.current_observation.temp_f) + '&deg;');
		});
};

setInterval(getWeatherInfo, 1000 * 60 * 15);
getWeatherInfo();