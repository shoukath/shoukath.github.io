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
		$('.weather .inside').html(targetTemp + homeIcon + inside_temp + '&deg;/' + humidity + '%');
	})
	.fail(function () {
		$('.weather .inside').html('N/A');
	});

	// secondBedroomData();
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
			if (temperature >= 80) {
				$('#second-bedroom').addClass('alarm');
			}
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
			var windIcon = `<svg version="1.1" id="wind" style="fill:white;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						width="40px" height="40px" viewBox="0 0 516.4 516.4" style="enable-background:new 0 0 516.4 516.4;" xml:space="preserve"
					>
				<g>
					<g>
						<path d="M344.199,143.45c0-42.1-34.398-76.5-76.5-76.5c-42.099,0-76.499,34.4-76.499,76.5h38.2c0-21,17.2-38.2,38.2-38.2
							c21,0,38.201,17.2,38.201,38.2s-17.201,38.2-38.201,38.2H38.2v38.2h229.499C309.801,220.05,344.199,185.55,344.199,143.45z"/>
						<path d="M439.801,143.45c-42.102,0-76.5,34.4-76.5,76.5H401.6c0-21,17.201-38.2,38.201-38.2S478,198.95,478,219.95
							s-17.1,38.3-38.199,38.3H0v38.2h439.9c42.1,0,76.5-34.4,76.5-76.5C516.4,177.85,481.9,143.45,439.801,143.45z"/>
						<path d="M382.5,334.75H114.7v38.2h267.8c11.5,0,19.1,7.6,19.1,19.1s-7.6,19.101-19.1,19.101s-19.1-7.601-19.1-19.101h-38.201
							c0,30.601,24.9,57.4,57.4,57.4s57.4-24.9,57.4-57.4S415,334.75,382.5,334.75z"/>
					</g>
				</g>
				</svg>`;
			$('#wind-info').html(`${windIcon} <span>${Math.round(response.current_observation.wind_mph)}mph ${response.current_observation.wind_dir}</span>`);
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
				var temp = Math.round(forecast.temp.english);
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

// Camera Control
var isEndpointActive = true;
var motionAjaxCallIntervalId = setInterval(function () {
	if(!isEndpointActive) {return;}
	$.ajax({
		url: 'http://192.168.1.3:3000/motion-status',
		timeout: 1000
	})
	.always(function(response) {
		if (response === '1') {
			if ($('#camera-container .camera').length === 0) {
				$('#camera-container').append('<img class="camera" src="http://192.168.1.6:8081/"></img>');
			}
		} else {
			$('#camera-container .camera').remove();
		}
	});
}, 1000);

var checkMotionAppStatus = function () {
	$.ajax({
		url: 'http://192.168.1.3:3000/motion-status',
		timeout: 1000
	}).done(function () {
		isEndpointActive = true;
	}).fail(function () {
		isEndpointActive = false;
	})
}

setInterval(checkMotionAppStatus, 60000);
checkMotionAppStatus();


//Reminders
var beginningTime = moment('9:00pm', 'h:mma');
var endTime = moment('9:01pm', 'h:mma');
var reminders = function() {
	if (moment().isBetween(beginningTime, endTime)) {
		$('#reminders').css('display', 'flex');
	} else {
		$('#reminders').css('display', 'none');
	}
}
setInterval(reminders, 1000);
reminders();