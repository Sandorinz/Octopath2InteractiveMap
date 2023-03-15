//Sets the checkboxs on by default
document.getElementById("cityCheckbox").checked = true;
document.getElementById("townCheckbox").checked = true;
document.getElementById("routeCheckbox").checked = true;
document.getElementById("caveCheckbox").checked = true;
document.getElementById("mansionCheckbox").checked = true;
document.getElementById("shrineCheckbox").checked = true;
document.getElementById("ruinCheckbox").checked = true;
document.getElementById("forestCheckbox").checked = true;


var aboutText = "Interactive map for Octopath Traveler 2.";

function addAndRemoveParagraph() {
    const aboutListItem = document.querySelector(".sideNav li#about"); // Get a reference to the "About" li element
    const p = document.createElement("p"); // Create a new p element
    p.textContent = aboutText; // Add some text to it
    
    const sideNav = document.getElementsByClassName("sideNav")[0]; // Get a reference to the sideNav element
    
    if (sideNav.querySelector("#aboutText")) {
      // If the "aboutText" element exists, remove it
      sideNav.querySelector("#aboutText").remove();
    } else {
      // Insert the p element after the "About" li element
      aboutListItem.parentNode.insertBefore(p, aboutListItem.nextSibling);
      p.setAttribute("id", "aboutText");
    }
}

var sideNav = document.getElementById("sideNav");
var menuFlag = true;
function showMenu(){
    if (menuFlag){
        sideNav.classList.add("sideNavDisplay");
        menuFlag = false;
    }
    else{
        sideNav.classList.remove("sideNavDisplay");
        menuFlag = true;
    }

}




var mapOptions = {
    crs: L.CRS.Simple, 
    minZoom: -1.75,
    maxZoom: 1
}
  
var map = L.map('map', mapOptions);

var bounds = [[0,0], [3168, 5632]];
var image = L.imageOverlay('Media/Octopath II Map High Res.jpg', bounds).addTo(map);
map.fitBounds(bounds);

  
const iconScale = 113;

/*-------Icons------*/
{
var townIcon = L.icon({
    iconUrl: 'Media/Icons/town.png', 
    iconSize: [iconScale/2.2, iconScale/2.8]
});
var cityIcon = L.icon({
    iconUrl: 'Media/Icons/city pls look good.png', 
    iconSize: [iconScale/2.05, iconScale/2.2]
});
var routeIcon = L.icon({
    iconUrl: 'Media/Icons/zone.png', 
    iconSize: [iconScale/5, iconScale/5]
});
var caveIcon = L.icon({
    iconUrl: 'Media/Icons/cave.png', 
    iconSize: [iconScale/3.3, iconScale/3.3]
});
var ruinsIcon = L.icon({
    iconUrl: 'Media/Icons/ruins.png', 
    iconSize: [iconScale/3.3, iconScale/3.3]
});
var shrineIcon = L.icon({
    iconUrl: 'Media/Icons/shrine.png', 
    iconSize: [iconScale/4, iconScale/4]
});
var mansionIcon = L.icon({
    iconUrl: 'Media/Icons/mansion.png', 
    iconSize: [iconScale/3.3, iconScale/3.3]
});
var forestIcon = L.icon({
    iconUrl: 'Media/Icons/forest.png', 
    iconSize: [iconScale/3.3, iconScale/3.3]
});
}



/*------Hineouma Region-------*/ 
{
var ku = L.marker([600, 590], {icon: cityIcon});
ku.bindPopup("<b>Hinoeuma</b><br>City of Ku.");

var sai = L.marker([855, 1166], {icon: townIcon});
sai.bindPopup("<b>Hinoeuma</b><br>Town of Sai.");


//---------------Rename these later once I learn the real names------------------
var routeSouthOfKu = L.marker([420, 580], {icon: routeIcon});
var routeSouthEastOfKu = L.marker([450, 850], {icon: routeIcon});
var routeFarWestofSai = L.marker([820, 885], {icon: routeIcon});
var routeSouthofSai = L.marker([755, 1186], {icon: routeIcon});
var routeWestofSai = L.marker([835, 1066], {icon: routeIcon});
var routeNorthWestofSai = L.marker([900, 1066], {icon: routeIcon});
var routeNorthOfDesertShrine = L.marker([735, 1430], {icon: routeIcon});

var caveNorthOfSai = L.marker([980, 1100], {icon: caveIcon});
var caveEastOfSai = L.marker([805, 1310], {icon: caveIcon});
var caveNorthOfKu = L.marker([880, 820], {icon: caveIcon});

var ruinsEastOfKu = L.marker([450, 1015], {icon: ruinsIcon});
var desertShrine = L.marker([635, 1400], {icon: shrineIcon});
var mansionNorthOfShrine = L.marker([830, 1455], {icon: mansionIcon});
var mansionNorthOfKu = L.marker([650, 670], {icon: mansionIcon});
//Change this to house icon once I get one
var houseInFarNorth = L.marker([1200, 1470], {icon: townIcon});
var farNorthRoute = L.marker([1330, 1518], {icon: routeIcon});
}

/*------Western Forest Region-------*/
{
    var routeOnBorder = L.marker([1240, 550], {icon: routeIcon});
    var southForest = L.marker([1330, 525], {icon: forestIcon});
    var routeEastofForest = L.marker([1350, 630], {icon: routeIcon});
    var forestCity = L.marker([1485, 650], {icon: cityIcon});
    var southForestMansion = L.marker([1640, 545], {icon: mansionIcon});
    var northForestMansion = L.marker([1867, 617], {icon: mansionIcon});
    var northForst = L.marker([1505, 500], {icon: forestIcon});
    var forestNorthTown = L.marker([1780, 590], {icon: townIcon});
    var forestRouteToMansion = L.marker([1645, 620], {icon: routeIcon});
    var routeEastOfForestCity = L.marker([1490, 825], {icon: routeIcon});
    var routeNorthEastOfForestCity = L.marker([1665, 880], {icon: routeIcon});
    var forestShrine = L.marker([1750, 840], {icon: shrineIcon});
    var southForestCave = L.marker([1585, 1160], {icon: caveIcon});
    var routeNorthOfForestCave = L.marker([1700, 1160], {icon: routeIcon});
    var routeNorthOfForestCave2 = L.marker([1820, 1230], {icon: routeIcon});
    //-----------Change this to a house icon once I get one
    var forestNorthEastHouse =  L.marker([1820, 1080], {icon: townIcon});
    var routeNorthOfForestCave3 = L.marker([1980, 1145], {icon: routeIcon});
    var routeNorthOfForestCave4 = L.marker([2060, 1145], {icon: routeIcon});
    var veryNorthForest = L.marker([1980, 1020], {icon: forestIcon});
    var veryNorthForestButWest = L.marker([1960, 1270], {icon: forestIcon});
}




var cities = L.layerGroup([ku, forestCity]);
cities.addTo(map);


var towns = L.layerGroup([sai, forestNorthTown, forestNorthEastHouse, houseInFarNorth]);
towns.addTo(map);

var routes = L.layerGroup([routeEastofForest, routeFarWestofSai, 
    routeNorthOfDesertShrine, routeNorthWestofSai, routeOnBorder,
    routeSouthEastOfKu, routeSouthOfKu, routeSouthofSai, 
    routeWestofSai, forestRouteToMansion, routeEastOfForestCity,
    routeNorthEastOfForestCity, routeNorthOfForestCave, routeNorthOfForestCave2,
    routeNorthOfForestCave3, routeNorthOfForestCave4, farNorthRoute]);
routes.addTo(map);

var caves = L.layerGroup([caveEastOfSai, caveNorthOfKu, caveNorthOfSai,
    southForestCave]);
caves.addTo(map);

var mansions = L.layerGroup([mansionNorthOfKu, mansionNorthOfShrine, northForestMansion, 
    southForestMansion]);
mansions.addTo(map);

var shrines = L.layerGroup([desertShrine, forestShrine]);
shrines.addTo(map);

var ruins = L.layerGroup([ruinsEastOfKu]);
ruins.addTo(map);

var forests = L.layerGroup([southForest, northForst, veryNorthForest, 
    veryNorthForestButWest]);
forests.addTo(map);




function toggleCities(){
    if (document.getElementById("cityCheckbox").checked){
        cities.addTo(map);
    }
    else { cities.remove(); }
}
function toggleTowns(){
    if (document.getElementById("townCheckbox").checked){
        towns.addTo(map);
    }
    else { towns.remove(); }
}
function toggleRoutes(){
    if (document.getElementById("routeCheckbox").checked){
        routes.addTo(map);
    }
    else { routes.remove(); }
}
function toggleCaves(){
    if (document.getElementById("caveCheckbox").checked){
        caves.addTo(map);
    }
    else { caves.remove(); }
}
function toggleMansions(){
    if (document.getElementById("mansionCheckbox").checked){
        mansions.addTo(map);
    }
    else { mansions.remove(); }
}
function toggleShrines(){
    if (document.getElementById("shrineCheckbox").checked){
        shrines.addTo(map);
    }
    else { shrines.remove(); }
}
function toggleRuins(){
    if (document.getElementById("ruinCheckbox").checked){
        ruins.addTo(map);
    }
    else { ruins.remove(); }
}
function toggleForests(){
    if (document.getElementById("forestCheckbox").checked){
        forests.addTo(map);
    }
    else { forests.remove(); }
}




