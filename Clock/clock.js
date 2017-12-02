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
	$.ajax('http://api.wunderground.com/api/fecf8ea800958a0e/forecast10day/q/IL/60089.json?date=' + new Date().toISOString())
		.then(function(response) {
			var high = response.forecast.simpleforecast.forecastday[0].high.fahrenheit;
			var low = response.forecast.simpleforecast.forecastday[0].low.fahrenheit;
			$('#weather-container .today').html(high + '&deg;/' + low + '&deg;');

			set10DayForecast(response);
		});
};

var set10DayForecast  = function(data) {
	var forecastday = data.forecast.simpleforecast.forecastday;
	$('.forecast-by-day table').empty();
	$.each(forecastday, function (index, forecast) {
		if (index === 0) return;
		var high = forecast.high.fahrenheit;
		var low = forecast.low.fahrenheit;
		var day = forecast.date.weekday_short + ' ' + forecast.date.day;
		if (index < 8) {
			$('.forecast-by-day table').append('<tr><td>' + day + ' </td><td>&nbsp;' + high + '&deg;/' + low + '&deg;</td></tr>');
		}
	})
};

setInterval(getDayForecastInfo, 1000 * 60 * 60 * 4);
getDayForecastInfo();


var setHourlyForecast = function(called) {
	if (moment().minutes() < 45 && !called) { return; }
	var url = 'http://api.wunderground.com/api/fecf8ea800958a0e/hourly/q/IL/60089.json?date=' + new Date().toISOString();
	$.ajax(url)
		.then(function(response) {
			$('.hourly table').empty();
			var timeCell = '';
			var tempCell = '';
			var feelslikeCell = '';
			$.each(response.hourly_forecast, function (index, forecast) {
				var time = forecast.FCTTIME.civil.replace(':00 ', '');
				var temp = forecast.temp.english;
				var feelsLike = forecast.feelslike.english;

				if (((index % 2) === 0 || index < 5) && index < 16) {
					timeCell = timeCell + '<td>'+time+'</td>';
					tempCell = tempCell + '<td>'+temp+'&deg;</td>';
					feelslikeCell = feelslikeCell + '<td>'+feelsLike+'&deg;</td>';
				}
			});
			$('.hourly table').append('<tr>'+timeCell+'</tr>');
			$('.hourly table').append('<tr class="temp">'+tempCell+'</tr>');
			// $('.hourly table').append('<tr class="feelslike">'+feelslikeCell+'</tr>');
		});
};
setInterval(setHourlyForecast, 1000 * 60);
setHourlyForecast('first');