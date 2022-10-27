var mapView = new ol.View({
    center: ol.proj.fromLonLat([0, 0]),
    zoom: 8,
});
var map = new ol.Map({
    target: "map",
    view: mapView,
});
var osmTile = new ol.layer.Tile({
    title: "open street map",
    visible: true,
    source: new ol.source.OSM()
});
map = addLayer(osmTile);