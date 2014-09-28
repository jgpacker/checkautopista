var a = $.url().param("a");
var dataOSM;
var dataGeoJSON;

function getData() {
    $.getJSON('http://overpass-api.de/api/interpreter?data=[maxsize:1073741824][out:json][timeout:25];area(3601311341)->.area;(relation["ref"="' + a + '"](area.area);way(r);node(w););out;',
        function (response) {
            dataOSM = response;
            dataGeoJSON = osmtogeojson(dataOSM, uninterestingTags = {
                "source": true,
                "source_ref": true,
                "source:ref": true,
                "history": true,
                "attribution": true,
                "created_by": true,
                "converted_by": false,
                "tiger:county": true,
                "tiger:tlid": true,
                "tiger:upload_uuid": true
            });
            addData();
            $("div#feedback").html("Datos cargados.");
    });
}