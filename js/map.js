var locations = ["Playground" , "Offices" , "Industries" , "Houses" , "Villages"];
var search = document.querySelector("#submit-btn");
search.addEventListener("click" , function(){
	if(locations.includes(document.getElementById("location-input").value)){
		change(document.getElementById("location-input").value);
        document.getElementById("error").innerHTML="";
	}
	else {
		document.getElementById("error").innerHTML="THIS IS INVALID SEARCH.";
		change_back();
	}
});
/*
if (locations.includes(location.value))
{
	change(location.value);
}
else {
	alert("Entered Location Doesn't exist in map");
}*/
function change(choice) {
    mapImage = document.getElementById("map");
    mapImage.src = "img/" + choice + ".png";
}

function change_back() {
    mapImage = document.getElementById("map");
    mapImage.src = "img/Original.png";
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