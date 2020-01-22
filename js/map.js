function change(choice) {
    mapImage = document.getElementById("map");
    mapImage.src = "img/" + choice + ".png";
}

function change_back() {
    mapImage = document.getElementById("map");
    mapImage.src = "img/original.png";
}

jQuery(document).ready(function () {
    $('.title-blue').mouseout(function(){
        $("#map").attr('src', 'img/original.png');
    }),
    $('.title-blue').mouseover( function(){
        $("#map").attr('src', 'img/office.png');
    });
    $('.title-red').mouseout(function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
    }),
    $('.title-red').mouseover( function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png');
    });
    $('.title-green').mouseout(function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
    }),
    $('.title-green').mouseover( function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png');
    });	
    $('.title-yellow').mouseout(function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
    }),
    $('.title-yellow').mouseover( function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png');
    });
    $('.title-pink').mouseout(function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
    }),
    $('.title-pink').mouseover( function(){
        $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png');
    });	
});					