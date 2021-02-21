var map = L.map('map').fitWorld();

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map);

	function onLocationFound(e) {
		var radius = e.accuracy / 2;

		L.marker(e.latlng).addTo(map)
			.bindPopup("Você está aqui!").openPopup();

		L.circle(e.latlng, radius).addTo(map);
	}

	function onLocationError(e) {
		alert(e.message);
	}

	
	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("Para melhor interação <br>clique nos marcadores " )
			.openOn(map);
	}

	// Modelo padrão
	L.marker([-20.8177769, -49.4011877]).addTo(map)
		.bindPopup("<b>Studio WiDi</b><br/>Clique aqui<br> <a href='https://whats.link/sitedesconto'>Agende seu horario</a>"); // .openPopup()

	// L.circle([51.508, -0.11], 500, {
	// 	color: 'red',
	// 	fillColor: '#f03',
	// 	fillOpacity: 0.5
	// }).addTo(mymap).bindPopup("I am a circle.");

	// L.polygon([
	// 	[51.509, -0.08],
	// 	[51.503, -0.06],
	// 	[51.51, -0.047]
	// ]).addTo(mymap).bindPopup("I am a polygon.");

	// Fim Modelo padrão

	// Dom Mercato
	L.marker([-20.8193961, -49.4043044]).addTo(map)
		.bindPopup("<b>Dom Mercato</b><br/>Clique aqui<br> <a href='https://whats.link/sitedesconto'>Agende seu horario</a>"); // .openPopup()

	// L.circle([51.508, -0.11], 500, {
	// 	color: 'red',
	// 	fillColor: '#f03',
	// 	fillOpacity: 0.5
	// }).addTo(mymap).bindPopup("I am a circle.");

	// L.polygon([
	// 	[51.509, -0.08],
	// 	[51.503, -0.06],
	// 	[51.51, -0.047]
	// ]).addTo(mymap).bindPopup("I am a polygon.");

	// Fim

	// HOSPITAL DE BASE
	L.marker([-20.82848535, -49.39741721]).addTo(map)
		.bindPopup("<b>Studio WiDi!</b><br/>Clique aqui<br> <a href='https://whats.link/sitedesconto'>Agende seu horario</a>"); // .openPopup()

	L.circle([-20.82848535, -49.39741721], 50, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(map).bindPopup("I am a circle.");

	// L.polygon([
	// 	[51.509, -0.08],
	// 	[51.503, -0.06],
	// 	[51.51, -0.047]
	// ]).addTo(mymap).bindPopup("I am a polygon.");

	// Fim

	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);

	map.locate({setView: true, maxZoom: 16});
	map.on('click', onMapClick);