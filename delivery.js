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
        .bindPopup("Você está próximo desse ponto!").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
    alert(e.message);
}


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        // .setContent("Para melhor interação <br>clique nos marcadores " )
        .setContent("Para Melhor interação <br> clique nos marcadores! ") //</b><br/>Conheça os Influencers<br><a href='https://www.instagram.com/will.ahelm/'><img width='70' height='70' src=img/fotoWill.png><a href='https://www.instagram.com/digrudinho/'><img width='70' height='70' src=img/fotoDi.png><br><a href='https://www.instagram.com/letsdo302/'><img width='70' height='70' src=img/fotoLets.png></a>")
        .openOn(map);
}

// MODELO
// L.marker([-20.82848535, -49.39741721]).addTo(map)
//     .bindPopup("<b>Studio WiDi!</b><br/>Clique aqui<br> <a href='https://whats.link/sitedesconto'>Agende seu horario</a>"); // .openPopup()

// L.circle([-20.82150, -49.40519], 50, {
//     color: 'yellow',
//     fillColor: '#ff0',
//     fillOpacity: 0.5
// }).addTo(map).bindPopup("I am a circle.");

L.circle([-20.811761, -49.3762272], 300, {
    color: 'yellow',
    fillColor: '#ff0',
    fillOpacity: 0.5
}).addTo(map) .bindPopup("Em breve cupom nessa area.");

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
var ticosBurguerIcon = new LeafIcon({iconUrl: '/img/pinTicosBurguer.png'});
    jucelinoPizzaIcon = new LeafIcon({iconUrl: '/img/pinJucelinoPizza.png'});
    foodTruckIcon = new LeafIcon({iconUrl: '/img/foodTruck.png'});
    deliveryIcon = new LeafIcon({iconUrl: '/img/delivery.png'});
    // bauIcon = new LeafIcon({iconUrl: '/img/pinFino.png'});
    

// Ticos Burguer
L.marker([-20.81733, -49.38599], {icon: ticosBurguerIcon}).bindPopup("<b>Tico's Burguer</b><br/>Clique aqui<br> <a href='tel:173234-5372'>Ligue agora</a><br>Cupom: ...").addTo(map);
// Jucelinos Pizza
L.marker([-20.82851, -49.40426], {icon: jucelinoPizzaIcon}).bindPopup("<b>Jucelino's Pizza</b><br/>Apenas delivery<br> <a href='tel:1799221-2980'>Ligue agora</a><br/> <a href='https://whats.link/jucelinospizza'>WhatsApp</a><br>Cupom: ...").addTo(map);
// Food Truck
//L.marker([-20.81681, -49.39585], {icon: foodTruckIcon}).bindPopup("<b>Temakeria</b><br/>Clique aqui<br> <a href='tel:1732376117'>Ligue agora</a><br/> <a href='https://whats.link/redecentral'>WhatsApp</a><br>Cupom: ...").addTo(map);
// Delivery
//L.marker([-20.82258, -49.40385], {icon: deliveryIcon}).bindPopup("<b>Restaurante</b><br/>Apenas delivery<br>Clique aqui<br> <a href='tel:1732376117'>Ligue agora</a><br/> <a href='https://whats.link/redecentral'>WhatsApp</a><br>Cupom: ...").addTo(map);


map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

map.locate({setView: true, maxZoom: 16});
map.on('click', onMapClick);


