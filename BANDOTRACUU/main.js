// var projection = new ol.proj.Projection({
//     code: 'EPSG:3405',
//     units: 'm',
//     axisOrientation: 'neu'
// });
// var map = new ol.Map({
//     target: 'map',
//     layers: [hientrang, dghc],
//     view: new ol.View({
//         projection: projection
//     })
// });
var mapView = new ol.View({
    projection: 'EPSG:4326',
    center: [78.0, 23.0],
    zoom: 5,
});

// var mapView = new ol.View({
//     center: ol.proj.fromLonLat([78.0, 50.0]),
//     zoom: 5,
//     projection: 'EPSG:4326',
// });

var map = new ol.Map({
    target: "map",
    view: mapView,
});
var osmTile = new ol.layer.Tile({
    title: "open street map",
    visible: true,
    source: new ol.source.OSM()
});
map.addLayer(osmTile);

var htsdd = new ol.layer.Tile({

    title: "Hiện trạng sử dụng đất",
    source: new ol.source.TileWMS({
        url: "http://localhost:8080/geoserver/nhombaton/wms",
        params: {
            'LAYERS': 'nhombaton:vinhan_qhsdd',
            'TILED': true,
        },
        serverType: 'geoserver',
        visible: true,

    })
});

map.addLayer(htsdd);
// window.onload = init;

// function init() {
//     const map = new ol.Map({
//         view: new ol.View({
//             center: [0, 0],
//             zoom: 2,
//             maxZoom: 10,
//             minZoom: 2,
//             rotation: 0.5
//         }),
//         layers: [
//             new ol.layer.Tile({
//                 source: new ol.source.OSM()
//             })
//         ],
//         target: "map",
//     });
// }