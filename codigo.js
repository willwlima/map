var map = L.map('map').fitWorld();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

// icone personalizado
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
// L.marker([-20.8177769, -49.4011877]).addTo(map)
//     .bindPopup("<b>Studio WiDi</b><br/>Clique aqui<br> <a href='https://whats.link/sitedesconto'>Agende seu horario</a>"); // .openPopup()

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
// L.marker([-20.8193961, -49.4043044]).addTo(map)
//     .bindPopup("<b>Dom Mercato</b><br/>Clique aqui<br> <a href='https://whats.link/sitedesconto'>Agende seu horario</a>"); // .openPopup()

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

// CONFIGURAÇÃO PADRAO ICONES PERSONALIZADOS
var LeafIcon = L.Icon.extend({
    options: {
        // shadowUrl: 'leaf-shadow.png',
        iconSize:     [38, 45],
        // shadowSize:   [50, 64],
        iconAnchor:   [28, 25],
        shadowAnchor: [4, 62],
        popupAnchor:  [-8, -10]
    }
});


// DEFINIR MARCADOR PERSONALIZADO
var lupaIcon = new LeafIcon({iconUrl: '/img/lupa.png'}),
    secadorIcon = new LeafIcon({iconUrl: '/img/secador.png'});
    lancheIcon = new LeafIcon({iconUrl: '/img/burguer.png'});
    pizzaIcon = new LeafIcon({iconUrl: '/img/pizza.png'});
    farmaciaIcon = new LeafIcon({iconUrl: '/img/farmacia.png'});

L.marker([-20.81957, -49.40460], {icon: lupaIcon}).bindPopup("Teste 1.").addTo(map);
L.marker([-20.82150, -49.40519], {icon: secadorIcon}).bindPopup("<b>Studio WiDi</b><br/>Clique aqui<br> <a href='tel:173237-6117'>Ligue agora</a><br/> <a href='https://whats.link/studiowidi'>WhatsApp</a><br>Cupom: GRUDINHO").addTo(map);
L.marker([-20.81733, -49.38599], {icon: lancheIcon}).bindPopup("<b>Tico's Burguer</b><br/>Clique aqui<br> <a href='tel:173234-5372'>Ligue agora</a><br>Cupom: GRUDINHO").addTo(map);
L.marker([-20.82851, -49.40426], {icon: pizzaIcon}).bindPopup("<b>Jucelino's Pizza</b><br/>Clique aqui<br> <a href='tel:1799221-2980'>Ligue agora</a><br/> <a href='https://whats.link/jucelinospizza'>WhatsApp</a><br>Cupom: GRUDINHO").addTo(map);
L.marker([-20.79816, -49.41058], {icon: farmaciaIcon}).bindPopup("<b>Rede Central Farmácia</b><br/>Clique aqui<br> <a href='tel:1732376117'>Ligue agora</a><br/> <a href='https://whats.link/redecentral'>WhatsApp</a><br>Cupom: GRUDINHO").addTo(map);


map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

map.locate({setView: true, maxZoom: 16});
map.on('click', onMapClick);