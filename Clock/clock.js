var clock = {
	getTime: function () {
		return moment().format("h:mm");
	},
	getDate: function () {
		return moment().format("MMMM Do");
	},
	getDay: function () {
		return moment().format("dddd");
	}
}

function setClock() {
	document.querySelector('#clock .time').innerHTML = clock.getTime();
	document.querySelector('#clock .date').innerHTML = clock.getDate();
	document.querySelector('#clock .day').innerHTML = clock.getDay();
}

setClock();

setInterval(setClock, 1000 * 15)

function insideData () {
	$.ajax({
		url: 'https://9em9ww2qab.execute-api.us-east-1.amazonaws.com/dev/get/status',
		cache: false
	})
	.done(function(response){
		var thermostat = response.devices.thermostats.PuDeJsozUoTDCVDQJgiUVL9j2eo3EvKM;
		var inside_temp = thermostat.ambient_temperature_f;
		var humidity = thermostat.humidity;
		if (thermostat.hvac_state === 'off') {
			var iconName = thermostat.hvac_mode === 'eco' ? 'nest-leaf-icon' : 'thermostat-icon';
		} else if (thermostat.hvac_state === 'heating') {
			var iconName = 'thermostat-icon-heat';
		} else if (thermostat.hvac_state === 'cooling') {
			var iconName = 'thermostat-icon-cool';
		}
		var targetTemp = thermostat.target_temperature_f;
		var homeIcon = '<img alt="" class="home-icon" src="http://www.athletesnest.com/Images/icons/home.png" width="50">';

		var icon = '<img alt="" class="status-icon" src="https://nest.com/support/images/misc-assets-icons/'+iconName+'.png" width="50">';
		var targetTemp = '<div>'+icon+targetTemp+'&deg;</div>';
		console.log(icon);
		$('.weather .inside').html(targetTemp + homeIcon + inside_temp + '&deg;/' + humidity + '%');
	})
	.fail(function () {
		$('.weather .inside').html('N/A');
	});

	secondBedroomData();
}

var secondBedroomData = function () {
	var connectionStatusRequest = $.ajax({
		url: 'http://blynk-cloud.com/f6b571c113bf4ac09b2072d8cab06e10/isHardwareConnected',
		cache: false
	});
	var humidityRequest = $.ajax({
		url: 'http://blynk-cloud.com/f6b571c113bf4ac09b2072d8cab06e10/get/v5',
		cache: false
	});
	var tempRequest = $.ajax({
		url: 'http://blynk-cloud.com/f6b571c113bf4ac09b2072d8cab06e10/get/v6',
		cache: false
	});

	$.when(connectionStatusRequest, humidityRequest, tempRequest).then(function (connectionStatusResponse, humidityResponse, tempResponse) {
		if(connectionStatusResponse[0]) {
			var humidity = Math.round(humidityResponse[0][0]);
			var temperature = Math.round(tempResponse[0][0]);
			$('#second-bedroom').html(temperature + '&deg;/' + humidity + '%');
		} else {
			$('#second-bedroom').html('<i style="color: #666;">Offline</i>');
		}
	}).fail(function() {
		$('#second-bedroom').html('N/A');
	})
}

insideData();

setInterval(insideData, 1000 * 60);


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
		var iconUrl = '<img src="' + forecast.icon_url + '" class="icon"/>';
		if (index < 8) {
			$('.forecast-by-day table').append('<tr><td>' + day + ' </td><td>&nbsp;'+iconUrl+'</td><td>' + high + '&deg;/' + low + '&deg;</td></tr>');
		}
	})
};

setInterval(getDayForecastInfo, 1000 * 60 * 60 * 4);
getDayForecastInfo();


var setHourlyForecast = function(called) {
	if (moment().minutes() > 15 && !called) { return; }
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
				var image = '<img src="'+forecast.icon_url+'"/><br>';
				var feelsLike = forecast.feelslike.english;

				if (((index % 2) === 0 || index < 5) && index < 16) {
					timeCell = timeCell + '<td>'+time+'</td>';
					tempCell = tempCell + '<td>'+image+temp+'&deg;</td>';
					feelslikeCell = feelslikeCell + '<td>'+feelsLike+'&deg;</td>';
				}
			});
			$('.hourly table').append('<tr>'+timeCell+'</tr>');
			$('.hourly table').append('<tr class="temp">'+tempCell+'</tr>');
			// $('.hourly table').append('<tr class="feelslike">'+feelslikeCell+'</tr>');
		});
};
setInterval(setHourlyForecast, 1000 * 60 * 5);
setHourlyForecast('first');

