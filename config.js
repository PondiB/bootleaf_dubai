var config = {
	"title": "Bootleaf template map",
	"start": {
		// "maxZoom": 16,
		"center": [25.0416,55.2194],
		"zoom": 10,
		"attributionControl": false,
		"zoomControl": false
	},
	"about": {
		"title": "Dubai House Rates",
		"contents": "<p>This is an open-source version of the excellent <a href='https://github.com/bmcbride/bootleaf'>Bootleaf map </a>started by Bryan McBride.</p><p>It's designed for rapid web map development. See <a href='https://github.com/iag-geo/bootleaf'>https://github.com/iag-geo/bootleaf</a> for more information.</p><p>Chage this message in the config file</p>"
	},
	"controls": {
		"zoom": {
			"position": "topleft"
		},
		"leafletGeocoder": {
			//https://github.com/perliedman/leaflet-control-geocoder
			"collapsed": false,
			"position": "topleft",
			"placeholder": "Search for a location",
			"type": "OpenStreetMap", // OpenStreetMap, Google, ArcGIS
			//"suffix": "Australia", // optional keyword to append to every search
			//"key": "AIzaS....sbW_E", // when using the Google geocoder, include your Google Maps API key (https://developers.google.com/maps/documentation/geocoding/start#get-a-key)
		},
		"TOC": {
			//http://leafletjs.com/reference-1.0.2.html#control-layers-option
			"collapsed": false,
			"uncategorisedLabel": "Layers",
			"position": "topright",
			"toggleAll": true
		},
		"history": {
			"position": "bottomleft"
		},
		"bookmarks": {
			"position": "bottomright",
			"places": [
				{
				"latlng": [
					40.7916, -73.9924
				],
				"zoom": 12,
				"name": "Manhattan",
				"id": "a148fa354ba3",
				"editable": true,
				"removable": true
				}
			]
		}
	},
	// "activeTool": "identify", // options are identify/coordinates/queryWidget
	"basemaps": ['OpenStreetMap', 'esriDarkGray','esriGray' ,'esriStreets' , "Aerial"],
	"bing_key": "enter your Bing Maps key",
	"mapboxKey": "enter your MapBox key",
	// "defaultIcon": {
	// 	"imagePath": "http://leafletjs.com/examples/custom-icons/",
	// 	"iconUrl": "leaf-green.png",
	// 	"shadowUrl": "leaf-shadow.png",
	// 	"iconSize":     [38, 95],
	// 		"shadowSize":   [50, 64],
	// 		"iconAnchor":   [22, 94],
	// 		"shadowAnchor": [4, 62],
	// 		"popupAnchor":  [-3, -76]
	// },
	"tocCategories": [
		{
			"name": "GeoJSON layers",
			"layers": [ "Communities", ]
		},
		//{
		//	"name": "ArcGIS Layers",
		//	"layers" : ["trees", "counties", "railways", "us_states"]
		//},
		//{
		//	"name": "WMS/WFS layers",
		//	"layers": ["US_population", "countries"],
		//	"exclusive": false
		//}
	],
	"projections": [
		{4326: '+proj=longlat +ellps=GRS80 +datum=WGS84 +no_defs '}
	],
	"highlightStyle": {
		"weight": 2,
		"opacity": 1,
		"color": 'white',
		"dashArray": '3',
		"fillOpacity": 0.5,
		"fillColor": '#E31A1C',
		"stroke": true
	},
	"layers": [
	{
    "id": "Communities",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": true,
    "minZoom": 1,
    "url": "./data/Communities.geojson",
    "style": {
        "stroke": true,
        "fillColor": "#00FFFF",
        "fillOpacity": 0.5,
        "radius": 10,
        "weight": 0.5,
        "opacity": 1,
        "color": '#727272'
		  },
		  "queryWidget": {
			"queries" : [
				{"name": "AVG_RENT", "alias": "Average Rent"},
				{"name": "Community_", "alias": "Community"}
			]
		},
		"identify": {
			"layerName": "Communities",
			"buffer": 10,
			"outFields": [
				{"name": "AVG_RENT", "alias": "Average Rent"},
				{"name": "Community_", "alias": "Community"}
			]
		},
		"outFields": [
			{"name": "AVG_RENT", "alias": "Average Rent"},
			{"name": "Community_", "alias": "Community"},
		],
		  "visible": true,
		  // "label": {
		  // 	"name": "NAME",
		  // 	"minZoom": 14
		  // }
		},

		{
			"id": "US_population",
			"name": "US Population (WMS)",
			"type": "wmsTiledLayer",
			"url": "https://demo.geo-solutions.it/geoserver/wfs",
			"layers": "topp:states",
      "visible": false,
      "format": 'image/png',
      "transparent": true,
      "geomField": "the_geom",
      "queryWidget": {
				"queries" : [
					{"name": "STATE_NAME", "alias": "Name"},
					{"name": "STATE_ABBR", "alias": "Abbreviation"}
				]
			},
			"identify": {
				"layerName": "states",
				"buffer": 10,
				"outFields": [
					{"name": "STATE_NAME", "alias": "Name"},
					{"name": "STATE_ABBR", "alias": "Abbreviation"},
					{"name": "FAMILIES", "alias": "Num families", "thousands": true}
				]
			},
			"outFields": [
				{"name": "STATE_NAME", "alias": "Name X"},
				{"name": "STATE_ABBR", "alias": "Abbreviation"},
				{"name": "FAMILIES", "alias": "No. Families", "thousands": true},
				{"name": "LAND_KM", "alias": "sq. km", "thousands": true, "decimals": 1, "hidden": true},
			]
		},
	
	]
}
