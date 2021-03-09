
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
			.bindPopup("Você está próximo desse ponto!").openPopup();

		L.circle(e.latlng, radius).addTo(map);
	}

	function onLocationError(e) {
		alert(e.message);
	}

	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);
	map.locate({setView: true, maxZoom: 16});
    
    map.on('click', onMapClick);
    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            
            .setContent("Para Melhor interação <br> clique nos marcadores! ") 
            .openOn(map);
    }

    // circulo
    L.circle([-20.811761, -49.3762272], 300, {
        color: 'yellow',
        fillColor: '#ff0',
        fillOpacity: 0.5
    }).addTo(map) .bindPopup("Em breve cupom nessa area.");

    // polygon
    // L.polygon([
// 	[51.509, -0.08],
// 	[51.503, -0.06],
// 	[51.51, -0.047]
// ]).addTo(mymap).bindPopup("I am a polygon.");
// Fim


// CONFIGURAÇÃO PADRAO ICONES PERSONALIZADOS
var LeafIcon = L.Icon.extend({
    options: {
        // shadowUrl: 'leaf-shadow.png',
        iconSize:     [48, 55],
        // shadowSize:   [50, 64],
        iconAnchor:   [28, 25],
        shadowAnchor: [4, 62],
        popupAnchor:  [-5, -5]
    }
});
    
// DEFINIR MARCADOR PERSONALIZADO
var lupaIcon = new LeafIcon({iconUrl: '/img/pin!.png'}),
    secadorIcon = new LeafIcon({iconUrl: '/img/pinWiDi.png'});
    ticosBurguerIcon = new LeafIcon({iconUrl: '/img/pinTicosBurguer.png'});
    jucelinoPizzaIcon = new LeafIcon({iconUrl: '/img/pinJucelinoPizza.png'});
    redeCentralIcon = new LeafIcon({iconUrl: '/img/pinRedeCentral.png'});
    foodTruckIcon = new LeafIcon({iconUrl: '/img/foodTruck.png'});
    deliveryIcon = new LeafIcon({iconUrl: '/img/delivery.png'});
    turismoIcon = new LeafIcon({iconUrl: '/img/pinTurismo.png'});
    marinerIcon = new LeafIcon({iconUrl: '/img/pinMariner.png'});
    canossaIcon = new LeafIcon({iconUrl: '/img/pinCanossa.png'});

    // Marcadores
    // Studio WiDi
    L.marker([-20.82150, -49.40519], {icon: secadorIcon}).bindPopup("<b>Studio WiDi</b><br/>Clique aqui<br> <a href='tel:173237-6117'>Ligue agora</a><br/> <a href='https://whats.link/studiowidi'>WhatsApp</a><br>Cupom: ...").addTo(map);
    // Ticos Burguer
    L.marker([-20.81733, -49.38599], {icon: ticosBurguerIcon}).bindPopup("<b>Tico's Burguer</b><br/>Clique aqui<br> <a href='tel:173234-5372'>Ligue agora</a><br>Cupom: ...").addTo(map);
    // Jucelinos Pizza
    L.marker([-20.82851, -49.40426], {icon: jucelinoPizzaIcon}).bindPopup("<b>Jucelino's Pizza</b><br/>Clique aqui<br> <a href='tel:1799221-2980'>Ligue agora</a><br/> <a href='https://whats.link/jucelinospizza'>WhatsApp</a><br>Cupom: ...").addTo(map);
    // Rede Central Farmácia
    L.marker([-20.79816, -49.41058], {icon: redeCentralIcon}).bindPopup("<b>Rede Central Farmácia</b><br/>Clique aqui<br> <a href='tel:1732376117'>Ligue agora</a><br/> <a href='https://whats.link/redecentral'>WhatsApp</a><br>Cupom: ...").addTo(map);
    L.marker([-20.80968, -49.39063], {icon: marinerIcon}).bindPopup("<b>Mariner Calçados</b><br/>Loja Av. Constituição<br>Clique aqui<br> <a href='tel:1735126941'>Ligue agora</a><br/> <a href='https://whats.link/mariner'>WhatsApp</a><br>").addTo(map);
    // Mariner Aeroporto
    L.marker([-20.81545, -49.41105], {icon: marinerIcon}).bindPopup("<b>Mariner Calçados</b><br/>Loja Aeroporto<br>Clique aqui<br> <a href='tel:1735126941'>Ligue agora</a><br/> <a href='https://whats.link/mariner'>WhatsApp</a><br>").addTo(map);
    // Canossa Tatoo
    L.marker([-20.84768, -49.34314], {icon: canossaIcon}).bindPopup("<b>Canossa Tatoo</b><br/>Apenas com agendamento previo!<br>Clique aqui<br/> <a href='https://whats.link/canossatatoo'>WhatsApp</a><br>").addTo(map);

