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

document.querySelector('#upper-container').addEventListener('click', clickHandler, false);

var getCurrentWeatherInfo = function () {
	$.ajax('http://api.wunderground.com/api/fecf8ea800958a0e/conditions/q/CA/60089.json?date=' + new Date().toISOString())
		.then(function(response) {
			$('#weather-container .current').html(Math.round(response.current_observation.temp_f) + '&deg;');
		});
	// $('#weather').html(35 + '&deg;');
};

setInterval(getCurrentWeatherInfo, 1000 * 60 * 15);
getCurrentWeatherInfo();

var getDayForecastInfo = function () {
	$.ajax('http://api.wunderground.com/api/fecf8ea800958a0e/forecast/q/IL/60089.json?date=' + new Date().toISOString())
		.then(function(response) {
			var high = response.forecast.simpleforecast.forecastday[0].high.fahrenheit;
			var low = response.forecast.simpleforecast.forecastday[0].low.fahrenheit;
			$('#weather-container .today').html(high + '&deg;/' + low + '&deg;');
		});
};

setInterval(getDayForecastInfo, 1000 * 60 * 60 * 4);
getDayForecastInfo();