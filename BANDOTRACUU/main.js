// var mapView = new ol.View({
//     center: ol.proj.fromLonLat([0, 0]),
//     zoom: 8,
// });
// var map = new ol.Map({
//     target: "map",
//     view: mapView,
// });
// var osmTile = new ol.layer.Tile({
//     title: "open street map",
//     visible: true,
//     source: new ol.source.OSM()
// });
// map = addLayer(osmTile);
window.onload = init;

function init() {
    const map = new ol.Map({
        view: new ol.View({
            center: [0, 0],
            zoom: 2,
            maxZoom: 10,
            minZoom: 2,
            rotation: 0.5
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: "map",
    });
}