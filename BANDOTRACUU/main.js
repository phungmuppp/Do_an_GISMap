var map = new ol.View({
  center: ol.proj.fromLonLat([0, 0]),
  zoom: 0,
});

// tao mot map
var map = new ol.Map({
  target: "map",
  view: map,
});

var OSM = new ol.layer.Tile({
  source: new ol.source.OSM(),
  visible: true,
  title: "OSM street map",
});

// map.addLayer(OSM);
// var overlays = new ol.layer.Tile({
//   title: "Overlays",
//   source: new ol.source.ImageWMS({
//     url: "http://localhost:8080/geoserver/testtoado/wms",
//     params: {
//       'LAYERS': "testtoado:ndc",
//       // TILED: true,
//     },
//     visible: true,
//   }),
// });
// map.addLayer(overlays);