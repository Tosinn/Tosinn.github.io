
 

$(document).ready(function() {
	$("#getWeather").click(function() {
		var city = $("#cityName").val();
		var key = '679b5831fe93c0819cb15e3a14244c06';

		$.ajax({
			url: 'https://api.openweathermap.org/data/2.5/weather',
			dataType: 'json',
			type: 'GET',
			data: {q: city, appid: key, units: 'metric'},

			success: function(data) {
				var wf = '';
				$.each(data.weather, function(index, val) {
					wf += '<p><b>' + data.name + ',' +  ' ' + val.description  +  ' ' + '</p>' + data.main.temp +
					'&deg;c'  
				})
				$("#info").html(wf);
			}
		})
	})
})