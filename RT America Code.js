var urlPrefix = "http://www.roadtripamerica.com/mapcode/";
var urlPrefix2 = "http://www.roadtripamerica.com/maps/";
var rtadebuggingFlag = false;
var rtaOnMobileFlag = false;  // added 6/11/2015
var screenSize = 0;  // added 6/18/2015
var elevationChartOn = true;     // Added 6/19/2015; false if chart not supported.
var RTAMap = null;
var rtaRoutes = [];
var rtaRouteMarkers = [];
var rtaRtStartInfoWindows = [];
var rtaRtEndInfoWindows = [];
var rtaRtStartWindEditors = [];
var dbLDRteID = [];
var routeModeBool = false;
var rtaWaypts = [];
var rtaOptWayptsFlag = false;
var rta_calcRtArray = [];
var rtaPOIArray = [];
var currRTAMap = [];
currRTAMap[0] = [];
currRTAMap[0][0] = -2;
currRTAMap[0][1] = -1;
currRTAMap[0][2] = 0;
currRTAMap[1] = [];
currRTAMap[2] = [];
currRTAMap[1][0] = -2;
currRTAMap[2][0] = -2;
currRTAMap[3] = -2;
currRTAMap[4] = '';
var rtaMapArray = [];
var mapIsCurrentFlag = false;
var rtaRouteClickListener = null;
var rtaAddressClickListener = null;
var rtaOnceClickListener = null;
var rtaCursorRouteListener = null;
var rtaMapCircleClickListener = null;
var rtaMapDirectionsChangedListener = null;
var markerDragEndListeners = [];
var markerDragListeners = [];
var markerPOIDragEndListeners = [];
var currentRteMarker = 0;
var routeImage;
var routePath;
var rta_geocoder;
var directionsResultsArray = [];
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var rtaDeleteMarker = false;
var startRtLatLng = null;
var endRtLatLng = null;
var displayMarkerTitlesFlag = false;
var clickWayPt = false;
var clickForStartRt = false;
var clickForEndRt = false;
var inPlaceMarkerMode = false;
var getAddressFromPoint = false;
var vicinitySearchFlag = false;
var rtaDeleteMapFlag = false;
var rtaMapsNum = 0;
var rtaSearchRadius;
var searchOption1 = 1;
var searchOption2 = 1;
var searchRATypesNum;
var cannedKey = '';
var cannedSearchTerms = '';
var rtaApplyKeySearchFlag = false;
var side_bar_htmlArray = [];
var side_bar_route_htmlArray = [];
var calc_side_bar_route_htmlArray = [];
var ld_side_bar_db_infoArray = [];
var calc_side_bar_db_infoArray = [];
var side_bar_map_htmlArray = [];
var placeMarkerInfoOpen = [];
var poiSearchArray = [];
var searchMarkerInfoOpen = [];
var poiSearchEditors = [];
var search_poi_bar_htmlArray = [];
var rta_searchClose_Listener = [];
var calcSearchRtArray = [];
var calc_search_db_infoArray = [];
var search_calc_side_htmlArray = [];
var directionsSearchResultsArray = [];
var rta_SearchMapArray = [];
var side_bar_searchmap_htmlArray = [];
var ld_srch_side_route_htmlArray = [];
var ld_srch_side_db_infoArray = [];
var dbSrchLDRteID = [];
var rtaSearchLDRoutes = [];
var rtaSrchRouteMarkers = [];
var rtaSrchRtStInfoWindows = [];
var ldBoundsArray = [];
var searchMapBounds;
var zIndexCtr = 0;
var inMode = false;
var inDrawCircleMode = false;
var rtaCircleArray = [];
var rtaCircleDrawRadius = 100;
var mapOwner = rtaName;
var curraccess = 10;
var currCursor;
var aMillion = 1000000;
var rta_RACounter = 0;
var hasControls = true;
var showLatLng = false;
var rta_point1;
var rta_point2;
var rta_point3;
var rta_special_flag = false;
var rta_Copyright_Line = '<a href="http://www.roadtripamerica.com" target="_blank"><font size="1">&copy;' + rtaCurrentYear + ' RoadTrip America&reg; - All Rights Reserved</font><\/a>';
var rta_Date = new Date();
var rta_TimezoneOffset = rta_Date.getTimezoneOffset();
var rta_TimezoneOffsetStrng;
var rta_tzOffsetStrng;
var rtaTheCountryValue = [];
var rtaTheMCountryValue = [];
var rtaTheSearchCountryValue = [];
var rtaTheSearchMCountryValue = [];
var rta_RA_CountryArray = [];
rta_RA_CountryArray[0] = "USA";
rta_RA_CountryArray[1] = "Canada";
rta_RA_CountryArray[2] = "Mexico";
rta_RA_CountryArray[3] = "Greenland";
rta_RA_CountryArray[4] = " ";
var rta_CC1Value = [];
var rta_CC2Value = [];
var rta_CC3Value = [];
var rta_CC1SearchValue = [];
var rta_CC2SearchValue = [];
var rta_CC3SearchValue = [];
var rta_CountryCodeArray = [];
rta_CountryCodeArray[0] = "";
rta_CountryCodeArray[1] = "USA/Canada +1";
rta_CountryCodeArray[2] = "Mexico +52";
rta_CountryCodeArray[3] = "Greenland +299";
rta_CountryCodeArray[4] = "Guam +1671";
rta_CountryCodeArray[5] = "Puerto Rico +1787";
rta_CountryCodeArray[6] = "American Samoa +1684";
rta_CountryCodeArray[7] = "Virgin Islands, US +1340";
var rta_CCValueStringArray = [];
rta_CCValueStringArray[0] = "";
rta_CCValueStringArray[1] = "+1";
rta_CCValueStringArray[2] = "+52";
rta_CCValueStringArray[3] = "+299";
rta_CCValueStringArray[4] = "+1671";
rta_CCValueStringArray[5] = "+1787";
rta_CCValueStringArray[6] = "+1684";
rta_CCValueStringArray[7] = "+1340";
var rtaFlagImage = [];
var rtaTheTypeValue = [];
var rta_RA_TypesArray = [];
rta_RA_TypesArray[1] = "Museum";
rta_RA_TypesArray[2] = "Parks and Recreation";
rta_RA_TypesArray[3] = "Natural Wonder";
rta_RA_TypesArray[4] = "Historic Site";
rta_RA_TypesArray[5] = "Event";
rta_RA_TypesArray[6] = "Shopping";
rta_RA_TypesArray[7] = "Dining";
rta_RA_TypesArray[8] = "Roadside Attraction (other)";
rta_RA_TypesArray[9] = "Personal";
rta_RA_TypesArray[10] = "Lodging";
rta_RA_TypesArray[101] = "Museum";
rta_RA_TypesArray[102] = "Parks and Recreation";
rta_RA_TypesArray[103] = "Natural Wonder";
rta_RA_TypesArray[104] = "Historic Site";
rta_RA_TypesArray[105] = "Event";
rta_RA_TypesArray[106] = "Shopping";
rta_RA_TypesArray[107] = "Dining";
rta_RA_TypesArray[108] = "Roadside Attraction (other)";
rta_RA_TypesArray[110] = "Lodging";
var rtaPrintMap;
var mousemarker = null;
var chart = null;
var elevationService = null;
var elevations = null;
var elevationChartShown = false;   // Added 6/19/2015
var detectTheBrowser, rtamapInitialize, enterRteMode, exitRtePlaceMode, cancelThatAction, enterAddPlaceMode;
var addLDRouteToMap, addRtePt, makeNewRoute, delRoutePt, stopRoute, clearPoints, calcRoute, calcCoordRoute;
var calcAddressRoute, specifyStart, specifyEnd, startRoute, endRoute, makeWay, clearMap, rtAddPlace, addPlaceMarker;
var addMarkerToMap, rtaPOIObj, sidebarclick, sidebarrouteclick, refreshSidebar, refreshDrawnRouteSidebar, refreshCalcRouteSidebar;
var whenStartMarkerClicked, whenMarkerIsClicked, whenPOIMarkerIsDragged, whenMarkerDragged, whenMapZoomed, removeMarker, codeAddress;
var reverseCodeAddress, getRTAAddress, saveCalcRtData, saveLDRtData, downloadUrl, doNothing, showAllPOIs, parseXml, showLDRouteMarkers;
var showElevation, changeSearchRadius, rtaDistance, calcRTADist, updateRTADists, LatLngControl, showHideLatLng, metersToMiles, rta_CalcRoute;
var listCalcRts, showLineDrawnRoutes, listMaps, whenSearchMarkerIsClicked, changeSearchItems1, changeSearchItems2, hideCurrCalcRtMarker;
var refreshSearchSidebar, sidebardosearchcalcrouteclick, refreshAnySidebar, whenSrchStartMarkerClicked, getCalcSearchRouteArrayIndex;
var getLDRtesFromDB, erasePOISearchSidebar, updatePOIData, updateCalcRtData, convertTimezone, rtamapInitialize5, editCurrSearchPOI;
var whenSearchPOICloseMarkerIsClicked, whenSearchPOIMarkerIsDragged, saveNewQuikCalcRtData, downloadPostUrl, getMapByID, getPOIFromDB;
var rta_LatLngDistance, coordsToMarker, changeRA_Type, addPlaceMarkerFromLatLng, delLDRtData, delCalcRtDataB4Save;
var removeMapFromDb, changeCannedKey, changeSearchRATypes, getStartPointAndPOIs, closeChart, updateWaypoints, countMobileUsers, deleteLDRoute;
var removeLDRtFromDb;

function convertTimezone(offsetMins) {
    if (offsetMins === 0) {
        return ("+00:00");
    }
    var timeString;
    if (offsetMins < 0) {
        timeString = "-";
    } else {
        timeString = "+";
    }
    var rta_hours = Math.floor(offsetMins / 60);
    if (rta_hours < 0) {
        rta_hours = rta_hours * -1;
    }
    if (rta_hours === 0) {
        timeString += "00:";
    } else if ((rta_hours > 0) && (rta_hours < 10)) {
        timeString += "0" + (rta_hours) + ":";
    } else if ((rta_hours > 9) && (rta_hours < 100)) {
        timeString += (rta_hours) + ":";
    }
    var rta_minutes = offsetMins;
    if (rta_minutes < 0) {
        rta_minutes = rta_minutes * -1;
    }
    rta_minutes = rta_minutes - (60 * rta_hours);
    if (rta_minutes === 0) {
        timeString += "00";
        return (timeString);
    } else if ((rta_minutes > 0) && (rta_minutes < 10)) {
        timeString += "0" + (rta_minutes);
        return (timeString);
    } else if ((rta_minutes > 9) && (rta_minutes < 60)) {
        timeString += "" + rta_minutes;
        return (timeString);
    }
}

function removeChars(str) {
    str = str.replace(/\|+/g, " ");
    str = str.replace(/&{2,}/g, "&");
    return (str);
}

function trim(strng) {
    strng = strng.replace(/^\s+/, "");
    strng = strng.replace(/\s+$/, "");
    strng = strng.replace(/[ ]{2,}/gi, " ");
    strng = strng.replace(/\n /, "\n");
    return (strng);
}

function notUnvalid(anyString) {
    if (cannedKey !== '') {
        return (true);
    }
    if (anyString === null || anyString === "") {
        return (false);
    }
    if (anyString === " ") {
        return (false);
    }
    if (anyString.length < 3) {
        return (false);
    }
    return (true);
}

function restoreHTML(htmlStrng) {
    htmlStrng = htmlStrng.replace(/&lt;/g, "<");
    htmlStrng = htmlStrng.replace(/&gt;/g, ">");
    htmlStrng = htmlStrng.replace(/&quot;/g, '"');
    htmlStrng = htmlStrng.replace(/<br>/g, '<br />');
    htmlStrng = htmlStrng.replace(/Ã¢â‚¬â„¢/g, "'");
    htmlStrng = htmlStrng.replace(/&rsquo;/g, "'");
    htmlStrng = htmlStrng.replace(/Ã¢â‚¬Ëœ/g, "'");
    return (htmlStrng);
}

function countElevationUse() {
    var userType = 0;
    var theUrl;
    var theParms;
    var elevationChartType = 1;	// Desktop and tablets
    
    if (screenSize == 300) {	// Mobile phone
    	elevationChartType = 2;
    }
    
	theUrl = urlPrefix + "updatelevatyperta.php";
	theParms = "timezoneOffset=" + rta_tzOffsetStrng + "&elevattype=" + elevationChartType;
	downloadPostUrl(theUrl, theParms, function(data, responseCode) {
		if (rtadebuggingFlag) {
			if (responseCode === 200) {
				document.getElementById("messagelog").innerHTML += 'elevation chart data updated. Data = ' + data;
			} else {
				document.getElementById("messagelog").innerHTML += "Error in usage update (elevation chart used). responseCode = " + (responseCode);
			}
		}
	});
}


function getSamples(distance) {
    var sampleNum;
    sampleNum = Math.round(10 * distance);
    if (sampleNum <= 256) {
        sampleNum = 256;
    }
    if (sampleNum > 256) {
        sampleNum = 512;
    }
    return (sampleNum);
}

function plotElevation(elevResult, theStatus) {
    elevations = elevResult;
    var lengthNum = elevResult.length;
    var i;
    var path = [];
    var data;
    var meterData;
    var conFactor = 30.48;
    var chartHeight = 200;
    if (theStatus !== google.maps.ElevationStatus.OK) {
        alert(theStatus);
        closeChart();
        return;
    }
    for (i = 0; i < lengthNum; i++) {
        path.push(elevations[i].location);
    }
    data = new google.visualization.DataTable();
    data.addColumn('string', 'Sample');
    data.addColumn('number', 'Elevation');
    for (i = 0; i < lengthNum; i++) {
        feetData = ((elevations[i].elevation) * 100) / conFactor;
        feetData = Math.round(feetData);
        data.addRow(['', feetData]);
    }
    document.getElementById('chart_div').style.display = 'block';
    if (screenSize == 300) {
    	chartHeight = 150; // Adjust size for mobile phone
    }
    chart.draw(data, {
        width: screenSize,
        height: chartHeight,
        legend: 'none',
        titleY: 'Elevation (feet)',
        focusBorderColor: '#00FF00'
    });
    elevationChartShown = true;
    countElevationUse();
}

function sortSequence(distArray) {
    var i;
    var arLen = distArray.length;
    var newAr = [];
    var absMinVal = distArray[0];
    var currMinVal = 0;
    var absMaxVal = distArray[0];
    var testVal = 0;
    var currMinTest = 0;
    var theLIndex = 0;
    var currNewArIn = 0;
    for (i = 1; i < arLen; i++) {
        if (distArray[i] < absMinVal) {
            absMinVal = distArray[i];
            theLIndex = i;
        }
        if (distArray[i] > absMaxVal) {
            absMaxVal = distArray[i];
        }
    }
    currMinVal = absMinVal;
    newAr[currNewArIn] = theLIndex;
    currNewArIn += 1;
    for (i = (theLIndex + 1); i < arLen; i++) {
        if (distArray[i] == currMinVal) {
            newAr[currNewArIn] = i;
            currNewArIn += 1;
        }
    }
    while (currMinVal < absMaxVal) {
        currMinTest = (absMaxVal + 1) - currMinVal;
        for (i = 0; i < arLen; i++) {
            testVal = distArray[i] - currMinVal;
            if ((testVal > 0) && (testVal < currMinTest)) {
                currMinTest = testVal;
                theLIndex = i;
            }
        }
        currMinVal = distArray[theLIndex];
        newAr[currNewArIn] = theLIndex;
        currNewArIn += 1;
        for (i = (theLIndex + 1); i < arLen; i++) {
            if (distArray[i] == currMinVal) {
                newAr[currNewArIn] = i;
                currNewArIn += 1;
            }
        }
    }
    return (newAr);
}

function makeMapBoundsFromPoint(theLatLngSent) {
    var searchBounds;
    var sentLat = theLatLngSent.lat();
    var sentLng = theLatLngSent.lng();
    var boundLat = sentLat + 0.000001;
    var boundLng = sentLng + 0.000001;
    if (boundLng > 180.00) {
        boundLng = -(sentLng - 0.000001);
    }
    if (boundLat >= 90.00) {
        var fakeSW = new google.maps.LatLng(89.999998, 60.000000);
        var fakeNE = new google.maps.LatLng(89.999999, 60.000001);
        searchBounds = new google.maps.LatLngBounds(fakeSW, fakeNE);
    } else {
        searchNE = new google.maps.LatLng(boundLat, boundLng);
        searchBounds = new google.maps.LatLngBounds(theLatLngSent, searchNE);
    }
    return (searchBounds);
}

function getHTTPObject() {
    var xhr = false;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                xhr = false;
            }
        }
    }
    return xhr;
}

function LatLngControl(map) {
    this.ANCHOR_OFFSET_ = new google.maps.Point(8, 8);
    this.node_ = this.createHtmlNode_();
    map.controls[google.maps.ControlPosition.TOP].push(this.node_);
    this.setMap(map);
    this.set('visible', false);
}
LatLngControl.prototype = new google.maps.OverlayView();
LatLngControl.prototype.draw = function() {};
LatLngControl.prototype.createHtmlNode_ = function() {
    var divNode = document.createElement('div');
    divNode.id = 'latlng-control';
    divNode.index = 100;
    return divNode;
};
LatLngControl.prototype.visible_changed = function() {
    this.node_.style.display = this.get('visible') ? '' : 'none';
};
LatLngControl.prototype.updatePosition = function(latLng) {
    var projection = this.getProjection();
    var point = projection.fromLatLngToContainerPixel(latLng);
    this.node_.style.left = point.x + this.ANCHOR_OFFSET_.x + 'px';
    this.node_.style.top = point.y + this.ANCHOR_OFFSET_.y + 'px';
    this.node_.innerHTML = [latLng.toUrlValue(6), '<br/>'].join('');
};

function showHideLatLng() {
    showLatLng = !showLatLng;
}

function optimizeWaypoints() {
    rtaOptWayptsFlag = !rtaOptWayptsFlag;
}

function metersToMiles(numMeters) {
    return ((Math.round(numMeters * 100 / 2.54 / 12 / 5280 * 10)) / 10);
}

function makeArticleText(markerID) {
    window.open(urlPrefix2 + "makearticle.php?themarker=" + markerID);
}

function setMapIsCurrentFlag(value) {
    mapIsCurrentFlag = value;
}

function makeHTMLString(theIndex) {
    var rtaHtml;
    var theLatlng = rtaPOIArray[theIndex].theMarker.getPosition();
    var posStrg = theLatlng.toUrlValue(6) + "";
    var countryValue = rtaTheCountryValue[theIndex];
    var mCountryValue = rtaTheMCountryValue[theIndex];
    var theTextCountry = rta_RA_CountryArray[countryValue];
    var theTextMCountry = rta_RA_CountryArray[mCountryValue];
    var address1String = '';
    var address2String = '';
    var address3String = '';
    var cityStateZipCountryString = "";
    var displayMailingString = '';
    var maddress1String = '';
    var maddress2String = '';
    var maddress3String = '';
    var mcityStateZipCountryString = "";
    var mailingAddress = false;
    var thePhoto1String = "";
    var thePhoto1Title = '';
    var thePhotoCredNameTxt = '';
    var theDescCredNameTxt = '';
    var hasPhCredName = false;
    var hasDescCredName = false;
    var submitString = '';
    var editDeleteString = '';
    var photo1Text = rtaPOIArray[theIndex].thePhoto1;
    var link1Text = '';
    var link2Text = '';
    var link3Text = '';
    var moreLinks = false;
    var linksHeaderTxt = '';
    var ifyougoTxt = '';
    var emailAddress = '';
    if (rtaPOIArray[theIndex].theEmail !== '') {
        emailAddress = '<div>' + rtaPOIArray[theIndex].theEmail + '</div>';
    }
    if (rtaPOIArray[theIndex].theIfYouGo !== '') {
        ifyougoTxt = '<br /><div><b>If you go:</b><br />' + rtaPOIArray[theIndex].theIfYouGo + '</div>';
    }
    if ((rta_canSuggestRoute) && (rtaPOIArray[theIndex].theAccess === 10)) {
        submitString = '<a href="javascript:suggestPlace(' + (theIndex) + ')">' + 'Submit this to RTA<\/a><br/>';
    }
    var hasTeleNums = false;
    var phoneNumbersLabel = '';
    var phon1Txt = '';
    var phon2Txt = '';
    var phon3Txt = '';
    var phoneLabel1Txt = '';
    if (rtaPOIArray[theIndex].thePhoneLabel1 !== '') {
        phoneLabel1Txt = rtaPOIArray[theIndex].thePhoneLabel1 + '<br />';
    }
    var phoneLabel2Txt = '';
    if (rtaPOIArray[theIndex].thePhoneLabel2 !== '') {
        phoneLabel2Txt = rtaPOIArray[theIndex].thePhoneLabel2 + '<br />';
    }
    var phoneLabel3Txt = '';
    if (rtaPOIArray[theIndex].thePhoneLabel3 !== '') {
        phoneLabel3Txt = rtaPOIArray[theIndex].thePhoneLabel3 + '<br />';
    }
    var ccode1 = rta_CCValueStringArray[(rtaPOIArray[theIndex].thePhone11)];
    var acode1 = rtaPOIArray[theIndex].thePhone12;
    if (acode1 !== '') {
        acode1 = '(' + acode1 + ') ';
    }
    var phnum1 = rtaPOIArray[theIndex].thePhone13;
    var ext1 = '';
    if (rtaPOIArray[theIndex].thePhone14 !== '') {
        ext1 = ' ext. ' + rtaPOIArray[theIndex].thePhone14;
    }
    phon1Txt = '' + phoneLabel1Txt + ccode1 + ' ' + acode1 + phnum1 + ext1;
    if (phon1Txt !== ' ') {
        hasTeleNums = true;
        phon1Txt = '<div>' + phon1Txt + '</div><br />';
    }
    var ccode2 = rta_CCValueStringArray[(rtaPOIArray[theIndex].thePhone21)];
    var acode2 = rtaPOIArray[theIndex].thePhone22;
    if (acode2 !== '') {
        acode2 = '(' + acode2 + ') ';
    }
    var phnum2 = rtaPOIArray[theIndex].thePhone23;
    var ext2 = '';
    if (rtaPOIArray[theIndex].thePhone24 !== '') {
        ext2 = ' ext. ' + rtaPOIArray[theIndex].thePhone24;
    }
    phon2Txt = '' + phoneLabel2Txt + ccode2 + ' ' + acode2 + phnum2 + ext2;
    if (phon2Txt !== ' ') {
        hasTeleNums = true;
        phon2Txt = '<div>' + phon2Txt + '</div><br />';
    }
    var ccode3 = rta_CCValueStringArray[(rtaPOIArray[theIndex].thePhone31)];
    var acode3 = rtaPOIArray[theIndex].thePhone32;
    if (acode3 !== '') {
        acode3 = '(' + acode3 + ') ';
    }
    var phnum3 = rtaPOIArray[theIndex].thePhone33;
    var ext3 = '';
    if (rtaPOIArray[theIndex].thePhone34 !== '') {
        ext3 = ' ext. ' + rtaPOIArray[theIndex].thePhone34;
    }
    phon3Txt = '' + phoneLabel3Txt + ccode3 + ' ' + acode3 + phnum3 + ext3;
    if (phon3Txt !== ' ') {
        hasTeleNums = true;
        phon3Txt = '<div>' + phon3Txt + '</div><br />';
    }
    if (hasTeleNums) {
        phoneNumbersLabel = '<br /><div>Phone Numbers:</div><br />';
    }
    if (rtaPOIArray[theIndex].thePhotoTitle !== '') {
        thePhoto1Title = rtaPOIArray[theIndex].thePhotoTitle;
    }
    if (photo1Text !== '') {
        thePhoto1String = '<img src="' + photo1Text + '" width="200" alt="' + thePhoto1Title + '" /><br/>';
    }
    if (rtaPOIArray[theIndex].thePhotoCredit !== '') {
        hasPhCredName = true;
        thePhotoCredNameTxt = rtaPOIArray[theIndex].thePhotoCredit;
    }
    if (rtaPOIArray[theIndex].thePhotoCredURL !== '') {
        thePhotoCredNameTxt = '<div style="font-size: xx-small;" align="right">Photo by <a href="' + rtaPOIArray[theIndex].thePhotoCredURL + '" target="_blank">' + thePhotoCredNameTxt + '<\/a></div>';
    } else if (hasPhCredName) {
        thePhotoCredNameTxt = '<div style="font-size: xx-small;" align="right">Photo by ' + thePhotoCredNameTxt + '</div>';
    }
    if (rtaPOIArray[theIndex].theDescCredit !== '') {
        hasDescCredName = true;
        theDescCredNameTxt = rtaPOIArray[theIndex].theDescCredit;
    }
    if (rtaPOIArray[theIndex].theDescCredURL !== '') {
        theDescCredNameTxt = '<div style="font-size: xx-small;" align="right">Description by <a href="' + rtaPOIArray[theIndex].theDescCredURL + '" target="_blank">' + theDescCredNameTxt + '<\/a></div>';
    } else if (hasDescCredName) {
        theDescCredNameTxt = '<div style="font-size: xx-small;" align="right">Description by ' + theDescCredNameTxt + '</div>';
    }
    address1String = "";
    if (rtaPOIArray[theIndex].theAddress1 !== "") {
        address1String = rtaPOIArray[theIndex].theAddress1 + "<br />";
    }
    address2String = "";
    if (rtaPOIArray[theIndex].theAddress2 !== "") {
        address2String = rtaPOIArray[theIndex].theAddress2 + "<br />";
    }
    address3String = "";
    if (rtaPOIArray[theIndex].theAddress3 !== "") {
        address3String = rtaPOIArray[theIndex].theAddress3 + "<br />";
    }
    cityStateZipCountryString = "";
    if ((rtaPOIArray[theIndex].theCity !== "") || (rtaPOIArray[theIndex].theState !== "") || (rtaPOIArray[theIndex].theZip !== "") || (theTextCountry !== " ")) {
        cityStateZipCountryString = rtaPOIArray[theIndex].theCity + ' ' + rtaPOIArray[theIndex].theState + ' ' + rtaPOIArray[theIndex].theZip + ' ' + theTextCountry + "<br />";
    }
    maddress1String = "";
    if (rtaPOIArray[theIndex].theMAddress1 !== "") {
        maddress1String = rtaPOIArray[theIndex].theMAddress1 + "<br />";
        mailingAddress = true;
    }
    maddress2String = "";
    if (rtaPOIArray[theIndex].theMAddress2 !== "") {
        maddress2String = rtaPOIArray[theIndex].theMAddress2 + "<br />";
        mailingAddress = true;
    }
    maddress3String = "";
    if (rtaPOIArray[theIndex].theMAddress3 !== "") {
        maddress3String = rtaPOIArray[theIndex].theMAddress3 + "<br />";
        mailingAddress = true;
    }
    mcityStateZipCountryString = "";
    if ((rtaPOIArray[theIndex].theMCity !== "") || (rtaPOIArray[theIndex].theMState !== "") || (rtaPOIArray[theIndex].theMZip !== "") || (theTextMCountry !== " ")) {
        mcityStateZipCountryString = rtaPOIArray[theIndex].theMCity + ' ' + rtaPOIArray[theIndex].theMState + ' ' + rtaPOIArray[theIndex].theMZip + ' ' + theTextMCountry + "<br />";
        mailingAddress = true;
        if (mcityStateZipCountryString === '   USA<br />') {
            mcityStateZipCountryString = '';
            mailingAddress = false;
        }
    }
    if (mailingAddress) {
        displayMailingString = 'Mailing address:<br />';
    }
    if (hasControls) {
        editDeleteString = '</div><div><a href="javascript:editCurrPOI(' + (theIndex) + ')">' + 'Edit<\/a> ' + '&nbsp;&nbsp;&nbsp;<a href="javascript:removeMarkerInfoWindow(' + (theIndex) + ')">' + 'Remove<\/a><br/> ' + '' + submitString + posStrg + '<br /><a href="javascript:killPOI(' + (theIndex) + ')">' + 'Delete<\/a></div><br />';
    } else {
        editDeleteString = '</div><br />' + posStrg;
    }
    if (rtaPOIArray[theIndex].theLink1 !== '') {
        link1Text = '<div style="font-size: x-small;"><a href="' + rtaPOIArray[theIndex].theLink1 + '" target="_blank">' + rtaPOIArray[theIndex].theAnchor1 + '<\/a></div>';
        moreLinks = true;
    }
    if (rtaPOIArray[theIndex].theLink2 !== '') {
        link2Text = '<div style="font-size: x-small;"><a href="' + rtaPOIArray[theIndex].theLink2 + '" target="_blank">' + rtaPOIArray[theIndex].theAnchor2 + '<\/a></div>';
        moreLinks = true;
    }
    if (rtaPOIArray[theIndex].theLink3 !== '') {
        link3Text = '<div style="font-size: x-small;"><a href="' + rtaPOIArray[theIndex].theLink3 + '" target="_blank">' + rtaPOIArray[theIndex].theAnchor3 + '<\/a></div>';
        moreLinks = true;
    }
    if (moreLinks) {
        linksHeaderTxt = '<b>Links:</b><br />';
    }
    rtaHtml = '<p><b>' + (rtaPOIArray[theIndex].theName) + '</b></p>' + (thePhoto1String) + '' + (thePhotoCredNameTxt) + (theDescCredNameTxt) + '<div align="left"><br /><div>' + (rtaPOIArray[theIndex].theDescription) + '</div>' + (ifyougoTxt) + '<br/>' + (linksHeaderTxt) + (link1Text) + (link2Text) + (link3Text) + '<br />' + (address1String) + (address2String) + (address3String) + (cityStateZipCountryString) + '' + emailAddress + '<br />' + displayMailingString + maddress1String + maddress2String + maddress3String + mcityStateZipCountryString + '' + phoneNumbersLabel + phon1Txt + phon2Txt + phon3Txt + editDeleteString;
    return (rtaHtml);
}

function makeNewSearchHTML(newIndex, pricelineHotelSearchString) {
    var rtaSearchHtml;
    var countryValue = rtaTheSearchCountryValue[newIndex];
    var mCountryValue = rtaTheSearchMCountryValue[newIndex];
    var theTextCountry = rta_RA_CountryArray[countryValue];
    var theTextMCountry = rta_RA_CountryArray[mCountryValue];
    var address1String = '';
    var address2String = '';
    var address3String = '';
    var cityStateZipCountryString = "";
    var displayMailingString = '';
    var maddress1String = '';
    var maddress2String = '';
    var maddress3String = '';
    var mcityStateZipCountryString = "";
    var mailingAddress = false;
    var thePhoto1String = "";
    var thePhoto1Title = '';
    var thePhotoCredNameTxt = '';
    var theDescCredNameTxt = '';
    var hasPhCredName = false;
    var hasDescCredName = false;
    var theEditString = "";
    var theDeleteString = "";
    var theCopyrightString = "";
    var photo1Text = poiSearchArray[newIndex].thePhoto1;
    var link1Text = '';
    var link2Text = '';
    var link3Text = '';
    var moreLinks = false;
    var linksHeaderTxt = '';
    var ifyougoTxt = '';
    var emailAddress = '';
    var hasTeleNums = false;
    var phoneNumbersLabel = '';
    var phon1Txt = '';
    var phon2Txt = '';
    var phon3Txt = '';
    var phoneLabel1Txt = '';
    var phoneLabel2Txt = '';
    var phoneLabel3Txt = '';
    var ccode1;
    var acode1;
    var ccode2;
    var acode2;
    var ccode3;
    var acode3;
    var phnum1;
    var phnum2;
    var phnum3;
    var ext1 = '';
    var ext2 = '';
    var ext3 = '';
    var articleString = '';
    if (poiSearchArray[newIndex].theEmail !== '') {
        emailAddress = '<div>' + poiSearchArray[newIndex].theEmail + '</div>';
    }
    if (poiSearchArray[newIndex].theIfYouGo !== '') {
        ifyougoTxt = '<br /><div><b>If you go:</b><br />' + poiSearchArray[newIndex].theIfYouGo + '</div>';
    }
    if (poiSearchArray[newIndex].thePhoneLabel1 !== '') {
        phoneLabel1Txt = poiSearchArray[newIndex].thePhoneLabel1 + '<br />';
    }
    if (poiSearchArray[newIndex].thePhoneLabel2 !== '') {
        phoneLabel2Txt = poiSearchArray[newIndex].thePhoneLabel2 + '<br />';
    }
    if (poiSearchArray[newIndex].thePhoneLabel3 !== '') {
        phoneLabel3Txt = poiSearchArray[newIndex].thePhoneLabel3 + '<br />';
    }
    ccode1 = rta_CCValueStringArray[(poiSearchArray[newIndex].thePhone11)];
    acode1 = poiSearchArray[newIndex].thePhone12;
    if (acode1 !== '') {
        acode1 = '(' + acode1 + ') ';
    }
    phnum1 = poiSearchArray[newIndex].thePhone13;
    if (poiSearchArray[newIndex].thePhone14 !== '') {
        ext1 = ' ext. ' + poiSearchArray[newIndex].thePhone14;
    }
    phon1Txt = '' + phoneLabel1Txt + ccode1 + ' ' + acode1 + phnum1 + ext1;
    if (phon1Txt !== ' ') {
        hasTeleNums = true;
        phon1Txt = '<div>' + phon1Txt + '</div><br />';
    }
    ccode2 = rta_CCValueStringArray[(poiSearchArray[newIndex].thePhone21)];
    acode2 = poiSearchArray[newIndex].thePhone22;
    if (acode2 !== '') {
        acode2 = '(' + acode2 + ') ';
    }
    phnum2 = poiSearchArray[newIndex].thePhone23;
    if (poiSearchArray[newIndex].thePhone24 !== '') {
        ext2 = ' ext. ' + poiSearchArray[newIndex].thePhone24;
    }
    phon2Txt = '' + phoneLabel2Txt + ccode2 + ' ' + acode2 + phnum2 + ext2;
    if (phon2Txt !== ' ') {
        hasTeleNums = true;
        phon2Txt = '<div>' + phon2Txt + '</div><br />';
    }
    ccode3 = rta_CCValueStringArray[(poiSearchArray[newIndex].thePhone31)];
    acode3 = poiSearchArray[newIndex].thePhone32;
    if (acode3 !== '') {
        acode3 = '(' + acode3 + ') ';
    }
    phnum3 = poiSearchArray[newIndex].thePhone33;
    if (poiSearchArray[newIndex].thePhone34 !== '') {
        ext3 = ' ext. ' + poiSearchArray[newIndex].thePhone34;
    }
    phon3Txt = '' + phoneLabel3Txt + ccode3 + ' ' + acode3 + phnum3 + ext3;
    if (phon3Txt !== ' ') {
        hasTeleNums = true;
        phon3Txt = '<div>' + phon3Txt + '</div><br />';
    }
    if (hasTeleNums) {
        phoneNumbersLabel = '<br /><div>Phone Numbers:</div><br />';
    }
    if (poiSearchArray[newIndex].thePhotoTitle !== '') {
        thePhoto1Title = poiSearchArray[newIndex].thePhotoTitle;
    }
    if (photo1Text !== '') {
        thePhoto1String = '<img src="' + photo1Text + '" width="200" alt="' + thePhoto1Title + '" /><br/>';
    }
    if (poiSearchArray[newIndex].thePhotoCredit !== '') {
        hasPhCredName = true;
        thePhotoCredNameTxt = poiSearchArray[newIndex].thePhotoCredit;
    }
    if (poiSearchArray[newIndex].thePhotoCredURL !== '') {
        thePhotoCredNameTxt = '<div style="font-size: xx-small;" align="right">Photo by <a href="' + poiSearchArray[newIndex].thePhotoCredURL + '" target="_blank">' + thePhotoCredNameTxt + '<\/a></div>';
    } else if (hasPhCredName) {
        thePhotoCredNameTxt = '<div style="font-size: xx-small;" align="right">Photo by ' + thePhotoCredNameTxt + '</div>';
    }
    if (poiSearchArray[newIndex].theDescCredit !== '') {
        hasDescCredName = true;
        theDescCredNameTxt = poiSearchArray[newIndex].theDescCredit;
    }
    if (poiSearchArray[newIndex].theDescCredURL !== '') {
        theDescCredNameTxt = '<div style="font-size: xx-small;" align="right">Description by <a href="' + poiSearchArray[newIndex].theDescCredURL + '" target="_blank">' + theDescCredNameTxt + '<\/a></div>';
    } else if (hasDescCredName) {
        theDescCredNameTxt = '<div style="font-size: xx-small;" align="right">Description by ' + theDescCredNameTxt + '</div>';
    }
    address1String = "";
    if (poiSearchArray[newIndex].theAddress1 !== "") {
        address1String = poiSearchArray[newIndex].theAddress1 + "<br />";
    }
    address2String = "";
    if (poiSearchArray[newIndex].theAddress2 !== "") {
        address2String = poiSearchArray[newIndex].theAddress2 + "<br />";
    }
    address3String = "";
    if (poiSearchArray[newIndex].theAddress3 !== "") {
        address3String = poiSearchArray[newIndex].theAddress3 + "<br />";
    }
    cityStateZipCountryString = "";
    if ((poiSearchArray[newIndex].theCity !== "") || (poiSearchArray[newIndex].theState !== "") || (poiSearchArray[newIndex].theZip !== "") || (theTextCountry !== " ")) {
        cityStateZipCountryString = poiSearchArray[newIndex].theCity + ' ' + poiSearchArray[newIndex].theState + ' ' + poiSearchArray[newIndex].theZip + ' ' + theTextCountry + "<br />";
    }
    maddress1String = "";
    if (poiSearchArray[newIndex].theMAddress1 !== "") {
        maddress1String = poiSearchArray[newIndex].theMAddress1 + "<br />";
        mailingAddress = true;
    }
    maddress2String = "";
    if (poiSearchArray[newIndex].theMAddress2 !== "") {
        maddress2String = poiSearchArray[newIndex].theMAddress2 + "<br />";
        mailingAddress = true;
    }
    maddress3String = "";
    if (poiSearchArray[newIndex].theMAddress3 !== "") {
        maddress3String = poiSearchArray[newIndex].theMAddress3 + "<br />";
        mailingAddress = true;
    }
    mcityStateZipCountryString = "";
    if ((poiSearchArray[newIndex].theMCity !== "") || (poiSearchArray[newIndex].theMState !== "") || (poiSearchArray[newIndex].theMZip !== "") || (theTextMCountry !== " ")) {
        mcityStateZipCountryString = poiSearchArray[newIndex].theMCity + ' ' + poiSearchArray[newIndex].theMState + ' ' + poiSearchArray[newIndex].theMZip + ' ' + theTextMCountry + "<br />";
        mailingAddress = true;
        if (mcityStateZipCountryString === '   USA<br />') {
            mcityStateZipCountryString = '';
            mailingAddress = false;
        }
    }
    if (mailingAddress) {
        displayMailingString = 'Mailing address:<br />';
    }
    if (poiSearchArray[newIndex].theLink1 !== '') {
        link1Text = '<div style="font-size: x-small;"><a href="' + poiSearchArray[newIndex].theLink1 + '" target="_blank">' + poiSearchArray[newIndex].theAnchor1 + '<\/a></div>';
        moreLinks = true;
    }
    if (poiSearchArray[newIndex].theLink2 !== '') {
        link2Text = '<div style="font-size: x-small;"><a href="' + poiSearchArray[newIndex].theLink2 + '" target="_blank">' + poiSearchArray[newIndex].theAnchor2 + '<\/a></div>';
        moreLinks = true;
    }
    if (poiSearchArray[newIndex].theLink3 !== '') {
        link3Text = '<div style="font-size: x-small;"><a href="' + poiSearchArray[newIndex].theLink3 + '" target="_blank">' + poiSearchArray[newIndex].theAnchor3 + '<\/a></div>';
        moreLinks = true;
    }
    if (moreLinks) {
        linksHeaderTxt = '<b>Links:</b><br />';
    }
    if (poiSearchArray[newIndex].theAccess === 22) {
        theCopyrightString = "" + rta_Copyright_Line;
    }
    if (rtaMapBlesser && hasControls && (rta_Maptype !== "wizard")) {
        theEditString = '<a href="javascript:editCurrSearchPOI(' + (newIndex) + ')">' + 'Edit<\/a> &nbsp;&nbsp;&nbsp;';
        theDeleteString = '<a href="javascript:killSearchPOI(' + (newIndex) + ')">' + 'Delete<\/a> <br />';
        if (poiSearchArray[newIndex].theAccess == 22) {
            articleString = '<a href="javascript:makeArticleText(' + (poiSearchArray[newIndex].dbPOIID) + ')">' + ' Article Text<\/a>&nbsp;&nbsp;&nbsp;';
        }
    }
    rtaSearchHtml = '<p><b>' + (poiSearchArray[newIndex].theName) + '</b></p>' + (thePhoto1String) + '' + (thePhotoCredNameTxt) + (theDescCredNameTxt) + '<div align="left"><br /><div>' + (poiSearchArray[newIndex].theDescription) + '</div>' + (ifyougoTxt) + (pricelineHotelSearchString) + '<br/>' + (linksHeaderTxt) + (link1Text) + (link2Text) + (link3Text) + '<br />' + (address1String) + (address2String) + (address3String) + (cityStateZipCountryString) + '' + emailAddress + '<br />' + displayMailingString + maddress1String + maddress2String + maddress3String + mcityStateZipCountryString + '' + phoneNumbersLabel + phon1Txt + phon2Txt + phon3Txt + '</div><div>' + theEditString + articleString + '<a href="javascript:removeSearchMarkerInfoWindow(' + (newIndex) + ')">' + 'Remove<\/a><br/> ' + '' + (poiSearchArray[newIndex].theLat) + ", " + (poiSearchArray[newIndex].theLng) + '<br />' + theDeleteString + theCopyrightString + '</div>';
    return rtaSearchHtml;
}

function findClosestCity(myCities, newIndex) {
    var i;
    var numCities = myCities.length;
    var limitDist = 110;
    var currDist;
    var currBest = 115;
    var theClosest;
    var theRALat = parseFloat(poiSearchArray[newIndex].theLat);
    var theRALng = parseFloat(poiSearchArray[newIndex].theLng);
    for (i = 0; i < numCities; i++) {
        currDist = rtaDistance(theRALat, theRALng, myCities[i].getAttribute("latit"), myCities[i].getAttribute("longit"));
        if (currDist < currBest) {
            theClosest = i;
            currBest = currDist;
        }
    }
    if (currBest < limitDist) {
        return (theClosest);
    } else {
        return (-5);
    }
}

function findPricelineCity(newIndex, updateFlag) {
    var theRALat = parseFloat(poiSearchArray[newIndex].theLat);
    var theRALng = parseFloat(poiSearchArray[newIndex].theLng);
    var maxLat = theRALat + 1.5;
    var maxLng = theRALng + 1.5;
    var minLat = theRALat - 1.5;
    var minLng = theRALng - 1.5;
    var tempHold;
    var pricelineHotelSearchString;
    var linkString;
    var theRTASearchHTML;
    var i = -1;
    if (poiSearchArray[newIndex].theAccess != 22) {
        pricelineHotelSearchString = '';
        theRTASearchHTML = makeNewSearchHTML(newIndex, pricelineHotelSearchString);
        poiSearchArray[newIndex].theHTML = theRTASearchHTML;
        poiSearchArray[newIndex].theInfowindow = new google.maps.InfoWindow({
            content: (poiSearchArray[newIndex].theHTML),
            maxWidth: 220
        });
        return;
    }
    if (maxLat < minLat) {
        tempHold = maxLat;
        maxLat = minLat;
        minLat = tempHold;
    }
    if (maxLng < minLng) {
        tempHold = maxLng;
        maxLng = minLng;
        minLng = tempHold;
    }
    var theUrl = urlPrefix + "ajusersrchplcityrta.php";
    var theParms = "minlat=" + (minLat) + "&maxlat=" + (maxLat) + "&minlng=" + (minLng) + "&maxlng=" + (maxLng);
    downloadPostUrl(theUrl, theParms, function(data) {
        var xml = parseXml(data);
        var myCities = xml.documentElement.getElementsByTagName("city");
        var numCities = myCities.length;
        var windOpt;
        if (numCities == 0) {
            pricelineHotelSearchString = '';
            theRTASearchHTML = makeNewSearchHTML(newIndex, pricelineHotelSearchString);
        }
        i = findClosestCity(myCities, newIndex);
        if (i < 0) {
            pricelineHotelSearchString = '';
            theRTASearchHTML = makeNewSearchHTML(newIndex, pricelineHotelSearchString);
        } else {
            linkString = 'http://reservations.roadtripamerica.com/city/?refid=4051&rs_cid=' + myCities[i].getAttribute("cityid") + '&rs_lat=' + theRALat + '&rs_lng=' + theRALng + '&rs_lmark=' + encodeURIComponent(poiSearchArray[newIndex].theName);
            pricelineHotelSearchString = '<br /><div><a href="' + linkString + '" target="_blank"><img src="http://www.roadtripamerica.com/maps/sfnh150.png"' + ' alt="Search for Nearby Hotels" width="180" height="27" border="0" /><\/a></div>';
            theRTASearchHTML = makeNewSearchHTML(newIndex, pricelineHotelSearchString);
        }
        if (updateFlag) {
            poiSearchArray[newIndex].theHTML = theRTASearchHTML;
            google.maps.event.clearInstanceListeners(poiSearchArray[newIndex].theInfowindow);
            poiSearchArray[newIndex].theInfowindow.setContent(theRTASearchHTML);
            windOpt = {
                maxWidth: 220
            };
            poiSearchArray[newIndex].theInfowindow.setOptions(windOpt);
            poiSearchArray[newIndex].theInfowindow.open(RTAMap, poiSearchArray[newIndex].theMarker);
            search_poi_bar_htmlArray[newIndex] = '<a href="javascript:searchsidebarclick(' + (newIndex) + ')">' + (newIndex + 1) + '<\/a> ' + textName + '<br />';
            poiSearchArray[newIndex].theMarker.setDraggable(false);
            refreshAnySidebar("poi_results", search_poi_bar_htmlArray, "RoadTrip Attractions<br/>");
        } else {
            poiSearchArray[newIndex].theHTML = theRTASearchHTML;
            poiSearchArray[newIndex].theInfowindow = new google.maps.InfoWindow({
                content: (poiSearchArray[newIndex].theHTML),
                maxWidth: 220
            });
        }
    });
}

function drawRtFromPts(rtIndex) {
    var i;
    var rtBounds;
    var numOver;
    var thePolyOptions = {
        map: RTAMap,
        strokeColor: '#0055EE',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        path: rta_calcRtArray[rtIndex].rtLatLngs
    };
    if (currRTAMap[0][2] === 1) {
        rta_calcRtArray[rtIndex].polyline = new google.maps.Polyline(thePolyOptions);
        rta_calcRtArray[rtIndex].polyline.setMap(RTAMap);
    }
    numOver = rta_calcRtArray[rtIndex].rtOverview.length;
    rtBounds = new google.maps.LatLngBounds();
    for (i = 1; i < numOver; i++) {
        rtBounds.extend(rta_calcRtArray[rtIndex].rtOverview[i]);
    }
    RTAMap.fitBounds(rtBounds);
    rta_calcRtArray[rtIndex].rtBounds = rtBounds;
    rta_calcRtArray[rtIndex].rtInfowindow.open(RTAMap, rta_calcRtArray[rtIndex].startMarker);
}

function cancelEditCalcRt(calcIndex) {
    rta_calcRtArray[calcIndex].rtInfowindow.close();
    var oldHTML = rta_calcRtArray[calcIndex].theHTML;
    rta_calcRtArray[calcIndex].rtInfowindow.setContent(oldHTML);
    var windOpt = {
        maxWidth: 220
    };
    rta_calcRtArray[calcIndex].rtInfowindow.setOptions(windOpt);
    rta_calcRtArray[calcIndex].rtInfowindow.open(RTAMap, rta_calcRtArray[calcIndex].startMarker);
    google.maps.event.clearInstanceListeners(rta_calcRtArray[calcIndex].rtInfowindow);
}

function editCalcRtWind(calcIndex) {
    rta_calcRtArray[calcIndex].rtInfowindow.close();
    var theTextName = rta_calcRtArray[calcIndex].name;
    var textDescription = rta_calcRtArray[calcIndex].description;
    var textKeywords = rta_calcRtArray[calcIndex].keywords;
    var newRtaHtml = "<table>" + '<tr><td>Title:</td> <td><input type="text" id="rtname" value="' + (theTextName) + '"/></td> </tr>' + '<tr><td>Description:</td> <td><textarea id="calcrtdescription" rows="20" cols="40">' + (textDescription) + '</textarea></td> </tr>' + '<tr><td>Keywords:</td> <td><input type="text" id="rttype" value="' + (textKeywords) + '"/></td> </tr>' + '<tr><td><a href="javascript:cancelEditCalcRt(' + calcIndex + ')">' + 'Cancel' + '<\/a></td>' + '<td><a href="javascript:updateCalcRtData(' + calcIndex + ')">' + "Save Changes" + '<\/a></td></tr>' + '<tr><td></td><td>' + (rta_Copyright_Line) + '</td> </tr>' + "</table><br />";
    var windOpt = {
        maxWidth: 500
    };
    rta_calcRtArray[calcIndex].rtInfowindow.setOptions(windOpt);
    rta_calcRtArray[calcIndex].rtInfowindow.setContent(newRtaHtml);
    rta_calcRtArray[calcIndex].rtInfowindow.open(RTAMap, rta_calcRtArray[calcIndex].startMarker);
    google.maps.event.addListenerOnce(rta_calcRtArray[calcIndex].rtInfowindow, "closeclick", function() {
        cancelEditCalcRt(calcIndex);
    });
}

function rta_CalcRoute(response, theIndex, db_id_value) {
    var numRoutes = (response.routes.length) - 1;
    var endNumLegs = (response.routes[numRoutes].legs.length) - 1;
    var endNumSteps = (response.routes[numRoutes].legs[endNumLegs].steps.length) - 1;
    var autoStartLat = response.routes[0].legs[0].steps[0].start_location.lat();
    var autoStartLng = response.routes[0].legs[0].steps[0].start_location.lng();
    var autoEndLat = response.routes[numRoutes].legs[endNumLegs].steps[endNumSteps].end_location.lat();
    var autoEndLng = response.routes[numRoutes].legs[endNumLegs].steps[endNumSteps].end_location.lng();
    var theTotalDistance = 0;
    var i;
    var j;
    var k;
    var distanceCalc;
    var iconIndex;
    var intStrng;
    var marker;
    var rtaHtml = '';
    var totalRtArray = [];
    var overviewArray = [];
    for (i = 0; i < response.routes[0].legs.length; i++) {
        theTotalDistance += response.routes[0].legs[i].distance.value;
        for (j = 0; j < response.routes[0].legs[i].steps.length; j++) {
            for (k = 0; k < response.routes[0].legs[i].steps[j].path.length; k++) {
                totalRtArray.push(response.routes[0].legs[i].steps[j].path[k]);
            }
        }
    }
    for (i = 0; i < response.routes[0].overview_path.length; i++) {
        overviewArray.push(response.routes[0].overview_path[i]);
    }
    this.rtLatLngs = totalRtArray;
    this.rtOverview = overviewArray;
    this.newField = 1;
    distanceCalc = metersToMiles(theTotalDistance);
    this.theDistance = distanceCalc;
    if ((db_id_value === -1) && (rta_canSaveRoute)) {
        this.theOwner = rtaName;
    }
    if ((db_id_value === -1) && (!rta_canSaveRoute)) {
        this.theOwner = '';
    }
    this.dbID = db_id_value;
    if (db_id_value === -1) {
        this.name = "";
        this.description = "";
        this.keywords = "";
    }
    this.startDist1 = Math.round(rtaDistance(autoStartLat, autoStartLng, rta_point1.lat(), rta_point1.lng()));
    this.startDist2 = Math.round(rtaDistance(autoStartLat, autoStartLng, rta_point2.lat(), rta_point2.lng()));
    this.startDist3 = Math.round(rtaDistance(autoStartLat, autoStartLng, rta_point3.lat(), rta_point3.lng()));
    this.endDist1 = Math.round(rtaDistance(autoEndLat, autoEndLng, rta_point1.lat(), rta_point1.lng()));
    this.endDist2 = Math.round(rtaDistance(autoEndLat, autoEndLng, rta_point2.lat(), rta_point2.lng()));
    this.endDist3 = Math.round(rtaDistance(autoEndLat, autoEndLng, rta_point3.lat(), rta_point3.lng()));
    var markerPosition = new google.maps.LatLng(autoStartLat, autoStartLng);
    this.startLatLng = markerPosition;
    this.endLatLng = new google.maps.LatLng(autoEndLat, autoEndLng);
    this.waypoints = [];
    for (i = 0; i < (rtaWaypts.length); i++) {
        this.waypoints[i] = rtaWaypts[i].location;
    }
    iconIndex = (theIndex % 20) + 1;
    intStrng = "";
    if (iconIndex < 10) {
        intStrng = '0';
    }
    marker = new google.maps.Marker({
        position: markerPosition,
        map: RTAMap,
        visible: true,
        title: ((theIndex + 1) + ""),
        zIndex: zIndexCtr,
        icon: (urlPrefix + "mapicons/teal" + intStrng + (iconIndex) + ".png"),
        draggable: false
    });
    zIndexCtr += 1;
    this.startMarker = marker;
    if (currRTAMap[0][2] === 1) {
        if (calc_side_bar_db_infoArray[theIndex]) {
            if (calc_side_bar_db_infoArray[theIndex].name === "") {
                calc_side_bar_db_infoArray[theIndex].name = "No name";
            }
            if (calc_side_bar_db_infoArray[theIndex].description === "") {
                calc_side_bar_db_infoArray[theIndex].description = "No description";
            }
            this.name = calc_side_bar_db_infoArray[theIndex].name;
            this.description = calc_side_bar_db_infoArray[theIndex].description;
            this.keywords = calc_side_bar_db_infoArray[theIndex].keywords;
        }
        if (db_id_value === -1) {
            if (rta_Maptype === "mapcenter") {
                rtaHtml = "<table>" + '<tr><td>Route name:</td> <td><input type="text" id="rtname"/> </td> </tr>' + '<tr><td>Description:</td> <td><textarea id="calcrtdescription" rows="20" cols="40"></textarea></td> </tr>' + '<tr><td>Keywords:</td> <td><input type="text" id="rttype"/></td> </tr>' + '<tr><td>Distance: </td> <td>' + (distanceCalc) + ' mi</td> </tr></table>' + '<br /><a href="javascript:delCalcRtDataB4Save(' + (theIndex) + ')">' + 'Delete Route' + '<\/a>&nbsp;&nbsp;&nbsp;' + '<a href="javascript:saveCalcRtData(' + (theIndex) + ')">' + "Save" + '<\/a><br /><br />';
                document.getElementById("message").innerHTML = "Please save or delete the route.";
                this.theHTML = rtaHtml;
            }
        } else if (rta_Maptype === "mapcenter") {
            rtaHtml = calc_side_bar_db_infoArray[theIndex].name + "<br />" + calc_side_bar_db_infoArray[theIndex].description + "<br />" + "Distance: " + distanceCalc + " mi<br />" + '<table><tr><td><a href="javascript:hideCalcRtAndMarker(' + theIndex + ')">' + "Hide Route" + '<\/a>&nbsp;&nbsp;</td>' + '<td><a href="javascript:editCalcRtWind(' + theIndex + ')">' + "Edit" + '<\/a>&nbsp;&nbsp;</td>' + '<td><a href="javascript:deleteCalcRt(' + (theIndex) + ')">Delete Route<\/a></td></tr>' + "</table> <br /><br />";
            this.theHTML = rtaHtml;
        }
    } else if (currRTAMap[0][2] === 2) {
        rtaHtml = calc_search_db_infoArray[theIndex].name + "<br />" + calc_search_db_infoArray[theIndex].description + "<br />" + "<table><tr><td>Distance: " + distanceCalc + " mi</td> </tr>" + '<tr><td><a href="javascript:hideCalcRtAndMarker(' + theIndex + ')">' + "Hide Route" + '<\/a></td>' + '<tr><td>' + rta_Copyright_Line + '</td></tr>' + "</table>";
        this.theHTML = rtaHtml;
    }
    this.rtInfowindow = new google.maps.InfoWindow({
        content: (rtaHtml)
    });
}

function rta_NewCalcRoute(pointsInfo, rtIndex) {
    var latptsArray = [];
    var lngptsArray = [];
    var overlatptsArray = [];
    var overlngptsArray = [];
    var i;
    var numPts;
    var startPosition;
    var iconIndex;
    var intStrng;
    var marker;
    var rtaHtml;
    if (pointsInfo.rtaNewField !== 1) {
        if (rtadebuggingFlag) {
            alert('Error: data mismatch between old and new route format.');
        }
        document.getElementById("message").innerHTML = 'Error: data mismatch between old and new route format (NewField !==1).';
        return;
    }
    latptsArray = pointsInfo.latString.split(",");
    lngptsArray = pointsInfo.lngString.split(",");
    overlatptsArray = pointsInfo.overlatString.split(",");
    overlngptsArray = pointsInfo.overlngString.split(",");
    this.rtLatLngs = [];
    this.rtBounds = 0;
    numPts = latptsArray.length;
    for (i = 0; i < numPts; i++) {
        this.rtLatLngs[i] = new google.maps.LatLng(latptsArray[i], lngptsArray[i]);
    }
    numPts = overlatptsArray.length;
    this.rtOverview = [];
    for (i = 0; i < numPts; i++) {
        this.rtOverview[i] = new google.maps.LatLng(overlatptsArray[i], overlngptsArray[i]);
    }
    this.newField = 1;
    this.theDistance = calc_side_bar_db_infoArray[rtIndex].distance;
    this.name = calc_side_bar_db_infoArray[rtIndex].name;
    this.description = calc_side_bar_db_infoArray[rtIndex].description;
    this.keywords = calc_side_bar_db_infoArray[rtIndex].keywords;
    this.dbID = calc_side_bar_db_infoArray[rtIndex].theID;
    this.owner = calc_side_bar_db_infoArray[rtIndex].owner;
    this.access = calc_side_bar_db_infoArray[rtIndex].access;
    this.polyline = 0;
    startPosition = new google.maps.LatLng(calc_side_bar_db_infoArray[rtIndex].startlat, calc_side_bar_db_infoArray[rtIndex].startlng);
    this.startLatLng = startPosition;
    this.endLatLng = new google.maps.LatLng(calc_side_bar_db_infoArray[rtIndex].endlat, calc_side_bar_db_infoArray[rtIndex].endlng);
    iconIndex = (rtIndex % 20) + 1;
    intStrng = "";
    if (iconIndex < 10) {
        intStrng = '0';
    }
    marker = new google.maps.Marker({
        position: startPosition,
        map: RTAMap,
        visible: true,
        title: ((rtIndex + 1) + ""),
        zIndex: zIndexCtr,
        icon: (urlPrefix + "mapicons/teal" + intStrng + (iconIndex) + ".png"),
        draggable: false
    });
    zIndexCtr += 1;
    this.startMarker = marker;
    if (currRTAMap[0][2] === 1) {
        rtaHtml = calc_side_bar_db_infoArray[rtIndex].name + "<br />" + calc_side_bar_db_infoArray[rtIndex].description + "<br />" + "Distance: " + calc_side_bar_db_infoArray[rtIndex].distance + " mi<br />" + '<table><tr><td><a href="javascript:hideCalcRtAndMarker(' + rtIndex + ')">' + "Hide Route" + '<\/a>&nbsp;&nbsp;</td>' + '<td><a href="javascript:editCalcRtWind(' + rtIndex + ')">' + "Edit" + '<\/a>&nbsp;&nbsp;</td>' + '<td><a href="javascript:deleteCalcRt(' + (rtIndex) + ')">Delete Route<\/a></td></tr>' + "</table> <br />";
        this.theHTML = rtaHtml;
    } else if (currRTAMap[0][2] === 2) {
        rtaHtml = calc_search_db_infoArray[rtIndex].name + "<br />" + calc_search_db_infoArray[rtIndex].description + "<br />" + "<table><tr><td>Distance: " + calc_search_db_infoArray[rtIndex].distance + " mi</td> </tr>" + '<tr><td><a href="javascript:hideCalcRtAndMarker(' + rtIndex + ')">' + "Hide Route" + '<\/a></td>' + '<tr><td>' + rta_Copyright_Line + '</td></tr>' + "</table>";
        this.theHTML = rtaHtml;
    }
    this.rtInfowindow = new google.maps.InfoWindow({
        content: (rtaHtml)
    });
}

function countMobileUsers() {
    var mobileType = 0;
    var theUrl;
    var theParms;
    var browsebrick = navigator.userAgent;
    
    if (browsebrick.indexOf('iPhone') !== -1) {
    	mobileType = 1;
    }
    
    if (browsebrick.indexOf('Android') !== -1) {
    	mobileType = 2;
	}
    if (mobileType > 0) {
        theUrl = urlPrefix + "updatmobiltyperta.php";
        theParms = "timezoneOffset=" + rta_tzOffsetStrng + "&mobiletype=" + mobileType;
        downloadPostUrl(theUrl, theParms, function(data, responseCode) {
            if (rtadebuggingFlag) {
                if (responseCode === 200) {
                    document.getElementById("messagelog").innerHTML += 'mobileType updated. Data = ' + data;
                } else {
                    document.getElementById("messagelog").innerHTML += "Error in usage update (countMobileUsers). responseCode = " + (responseCode);
                }
            }
        });
    }
}

function detectTheBrowser() {
    var browsebrick = navigator.userAgent;
    var mapdiv;
    mapdiv = document.getElementById("map_canvas");
    if (browsebrick.indexOf('iPhone') !== -1 || browsebrick.indexOf('Android') !== -1) {
        mapdiv.style.width = '300px';   // Instead of 100%
        mapdiv.style.height = '225px';   // Instead of 100%
        rtaOnMobileFlag = true;         // added 6/11/2015 (delete?)
        screenSize = 300;
    } else if (rta_Maptype === "wizard") {
        mapdiv.style.width = '600px';   // Wizard always smaller even on console
        mapdiv.style.height = '450px';   
        screenSize = 600;
    } else if ((rta_Maptype === "mapcenter") ||  (rta_Maptype == "admin")) {
        mapdiv.style.width = '800px';    // Map Center always larger, Wizard is for phones
        mapdiv.style.height = '600px';   
        screenSize = 800;
    } else if (rta_Maptype === "mapdisplay") {
        mapdiv.style.width = '600px';    // Like Map Wizard.
        mapdiv.style.height = '450px';   
        screenSize = 600;
    }
    countMobileUsers();
}

function initializeRTA_Icons() {
    rtaFlagImage[101] = new google.maps.MarkerImage((urlPrefix + "mapicons/m-pin.png"), new google.maps.Size(24, 36), new google.maps.Point(0, 0), new google.maps.Point(0, 36));
    rtaFlagImage[102] = new google.maps.MarkerImage((urlPrefix + "mapicons/pr-pin.png"), new google.maps.Size(24, 36), new google.maps.Point(0, 0), new google.maps.Point(0, 36));
    rtaFlagImage[103] = new google.maps.MarkerImage((urlPrefix + "mapicons/nw-pin.png"), new google.maps.Size(24, 36), new google.maps.Point(0, 0), new google.maps.Point(0, 36));
    rtaFlagImage[104] = new google.maps.MarkerImage((urlPrefix + "mapicons/h-pin.png"), new google.maps.Size(24, 36), new google.maps.Point(0, 0), new google.maps.Point(0, 36));
    rtaFlagImage[105] = new google.maps.MarkerImage((urlPrefix + "mapicons/e-pin.png"), new google.maps.Size(24, 36), new google.maps.Point(0, 0), new google.maps.Point(0, 36));
    rtaFlagImage[106] = new google.maps.MarkerImage((urlPrefix + "mapicons/s-pin.png"), new google.maps.Size(24, 36), new google.maps.Point(0, 0), new google.maps.Point(0, 36));
    rtaFlagImage[107] = new google.maps.MarkerImage((urlPrefix + "mapicons/d-pin.png"), new google.maps.Size(24, 36), new google.maps.Point(0, 0), new google.maps.Point(0, 36));
    rtaFlagImage[108] = new google.maps.MarkerImage((urlPrefix + "mapicons/ra-pin.png"), new google.maps.Size(24, 36), new google.maps.Point(0, 0), new google.maps.Point(0, 36));
    rtaFlagImage[110] = new google.maps.MarkerImage((urlPrefix + "mapicons/l-pin.png"), new google.maps.Size(24, 36), new google.maps.Point(0, 0), new google.maps.Point(0, 36));
}

function countSAR(mapTypeCounter, registeredFlag) {
    var sarType = 0;
    var theUrl;
    var theParms;
    if (mapTypeCounter == 2) {
        sarType = 1;
    }
    if (mapTypeCounter == 1) {
        if (registeredFlag) {
            sarType = 2;
        } else {
            sarType = 3;
        }
    }
    if (sarType > 0) {
        theUrl = urlPrefix + "updatsartyperta.php";
        theParms = "timezoneOffset=" + rta_tzOffsetStrng + "&sartype=" + sarType;
        downloadPostUrl(theUrl, theParms, function(data, responseCode) {
            if (rtadebuggingFlag) {
                if (responseCode === 200) {
                    document.getElementById("messagelog").innerHTML += 'sarType updated. Data = ' + data;
                } else {
                    document.getElementById("messagelog").innerHTML += "Error in usage update (countSAR). responseCode = " + (responseCode);
                }
            }
        });
    }
}

function rtamapInitialize6() {
    var latlng = new google.maps.LatLng(48.354478, -99.998135);
    hasControls = false;
    var myOptions = {
        zoom: 3,
        center: latlng,
        scaleControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    RTAMap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    rta_Maptype = "mapprint";
    displayMarkerTitlesFlag = true;
    initializeRTA_Icons();
    routeImage = new google.maps.MarkerImage((urlPrefix + "markerdot.gif"), new google.maps.Size(9, 9), new google.maps.Point(0, 0), new google.maps.Point(4, 4));
    var renderOptions = {
        map: RTAMap,
        clickable: false,
        suppressInfoWindows: true,
        suppressMarkers: true,
        suppressPolylines: false
    };
    directionsDisplay = new google.maps.DirectionsRenderer(renderOptions);
    detectTheBrowser();
    initializeRTA_Icons();
    currRTAMap[0][0] = -2;
    directionsDisplay.setMap(RTAMap);
    directionsDisplay.setPanel(null);
    google.maps.event.addListener(RTAMap, 'zoom_changed', function(zEvent) {
        whenMapZoomed();
    });
    searchMapBounds = new google.maps.LatLngBounds();
    rta_point1 = new google.maps.LatLng(35.000000, -35.000000);
    rta_point2 = new google.maps.LatLng(-60.000000, -160.000000);
    rta_point3 = new google.maps.LatLng(-2.000000, 65.000000);
    getMapByID(mapNumber);
    rtaPrintMap = new rtaPrintMap();
}

function rtamapInitialize5() {
    var theUrl;
    var theParms;
    var latlng = new google.maps.LatLng(48.354478, -99.998135);
    hasControls = true;
    rta_Maptype = "wizard";
    var myOptions = {
        zoom: 3,
        center: latlng,
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    RTAMap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    routeImage = new google.maps.MarkerImage((urlPrefix + "markerdot.gif"), new google.maps.Size(9, 9), new google.maps.Point(0, 0), new google.maps.Point(4, 4));
    var renderOptions = {
        map: RTAMap,
        clickable: false,
        suppressInfoWindows: true,
        suppressMarkers: true,
        suppressPolylines: false
    };
    directionsDisplay = new google.maps.DirectionsRenderer(renderOptions);
    detectTheBrowser();
//     if (!rtaOnMobileFlag) {
//         document.getElementById("printsetup").style.display = "none";
//     } else {
//         document.getElementById("printsetup").style.display = "inline";
//     }
    initializeRTA_Icons();
    currRTAMap[0][0] = -2;
    directionsDisplay.setMap(RTAMap);
    directionsDisplay.setPanel(null);
    google.maps.event.addListener(RTAMap, 'zoom_changed', function(zEvent) {
        whenMapZoomed();
    });
    rta_point1 = new google.maps.LatLng(35.000000, -35.000000);
    rta_point2 = new google.maps.LatLng(-60.000000, -160.000000);
    rta_point3 = new google.maps.LatLng(-2.000000, 65.000000);
    if (rta_canSaveRoute) {
        listMaps();
        listCalcRts();
    }
    rtaSearchRadius = 50;
    changeSearchRadius();
    theUrl = urlPrefix + "updatwizloadsrta.php";
    theParms = "timezoneOffset=" + rta_tzOffsetStrng;
    downloadPostUrl(theUrl, theParms, function(data, responseCode) {
        if (rtadebuggingFlag) {
            if (responseCode === 200) {
                document.getElementById("messagelog").innerHTML += 'Data = ' + data;
            } else {
                document.getElementById("messagelog").innerHTML += "Error in usage update (rtamapInitialize5). responseCode = " + (responseCode);
            }
        }
    });
    if (elevationChartOn) {
		elevationService = new google.maps.ElevationService();
		chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
		google.visualization.events.addListener(chart, 'onmouseover', function(e) {
			if (mousemarker == null) {
				mousemarker = new google.maps.Marker({
					position: elevations[e.row].location,
					map: RTAMap,
					icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
				});
			} else {
				mousemarker.setPosition(elevations[e.row].location);
			}
		});
    }
    exitRtePlaceMode();
}

function rtamapInitialize4() {
    var latlng = new google.maps.LatLng(48.354478, -99.998135);
    hasControls = false;
    var myOptions = {
        zoom: 3,
        center: latlng,
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    RTAMap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    routeImage = new google.maps.MarkerImage((urlPrefix + "markerdot.gif"), new google.maps.Size(9, 9), new google.maps.Point(0, 0), new google.maps.Point(4, 4));
    var renderOptions = {
        map: RTAMap,
        clickable: false,
        suppressInfoWindows: true,
        suppressMarkers: true,
        suppressPolylines: false
    };
    directionsDisplay = new google.maps.DirectionsRenderer(renderOptions);
    detectTheBrowser();
    initializeRTA_Icons();
    currRTAMap[0][0] = -2;
    directionsDisplay.setMap(RTAMap);
    directionsDisplay.setPanel(null);
    google.maps.event.addListener(RTAMap, 'zoom_changed', function(zEvent) {
        whenMapZoomed();
    });
    rta_point1 = new google.maps.LatLng(35.000000, -35.000000);
    rta_point2 = new google.maps.LatLng(-60.000000, -160.000000);
    rta_point3 = new google.maps.LatLng(-2.000000, 65.000000);
    getPOIFromDB(poiNumber);
}

function rtamapInitialize3() {
    var latlng = new google.maps.LatLng(48.354478, -99.998135);
    hasControls = false;
    var myOptions = {
        zoom: 3,
        center: latlng,
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    RTAMap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    rta_Maptype = "mapdisplay";
    initializeRTA_Icons();
    routeImage = new google.maps.MarkerImage((urlPrefix + "markerdot.gif"), new google.maps.Size(9, 9), new google.maps.Point(0, 0), new google.maps.Point(4, 4));
    var renderOptions = {
        map: RTAMap,
        clickable: false,
        suppressInfoWindows: true,
        suppressMarkers: true,
        suppressPolylines: false
    };
    directionsDisplay = new google.maps.DirectionsRenderer(renderOptions);
    detectTheBrowser();
    initializeRTA_Icons();
    currRTAMap[0][0] = -2;
    directionsDisplay.setMap(RTAMap);
    directionsDisplay.setPanel(null);
    google.maps.event.addListener(RTAMap, 'zoom_changed', function(zEvent) {
        whenMapZoomed();
    });
    searchMapBounds = new google.maps.LatLngBounds();
    rta_point1 = new google.maps.LatLng(35.000000, -35.000000);
    rta_point2 = new google.maps.LatLng(-60.000000, -160.000000);
    rta_point3 = new google.maps.LatLng(-2.000000, 65.000000);
    getMapByID(mapNumber);
}

function rtamapInitialize2() {
    var latlng = new google.maps.LatLng(48.354478, -99.998135);
    var myOptions = {
        zoom: 3,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    RTAMap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    detectTheBrowser();
    initializeRTA_Icons();
}

function rtamapInitialize() {
    var latlng = new google.maps.LatLng(48.354478, -99.998135);
    var theUrl;
    var theParms;
    var myOptions = {
        zoom: 3,
        center: latlng,
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    RTAMap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    rta_Maptype = "mapcenter";
    rta_geocoder = new google.maps.Geocoder();
    routeImage = new google.maps.MarkerImage((urlPrefix + "markerdot.gif"), new google.maps.Size(9, 9), new google.maps.Point(0, 0), new google.maps.Point(4, 4));
    var thePolyOptions = {
        strokeColor: '#00BBEE',
        strokeOpacity: 0.9,
        clickable: false,
        geodesic: true,
        strokeWeight: 3
    };
    var renderOptions = {
        map: RTAMap,
        draggable: false,
        suppressInfoWindows: true,
        suppressMarkers: true,
        suppressPolylines: false
    };
    initializeRTA_Icons();
    directionsDisplay = new google.maps.DirectionsRenderer(renderOptions);
    detectTheBrowser();
    rta_TimezoneOffsetStrng = convertTimezone(rta_TimezoneOffset);
    rta_tzOffsetStrng = encodeURIComponent(rta_TimezoneOffsetStrng);
    currRTAMap[0][0] = -2;
    document.getElementById("wayPtButton").disabled = true;
    document.getElementById("clearWaypts").disabled = true;
    document.getElementById("savemap").disabled = true;
    document.getElementById("savmaprtalib").disabled = true;
    document.getElementById("text6").innerHTML = "";
    document.getElementById("text7").innerHTML = "";
    document.getElementById("searchPOIsButton").disabled = true;
    document.getElementById("latlngwind").checked = false;
    document.getElementById("applysearch").checked = rtaApplyKeySearchFlag;
    document.getElementById("optimizewaypts").checked = rtaOptWayptsFlag;
    if (!rtaMapBlesser) {
        document.getElementById("savmaprtalib").style.visibility = "hidden";
    }
    directionsDisplay.setMap(RTAMap);
    directionsDisplay.setPanel(null);
    google.maps.event.addListener(RTAMap, 'zoom_changed', function(zEvent) {
        whenMapZoomed();
    });
    var latLngControl = new LatLngControl(RTAMap);
    google.maps.event.addListener(RTAMap, 'mouseover', function(mEvent) {
        latLngControl.set('visible', showLatLng);
    });
    google.maps.event.addListener(RTAMap, 'mouseout', function(mEvent) {
        latLngControl.set('visible', false);
    });
    google.maps.event.addListener(RTAMap, 'mousemove', function(mEvent) {
        latLngControl.updatePosition(mEvent.latLng);
    });
    rta_point1 = new google.maps.LatLng(35.000000, -35.000000);
    rta_point2 = new google.maps.LatLng(-60.000000, -160.000000);
    rta_point3 = new google.maps.LatLng(-2.000000, 65.000000);
    clearWayPoints();
    showAllPOIs();
    listMaps();
    listCalcRts();
    showLineDrawnRoutes();
    searchMapBounds = new google.maps.LatLngBounds();
    if (elevationChartOn) {
		elevationService = new google.maps.ElevationService();
		chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
		google.visualization.events.addListener(chart, 'onmouseover', function(e) {
			if (mousemarker == null) {
				mousemarker = new google.maps.Marker({
					position: elevations[e.row].location,
					map: RTAMap,
					icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
				});
			} else {
				mousemarker.setPosition(elevations[e.row].location);
			}
		});
    }
    theUrl = urlPrefix + "updatmcloadsrta.php";
    theParms = "timezoneOffset=" + rta_tzOffsetStrng;
    downloadPostUrl(theUrl, theParms, function(data, responseCode) {
        if (rtadebuggingFlag) {
            if (responseCode === 200) {
                document.getElementById("messagelog").innerHTML += 'Data = ' + data;
            } else {
                document.getElementById("messagelog").innerHTML += "Error in usage update (rtamapInitialize). responseCode = " + (responseCode);
            }
        }
    });
    changeSearchRadius();
    searchOption1 = 1;
    changeSearchRATypes();
    changeCannedKey();
    exitRtePlaceMode();
    if (rtaMapBlesser) {
        document.getElementById("message").innerHTML = "Welcome, " + rtaName + ". Map promotion is enabled. ";
    }
    if (rtaUserID == 25881) {
        rtadebuggingFlag = true;
    }
}

function anyPOIMarkersAreVisible() {
    var poiObjNum = rtaPOIArray.length;
    var i;
    for (i = 0; i < poiObjNum; i++) {
        if (rtaPOIArray[i]) {
            if (rtaPOIArray[i].theMarker.getVisible()) {
                return true;
            }
        }
    }
    poiObjNum = poiSearchArray.length;
    for (i = 0; i < poiObjNum; i++) {
        if (poiSearchArray[i]) {
            if (poiSearchArray[i].theMarker.getVisible()) {
                return true;
            }
        }
    }
    return false;
}

function ldRouteVisible() {
    var numRtes = rtaRouteMarkers.length;
    var i;
    for (i = 0; i < numRtes; i++) {
        if (rtaRouteMarkers[i]) {
            if (rtaRouteMarkers[i][0]) {
                if (rtaRouteMarkers[i][0].getVisible()) {
                    return true;
                }
            }
        }
    }
    numRtes = rtaSrchRouteMarkers.length;
    for (i = 0; i < numRtes; i++) {
        if (rtaSrchRouteMarkers[i]) {
            if (rtaSrchRouteMarkers[i][0]) {
                if (rtaSrchRouteMarkers[i][0].getVisible()) {
                    return true;
                }
            }
        }
    }
    return false;
}

function noCoordsVisible() {
    return ((document.getElementById("text6").innerHTML === "") && (document.getElementById("text7").innerHTML === ""));
}

function bothCoordsVisible() {
    return ((document.getElementById("text6").innerHTML !== "") && (document.getElementById("text7").innerHTML !== ""));
}

function enterRteMode() {
    inMode = true;
    document.getElementById("rtaAddplace").disabled = true;
    document.getElementById("newroute").disabled = true;
    document.getElementById("stoproute").disabled = false;
    document.getElementById("addressButton").disabled = true;
    document.getElementById("directionsButton").disabled = true;
    document.getElementById("wayPtButton").disabled = true;
    document.getElementById("clearWaypts").disabled = true;
    document.getElementById("getAddress").disabled = true;
    document.getElementById("clickStartRt").disabled = true;
    document.getElementById("clickEndRt").disabled = true;
    document.getElementById("routeFromClicks").disabled = true;
    document.getElementById("clearTheMap").disabled = true;
    document.getElementById("clearcoords").disabled = true;
    document.getElementById("savemap").disabled = true;
    document.getElementById("savmaprtalib").disabled = true;
    document.getElementById("poiVicSearch").disabled = true;
    document.getElementById("keyWdSearchButton").disabled = true;
    document.getElementById("getMapLink").disabled = true;
    document.getElementById("delMap").disabled = true;
    document.getElementById("optimizewaypts").disabled = true;
    document.getElementById("message").innerHTML = "Click on the map to start the route.<br />";
}

function exitRtePlaceMode() {
    var disableSaveMapFlag = true;
    var disableClearMapFlag = true;
    var routeDisplayed = false;
    var disablePOISearchFlag = true;
    var disableElevationFlag = true;
//    var disblePrintFlag = true; no longer used
    inMode = false;
    if (!hasControls) {
        return;
    }
    if (!mapIsCurrentFlag) {
        currRTAMap[3] = -2;
    }
    if (rta_canSaveRoute) {
        if (currRTAMap[3] > -2) {
            document.getElementById("getMapLink").disabled = false;
        } else {
            document.getElementById("getMapLink").disabled = true;
        }
        if (rtaMapsNum > 0) {
            document.getElementById("delMap").disabled = false;
        } else {
            document.getElementById("delMap").disabled = true;
        }
    }
    if (rta_Maptype === "wizard") {
        if (anyPOIMarkersAreVisible()) {
            disableClearMapFlag = false;
            if (rta_canSaveRoute) {
                disableSaveMapFlag = false;
            }
        }
        if (currRTAMap[0][0] > -2) {
            disableClearMapFlag = false;
            disablePOISearchFlag = false;
            if (elevationChartOn) {				// Added 6/18/2015
            	disableElevationFlag = false;
            }
            if (rta_canSaveRoute) {
                disableSaveMapFlag = false;
            }
        }
        document.getElementById("searchPOIsButton").disabled = disablePOISearchFlag;
        document.getElementById("directionsButton").disabled = false;
        document.getElementById("clearTheMap").disabled = disableClearMapFlag;
        if (document.getElementById("elevation")) {
            document.getElementById("elevation").disabled = disableElevationFlag;
        }
        if (rta_canSaveRoute) {
            document.getElementById("savemap").disabled = disableSaveMapFlag;
            if ((mapIsCurrentFlag) && (currRTAMap[3] > -2)) {
                document.getElementById("printsetup").disabled = false;
            } 
        }
        
        return;
    }
    document.getElementById("rtaAddplace").disabled = false;
    document.getElementById("clickStartRt").disabled = false;
    document.getElementById("clickEndRt").disabled = false;
    document.getElementById("newroute").disabled = false;
    document.getElementById("delRtePt").disabled = true;
    document.getElementById("stoproute").disabled = true;
    document.getElementById("addressButton").disabled = false;
    document.getElementById("directionsButton").disabled = false;
    document.getElementById("getAddress").disabled = false;
    document.getElementById("poiVicSearch").disabled = false;
    document.getElementById("keyWdSearchButton").disabled = false;
    document.getElementById("applysearch").disabled = false;
    document.getElementById("drawcircles").disabled = false;
    if (currRTAMap[3] > -2) {
        document.getElementById("getMapLink").disabled = false;
    } else {
        document.getElementById("getMapLink").disabled = true;
    }
    if (rtaCircleArray.length > 0) {
        document.getElementById("erasecircles").disabled = false;
    } else {
        document.getElementById("erasecircles").disabled = true;
    }
    if (anyPOIMarkersAreVisible()) {
        if (rtaWaypts.length < 8) {
            document.getElementById("wayPtButton").disabled = false;
        } else {
            document.getElementById("wayPtButton").disabled = true;
        }
        disableClearMapFlag = false;
        disableSaveMapFlag = false;
    } else {
        document.getElementById("wayPtButton").disabled = true;
    }
    if (currRTAMap[0][0] > -1) {
        disableClearMapFlag = false;
        disableSaveMapFlag = false;
        disablePOISearchFlag = false;
        if (elevationChartOn) {    // Added 6/18/2015
        	disableElevationFlag = false;
        }
    }
    if (ldRouteVisible()) {
        disableClearMapFlag = false;
        disableSaveMapFlag = false;
    }
    document.getElementById("routeFromClicks").disabled = true;
    if (bothCoordsVisible()) {
        document.getElementById("routeFromClicks").disabled = false;
    }
    document.getElementById("clearcoords").disabled = false;
    if (noCoordsVisible()) {
        document.getElementById("clearcoords").disabled = true;
    }
    document.getElementById("cancelbutton").style.visibility = "hidden";
    document.getElementById("cancelbutton2").style.visibility = "hidden";
    inPlaceMarkerMode = false;
    if ((mapIsCurrentFlag) && (currRTAMap[3] > -2)) {
        document.getElementById("printsetup").disabled = false;
    } 
    
    if (rtaWaypts.length > 0) {
        document.getElementById("clearWaypts").disabled = false;
    } else {
        document.getElementById("clearWaypts").disabled = true;
    }
    if (rtaWaypts.length > 1) {
        document.getElementById("optimizert").style.visibility = "visible";
        document.getElementById("optimizewaypts").style.visibility = "visible";
        document.getElementById("optimizewaypts").disabled = false;
        document.getElementById("optimizewaypts").checked = rtaOptWayptsFlag;
    } else {
        document.getElementById("optimizert").style.visibility = "hidden";
        document.getElementById("optimizewaypts").style.visibility = "hidden";
    }
    document.getElementById("savemap").disabled = disableSaveMapFlag;
    document.getElementById("savmaprtalib").disabled = disableSaveMapFlag;
    document.getElementById("clearTheMap").disabled = disableClearMapFlag;
    if (document.getElementById("elevation")) {
        document.getElementById("elevation").disabled = disableElevationFlag;
    }
    document.getElementById("searchPOIsButton").disabled = disablePOISearchFlag;
}

function eraseMessage() {
    document.getElementById("message").innerHTML = "<br />";
}

function hideCancel() {
    if (rta_Maptype === "wizard") {
        return;
    }
    document.getElementById("cancelbutton").style.visibility = "hidden";
    document.getElementById("cancelbutton2").style.visibility = "hidden";
}

function cancelThatAction() {
    inMode = false;
    clickWayPt = false;
    clickForStartRt = false;
    clickForEndRt = false;
    rtaDeleteMapFlag = false;
    if (inDrawCircleMode) {
        inDrawCircleMode = false;
        google.maps.event.removeListener(rtaMapCircleClickListener);
    }
    if (getAddressFromPoint) {
        getAddressFromPoint = false;
        google.maps.event.removeListener(rtaAddressClickListener);
    }
    if (vicinitySearchFlag) {
        vicinitySearchFlag = false;
        google.maps.event.removeListener(rtaAddressClickListener);
    }
    rtaDeleteMarker = false;
    if (inPlaceMarkerMode) {
        inPlaceMarkerMode = false;
        google.maps.event.removeListener(rtaOnceClickListener);
    }
    exitRtePlaceMode();
    eraseMessage();
}

function enterAddPlaceMode() {
    inMode = true;
    document.getElementById("directionsButton").disabled = true;
    document.getElementById("savemap").disabled = true;
    document.getElementById("clearTheMap").disabled = true;
    document.getElementById("searchPOIsButton").disabled = true;
// 	if (rtaOnMobileFlag) {
// 		document.getElementById("printsetup").style.display = "none";
// 	}
    if (rta_Maptype === "wizard") {
        return;
    }
    document.getElementById("cancelbutton").style.visibility = "visible";
    document.getElementById("cancelbutton2").style.visibility = "visible";
    document.getElementById("clickStartRt").disabled = true;
    document.getElementById("clickEndRt").disabled = true;
    document.getElementById("routeFromClicks").disabled = true;
    document.getElementById("rtaAddplace").disabled = true;
    document.getElementById("newroute").disabled = true;
    document.getElementById("stoproute").disabled = true;
    document.getElementById("addressButton").disabled = true;
    document.getElementById("wayPtButton").disabled = true;
    document.getElementById("clearWaypts").disabled = true;
    document.getElementById("getAddress").disabled = true;
    document.getElementById("delMap").disabled = true;
    document.getElementById("savmaprtalib").disabled = true;
    document.getElementById("poiVicSearch").disabled = true;
    document.getElementById("keyWdSearchButton").disabled = true;
    document.getElementById("optimizewaypts").disabled = true;
    if (document.getElementById("elevation")) {
    	document.getElementById("elevation").disabled = true;
    }
    document.getElementById("applysearch").disabled = true;
    document.getElementById("getMapLink").disabled = true;
    document.getElementById("drawcircles").disabled = true;
    document.getElementById("erasecircles").disabled = true;
}

function addSearchLDRouteToMap(srchIndx) {
    var i;
    var pathCoords;
    var polyOptions;
    var poly;
    var ldRoutePath;
    var currRoute;
    var labelNum;
    var intStrng = "";
    var startIcon;
    var startPoint;
    var ldRtBounds;
    var marker;
    var markerIndex;
    var thehtml;
    var rtInfowindow;
    var numLats;
    var smileage;
    dbSrchLDRteID[srchIndx] = ld_srch_side_db_infoArray[srchIndx].routeID;
    if (rtaSearchLDRoutes[srchIndx]) {
        if ((rtaSearchLDRoutes[srchIndx].getMap() === RTAMap)) {
            return;
        }
    }
    pathCoords = new google.maps.MVCArray();
    polyOptions = {
        path: pathCoords,
        strokeColor: '#04B2EB',
        strokeOpacity: 0.9,
        strokeWeight: 3,
        zIndex: zIndexCtr
    };
    zIndexCtr += 1;
    poly = new google.maps.Polyline(polyOptions);
    poly.setMap(RTAMap);
    rtaSearchLDRoutes[srchIndx] = poly;
    ldRoutePath = rtaSearchLDRoutes[srchIndx].getPath();
    currRoute = srchIndx + 1;
    labelNum = currRoute % 100;
    if (labelNum < 10) {
        intStrng = '0';
    }
    startIcon = urlPrefix + "mapicons/red" + intStrng + (labelNum) + ".png";
    startPoint = new google.maps.LatLng(ld_srch_side_db_infoArray[srchIndx].latArray[0], ld_srch_side_db_infoArray[srchIndx].lngArray[0]);
    ldRtBounds = makeMapBoundsFromPoint(startPoint);
    marker = new google.maps.Marker({
        position: startPoint,
        map: RTAMap,
        visible: true,
        zIndex: zIndexCtr,
        icon: startIcon,
        draggable: false
    });
    zIndexCtr += 1;
    markerIndex = currRoute + "";
    marker.setTitle(markerIndex);
    rtaSrchRouteMarkers[srchIndx] = [];
    rtaSrchRouteMarkers[srchIndx][0] = marker;
    thehtml = ld_srch_side_db_infoArray[srchIndx].theName + "<br />" + ld_srch_side_db_infoArray[srchIndx].description + "<br />" + " <a href=\"" + ld_srch_side_db_infoArray[srchIndx].link + "\"" + "target=\"_blank\">" + ld_srch_side_db_infoArray[srchIndx].link + "<\/a>" + '<br /><a href="javascript:hideSrchLDRoute(' + srchIndx + ')">' + "Hide Route" + '<\/a>';
    rtInfowindow = new google.maps.InfoWindow({
        content: thehtml
    });
    rtaSrchRtStInfoWindows[srchIndx] = rtInfowindow;
    whenSrchStartMarkerClicked(marker, srchIndx);
    ldRoutePath.insertAt(0, startPoint);
    numLats = ld_srch_side_db_infoArray[srchIndx].lngArray.length;
    for (i = 1; i < numLats; i++) {
        newpoint = new google.maps.LatLng(ld_srch_side_db_infoArray[srchIndx].latArray[i], ld_srch_side_db_infoArray[srchIndx].lngArray[i]);
        var srmarker = new google.maps.Marker({
            position: newpoint,
            map: RTAMap,
            visible: true,
            draggable: false,
            zIndex: zIndexCtr,
            icon: routeImage
        });
        zIndexCtr += 1;
        ldRoutePath.insertAt(i, newpoint);
        srmarker.setTitle(calcRTADist(ldRoutePath));
        whenMapZoomed(srmarker, i);
        rtaSrchRouteMarkers[srchIndx][i] = srmarker;
        ldRtBounds.extend(newpoint);
    }
    smileage = rtaSrchRouteMarkers[srchIndx][numLats - 1].getTitle();
    ld_srch_side_route_htmlArray[srchIndx] = '<a href="javascript:ldsidebarshowrouteclick(' + (srchIndx) + ')">' + currRoute + '<\/a> ' +
        ld_srch_side_db_infoArray[srchIndx].theName + " (" + (smileage) + ")<br />";
    ldBoundsArray[srchIndx] = ldRtBounds;
    searchMapBounds.union(ldRtBounds);
    RTAMap.fitBounds(searchMapBounds);
}

function addLDRouteToMap(theArrayIndex) {
    var pathCoords;
    var polyOptions;
    var poly;
    var currRoute;
    var labelNum;
    var intStrng;
    var startIcon;
    var startPoint;
    var marker;
    var newMarkers = [];
    var markerIndex;
    var thehtml;
    var rtInfowindow;
    var numLats;
    var i;
    var smarker;
    var mileage;
    dbLDRteID[theArrayIndex] = ld_side_bar_db_infoArray[theArrayIndex].routeID;
    if (rtaRoutes[theArrayIndex]) {
        if ((rtaRoutes[theArrayIndex].getMap() === RTAMap)) {
            return;
        }
    }
    if (arguments[1]) {
        setMapIsCurrentFlag(true);
    } else {
        setMapIsCurrentFlag(false);
    }
    pathCoords = new google.maps.MVCArray();
    polyOptions = {
        path: pathCoords,
        strokeColor: '#00B2EB',
        strokeOpacity: 0.9,
        strokeWeight: 3,
        zIndex: zIndexCtr
    };
    zIndexCtr += 1;
    poly = new google.maps.Polyline(polyOptions);
    poly.setMap(RTAMap);
    rtaRoutes[theArrayIndex] = poly;
    currRoute = theArrayIndex + 1;
    rtaRoutePath = rtaRoutes[theArrayIndex].getPath();
    labelNum = currRoute % 100;
    intStrng = "";
    if (labelNum < 10) {
        intStrng = '0';
    }
    startIcon = urlPrefix + "mapicons/red" + intStrng + (labelNum) + ".png";
    startPoint = new google.maps.LatLng(ld_side_bar_db_infoArray[theArrayIndex].latArray[0], ld_side_bar_db_infoArray[theArrayIndex].lngArray[0]);
    marker = new google.maps.Marker({
        position: startPoint,
        map: RTAMap,
        visible: true,
        zIndex: zIndexCtr,
        icon: startIcon,
        draggable: false
    });
    zIndexCtr += 1;
    newMarkers[0] = marker;
    rtaRouteMarkers[theArrayIndex] = newMarkers;
    markerIndex = currRoute + "";
    marker.setTitle(markerIndex);
    thehtml = "<b>" + ld_side_bar_db_infoArray[theArrayIndex].theName + "</b><br /> " + ld_side_bar_db_infoArray[theArrayIndex].description + 
    		'<br /><a href="javascript:hideLDRoute(' + theArrayIndex + ')">' + "Hide Route" + '<\/a>' + 
    		'&nbsp;&nbsp;&nbsp;' + '<a href="javascript:deleteLDRoute(' + theArrayIndex + ')">' + "Delete" + '<\/a>';	// Added 6/22/2015 But need PHP to delete from database.
    		//&&&&&&
    rtInfowindow = new google.maps.InfoWindow({
        content: thehtml
    });
    rtaRtStartInfoWindows[theArrayIndex] = rtInfowindow;
    whenStartMarkerClicked(marker, theArrayIndex);
    rtaRoutePath.insertAt(0, startPoint);
    numLats = ld_side_bar_db_infoArray[theArrayIndex].lngArray.length;
    for (i = 1; i < numLats; i++) {
        newpoint = new google.maps.LatLng(ld_side_bar_db_infoArray[theArrayIndex].latArray[i], ld_side_bar_db_infoArray[theArrayIndex].lngArray[i]);
        smarker = new google.maps.Marker({
            position: newpoint,
            map: RTAMap,
            visible: true,
            draggable: false,
            zIndex: zIndexCtr,
            icon: routeImage
        });
        zIndexCtr += 1;
        rtaRoutePath.insertAt(i, newpoint);
        smarker.setTitle(calcRTADist(rtaRoutePath));
        whenMapZoomed(smarker, i);
        rtaRouteMarkers[theArrayIndex][i] = smarker;
    }
    mileage = rtaRouteMarkers[theArrayIndex][numLats - 1].getTitle();
    side_bar_route_htmlArray[theArrayIndex] = '<a href="javascript:sidebarrouteclick(' + (theArrayIndex) + ')">' + currRoute + '<\/a> ' +
        ld_side_bar_db_infoArray[theArrayIndex].theName + " (" + (mileage) + ")<br />";
}

function addRtePt(mEvent) {
    var intStrng = "";
    var startIcon;
    var rmarker;
    var moreMarkers = [];
    var markerIndex;
    var infoWindDescriptionID;
    var rtInfowindow;
    var rrmarker;
    currRoute = rtaRoutes.length - 1;
    dbLDRteID[currRoute] = -1;
    routePath = rtaRoutes[currRoute].getPath();
    if (currentRteMarker > 0) {
        routePath.removeAt(currCursor);
    }
    routePath.insertAt(currentRteMarker, mEvent.latLng);
    if (currentRteMarker === 0) {
        if (rtaRoutes.length < 10) {
            intStrng = '0';
        }
        startIcon = urlPrefix + "mapicons/red" + intStrng + rtaRoutes.length + ".png";
        rmarker = new google.maps.Marker({
            position: mEvent.latLng,
            map: RTAMap,
            visible: true,
            zIndex: zIndexCtr,
            icon: startIcon,
            draggable: false
        });
        zIndexCtr += 1;
        moreMarkers[0] = rmarker;
        rtaRouteMarkers[currRoute] = moreMarkers;
        markerIndex = rtaRoutes.length + "";
        rmarker.setTitle(markerIndex);
        infoWindDescriptionID = "ldrtinfoAddress" + currRoute;
        document.getElementById("message").innerHTML = "Click on the map to add a route segment, or click a button to delete a point or stop.<br />";
        rtInfowindow = new google.maps.InfoWindow();
        whenStartMarkerClicked(rmarker, rtaRoutes.length);
        rtaRtStartInfoWindows[currRoute] = rtInfowindow;
        document.getElementById("delRtePt").disabled = false;
        currCursor = currentRteMarker + 1;
        routePath.insertAt(currCursor, mEvent.latLng);
        rtaCursorRouteListener = google.maps.event.addListener(RTAMap, 'mousemove', function(event) {
            routePath.setAt(currCursor, event.latLng);
        });
    } else if (currentRteMarker > 0) {
        rrmarker = new google.maps.Marker({
            position: mEvent.latLng,
            map: RTAMap,
            visible: true,
            draggable: true,
            zIndex: zIndexCtr,
            icon: routeImage
        });
        zIndexCtr += 1;
        rrmarker.setTitle(calcRTADist(routePath));
        whenMarkerDragged(rrmarker, currentRteMarker);
        whenMapZoomed(rrmarker, currentRteMarker);
        rtaRouteMarkers[currRoute][currentRteMarker] = rrmarker;
        currCursor = currentRteMarker + 1;
        google.maps.event.removeListener(rtaCursorRouteListener);
        rtaCursorRouteListener = google.maps.event.addListener(RTAMap, 'mousemove', function(mEvent) {
            routePath.setAt(currCursor, mEvent.latLng);
        });
    }
    currentRteMarker += 1;
}

function makeNewRoute() {
    var pathCoords = new google.maps.MVCArray();
    var polyOptions = {
        path: pathCoords,
        strokeColor: '#00B2EB',
        strokeOpacity: 0.9,
        strokeWeight: 3,
        clickable: false,
        zIndex: zIndexCtr
    };
    var poly = new google.maps.Polyline(polyOptions);
    setMapIsCurrentFlag(false);
    zIndexCtr += 1;
    currentRteMarker = 0;
    poly.setMap(RTAMap);
    rtaRoutes[rtaRoutes.length] = poly;
    routeModeBool = true;
    rtaRouteClickListener = google.maps.event.addListener(RTAMap, 'click', function(mEvent) {
        addRtePt(mEvent);
    });
    enterRteMode();
}

function delRoutePt() {
    routePath.removeAt(currCursor);
    google.maps.event.removeListener(rtaCursorRouteListener);
    routePath.removeAt(currentRteMarker - 1);
    rtaRouteMarkers[rtaRoutes.length - 1][currentRteMarker - 1].setMap(null);
    rtaRouteMarkers[rtaRoutes.length - 1][currentRteMarker - 1] = null;
    currentRteMarker -= 1;
    currCursor -= 1;
    if (currentRteMarker > 0) {
        rtaCursorRouteListener = google.maps.event.addListener(RTAMap, 'mousemove', function(event) {
            routePath.setAt(currCursor, event.latLng);
        });
    }
    if (currentRteMarker === 0) {
        document.getElementById("delRtePt").disabled = true;
        document.getElementById("message").innerHTML = "Click on the map to start the route.<br />";
    }
}

function stopRoute() {
    var latestRouteIndex;
    var infoWindDescriptionID;
    var finalMarkerIndex;
    var rtaHtml;
    var windOpt;
    var i;
    routeModeBool = false;
    google.maps.event.removeListener(rtaRouteClickListener);
    document.getElementById("delRtePt").disabled = true;
    currIndx = rtaRoutes.length - 1;
    var currPath = rtaRoutes[currIndx].getPath();
    if (currPath.getLength() < 1) {
        rtaRoutes[currIndx].setMap(null);
        exitRtePlaceMode();
        eraseMessage();
        return;
    }
    if (rtaRouteMarkers.length > 0) {
        latestRouteIndex = rtaRouteMarkers.length - 1;
        if (rtaRouteMarkers[latestRouteIndex].length > 0) {
            google.maps.event.removeListener(rtaCursorRouteListener);
            finalMarkerIndex = rtaRouteMarkers[latestRouteIndex].length - 1;
            routePath.removeAt(currCursor);
            infoWindDescriptionID = "ldrtinfoAddress" + currIndx;
            rtaHtml = "<div height=500 width=500><table>" + "<tr><td>Title:</td> <td><input type='text' id='rtname'/> </td> </tr>" + 
            "<tr><td>Description:</td> <td><textarea id='" + infoWindDescriptionID + "' rows='20' cols='40'></textarea></td> </tr>" + 
            "<tr><td>Keywords:</td> <td><input type='text' id='rttype'/></td> </tr>" + '<tr><td><a href="javascript:delLDRtData(' + currIndx + ')">' + 'Delete' + '<\/a></td>' + 
            '<td><a href="javascript:saveLDRtData(' + currIndx + ')">' + "Save" + '<\/a></td></tr>' + "</table></div>";
            // &&&&&&
            rtaRtStartInfoWindows[currIndx].setContent(rtaHtml);
            windOpt = {
                maxWidth: 600
            };
            rtaRtStartInfoWindows[currIndx].setOptions(windOpt);
            rtaRtStartInfoWindows[currIndx].open(RTAMap, rtaRouteMarkers[latestRouteIndex][0]);
            google.maps.event.addListenerOnce(rtaRtStartInfoWindows[currIndx], "closeclick", function() {
                delLDRtData(currIndx);
            });
            inPlaceMarkerMode = true;
            enterAddPlaceMode();
            hideCancel();
            document.getElementById("message").innerHTML = "Please save or delete the route.";
            for (i = 0; i === markerDragListeners.length; i++) {
                if (rtaRouteMarkers[latestRouteIndex][i]) {
                    rtaRouteMarkers[latestRouteIndex][i].setDraggable = false;
                }
                if (markerDragListeners[i]) {
                    google.maps.event.removeListener(markerDragListeners[i]);
                    google.maps.event.removeListener(markerDragEndListeners[i]);
                }
            }
        }
    }
}

function clearWayPoints() {
    rtaWaypts = [];
    if (rta_Maptype === "mapcenter") {
        document.getElementById("wayPtsDiv").innerHTML = " none";
    }
}

function clearPoints() {
    clearWayPoints();
    exitRtePlaceMode();
}

function calcSearchRoute(theStart, theEnd, the_db_ID, arrIndex) {
    var request = {
        origin: theStart,
        destination: theEnd,
        waypoints: rtaWaypts,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    var response;
    var status;
    var renderOptions = {
        map: RTAMap,
        draggable: false,
        suppressInfoWindows: true,
        suppressMarkers: true,
        suppressPolylines: false
    };
    directionsDisplay.setOptions(renderOptions);
    if (rtaMapDirectionsChangedListener) {
        google.maps.event.removeListener(rtaMapDirectionsChangedListener);
        rtaMapDirectionsChangedListener = null;
    }
    directionsService.route(request, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            directionsDisplay.setMap(RTAMap);
            directionsSearchResultsArray[arrIndex] = response;
            hideCurrCalcRtMarker();
            currRTAMap[0][0] = arrIndex;
            currRTAMap[0][1] = the_db_ID;
            currRTAMap[0][2] = 2;
            calcSearchRtArray[arrIndex] = new rta_CalcRoute(response, arrIndex, the_db_ID);
            search_calc_side_htmlArray[arrIndex] = '<a href="javascript:sidebarsearchcalcrouteclick(' + (arrIndex) + ')">' + (arrIndex + 1) + '<\/a> ' +
                calc_search_db_infoArray[arrIndex].name + ' (' + calcSearchRtArray[arrIndex].theDistance + ' mi)<br />';
            if (rta_Maptype !== "mapprint") {
                google.maps.event.addListener(calcSearchRtArray[arrIndex].startMarker, "click", function() {
                    var theRouteNum = parseInt(calcSearchRtArray[arrIndex].startMarker.getTitle(), 10) - 1;
                    if (inMode) {
                        return;
                    }
                    if (calcSearchRtArray[theRouteNum].startMarker.getVisible()) {
                        calcSearchRtArray[theRouteNum].rtInfowindow.open(RTAMap, calcSearchRtArray[theRouteNum].startMarker);
                    } else {
                        hideCurrCalcRtMarker();
                        calcSearchRtArray[theRouteNum].startMarker.setVisible(true);
                        directionsDisplay.setDirections(directionsResultsArray[theRouteNum]);
                        directionsDisplay.setMap(RTAMap);
                        currRTAMap[0][0] = theRouteNum;
                        currRTAMap[0][1] = calcSearchRtArray[theRouteNum].dbID;
                        currRTAMap[0][2] = 2;
                        if (RTAMap.getZoom() < 10) {
                            RTAMap.setZoom(10);
                        }
                        calcSearchRtArray[theRouteNum].rtInfowindow.open(RTAMap, calcSearchRtArray[theRouteNum].startMarker);
                    }
                });
            }
            exitRtePlaceMode();
        } else if (status === google.maps.DirectionsStatus.NOT_FOUND) {
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "The address of the start, destination, or a waypoint could not be found.<br />";
            }
            alert("The address of the start, destination, or a waypoint could not be found.");
        } else if (status === google.maps.DirectionsStatus.ZERO_RESULTS) {
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "No route was found. Make sure the start, destination, and waypoints (if any) are near roads.<br />";
            }
            alert("No route was found. Make sure the start, destination, and waypoints (if any) are near roads.");
        } else if (status === google.maps.DirectionsStatus.UNKNOWN_ERROR) {
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "The route request could not be processed due to a server error. The request may succeed if you try again.<br />";
            }
            alert("The route request could not be processed due to a server error. The request may succeed if you try again.");
        } else if (status === google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "We are currently experiencing too many requests for automatic routes. Please try again later.<br />";
            }
            alert("We are currently experiencing too many requests for automatic routes. Please try again later.");
        } else {
            document.getElementById("message").innerHTML = "" + status + "<br />";
        }
    });
}

function reorderWaypts(orderArray) {
    var tempArray = [];
    var i;
    var currindex;
    for (i = 0; i < rtaWaypts.length; i++) {
        currindex = orderArray[i];
        tempArray[i] = rtaWaypts[currindex];
    }
    for (i = 0; i < tempArray.length; i++) {
        rtaWaypts[i] = tempArray[i];
    }
}

function enableDragging(db_id_value, currRteIndx, currRtaWaypts) {
    var response;
    var newPt;
    var theReply = false;
    rtaMapDirectionsChangedListener = google.maps.event.addListener(directionsDisplay, "directions_changed", function() {
        renderOptions = {
            map: RTAMap,
            draggable: false,
            suppressInfoWindows: true,
            suppressMarkers: true,
            suppressPolylines: false
        };
        directionsDisplay.setOptions(renderOptions);
        theReply = confirm("Save dragged route?");
        if (!theReply) {
            google.maps.event.trigger(rta_calcRtArray[currRteIndx].startMarker, "click");
            return;
        }
        response = directionsDisplay.getDirections();
        directionsResultsArray[currRteIndx] = response;
        google.maps.event.removeListener(rtaMapDirectionsChangedListener);
        rtaMapDirectionsChangedListener = null;
        rta_calcRtArray[currRteIndx].waypoints[0] = newPt;
        newPt = response.routes[0].legs[0].via_waypoints[0];
        updateWaypoints(db_id_value, newPt, currRteIndx, currRtaWaypts);
    });
}

function calcRoute(rta_start, rta_end, db_id_value, the_calc_side_bar_value) {
    var idEditString;
    var rtdistance;
    var request = {
        origin: rta_start,
        destination: rta_end,
        optimizeWaypoints: rtaOptWayptsFlag,
        waypoints: rtaWaypts,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    var response;
    var status;
    var windOpt;
    var currRteIndx = the_calc_side_bar_value;
    var rtDraggable = false;
    if ((rtaMapBlesser) && (rtaWaypts.length < 1)) {
        rtDraggable = true;
    }
    var renderOptions = {
        map: RTAMap,
        draggable: rtDraggable,
        suppressInfoWindows: true,
        suppressMarkers: true,
        suppressPolylines: false
    };
    directionsDisplay.setOptions(renderOptions);
    if (the_calc_side_bar_value === -1) {
        currRteIndx = calc_side_bar_route_htmlArray.length;
    }
    directionsService.route(request, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            eraseMessage();
            directionsDisplay.setDirections(response);
            directionsDisplay.setMap(RTAMap);
            hideCurrCalcRtMarker();
            directionsResultsArray[currRteIndx] = response;
            currRTAMap[0][0] = currRteIndx;
            currRTAMap[0][1] = db_id_value;
            currRTAMap[0][2] = 1;
            if (currRTAMap[0][0] > -2) {
                exitRtePlaceMode();    // Added 6/12/2015
            }
            if (rtaWaypts && (rtaOptWayptsFlag)) {
                reorderWaypts(response.routes[0].waypoint_order);
            }
            rta_calcRtArray[currRteIndx] = new rta_CalcRoute(response, currRteIndx, db_id_value);
            if (rtDraggable) {
                enableDragging(db_id_value, currRteIndx, rtaWaypts);
            }
            if (rta_Maptype === "wizard") {
                document.getElementById("message").innerHTML = "Route " + rta_calcRtArray[currRteIndx].name + ", distance = " + rta_calcRtArray[currRteIndx].theDistance + " mi<br />";
                if ((db_id_value === -1) && (rta_canSaveRoute)) {
                    saveNewQuikCalcRtData(rta_start, rta_end, currRteIndx);
                } else if (db_id_value === -1) {
                    exitRtePlaceMode();
                }
                clearWayPoints();
            } else {
                google.maps.event.addListener(rta_calcRtArray[currRteIndx].startMarker, "click", function() {
                    var theRouteNum = parseInt(rta_calcRtArray[currRteIndx].startMarker.getTitle(), 10) - 1;
                    if (inMode) {
                        return;
                    }
                    hideCurrCalcRtMarker();
                    rta_calcRtArray[theRouteNum].startMarker.setVisible(true);
                    if (rtaMapDirectionsChangedListener) {
                        google.maps.event.removeListener(rtaMapDirectionsChangedListener);
                        rtaMapDirectionsChangedListener = null;
                    }
                    directionsDisplay.setDirections(directionsResultsArray[theRouteNum]);
                    directionsDisplay.setMap(RTAMap);
                    if ((rtaMapBlesser) && (rta_calcRtArray[currRteIndx].waypoints.length < 1)) {
                        enableDragging(db_id_value);
                    } else {
                        renderOptions = {
                            map: RTAMap,
                            draggable: false,
                            suppressInfoWindows: true,
                            suppressMarkers: true,
                            suppressPolylines: false
                        };
                        directionsDisplay.setOptions(renderOptions);
                    }
                    currRTAMap[0][0] = theRouteNum;
                    currRTAMap[0][1] = rta_calcRtArray[theRouteNum].dbID;
                    currRTAMap[0][2] = 1;
                    if (RTAMap.getZoom() < 10) {
                        RTAMap.setZoom(10);
                    }
                    if (rta_Maptype === "mapcenter") {
                        rta_calcRtArray[theRouteNum].rtInfowindow.open(RTAMap, rta_calcRtArray[theRouteNum].startMarker);
                    }
                });
                if (db_id_value === -1) {
                    if ((rta_Maptype === "mapcenter") || (rta_Maptype === "admin")) {
                        calc_side_bar_route_htmlArray[currRteIndx] = '<a href="javascript:sidebarcalcrouteclick(' + (currRteIndx) + ')">' + (currRteIndx + 1) + '<\/a><br />';
                        inPlaceMarkerMode = true;
                        enterAddPlaceMode();
                        hideCancel();
                        document.getElementById("message").innerHTML = "Please save or delete the route.";
                        windOpt = {
                            maxWidth: 600
                        };
                        rta_calcRtArray[currRteIndx].rtInfowindow.setOptions(windOpt);
                        rta_calcRtArray[currRteIndx].rtInfowindow.open(RTAMap, rta_calcRtArray[currRteIndx].startMarker);
                        google.maps.event.addListenerOnce(rta_calcRtArray[currRteIndx].rtInfowindow, "closeclick", function() {
                            delCalcRtDataB4Save(currRteIndx);
                        });
                    } else if (rta_Maptype === "wizard") {
                        doNothing();
                    }
                } else {
                    exitRtePlaceMode();
                    calc_side_bar_route_htmlArray[currRteIndx] = '<a href="javascript:sidebarcalcrouteclick(' + (currRteIndx) + ')">' + (currRteIndx + 1) + '<\/a> ' +
                        calc_side_bar_db_infoArray[currRteIndx].name + ' (' + rta_calcRtArray[currRteIndx].theDistance + ' mi)<br />';
                    if ((rta_Maptype === "mapcenter") || (rta_Maptype === "admin")) {
                        rta_calcRtArray[currRteIndx].rtInfowindow.open(RTAMap, rta_calcRtArray[currRteIndx].startMarker);
                    }
                }
            }
            if (rta_Maptype === "mapcenter") {
                clearPoints();
                refreshAnySidebar("calcRtSideBar", calc_side_bar_route_htmlArray, "");
            }
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Calculated route found: " + currRteIndx + "<br />";
            }
        } else if (status === google.maps.DirectionsStatus.NOT_FOUND) {
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "The address of the start, destination, or a waypoint could not be found.<br />";
            }
            if (rta_Maptype === "wizard") {
                alert("The address of the start or destination could not be found.");
            }
            if (rta_Maptype === "mapcenter") {
                alert("The address of the start, destination, or a waypoint could not be found.");
            }
        } else if (status === google.maps.DirectionsStatus.ZERO_RESULTS) {
            if (rta_Maptype === "mapcenter") {
                alert("No route was found. Make sure the start, destination, and waypoints (if any) are near roads.");
            }
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "No route was found. Make sure the start, destination, and waypoints (if any) are near roads.<br />";
            }
            if (rta_Maptype === "wizard") {
                alert("No route was found. Please make sure the addresses are correct.");
            }
        } else if (status === google.maps.DirectionsStatus.UNKNOWN_ERROR) {
            alert("The route request could not be processed due to a server error. The request may succeed if you try again.");
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "The route request could not be processed due to a server error. The request may succeed if you try again.<br />";
            }
        } else if (status === google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
            alert("We are currently experiencing too many requests for automatic routes. Please try again later.");
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "We are currently experiencing too many requests for automatic routes. Please try again later.<br />";
            }
        } else if (status === google.maps.DirectionsStatus.MAX_WAYPOINTS_EXCEEDED) {
            alert("The maximum number of waypoints was exceeded. Try again with fewer waypoints.");
        } else {
            alert("Google reports an error calculating the route. Please check the addresses entered, and notify RTA if the problem persists.");
            document.getElementById("message").innerHTML = "" + status + "<br />";
        }
    });
}

function getSearchRtFromDB(searchCalcRtIndex) {
    var url = urlPrefix + "ajusersrchidcalcrtsrta.php?searchid=" + searchCalcRtIndex;
    downloadUrl(url, function(data) {
        var routesFound = 0;
        var xml = parseXml(data);
        var myCalcRoutes = xml.documentElement.getElementsByTagName("calcroute");
        var numRoutes = myCalcRoutes.length;
        var theNewField;
        if (numRoutes === 0) {
            document.getElementById("message").innerHTML += "Calculated route not found. ";
            return;
        }
        if (numRoutes > 1) {
            document.getElementById("message").innerHTML += "Error: more than one calculated route found. ID = " + searchCalcRtIndex;
            return;
        }
        var theNumWaypts = myCalcRoutes[0].getAttribute("numwaypts");
        var latArray = [0];
        var lngArray = [0];
        if (theNumWaypts > 0) {
            var latstring = myCalcRoutes[0].getAttribute("thelats");
            var lngstring = myCalcRoutes[0].getAttribute("thelngs");
            latArray = latstring.split(",");
            lngArray = lngstring.split(",");
        }
        var theDistance = myCalcRoutes[0].getAttribute("distance");
        var theArrayIndex = getCalcSearchRouteArrayIndex();
        theNewField = parseInt(myCalcRoutes[0].getAttribute("new"), 10);
        if (theNewField !== 1) {
            theNewField = 0;
        }
        var routeInfo = {
            theID: myCalcRoutes[0].getAttribute("id"),
            name: myCalcRoutes[0].getAttribute("name"),
            description: myCalcRoutes[0].getAttribute("description"),
            keywords: myCalcRoutes[0].getAttribute("keywords"),
            newfield: theNewField,
            numwaypts: theNumWaypts,
            latvals: latArray,
            lngvals: lngArray,
            startlat: parseFloat(myCalcRoutes[0].getAttribute("startlat")),
            startlng: parseFloat(myCalcRoutes[0].getAttribute("startlng")),
            endlat: parseFloat(myCalcRoutes[0].getAttribute("endlat")),
            endlng: parseFloat(myCalcRoutes[0].getAttribute("endlng")),
            distance: myCalcRoutes[0].getAttribute("distance"),
            numvoters: myCalcRoutes[0].getAttribute("numvoters"),
            ratingtotal: myCalcRoutes[0].getAttribute("ratingtotal"),
            owner: myCalcRoutes[0].getAttribute("owner"),
            access: myCalcRoutes[0].getAttribute("access")
        };
        calc_search_db_infoArray[theArrayIndex] = routeInfo;
        search_calc_side_htmlArray[theArrayIndex] = '<a href="javascript:sidebardosearchcalcrouteclick(' + (theArrayIndex) + ')">' + (theArrayIndex + 1) + '<\/a> ' +
            calc_search_db_infoArray[theArrayIndex].name + " (" + theDistance + " mi)" + '<br />';
        calcSearchRtArray[theArrayIndex] = -1;
        refreshAnySidebar("calc_results", search_calc_side_htmlArray, "Calculated routes<br/>");
        sidebardosearchcalcrouteclick(theArrayIndex);
    });
}

function calcCoordRoute() {
    if (startRtLatLng === null) {
        document.getElementById("message").innerHTML = "Starting coordinates not found";
        return;
    }
    if (endRtLatLng === null) {
        document.getElementById("message").innerHTML = "Destination coordinates not found";
        return;
    }
    setMapIsCurrentFlag(false);
    if (currRTAMap[0][0] > -1) {
        hideCalcRtAndMarker(currRTAMap[0][0]);
    }
    if (rtaMapDirectionsChangedListener) {
        google.maps.event.removeListener(rtaMapDirectionsChangedListener);
        rtaMapDirectionsChangedListener = null;
    }
    calcRoute(startRtLatLng, endRtLatLng, -1, -1);
    startRtLatLng = null;
    document.getElementById("text6").innerHTML = "";
    endRtLatLng = null;
    document.getElementById("text7").innerHTML = "";
}

function calcAddressRoute() {
    var start = document.getElementById("startDir").value;
    var end;
    if (start === "") {
        document.getElementById("message").innerHTML = "Starting address not found";
        return;
    }
    end = document.getElementById("endDir").value;
    if (end === "") {
        document.getElementById("message").innerHTML = "Ending address not found";
        return;
    }
    setMapIsCurrentFlag(false);
    if (currRTAMap[0][0] > -1) {
        hideCalcRtAndMarker(currRTAMap[0][0]);
    }
    if (rtaMapDirectionsChangedListener) {
        google.maps.event.removeListener(rtaMapDirectionsChangedListener);
        rtaMapDirectionsChangedListener = null;
    }
    calcRoute(start, end, -1, -1);
}

function specifyStart(event) {
    startRtLatLng = null;
    startRtLatLng = new google.maps.LatLng(event.latLng.lat(), event.latLng.lng());
    document.getElementById("text6").innerHTML = startRtLatLng.toUrlValue(6) + "";
    clickForStartRt = false;
    exitRtePlaceMode();
    eraseMessage();
}

function specifyEnd(event) {
    endRtLatLng = null;
    endRtLatLng = new google.maps.LatLng(event.latLng.lat(), event.latLng.lng());
    document.getElementById("text7").innerHTML = endRtLatLng.toUrlValue(6) + "";
    clickForEndRt = false;
    exitRtePlaceMode();
    eraseMessage();
}

function startRoute() {
    clickForStartRt = true;
    rtaOnceClickListener = google.maps.event.addListenerOnce(RTAMap, 'click', specifyStart);
    document.getElementById("message").innerHTML = "Click on map or place marker to specify the start of the route.<br />";
    enterAddPlaceMode();
}

function endRoute() {
    clickForEndRt = true;
    rtaOnceClickListener = google.maps.event.addListenerOnce(RTAMap, 'click', specifyEnd);
    document.getElementById("message").innerHTML = "Click on map or place marker to specify the end of the route.<br />";
    enterAddPlaceMode();
}

function makeWay() {
    clickWayPt = true;
    document.getElementById("message").innerHTML = "Click on a map marker to add a route waypoint";
    enterAddPlaceMode();
}

function hideLDRoute(theIndex) {
    var numMarkers;
    var i;
    rtaRtStartInfoWindows[theIndex].close();
    numMarkers = rtaRouteMarkers[theIndex].length;
    for (i = 0; i < numMarkers; i++) {
        rtaRouteMarkers[theIndex][i].setVisible(false);
    }
    if (side_bar_route_htmlArray[theIndex]) {
        side_bar_route_htmlArray[theIndex] = '<a href="javascript:ldsidebardorouteclick(' +
            (theIndex) + ')">' + (theIndex + 1) + '<\/a> ' + ld_side_bar_db_infoArray[theIndex].theName + '<br />';
    }
    rtaRoutes[theIndex].setMap(null);
    setMapIsCurrentFlag(false);
}

function hideSrchLDRoute(indx) {
    var i;
    rtaSearchLDRoutes[indx].setMap(null);
    rtaSrchRtStInfoWindows[indx].close();
    var numMarkers = rtaSrchRouteMarkers[indx].length;
    for (i = 0; i < numMarkers; i++) {
        rtaSrchRouteMarkers[indx][i].setVisible(false);
    }
    if (ld_srch_side_route_htmlArray[indx]) {
        ld_srch_side_route_htmlArray[indx] = '<a href="javascript:ldsrchsidebarshowrouteclick(' +
            (indx) + ')">' + (indx + 1) + '<\/a> ' + ld_srch_side_db_infoArray[indx].theName + '<br />';
    }
    setMapIsCurrentFlag(false);
}

function delCalcRtDataB4Save(anIndex) {
    rta_calcRtArray[anIndex].startMarker.setMap(null);
    rta_calcRtArray[anIndex].startMarker = null;
    rta_calcRtArray[anIndex].rtInfowindow.close();
    rta_calcRtArray[anIndex].rtInfowindow = null;
    rta_calcRtArray[anIndex] = [];
    currRTAMap[0][0] = -2;
    currRTAMap[0][1] = -1;
    directionsResultsArray[anIndex] = [];
    calc_side_bar_route_htmlArray[anIndex] = [];
    directionsDisplay.setMap(null);
    refreshAnySidebar("calcRtSideBar", calc_side_bar_route_htmlArray, "");
    setMapIsCurrentFlag(false);
    exitRtePlaceMode();
    eraseMessage();
}

function hideCalcRtAndMarker(anIndex) {
    directionsDisplay.setMap(null);
    if (currRTAMap[0][2] === 1) {
        rta_calcRtArray[anIndex].startMarker.setVisible(false);
        rta_calcRtArray[anIndex].rtInfowindow.close();
        if (rta_calcRtArray[anIndex].newField) {
            if (rta_calcRtArray[anIndex].newField === 1) {
                if (rta_calcRtArray[anIndex].polyline) {
                    rta_calcRtArray[anIndex].polyline.setMap(null);
                }
            }
        }
    } else if (currRTAMap[0][2] === 2) {
        calcSearchRtArray[anIndex].startMarker.setVisible(false);
        calcSearchRtArray[anIndex].rtInfowindow.close();
    }
    currRTAMap[0][0] = -2;
    currRTAMap[0][1] = -1;
    setMapIsCurrentFlag(false);
    exitRtePlaceMode();
    eraseMessage();
}

function hideCurrCalcRtMarker() {
    var oldRtIndx = currRTAMap[0][0];
    if (currRTAMap[0][2] === 1) {
        if (oldRtIndx > -2) {
            if (rta_calcRtArray[oldRtIndx].startMarker) {
                if (rta_calcRtArray[oldRtIndx].startMarker.getVisible()) {
                    rta_calcRtArray[oldRtIndx].startMarker.setVisible(false);
                    rta_calcRtArray[oldRtIndx].rtInfowindow.close();
                    setMapIsCurrentFlag(false);
                }
            }
        }
    } else if (currRTAMap[0][2] === 2) {
        if (oldRtIndx > -2) {
            if (calcSearchRtArray[oldRtIndx].startMarker) {
                if (calcSearchRtArray[oldRtIndx].startMarker.getVisible()) {
                    calcSearchRtArray[oldRtIndx].startMarker.setVisible(false);
                    calcSearchRtArray[oldRtIndx].rtInfowindow.close();
                    setMapIsCurrentFlag(false);
                }
            }
        }
    }
}


function removeLDRtFromDb(routeIndex) {	//&&&&&& Added 6/22/2015
 // rtaRoutes[routeIndex] is the polyline; rtaRouteMarkers[routeIndex] is the set of markers; rtaRtStartInfoWindows[routeIndex] is the infoWindow.
 
 	var numMarkers = rtaRouteMarkers[routeIndex].length;
    var theLDrtid = dbLDRteID[routeIndex];
    //dbLDRteID[theArrayIndex] = ld_side_bar_db_infoArray[theArrayIndex].routeID;
    var textName = ld_side_bar_db_infoArray[routeIndex].theName;
    
    var url = urlPrefix + "ajadminkillldrtrta.php";
    var theParms = "thelddbid=" + theLDrtid;
    downloadPostUrl(url, theParms, function(data, responseCode) {
        if (responseCode === 200) {
            document.getElementById("message").innerHTML = "Route '" + (textName) + "' deleted.";
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Route #" + (theLDrtid) + ", " + (textName) + " deleted. Data: " + data + "<br />";
            }
 /*  ----------------------------------------------------------------------           
            hideCalcRtAndMarker(calcRtIndex);
            calc_side_bar_db_infoArray[calcRtIndex] = null;
            rta_calcRtArray[calcRtIndex].startMarker.setMap(null);
            calc_side_bar_route_htmlArray[calcRtIndex] = null;
            if (rta_Maptype === "mapcenter") {
                refreshAnySidebar("calcRtSideBar", calc_side_bar_route_htmlArray, "");
            }
            
   
    for (i = 0; i < numMarkers; i++) {
        rtaRouteMarkers[theIndex][i].setMap(null);
    }
            
 -----------------------------------------------------------------------      */     
            hideLDRoute(routeIndex);
            
            //calc_side_bar_db_infoArray[calcRtIndex] = null;
            ld_side_bar_db_infoArray[routeIndex] = null;
            
            //rta_calcRtArray[calcRtIndex].startMarker.setMap(null);
            //rtaRouteMarkers[routeIndex].startMarker.setMap(null);		
            
			for (i = 0; i < numMarkers; i++) {
				rtaRouteMarkers[routeIndex][i].setMap(null);
			}
            
            //calc_side_bar_route_htmlArray[calcRtIndex] = null;
            side_bar_route_htmlArray[routeIndex] = null;
            
            
            if (rta_Maptype === "mapcenter") {
                refreshAnySidebar("routeList", side_bar_route_htmlArray, ""); // replaced
            }
        } else {
            document.getElementById("message").innerHTML += " Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        }
        exitRtePlaceMode();
    });
}

function deleteLDRoute(routeIndex) {   // Added 6/22/2015
    var theReply = false;
    theReply = confirm("Permanently delete this route? Any maps saved with this route will be incomplete.");
    if (theReply) {
        removeLDRtFromDb(routeIndex);
    } else {
        return;
    }
}

function delLDRtData(routeIndex) {
    var i;
    var infoWindDescriptionID = "ldrtinfoAddress" + (routeIndex);
    rtaRoutes[routeIndex].setMap(null);
    rtaRtStartInfoWindows[routeIndex].close();
    side_bar_route_htmlArray[routeIndex] = [];
    for (i = 0; i < rtaRouteMarkers[routeIndex].length; i++) {
        if (rtaRouteMarkers[routeIndex][i]) {
            rtaRouteMarkers[routeIndex][i].setMap(null);
            rtaRouteMarkers[routeIndex][i] = null;
        }
    }
    refreshAnySidebar("routeList", side_bar_route_htmlArray, "");
    exitRtePlaceMode();
    document.getElementById("message").innerHTML = "<br />";
}

function clearMap() {
    var i;
    var numThings = rtaPOIArray.length;
    var theCurrRt = currRTAMap[0][0];
    if (!hasControls) {
        return;
    }
    for (i = 0; i < numThings; i++) {
        if (rtaPOIArray[i]) {
            if (rtaPOIArray[i].theMarker.getVisible()) {
                rtaPOIArray[i].theInfowindow.close();
                rtaPOIArray[i].theMarker.setVisible(false);
            }
        }
    }
    if (theCurrRt > -2) {
        hideCalcRtAndMarker(theCurrRt);
    }
    numThings = rtaRoutes.length;
    for (i = 0; i < numThings; i++) {
        if (rtaRoutes[i]) {
            if (rtaRoutes[i].getMap() == RTAMap) {
                hideLDRoute(i);
            }
        }
    }
    numThings = poiSearchArray.length;
    for (i = 0; i < numThings; i++) {
        if (poiSearchArray[i]) {
            if (poiSearchArray[i].theMarker.getVisible()) {
                if (poiSearchArray[i].theInfowindow) {
                    poiSearchArray[i].theInfowindow.close();
                }
                poiSearchArray[i].theMarker.setVisible(false);
            }
        }
    }
    numThings = rtaSearchLDRoutes.length;
    for (i = 0; i < numThings; i++) {
        if (rtaSearchLDRoutes[i]) {
            if (rtaSearchLDRoutes[i].getMap() == RTAMap) {
                hideSrchLDRoute(i);
            }
        }
    }
    currRTAMap[3] = -2;
    currRTAMap[4] = '';
    zIndexCtr = 0;
    if (rta_canSaveRoute) {
        document.getElementById("savemap").disabled = true;
        document.getElementById("getMapLink").disabled = true;
    }
    if ((rta_Maptype === "mapcenter") || (rta_Maptype === "admin")) {
        document.getElementById("savmaprtalib").disabled = true;
    }
    if (elevationChartShown) {
    	closeChart();
    	elevationChartShown = false;
    	clearMouseMarker();
    }
    setMapIsCurrentFlag(false);
    exitRtePlaceMode();
    eraseMessage();
}

function clearTheCoords() {
    endRtLatLng = null;
    document.getElementById("text7").innerHTML = "";
    clickForEndRt = false;
    startRtLatLng = null;
    document.getElementById("text6").innerHTML = "";
    clickForStartRt = false;
    exitRtePlaceMode();
    eraseMessage();
}

function rtAddPlace() {
    if (routeModeBool) {
        routeModeBool = false;
        google.maps.event.removeListener(rtaRouteClickListener);
    }
    rtaOnceClickListener = google.maps.event.addListenerOnce(RTAMap, 'click', function(mEvent) {
        addPlaceMarker(mEvent);
    });
    inPlaceMarkerMode = true;
    enterAddPlaceMode();
    document.getElementById("message").innerHTML = "Click on map to add a 'custom place' marker<br />";
}

function changeSrchRA_Type(theSrchPOIIndex) {
    var idSrchRA_TypeString = "typeOfSrchRA" + theSrchPOIIndex;
    var theElement = document.getElementById(idSrchRA_TypeString);
    var i;
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            poiSearchArray[theSrchPOIIndex].theType = parseInt(theElement.options[i].value, 10);
            break;
        }
    }
}

function changeSrchCountry(thePOIIndex) {
    var i;
    var srchCountryTypeString = "srchcountry" + thePOIIndex;
    var theElement = document.getElementById(srchCountryTypeString);
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            rtaTheSearchCountryValue[thePOIIndex] = parseInt(theElement.options[i].value, 10);
            break;
        }
    }
}

function changeSrchMCountry(thePOIIndex) {
    var i;
    var mCountryTypeString = "msrchcountry" + thePOIIndex;
    var theElement = document.getElementById(mCountryTypeString);
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            rtaTheSearchMCountryValue[thePOIIndex] = parseInt(theElement.options[i].value, 10);
            break;
        }
    }
}

function changeSrchCC1(thePOIIndex) {
    var cc1ValueStrng = "srchcc1" + thePOIIndex;
    var theElement = document.getElementById(cc1ValueStrng);
    var i;
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            rta_CC1SearchValue[thePOIIndex] = parseInt(theElement.options[i].value, 10);
            break;
        }
    }
}

function changeSrchCC2(thePOIIndex) {
    var cc2ValueStrng = "srchcc2" + thePOIIndex;
    var theElement = document.getElementById(cc2ValueStrng);
    var i;
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            rta_CC2SearchValue[thePOIIndex] = parseInt(theElement.options[i].value, 10);
            break;
        }
    }
}

function changeSrchCC3(thePOIIndex) {
    var cc3ValueStrng = "srchcc3" + thePOIIndex;
    var theElement = document.getElementById(cc3ValueStrng);
    var i;
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            rta_CC3SearchValue[thePOIIndex] = parseInt(theElement.options[i].value, 10);
            break;
        }
    }
}

function changeCountry(thePOIIndex) {
    var i;
    var countryTypeString = "country" + thePOIIndex;
    var theElement = document.getElementById(countryTypeString);
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            rtaTheCountryValue[thePOIIndex] = parseInt(theElement.options[i].value, 10);
            break;
        }
    }
}

function changeMCountry(thePOIIndex) {
    var i;
    var mCountryTypeString = "mcountry" + thePOIIndex;
    var theElement = document.getElementById(mCountryTypeString);
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            rtaTheMCountryValue[thePOIIndex] = parseInt(theElement.options[i].value, 10);
            break;
        }
    }
}

function changeCC1(thePOIIndex) {
    var cc1ValueStrng = "cc1" + thePOIIndex;
    var theElement = document.getElementById(cc1ValueStrng);
    var i;
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            rta_CC1Value[thePOIIndex] = parseInt(theElement.options[i].value, 10);
            break;
        }
    }
}

function changeCC2(thePOIIndex) {
    var cc2ValueStrng = "cc2" + thePOIIndex;
    var theElement = document.getElementById(cc2ValueStrng);
    var i;
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            rta_CC2Value[thePOIIndex] = parseInt(theElement.options[i].value, 10);
            break;
        }
    }
}

function changeCC3(thePOIIndex) {
    var cc3ValueStrng = "cc3" + thePOIIndex;
    var theElement = document.getElementById(cc3ValueStrng);
    var i;
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            rta_CC3Value[thePOIIndex] = parseInt(theElement.options[i].value, 10);
            break;
        }
    }
}

function changeRA_Type(thePOIIndex) {
    var idRA_TypeString = "typeOfRA" + thePOIIndex;
    var theElement = document.getElementById(idRA_TypeString);
    var i;
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            rtaTheTypeValue[thePOIIndex] = parseInt(theElement.options[i].value, 10);
            break;
        }
    }
}

function deleteCurrPOI(poIndex) {
    google.maps.event.clearInstanceListeners(rtaPOIArray[poIndex].theInfowindow);
    rtaPOIArray[poIndex].theInfowindow.close();
    rtaPOIArray[poIndex].theMarker.setVisible(false);
    rtaPOIArray[poIndex].theMarker.setMap(null);
    rtaPOIArray[poIndex] = null;
    side_bar_htmlArray[poIndex] = null;
    refreshAnySidebar("poiList", side_bar_htmlArray, "");
    setMapIsCurrentFlag(false);
    exitRtePlaceMode();
    eraseMessage();
}

function cancelEditPOI(theIndex) {
    rtaPOIArray[theIndex].theInfowindow.close();
    rtaPOIArray[theIndex].theMarker.setDraggable(false);
    rtaPOIArray[theIndex].theInfowindow.setContent(rtaPOIArray[theIndex].theHTML);
    google.maps.event.clearInstanceListeners(rtaPOIArray[theIndex].theInfowindow);
    var windOpt = {
        maxWidth: 220
    };
    rtaPOIArray[theIndex].theInfowindow.setOptions(windOpt);
    rtaPOIArray[theIndex].theInfowindow.open(RTAMap, rtaPOIArray[theIndex].theMarker);
}

function cancelEditSearchPOI(theIndex) {
    var oldHtml = poiSearchArray[theIndex].theHTML;
    var windOpt;
    poiSearchArray[theIndex].theInfowindow.close();
    google.maps.event.clearInstanceListeners(poiSearchArray[theIndex].theInfowindow);
    poiSearchArray[theIndex].theMarker.setDraggable(false);
    poiSearchArray[theIndex].theInfowindow.setContent(oldHtml);
    windOpt = {
        maxWidth: 220
    };
    poiSearchArray[theIndex].theInfowindow.setOptions(windOpt);
    poiSearchArray[theIndex].theInfowindow.open(RTAMap, poiSearchArray[theIndex].theMarker);
}

function editCurrSearchPOI(poiIndex) {
    var posStrg = poiSearchArray[poiIndex].thePosition.toUrlValue(6) + "";
    var i, j;
    var ifYouGoString = "";
    var searchTermsString = '';
    var searchTermsMenu = '';
    var mailingAddressString = "";
    var photoCreditString = "";
    var idSrchRA_TypeString = "typeOfSrchRA" + poiIndex;
    var countryTypeString = "srchcountry" + poiIndex;
    var mCountryTypeString = "msrchcountry" + poiIndex;
    var cc1ValueStrng = "srchcc1" + poiIndex;
    var cc2ValueStrng = "srchcc2" + poiIndex;
    var cc3ValueStrng = "srchcc3" + poiIndex;
    var selectArray = [];
    var selectCArray = [];
    var selectMCArray = [];
    var selectCC1Array = [];
    var selectCC2Array = [];
    var selectCC3Array = [];
    var theSearchRA_Type = parseInt(poiSearchArray[poiIndex].theType, 10);
    var rtaCountryType = rtaTheSearchCountryValue[poiIndex];
    var rtaMCountryType = rtaTheSearchMCountryValue[poiIndex];
    var countryNum = rta_RA_CountryArray.length;
    var phCountryNum = rta_CountryCodeArray.length;
    var newRtaHtml;
    var windOpt;
    cannedSearchTerms = '';
    if (theSearchRA_Type < 101 || theSearchRA_Type > 111) {
        theSearchRA_Type = 108;
    }
    if (theSearchRA_Type === 109) {
        theSearchRA_Type = 108;
    }
    for (i = 101; i < 111; i++) {
        selectArray[i] = "";
    }
    selectArray[theSearchRA_Type] = "selected";
    for (j = 0; j < countryNum; j++) {
        selectCArray[j] = "";
    }
    selectCArray[rtaCountryType] = "selected";
    for (j = 0; j < countryNum; j++) {
        selectMCArray[j] = "";
    }
    selectMCArray[rtaMCountryType] = "selected";
    for (j = 0; j < phCountryNum; j++) {
        selectCC1Array[j] = '';
    }
    for (j = 0; j < phCountryNum; j++) {
        selectCC2Array[j] = '';
    }
    for (j = 0; j < phCountryNum; j++) {
        selectCC3Array[j] = '';
    }
    selectCC1Array[rta_CC1Value[poiIndex]] = 'selected';
    selectCC2Array[rta_CC2Value[poiIndex]] = 'selected';
    selectCC3Array[rta_CC3Value[poiIndex]] = 'selected';
    if (rta_canSuggestRoute) {
        ifYouGoString = '<tr><td>If you go:</td> <td><textarea id="ifyougo" rows="5" cols="20">' + (poiSearchArray[poiIndex].theIfYouGo) + '</textarea></td> </tr>';
        searchTermsString = '<td>Search Terms:</td> <td><textarea id="keywords" rows="4" cols="20">' + (poiSearchArray[poiIndex].theKeywords) + '</textarea></td>';
        searchTermsMenu = '<td><select id="SearchTermsMenu" name="searchtermsmenu" onchange="changeSearchTermsMenu()" multiple>' + '<option value="camping">Camping</option>' + '<option value="couples">Couples</option>' + '<option value="family">Family</option>' + '<option value="hiking">Hiking</option>' + '<option value="pets">Pets</option>' + '<option value="rv1">RVs</option>' + '<option value="seniors">Seniors</option>' + '<option value="single">Single</option>' + '<option value="teens">Teens</option>' + '<option value="swimming">Swimming</option>' + '<option value="theme park">Theme park</option>' + '<option value="wheelchair">Wheelchair</option>' + '</select></td></tr><tr></table><table>';
        photoCreditString = '</table><table><tr><td>Photo credit</td> <td> name: </td><td><input type="text" id="photocredname" value="' + (poiSearchArray[poiIndex].thePhotoCredit) + '"/></td> </tr>' + '<tr><td></td> <td> URL: </td> <td><input type="text" id="photocredurl" value="' + (poiSearchArray[poiIndex].thePhotoCredURL) + '"/></td> </tr>' + '<tr><td>Description credit</td> <td> name: </td> <td><input type="text" id="desccredname" value="' + (poiSearchArray[poiIndex].theDescCredit) + '"/></td> </tr>' + '<tr><td></td> <td> URL: </td> <td><input type="text" id="desccredurl" value="' + (poiSearchArray[poiIndex].theDescCredURL) + '"/></td> </tr>';
        mailingAddressString = '<table><tr><td>Mailing address 1:</td><td><input type="text" id="rtamaddress1" value="' + (poiSearchArray[poiIndex].theMAddress1) + '"/></td></tr>' + '<tr><td>Mailing address 2:</td> <td><input type="text" id="rtamaddress2" value="' + (poiSearchArray[poiIndex].theMAddress2) + '"/> </td> </tr>' + '<tr><td>Mailing address 3:</td> <td><input type="text" id="rtamaddress3" value="' + (poiSearchArray[poiIndex].theMAddress3) + '"/> </td> </tr>' + '<tr><td>City:</td> <td><input type="text" id="rtamcity" value="' + (poiSearchArray[poiIndex].theMCity) + '"/> </td> </tr>' + '<tr><td>State:</td> <td><input type="text" id="rtamstate" value="' + (poiSearchArray[poiIndex].theMState) + '"/> </td></tr>' + '<tr><td>Postal code:</td> <td><input type="text" id="rtamzip" value="' + (poiSearchArray[poiIndex].theMZip) + '"/> ' + '<select id = "' + mCountryTypeString + '" name="mcountry" onChange="changeSrchMCountry(' + (poiIndex) + ')">' + '<option value="4"' + selectMCArray[4] + '>' + rta_RA_CountryArray[4] + '</option>' + '<option value="0"' + selectMCArray[0] + '>' + rta_RA_CountryArray[0] + '</option>' + '<option value="1"' + selectMCArray[1] + '>' + rta_RA_CountryArray[1] + '</option>' + '<option value="2"' + selectMCArray[2] + '>' + rta_RA_CountryArray[2] + '</option>' + '<option value="3"' + selectMCArray[3] + '>' + rta_RA_CountryArray[3] + '</option>' + "</select></td></tr></table>";
    }
    newRtaHtml = '<div height=500 width=500><table>' + '<tr><td>Title:</td> <td><input type="text" id="name" value="' + (poiSearchArray[poiIndex].theName) + '"/></td></tr>' + '<tr><td>Description:</td> <td><textarea id="description" rows="5" cols="20">' + (poiSearchArray[poiIndex].theDescription) + '</textarea></td></tr>' + ifYouGoString + '<tr><td>Address 1:</td> <td><input type="text" id="rtaaddress1" value="' + (poiSearchArray[poiIndex].theAddress1) + '"/></td></tr>' + '<tr><td>Address 2:</td> <td><input type="text" id="rtaaddress2" value="' + (poiSearchArray[poiIndex].theAddress2) + '"/></td></tr>' + '<tr><td>Address 3:</td> <td><input type="text" id="rtaaddress3" value="' + (poiSearchArray[poiIndex].theAddress3) + '"/></td></tr>' + '<tr><td>City:</td><td><input type="text" id="rtacity" value="' + (poiSearchArray[poiIndex].theCity) + '"/></td></tr>' + '<tr><td>State:</td><td><input type="text" id="rtastate" value="' + (poiSearchArray[poiIndex].theState) + '"/></td></tr>' + '<tr><td>Postal code:</td><td><input type="text" id="rtazip" value="' + (poiSearchArray[poiIndex].theZip) + '"/>' + '<select id = "' + countryTypeString + '" name="country" onChange="changeSrchCountry(' + (poiIndex) + ')">' + '<option value="4"' + selectCArray[4] + '>' + rta_RA_CountryArray[4] + '</option>' + '<option value="0"' + selectCArray[0] + '>' + rta_RA_CountryArray[0] + '</option>' + '<option value="1"' + selectCArray[1] + '>' + rta_RA_CountryArray[1] + '</option>' + '<option value="2"' + selectCArray[2] + '>' + rta_RA_CountryArray[2] + '</option>' + '<option value="3"' + selectCArray[3] + '>' + rta_RA_CountryArray[3] + '</option>' + "</select></td></tr>" + '<tr><td>Email:</td> <td><input type="text" id="rtaemail" value="' + (poiSearchArray[poiIndex].theEmail) + '"/> </td></tr>' + '</table><br />' + mailingAddressString + 'Telephone numbers: country code, area code, number, extension.' + '<table>' + '<tr><td>Phone number for: </td></tr><tr><td><input type="text" id="phonelabel1" value="' + (poiSearchArray[poiIndex].thePhoneLabel1) + '"/></td></tr>' + '<tr><td><select id = "' + cc1ValueStrng + '" name="cc1" onChange="changeSrchCC1(' + (poiIndex) + ')">' + '<option value="0" ' + selectCC1Array[0] + '>' + rta_CountryCodeArray[0] + '</option>' + '<option value="1" ' + selectCC1Array[1] + '>' + rta_CountryCodeArray[1] + '</option>' + '<option value="2" ' + selectCC1Array[2] + '>' + rta_CountryCodeArray[2] + '</option>' + '<option value="3" ' + selectCC1Array[3] + '>' + rta_CountryCodeArray[3] + '</option>' + '<option value="4" ' + selectCC1Array[4] + '>' + rta_CountryCodeArray[4] + '</option>' + '<option value="5" ' + selectCC1Array[5] + '>' + rta_CountryCodeArray[5] + '</option>' + '<option value="6" ' + selectCC1Array[6] + '>' + rta_CountryCodeArray[6] + '</option>' + '<option value="7" ' + selectCC1Array[7] + '>' + rta_CountryCodeArray[7] + '</option>' + "</select></td>" + '<td><input type="text" size="3" id="rtaarea1" value="' + (poiSearchArray[poiIndex].thePhone12) + '"/> </td>' + '<td><input type="text" size="8" id="rtaphnum1" value="' + (poiSearchArray[poiIndex].thePhone13) + '"/>' + '</td><td> ext. <input type="text" size="5" id="rtaext1" value="' + (poiSearchArray[poiIndex].thePhone14) + '"/> </td> </tr>' + '<tr><td>Phone number for: </td></tr><tr><td><input type="text" id="phonelabel2" value="' + (poiSearchArray[poiIndex].thePhoneLabel2) + '"/></td></tr>' + '<tr><td><select id = "' + cc2ValueStrng + '" name="cc2" onChange="changeSrchCC2(' + (poiIndex) + ')">' + '<option value="0" ' + selectCC2Array[0] + '>' + rta_CountryCodeArray[0] + '</option>' + '<option value="1" ' + selectCC2Array[1] + '>' + rta_CountryCodeArray[1] + '</option>' + '<option value="2" ' + selectCC2Array[2] + '>' + rta_CountryCodeArray[2] + '</option>' + '<option value="3" ' + selectCC2Array[3] + '>' + rta_CountryCodeArray[3] + '</option>' + '<option value="4" ' + selectCC2Array[4] + '>' + rta_CountryCodeArray[4] + '</option>' + '<option value="5" ' + selectCC2Array[5] + '>' + rta_CountryCodeArray[5] + '</option>' + '<option value="6" ' + selectCC2Array[6] + '>' + rta_CountryCodeArray[6] + '</option>' + '<option value="7" ' + selectCC2Array[7] + '>' + rta_CountryCodeArray[7] + '</option>' + "</select></td>" + '<td><input type="text" size="3" id="rtaarea2" value="' + (poiSearchArray[poiIndex].thePhone22) + '"/> </td>' + '<td><input type="text" size="8" id="rtaphnum2" value="' + (poiSearchArray[poiIndex].thePhone23) + '"/>' + '</td><td> ext. <input type="text" size="5" id="rtaext2" value="' + (poiSearchArray[poiIndex].thePhone24) + '"/> </td> </tr>' + '<tr><td>Phone number for: </td></tr><tr><td><input type="text" id="phonelabel3" value="' + (poiSearchArray[poiIndex].thePhoneLabel3) + '"/></td></tr>' + '<tr><td><select id = "' + cc3ValueStrng + '" name="cc3" onChange="changeSrchCC3(' + (poiIndex) + ')">' + '<option value="0" ' + selectCC3Array[0] + '>' + rta_CountryCodeArray[0] + '</option>' + '<option value="1" ' + selectCC3Array[1] + '>' + rta_CountryCodeArray[1] + '</option>' + '<option value="2" ' + selectCC3Array[2] + '>' + rta_CountryCodeArray[2] + '</option>' + '<option value="3" ' + selectCC3Array[3] + '>' + rta_CountryCodeArray[3] + '</option>' + '<option value="4" ' + selectCC3Array[4] + '>' + rta_CountryCodeArray[4] + '</option>' + '<option value="5" ' + selectCC3Array[5] + '>' + rta_CountryCodeArray[5] + '</option>' + '<option value="6" ' + selectCC3Array[6] + '>' + rta_CountryCodeArray[6] + '</option>' + '<option value="7" ' + selectCC3Array[7] + '>' + rta_CountryCodeArray[7] + '</option>' + "</select></td>" + '<td><input type="text" size="3" id="rtaarea3" value="' + (poiSearchArray[poiIndex].thePhone32) + '"/> </td>' + '<td><input type="text" size="8" id="rtaphnum3" value="' + (poiSearchArray[poiIndex].thePhone33) + '"/>' + '</td><td> ext. <input type="text" size="5" id="rtaext3" value="' + (poiSearchArray[poiIndex].thePhone34) + '"/> </td> </tr>' + "</table>" + "</table><table>" + '<tr><td>Photo URL:</td> <td><input type="text" id="photo1" value="' + (poiSearchArray[poiIndex].thePhoto1) + '"/></td> </tr>' + '<td>Photo title:</td> <td><input type="text" id="phototitle" value="' + (poiSearchArray[poiIndex].thePhotoTitle) + '"/></td> </tr>' + photoCreditString + "</table><table>" + '<tr><th>Links:</th><td> </td><td>URL:</td><td><input type="text" id="rtalink1" value="' + (poiSearchArray[poiIndex].theLink1) + '"/></td>' + '<td></td><td> </td><td>Text:</td><td><input type="text" id="rtaanchor1" value="' + (poiSearchArray[poiIndex].theAnchor1) + '"/></td></tr>' + '<tr><td></td><td> </td><td>URL:</td><td><input type="text" id="rtalink2" value="' + (poiSearchArray[poiIndex].theLink2) + '"/></td>' + '<td></td><td> </td><td>Text:</td><td><input type="text" id="rtaanchor2" value="' + (poiSearchArray[poiIndex].theAnchor2) + '"/></td></tr>' + '<tr><td></td><td> </td><td>URL:</td><td><input type="text" id="rtalink3" value="' + (poiSearchArray[poiIndex].theLink3) + '"/></td>' + '<td></td><td> </td><td>Text:</td><td><input type="text" id="rtaanchor3" value="' + (poiSearchArray[poiIndex].theAnchor3) + '"/></td></tr>' + '</table><table>' + '<tr>' + searchTermsString + searchTermsMenu + '</td><td><select id = "' + idSrchRA_TypeString + '" name="typeOfRA" onChange="changeSrchRA_Type(' + (poiIndex) + ')">' + '<option value="101"' + selectArray[101] + '>' + rta_RA_TypesArray[101] + '</option>' + '<option value="102"' + selectArray[102] + '>' + rta_RA_TypesArray[102] + '</option>' + '<option value="103"' + selectArray[103] + '>' + rta_RA_TypesArray[103] + '</option>' + '<option value="104"' + selectArray[104] + '>' + rta_RA_TypesArray[104] + '</option>' + '<option value="105"' + selectArray[105] + '>' + rta_RA_TypesArray[105] + '</option>' + '<option value="106"' + selectArray[106] + '>' + rta_RA_TypesArray[106] + '</option>' + '<option value="107"' + selectArray[107] + '>' + rta_RA_TypesArray[107] + '</option>' + '<option value="110"' + selectArray[110] + '>' + rta_RA_TypesArray[110] + '</option>' + '<option value="108"' + selectArray[108] + '>' + rta_RA_TypesArray[108] + '</option>' + '</select></td>' + '</tr>' + '<tr><td>Position: </td> <td>' + posStrg + '</td> </tr>' + '<tr><td><a href="javascript:cancelEditSearchPOI(' + (poiIndex) + ')"><b>' + 'Cancel' + '</b><\/a></td>' + '<td><a href="javascript:updateSearchPOIData(' + (poiIndex) + ')"><b>' + 'Save Changes' + '</b><\/a></td></tr>' + '</table><table><tr><td>' + rta_Copyright_Line + '</td> </tr>' + '</table></div>';
    poiSearchArray[poiIndex].theInfowindow.close();
    poiSearchArray[poiIndex].theInfowindow.setContent(newRtaHtml);
    windOpt = {
        maxWidth: 600
    };
    poiSearchArray[poiIndex].theInfowindow.setOptions(windOpt);
    poiSearchArray[poiIndex].theInfowindow.open(RTAMap, poiSearchArray[poiIndex].theMarker);
    google.maps.event.addListenerOnce(poiSearchArray[poiIndex].theInfowindow, "closeclick", function() {
        cancelEditSearchPOI(poiIndex);
    });
    poiSearchArray[poiIndex].theMarker.setDraggable(true);
    whenSearchPOIMarkerIsDragged(poiSearchArray[poiIndex].theMarker, poiIndex);
}

function editCurrPOI(poiIndex) {
    var posStrg = rtaPOIArray[poiIndex].thePosition.toUrlValue(6) + "";
    var i, j;
    var ifYouGoString = "";
    var searchTermsString = '';
    var searchTermsMenu = '';
    var mailingAddressString = "";
    var photoCreditString = "";
    var idRA_TypeString = "typeOfRA" + poiIndex;
    var countryTypeString = "country" + poiIndex;
    var mCountryTypeString = "mcountry" + poiIndex;
    var cc1ValueStrng = "cc1" + poiIndex;
    var cc2ValueStrng = "cc2" + poiIndex;
    var cc3ValueStrng = "cc3" + poiIndex;
    var selectArray = [];
    var selectCArray = [];
    var selectMCArray = [];
    var selectCC1Array = [];
    var selectCC2Array = [];
    var selectCC3Array = [];
    var rtaTheTypeThang = rtaTheTypeValue[poiIndex];
    var rtaCountryType = rtaTheCountryValue[poiIndex];
    var rtaMCountryType = rtaTheMCountryValue[poiIndex];
    var countryNum = rta_RA_CountryArray.length;
    var phCountryNum = rta_CountryCodeArray.length;
    var newRtaHtml;
    var windOpt;
    cannedSearchTerms = '';
    if (rtaTheTypeThang < 1 || rtaTheTypeThang > 10) {
        rtaTheTypeThang = 9;
    }
    for (i = 1; i < 11; i++) {
        selectArray[i] = "";
    }
    selectArray[rtaTheTypeThang] = "selected";
    for (j = 0; j < countryNum; j++) {
        selectCArray[j] = "";
    }
    selectCArray[rtaCountryType] = "selected";
    for (j = 0; j < countryNum; j++) {
        selectMCArray[j] = "";
    }
    selectMCArray[rtaMCountryType] = "selected";
    for (j = 0; j < phCountryNum; j++) {
        selectCC1Array[j] = '';
    }
    for (j = 0; j < phCountryNum; j++) {
        selectCC2Array[j] = '';
    }
    for (j = 0; j < phCountryNum; j++) {
        selectCC3Array[j] = '';
    }
    selectCC1Array[rta_CC1Value[poiIndex]] = 'selected';
    selectCC2Array[rta_CC2Value[poiIndex]] = 'selected';
    selectCC3Array[rta_CC3Value[poiIndex]] = 'selected';
    if (rta_canSuggestRoute) {
        ifYouGoString = '<tr><td>If you go:</td> <td><textarea id="ifyougo" rows="5" cols="20">' + (rtaPOIArray[poiIndex].theIfYouGo) + '</textarea></td> </tr>';
        searchTermsString = '<tr><td>Search terms:</td> <td><textarea id="keywords" rows="4" cols="20">' + (rtaPOIArray[poiIndex].theKeywords) + '</textarea></td>';
        searchTermsMenu = '<td><select id="SearchTermsMenu" name="searchtermsmenu" onchange="changeSearchTermsMenu()" multiple>' + '<option value="camping">Camping</option>' + '<option value="couples">Couples</option>' + '<option value="family">Family</option>' + '<option value="hiking">Hiking</option>' + '<option value="pets">Pets</option>' + '<option value="rv1">RVs</option>' + '<option value="seniors">Seniors</option>' + '<option value="single">Single</option>' + '<option value="teens">Teens</option>' + '<option value="swimming">Swimming</option>' + '<option value="theme park">Theme park</option>' + '<option value="wheelchair">Wheelchair</option>' + '</select></td></tr></table><table>';
        photoCreditString = '</table><table><tr><td>Photo credit</td> <td> name: </td><td><input type="text" id="photocredname" value="' + (rtaPOIArray[poiIndex].thePhotoCredit) + '"/></td> </tr>' + '<tr><td></td> <td> URL: </td> <td><input type="text" id="photocredurl" value="' + (rtaPOIArray[poiIndex].thePhotoCredURL) + '"/></td> </tr>' + '<tr><td>Description credit</td> <td> name: </td> <td><input type="text" id="desccredname" value="' + (rtaPOIArray[poiIndex].theDescCredit) + '"/></td> </tr>' + '<tr><td></td> <td> URL: </td> <td><input type="text" id="desccredurl" value="' + (rtaPOIArray[poiIndex].theDescCredURL) + '"/></td> </tr>';
        mailingAddressString = '<table><tr><td>Mailing address 1:</td><td><input type="text" id="rtamaddress1" value="' + (rtaPOIArray[poiIndex].theMAddress1) + '"/></td></tr>' + '<tr><td>Mailing address 2:</td> <td><input type="text" id="rtamaddress2" value="' + (rtaPOIArray[poiIndex].theMAddress2) + '"/> </td> </tr>' + '<tr><td>Mailing address 3:</td> <td><input type="text" id="rtamaddress3" value="' + (rtaPOIArray[poiIndex].theMAddress3) + '"/> </td> </tr>' + '<tr><td>City:</td> <td><input type="text" id="rtamcity" value="' + (rtaPOIArray[poiIndex].theMCity) + '"/> </td> </tr>' + '<tr><td>State:</td> <td><input type="text" id="rtamstate" value="' + (rtaPOIArray[poiIndex].theMState) + '"/> </td></tr>' + '<tr><td>Postal code:</td> <td><input type="text" id="rtamzip" value="' + (rtaPOIArray[poiIndex].theMZip) + '"/> ' + '<select id = "' + mCountryTypeString + '" name="mcountry" onChange="changeMCountry(' + (poiIndex) + ')">' + '<option value="4"' + selectMCArray[4] + '>' + rta_RA_CountryArray[4] + '</option>' + '<option value="0"' + selectMCArray[0] + '>' + rta_RA_CountryArray[0] + '</option>' + '<option value="1"' + selectMCArray[1] + '>' + rta_RA_CountryArray[1] + '</option>' + '<option value="2"' + selectMCArray[2] + '>' + rta_RA_CountryArray[2] + '</option>' + '<option value="3"' + selectMCArray[3] + '>' + rta_RA_CountryArray[3] + '</option>' + "</select></td></tr></table>";
    }
    newRtaHtml = '<div height=500 width=500><table>' + '<tr><td>Title:</td> <td><input type="text" id="name" value="' + (rtaPOIArray[poiIndex].theName) + '"/></td></tr>' + '<tr><td>Description:</td> <td><textarea id="description" rows="5" cols="20">' + (rtaPOIArray[poiIndex].theDescription) + '</textarea></td></tr>' + ifYouGoString + '<tr><td>Address 1:</td> <td><input type="text" id="rtaaddress1" value="' + (rtaPOIArray[poiIndex].theAddress1) + '"/></td></tr>' + '<tr><td>Address 2:</td> <td><input type="text" id="rtaaddress2" value="' + (rtaPOIArray[poiIndex].theAddress2) + '"/></td></tr>' + '<tr><td>Address 3:</td> <td><input type="text" id="rtaaddress3" value="' + (rtaPOIArray[poiIndex].theAddress3) + '"/></td></tr>' + '<tr><td>City:</td><td><input type="text" id="rtacity" value="' + (rtaPOIArray[poiIndex].theCity) + '"/></td></tr>' + '<tr><td>State:</td><td><input type="text" id="rtastate" value="' + (rtaPOIArray[poiIndex].theState) + '"/></td></tr>' + '<tr><td>Postal code:</td><td><input type="text" id="rtazip" value="' + (rtaPOIArray[poiIndex].theZip) + '"/>' + '<select id = "' + countryTypeString + '" name="country" onChange="changeCountry(' + (poiIndex) + ')">' + '<option value="4"' + selectCArray[4] + '>' + rta_RA_CountryArray[4] + '</option>' + '<option value="0"' + selectCArray[0] + '>' + rta_RA_CountryArray[0] + '</option>' + '<option value="1"' + selectCArray[1] + '>' + rta_RA_CountryArray[1] + '</option>' + '<option value="2"' + selectCArray[2] + '>' + rta_RA_CountryArray[2] + '</option>' + '<option value="3"' + selectCArray[3] + '>' + rta_RA_CountryArray[3] + '</option>' + "</select></td></tr>" + '<tr><td>Email:</td> <td><input type="text" id="rtaemail" value="' + (rtaPOIArray[poiIndex].theEmail) + '"/> </td></tr>' + '</table><br />' + mailingAddressString + 'Telephone numbers: country code, area code, number, extension.' + '<table>' + '<tr><td>Phone number for: </td></tr><tr><td><input type="text" id="phonelabel1" value="' + (rtaPOIArray[poiIndex].thePhoneLabel1) + '"/></td></tr>' + '<tr><td><select id = "' + cc1ValueStrng + '" name="cc1" onChange="changeCC1(' + (poiIndex) + ')">' + '<option value="0" ' + selectCC1Array[0] + '>' + rta_CountryCodeArray[0] + '</option>' + '<option value="1" ' + selectCC1Array[1] + '>' + rta_CountryCodeArray[1] + '</option>' + '<option value="2" ' + selectCC1Array[2] + '>' + rta_CountryCodeArray[2] + '</option>' + '<option value="3" ' + selectCC1Array[3] + '>' + rta_CountryCodeArray[3] + '</option>' + '<option value="4" ' + selectCC1Array[4] + '>' + rta_CountryCodeArray[4] + '</option>' + '<option value="5" ' + selectCC1Array[5] + '>' + rta_CountryCodeArray[5] + '</option>' + '<option value="6" ' + selectCC1Array[6] + '>' + rta_CountryCodeArray[6] + '</option>' + '<option value="7" ' + selectCC1Array[7] + '>' + rta_CountryCodeArray[7] + '</option>' + "</select></td>" + '<td><input type="text" size="3" id="rtaarea1" value="' + (rtaPOIArray[poiIndex].thePhone12) + '"/> </td>' + '<td><input type="text" size="8" id="rtaphnum1" value="' + (rtaPOIArray[poiIndex].thePhone13) + '"/>' + '</td><td> ext. <input type="text" size="5" id="rtaext1" value="' + (rtaPOIArray[poiIndex].thePhone14) + '"/> </td> </tr>' + '<tr><td>Phone number for: </td></tr><tr><td><input type="text" id="phonelabel2" value="' + (rtaPOIArray[poiIndex].thePhoneLabel2) + '"/></td></tr>' + '<tr><td><select id = "' + cc2ValueStrng + '" name="cc2" onChange="changeCC2(' + (poiIndex) + ')">' + '<option value="0" ' + selectCC2Array[0] + '>' + rta_CountryCodeArray[0] + '</option>' + '<option value="1" ' + selectCC2Array[1] + '>' + rta_CountryCodeArray[1] + '</option>' + '<option value="2" ' + selectCC2Array[2] + '>' + rta_CountryCodeArray[2] + '</option>' + '<option value="3" ' + selectCC2Array[3] + '>' + rta_CountryCodeArray[3] + '</option>' + '<option value="4" ' + selectCC2Array[4] + '>' + rta_CountryCodeArray[4] + '</option>' + '<option value="5" ' + selectCC2Array[5] + '>' + rta_CountryCodeArray[5] + '</option>' + '<option value="6" ' + selectCC2Array[6] + '>' + rta_CountryCodeArray[6] + '</option>' + '<option value="7" ' + selectCC2Array[7] + '>' + rta_CountryCodeArray[7] + '</option>' + "</select></td>" + '<td><input type="text" size="3" id="rtaarea2" value="' + (rtaPOIArray[poiIndex].thePhone22) + '"/> </td>' + '<td><input type="text" size="8" id="rtaphnum2" value="' + (rtaPOIArray[poiIndex].thePhone23) + '"/>' + '</td><td> ext. <input type="text" size="5" id="rtaext2" value="' + (rtaPOIArray[poiIndex].thePhone24) + '"/> </td> </tr>' + '<tr><td>Phone number for: </td></tr><tr><td><input type="text" id="phonelabel3" value="' + (rtaPOIArray[poiIndex].thePhoneLabel3) + '"/></td></tr>' + '<tr><td><select id = "' + cc3ValueStrng + '" name="cc3" onChange="changeCC3(' + (poiIndex) + ')">' + '<option value="0" ' + selectCC3Array[0] + '>' + rta_CountryCodeArray[0] + '</option>' + '<option value="1" ' + selectCC3Array[1] + '>' + rta_CountryCodeArray[1] + '</option>' + '<option value="2" ' + selectCC3Array[2] + '>' + rta_CountryCodeArray[2] + '</option>' + '<option value="3" ' + selectCC3Array[3] + '>' + rta_CountryCodeArray[3] + '</option>' + '<option value="4" ' + selectCC3Array[4] + '>' + rta_CountryCodeArray[4] + '</option>' + '<option value="5" ' + selectCC3Array[5] + '>' + rta_CountryCodeArray[5] + '</option>' + '<option value="6" ' + selectCC3Array[6] + '>' + rta_CountryCodeArray[6] + '</option>' + '<option value="7" ' + selectCC3Array[7] + '>' + rta_CountryCodeArray[7] + '</option>' + "</select></td>" + '<td><input type="text" size="3" id="rtaarea3" value="' + (rtaPOIArray[poiIndex].thePhone32) + '"/> </td>' + '<td><input type="text" size="8" id="rtaphnum3" value="' + (rtaPOIArray[poiIndex].thePhone33) + '"/>' + '</td><td> ext. <input type="text" size="5" id="rtaext3" value="' + (rtaPOIArray[poiIndex].thePhone34) + '"/> </td> </tr>' + "</table>" + "</table><table>" + '<tr><td>Photo URL:</td> <td><input type="text" id="photo1" value="' + (rtaPOIArray[poiIndex].thePhoto1) + '"/></td> </tr>' + '<td>Photo title:</td> <td><input type="text" id="phototitle" value="' + (rtaPOIArray[poiIndex].thePhotoTitle) + '"/></td> </tr>' + photoCreditString + "</table><table>" + '<tr><th>Links</th></tr>' + '<tr><td>URL:</td><td><input type="text" id="rtalink1" value="' + (rtaPOIArray[poiIndex].theLink1) + '"/></td>' + '<td>Text:</td><td><input type="text" id="rtaanchor1" value="' + (rtaPOIArray[poiIndex].theAnchor1) + '"/></td></tr>' + '<tr><td>URL:</td><td><input type="text" id="rtalink2" value="' + (rtaPOIArray[poiIndex].theLink2) + '"/></td>' + '<td>Text:</td><td><input type="text" id="rtaanchor2" value="' + (rtaPOIArray[poiIndex].theAnchor2) + '"/></td></tr>' + '<td>URL:</td><td><input type="text" id="rtalink3" value="' + (rtaPOIArray[poiIndex].theLink3) + '"/></td>' + '<td>Text:</td><td><input type="text" id="rtaanchor3" value="' + (rtaPOIArray[poiIndex].theAnchor3) + '"/></td></tr>' + '</table><table>' + searchTermsString + searchTermsMenu + '<tr><td><select id = "' + idRA_TypeString + '" name="typeOfRA" onChange="changeRA_Type(' + (poiIndex) + ')">' + '<option value="1"' + selectArray[1] + '>' + rta_RA_TypesArray[1] + '</option>' + '<option value="2"' + selectArray[2] + '>' + rta_RA_TypesArray[2] + '</option>' + '<option value="3"' + selectArray[3] + '>' + rta_RA_TypesArray[3] + '</option>' + '<option value="4"' + selectArray[4] + '>' + rta_RA_TypesArray[4] + '</option>' + '<option value="5"' + selectArray[5] + '>' + rta_RA_TypesArray[5] + '</option>' + '<option value="6"' + selectArray[6] + '>' + rta_RA_TypesArray[6] + '</option>' + '<option value="7"' + selectArray[7] + '>' + rta_RA_TypesArray[7] + '</option>' + '<option value="10"' + selectArray[10] + '>' + rta_RA_TypesArray[10] + '</option>' + '<option value="8"' + selectArray[8] + '>' + rta_RA_TypesArray[8] + '</option>' + '<option value="9"' + selectArray[9] + '>' + rta_RA_TypesArray[9] + '</option>' + '</select></td>' + '</tr>' + '<tr><td>Position: </td> <td>' + posStrg + '</td> </tr>' + '<tr><td><a href="javascript:cancelEditPOI(' + (poiIndex) + ')"><b>' + 'Cancel' + '</b><\/a></td>' + '<td><a href="javascript:updatePOIData(' + (poiIndex) + ')"><b>' + 'Save Changes' + '</b><\/a></td></tr>' + '</table><table><tr><td>' + rta_Copyright_Line + '</td> </tr>' + '</table></div>';
    rtaPOIArray[poiIndex].theInfowindow.close();
    rtaPOIArray[poiIndex].theInfowindow.setContent(newRtaHtml);
    windOpt = {
        maxWidth: 600
    };
    rtaPOIArray[poiIndex].theInfowindow.setOptions(windOpt);
    rtaPOIArray[poiIndex].theInfowindow.open(RTAMap, rtaPOIArray[poiIndex].theMarker);
    google.maps.event.addListenerOnce(rtaPOIArray[poiIndex].theInfowindow, "closeclick", function() {
        cancelEditPOI(poiIndex);
    });
    rtaPOIArray[poiIndex].theMarker.setDraggable(true);
    whenPOIMarkerIsDragged(rtaPOIArray[poiIndex].theMarker, poiIndex);
}

function addPlaceMarker(mEvent) {
    addPlaceMarkerFromLatLng(mEvent.latLng);
}

function changeSearchTermsMenu() {
    var i;
    var theElement = document.getElementById("SearchTermsMenu");
    cannedSearchTerms = '';
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            cannedSearchTerms += theElement.options[i].value + ', ';
        }
    }
}

function addPlaceMarkerFromLatLng(theLatLng) {
    var currindx = rtaPOIArray.length;
    var cc1ValueStrng = "cc1" + currindx;
    var cc2ValueStrng = "cc2" + currindx;
    var cc3ValueStrng = "cc3" + currindx;
    var posStrg = theLatLng.toUrlValue(6) + "";
    var idRA_TypeString = "typeOfRA" + currindx;
    var countryTypeString = "country" + currindx;
    var mCountryTypeString = "mcountry" + currindx;
    var ifYouGoString = '';
    var mailingAddressString = '';
    var photoCreditString = '';
    var searchTermsString = '';
    var searchTermsMenu = '';
    var theLat;
    var theLng;
    var poiIData;
    var windOpt;
    var rtaHtml;
    setMapIsCurrentFlag(false);
    cannedSearchTerms = '';
    rtaTheTypeValue[currindx] = 9;
    rtaTheCountryValue[currindx] = 4;
    rtaTheMCountryValue[currindx] = 4;
    rta_CC1Value[currindx] = 0;
    rta_CC2Value[currindx] = 0;
    rta_CC3Value[currindx] = 0;
    if (rta_canSuggestRoute) {
        ifYouGoString = '<tr><td>If you go:</td> <td><textarea id="ifyougo" rows="5" cols="20"></textarea></td> </tr>';
        mailingAddressString = '<table><tr><td>Mailing address 1:</td> <td><input type="text" id="rtamaddress1"/> </td> </tr>' + '<tr><td>Mailing address 2:</td> <td><input type="text" id="rtamaddress2"/> </td> </tr>' + '<tr><td>Mailing address 3:</td> <td><input type="text" id="rtamaddress3"/> </td> </tr>' + '<tr><td>City:</td> <td><input type="text" id="rtamcity"/> </td> </tr>' + '<tr><td>State:</td> <td><input type="text" id="rtamstate"/> </td></tr>' + '<tr><td>Postal code:</td> <td><input type="text" id="rtamzip"/> ' + '<select id = "' + mCountryTypeString + '" name="mcountry" onChange="changeMCountry(' + (currindx) + ')">' + '<option value="4" selected>' + rta_RA_CountryArray[4] + '</option>' + '<option value="0">' + rta_RA_CountryArray[0] + '</option>' + '<option value="1">' + rta_RA_CountryArray[1] + '</option>' + '<option value="2">' + rta_RA_CountryArray[2] + '</option>' + '<option value="3">' + rta_RA_CountryArray[3] + '</option>' + "</select>" + "</td></tr>" + "</table>";
        photoCreditString = '</table><table><tr><td>Photo credit</td> <td> name: </td> <td><input type="text" id="photocredname" /></td> </tr>' + '<tr><td></td> <td> URL: </td> <td><input type="text" id="photocredurl" /></td> </tr>' + '<tr><td>Description credit&nbsp;</td> <td> name: </td> <td><input type="text" id="desccredname" /></td> </tr>' + '<tr><td></td> <td> URL: </td> <td><input type="text" id="desccredurl" /></td> </tr></table><table>';
        searchTermsString = '<td>Search Terms:</td> <td><textarea id="keywords" rows="4" cols="15"/></textarea></td>';
        searchTermsMenu = '<td><select id="SearchTermsMenu" name="searchtermsmenu" onchange="changeSearchTermsMenu()" multiple>' + '<option value="camping">Camping</option>' + '<option value="couples">Couples</option>' + '<option value="family">Family</option>' + '<option value="hiking">Hiking</option>' + '<option value="pets">Pets</option>' + '<option value="rv1">RVs</option>' + '<option value="seniors">Seniors</option>' + '<option value="single">Single</option>' + '<option value="teens">Teens</option>' + '<option value="swimming">Swimming</option>' + '<option value="theme park">Theme park</option>' + '<option value="wheelchair">Wheelchair</option>' + '</select></td></tr><tr></table><table>';
    }
    rtaHtml = "<div height=500 width=550><table>" + '<tr><td>Title:</td> <td><input type="text" id="name"/> </td> </tr>' + '<tr><td>Description:</td> <td><textarea id="description" rows="5" cols="20"></textarea></td> </tr>' + ifYouGoString + '<tr><td>Address 1:</td> <td><input type="text" id="rtaaddress1"/> </td> </tr>' + '<tr><td>Address 2:</td> <td><input type="text" id="rtaaddress2"/> </td> </tr>' + '<tr><td>Address 3:</td> <td><input type="text" id="rtaaddress3"/> </td> </tr>' + '<tr><td>City:</td> <td><input type="text" id="rtacity"/> </td> </tr>' + '<tr><td>State:</td> <td><input type="text" id="rtastate"/> </td></tr>' + '<tr><td>Postal code:</td> <td><input type="text" id="rtazip"/> ' + '<select id = "' + countryTypeString + '" name="country" onChange="changeCountry(' + (currindx) + ')">' + '<option value="4" selected>' + rta_RA_CountryArray[4] + '</option>' + '<option value="0">' + rta_RA_CountryArray[0] + '</option>' + '<option value="1">' + rta_RA_CountryArray[1] + '</option>' + '<option value="2">' + rta_RA_CountryArray[2] + '</option>' + '<option value="3">' + rta_RA_CountryArray[3] + '</option>' + "</select></td></tr>" + '<tr><td>Email:</td> <td><input type="text" id="rtaemail"/> </td></tr>' + "<br />" + "</table>" + mailingAddressString + 'Telephone numbers: country code, area code, number, extension.' + '<table>' + '<tr><td>Phone number for: </td></tr><tr><td><input type="text" id="phonelabel1"/></td></tr>' + '<tr><td><select id = "' + cc1ValueStrng + '" name="cc1" onChange="changeCC1(' + (currindx) + ')">' + '<option value="0" selected>' + rta_CountryCodeArray[0] + '</option>' + '<option value="1">' + rta_CountryCodeArray[1] + '</option>' + '<option value="2">' + rta_CountryCodeArray[2] + '</option>' + '<option value="3">' + rta_CountryCodeArray[3] + '</option>' + '<option value="4">' + rta_CountryCodeArray[4] + '</option>' + '<option value="5">' + rta_CountryCodeArray[5] + '</option>' + '<option value="6">' + rta_CountryCodeArray[6] + '</option>' + '<option value="7">' + rta_CountryCodeArray[7] + '</option>' + "</select></td>" + '<td><input type="text" size="3" id="rtaarea1"/> </td>' + '<td><input type="text" size="8" id="rtaphnum1"/> </td><td> ext. <input type="text" size="5" id="rtaext1"/> </td> </tr>' + '<tr><td>Phone number for: </td></tr><tr><td><input type="text" id="phonelabel2"/></td></tr>' + '<tr><td><select id = "' + cc2ValueStrng + '" name="cc2" onChange="changeCC2(' + (currindx) + ')">' + '<option value="0" selected>' + rta_CountryCodeArray[0] + '</option>' + '<option value="1">' + rta_CountryCodeArray[1] + '</option>' + '<option value="2">' + rta_CountryCodeArray[2] + '</option>' + '<option value="3">' + rta_CountryCodeArray[3] + '</option>' + '<option value="4">' + rta_CountryCodeArray[4] + '</option>' + '<option value="5">' + rta_CountryCodeArray[5] + '</option>' + '<option value="6">' + rta_CountryCodeArray[6] + '</option>' + '<option value="7">' + rta_CountryCodeArray[7] + '</option>' + "</select></td>" + '<td><input type="text" size="3" id="rtaarea2"/> </td>' + '<td><input type="text" size="8" id="rtaphnum2"/> </td><td> ext. <input type="text" size="5" id="rtaext2"/> </td> </tr>' + '<tr><td>Phone number for: </td></tr><tr><td><input type="text" id="phonelabel3"/></td></tr>' + '<tr><td><select id = "' + cc3ValueStrng + '" name="cc3" onChange="changeCC3(' + (currindx) + ')">' + '<option value="0" selected>' + rta_CountryCodeArray[0] + '</option>' + '<option value="1">' + rta_CountryCodeArray[1] + '</option>' + '<option value="2">' + rta_CountryCodeArray[2] + '</option>' + '<option value="3">' + rta_CountryCodeArray[3] + '</option>' + '<option value="4">' + rta_CountryCodeArray[4] + '</option>' + '<option value="5">' + rta_CountryCodeArray[5] + '</option>' + '<option value="6">' + rta_CountryCodeArray[6] + '</option>' + '<option value="7">' + rta_CountryCodeArray[7] + '</option>' + "</select></td>" + '<td><input type="text" size="3" id="rtaarea3"/> </td>' + '<td><input type="text" size="8" id="rtaphnum3"/> </td><td> ext. <input type="text" size="5" id="rtaext3"/> </td> </tr>' + "</table><table>" + '<tr><td>Photo URL:</td> <td><input type="text" id="photo1" /></td> </tr>' + '<td>Photo title:</td> <td><input type="text" id="phototitle" /></td> </tr>' + photoCreditString + "</table><table>" + '<tr><th>Links:</th></tr>' + '<tr><td>URL:</td><td><input type="text" id="rtalink1" /></td>' + '<td>Text:</td><td><input type="text" id="rtaanchor1" /></td></tr>' + '<tr><td>URL:</td><td><input type="text" id="rtalink2" /></td>' + '<td>Text:</td><td><input type="text" id="rtaanchor2" /></td></tr>' + '<tr><td>URL:</td><td><input type="text" id="rtalink3" /></td>' + '<td>Text:</td><td><input type="text" id="rtaanchor3" /></td></tr>' + "</table><table>" + "<tr>" + searchTermsString + searchTermsMenu + '<td><select id = "' + idRA_TypeString + '" name="typeOfRA" onChange="changeRA_Type(' + (currindx) + ')">' + '<option value="1">' + rta_RA_TypesArray[1] + '</option>' + '<option value="2">' + rta_RA_TypesArray[2] + '</option>' + '<option value="3">' + rta_RA_TypesArray[3] + '</option>' + '<option value="4">' + rta_RA_TypesArray[4] + '</option>' + '<option value="5">' + rta_RA_TypesArray[5] + '</option>' + '<option value="6">' + rta_RA_TypesArray[6] + '</option>' + '<option value="7">' + rta_RA_TypesArray[7] + '</option>' + '<option value="10">' + rta_RA_TypesArray[10] + '</option>' + '<option value="8">' + rta_RA_TypesArray[8] + '</option>' + '<option value="9" selected>' + rta_RA_TypesArray[9] + '</option>' + "</select></td>" + "</tr>" + '<tr><td>Position: </td> <td>' + posStrg + '</td> </tr>' + '<tr><td><a href="javascript:savePOIData(' + currindx + ')"><b>' + "Save" + '</b><\/a></td>' + '<td><a href="javascript:deleteCurrPOI(' + currindx + ')"><b>' + 'Delete' + '</b><\/a></td></tr>' + '</table><table><tr><td>' + (rta_Copyright_Line) + '</td> </tr>' + "</table></div>";
    theLat = theLatLng.lat();
    theLng = theLatLng.lng();
    poiIData = {
        theID: -1,
        name: "",
        description: "",
        desccredname: "",
        desccredurl: "",
        ifyougo: "",
        address1: "",
        address2: "",
        address3: "",
        city: "",
        state: "",
        zipcode: "",
        country: 4,
        maddress1: "",
        maddress2: "",
        maddress3: "",
        mcity: "",
        mstate: "",
        mzipcode: "",
        mcountry: 4,
        email: "",
        phonelabel1: "",
        ccode1: "",
        acode1: "",
        phnum1: "",
        ext1: "",
        phonelabel2: "",
        ccode2: "",
        acode2: "",
        phnum2: "",
        ext2: "",
        phonelabel3: "",
        ccode3: "",
        acode3: "",
        phnum3: "",
        ext3: "",
        links: "",
        link1: "",
        anchor1: "",
        link2: "",
        anchor2: "",
        link3: "",
        anchor3: "",
        photo: "",
        photo1: "",
        phcredname: "",
        phcredurl: "",
        phototitle: "",
        type: "",
        lat: theLat,
        lng: theLng,
        keywords: "",
        currentIndex: currindx,
        dist1: Math.round(rtaDistance(theLat, theLng, rta_point1.lat(), rta_point1.lng())),
        dist2: Math.round(rtaDistance(theLat, theLng, rta_point2.lat(), rta_point2.lng())),
        dist3: Math.round(rtaDistance(theLat, theLng, rta_point3.lat(), rta_point3.lng())),
        owner: mapOwner,
        access: 10,
        theHTML: rtaHtml
    };
    rtaPOIArray[currindx] = new rtaPOIObj(poiIData);
    hideCancel();
    refreshAnySidebar("poiList", side_bar_htmlArray, "");
    windOpt = {
        maxWidth: 600
    };
    rtaPOIArray[currindx].theInfowindow.setOptions(windOpt);
    rtaPOIArray[currindx].theInfowindow.open(RTAMap, rtaPOIArray[currindx].theMarker);
    google.maps.event.addListenerOnce(rtaPOIArray[currindx].theInfowindow, "closeclick", function() {
        deleteCurrPOI(currindx);
    });
    document.getElementById("message").innerHTML = "Please save or delete the marker.";
}

function rtaPOISearchObj(poiSearchData) {
    var poiIndex = poiSearchData.currentIndex;
    var rtaPOI_Type = poiSearchData.type;
    var marker;
    var testNull = null;
    var thePoint = new google.maps.Point(11, 0);
    this.theType = rtaPOI_Type;
    this.theAccess = poiSearchData.access;
    if (poiSearchData.access > 19) {
        if (rtaPOI_Type < 100) {
            rtaPOI_Type = 108;
            this.theType = 108;
        }
        if (displayMarkerTitlesFlag) {
            marker = new MarkerWithLabel({
                position: poiSearchData.place,
                draggable: false,
                raiseOnDrag: false,
                map: RTAMap,
                zIndex: zIndexCtr,
                icon: rtaFlagImage[rtaPOI_Type],
                labelContent: ((poiIndex + 1) + ''),
                labelAnchor: thePoint,
                labelClass: "labels",
                labelStyle: {
                    opacity: 0.95
                }
            });
        } else {
            marker = new google.maps.Marker({
                position: poiSearchData.place,
                map: RTAMap,
                visible: true,
                zIndex: zIndexCtr,
                icon: rtaFlagImage[rtaPOI_Type],
                draggable: false
            });
        }
    } else if (poiSearchData.access < 20) {
        if (displayMarkerTitlesFlag) {
            marker = new MarkerWithLabel({
                position: poiSearchData.place,
                map: RTAMap,
                visible: true,
                zIndex: zIndexCtr,
                draggable: false,
                labelContent: ((poiIndex + 1) + ''),
                labelAnchor: thePoint,
                labelClass: "labels",
                labelStyle: {
                    opacity: 0.95
                }
            });
        } else {
            marker = new google.maps.Marker({
                position: poiSearchData.place,
                map: RTAMap,
                visible: true,
                zIndex: zIndexCtr,
                draggable: false
            });
        }
    }
    zIndexCtr += 1;
    marker.setTitle((poiIndex + 1) + "");
    if (displayMarkerTitlesFlag) {
        google.maps.event.trigger(marker, "mouseover");
    }
    whenSearchMarkerIsClicked(marker);
    search_poi_bar_htmlArray[poiIndex] = '<a href="javascript:searchsidebarclick(' + (poiIndex) + ')">' + (poiIndex + 1) + '<\/a> ' + poiSearchData.name + '<br />';
    if (!poiSearchData.keywords) {
        this.theKeywords = "";
    } else {
        this.theKeywords = poiSearchData.keywords;
    }
    this.thePosition = poiSearchData.place;
    this.dist1 = poiSearchData.dist1;
    this.dist2 = poiSearchData.dist2;
    this.dist3 = poiSearchData.dist3;
    this.theMarker = marker;
    this.dbPOIID = poiSearchData.theID;
    this.theName = poiSearchData.name;
    this.theDescription = poiSearchData.description;
    this.theIfYouGo = poiSearchData.ifyougo;
    this.thePhoto1 = poiSearchData.photo1;
    this.thePhotoTitle = poiSearchData.phototitle;
    this.thePhotoCredit = poiSearchData.phcredname;
    this.thePhotoCredURL = poiSearchData.phcredurl;
    this.theDescCredit = poiSearchData.desccredname;
    this.theDescCredURL = poiSearchData.desccredurl;
    this.theOwnercode = poiSearchData.ownercode;
    this.theOwner = poiSearchData.owner;
    this.theIndex = poiIndex;
    this.theAddress1 = poiSearchData.address1;
    this.theAddress2 = poiSearchData.address2;
    this.theAddress3 = poiSearchData.address3;
    this.theCity = poiSearchData.city;
    this.theState = poiSearchData.state;
    this.theZip = poiSearchData.zipcode;
    this.theCountry = poiSearchData.country;
    this.theEmail = poiSearchData.email;
    this.theMAddress1 = poiSearchData.maddress1;
    this.theMAddress2 = poiSearchData.maddress2;
    this.theMAddress3 = poiSearchData.maddress3;
    this.theMCity = poiSearchData.mcity;
    this.theMState = poiSearchData.mstate;
    this.theMZip = poiSearchData.mzipcode;
    this.theMCountry = poiSearchData.mcountry;
    if (poiSearchData.phonelabel1 === testNull) {
        this.thePhoneLabel1 = '';
    } else {
        this.thePhoneLabel1 = poiSearchData.phonelabel1;
    }
    this.thePhone11 = poiSearchData.ccode1;
    this.thePhone12 = poiSearchData.acode1;
    this.thePhone13 = poiSearchData.phnum1;
    this.thePhone14 = poiSearchData.ext1;
    if (poiSearchData.phonelabel2 === testNull) {
        this.thePhoneLabel2 = '';
    } else {
        this.thePhoneLabel2 = poiSearchData.phonelabel2;
    }
    this.thePhone21 = poiSearchData.ccode2;
    this.thePhone22 = poiSearchData.acode2;
    this.thePhone23 = poiSearchData.phnum2;
    this.thePhone24 = poiSearchData.ext2;
    if (poiSearchData.phonelabel3 === testNull) {
        this.thePhoneLabel3 = '';
    } else {
        this.thePhoneLabel3 = poiSearchData.phonelabel3;
    }
    this.thePhone31 = poiSearchData.ccode3;
    this.thePhone32 = poiSearchData.acode3;
    this.thePhone33 = poiSearchData.phnum3;
    this.thePhone34 = poiSearchData.ext3;
    this.theLink1 = poiSearchData.link1;
    this.theLink2 = poiSearchData.link2;
    this.theLink3 = poiSearchData.link3;
    this.theAnchor1 = poiSearchData.anchor1;
    this.theAnchor2 = poiSearchData.anchor2;
    this.theAnchor3 = poiSearchData.anchor3;
    this.theLat = poiSearchData.lat;
    this.theLng = poiSearchData.lng;
}

function loadSearchPOIObject(mySrchMarkerInfo, newIndex) {
    var theLat = parseFloat(mySrchMarkerInfo.getAttribute("lat"));
    var theLng = parseFloat(mySrchMarkerInfo.getAttribute("lng"));
    var poiPosition = new google.maps.LatLng(theLat, theLng);
    var poiSearchData;
    var testNull = null;
    theSearchCountryCode = parseInt(mySrchMarkerInfo.getAttribute("country"), 10);
    if (isNaN(theSearchCountryCode)) {
        theSearchCountryCode = 4;
    }
    rtaTheSearchCountryValue[newIndex] = theSearchCountryCode;
    theSearchMCountryCode = parseInt(mySrchMarkerInfo.getAttribute("mcountry"), 10);
    if (isNaN(theSearchMCountryCode)) {
        theSearchMCountryCode = 4;
    }
    rtaTheSearchMCountryValue[newIndex] = theSearchMCountryCode;
    rta_CC1SearchValue[newIndex] = parseInt(mySrchMarkerInfo.getAttribute("tele11"), 10);
    if (isNaN(rta_CC1SearchValue[newIndex])) {
        rta_CC1SearchValue[newIndex] = 0;
    }
    rta_CC2SearchValue[newIndex] = parseInt(mySrchMarkerInfo.getAttribute("tele21"), 10);
    if (isNaN(rta_CC2SearchValue[newIndex])) {
        rta_CC2SearchValue[newIndex] = 0;
    }
    rta_CC3SearchValue[newIndex] = parseInt(mySrchMarkerInfo.getAttribute("tele31"), 10);
    if (isNaN(rta_CC3SearchValue[newIndex])) {
        rta_CC3SearchValue[newIndex] = 0;
    }
    poiSearchData = {
        theID: mySrchMarkerInfo.getAttribute("id"),
        name: mySrchMarkerInfo.getAttribute("name"),
        description: mySrchMarkerInfo.getAttribute("description"),
        desccredname: mySrchMarkerInfo.getAttribute("desccredname"),
        desccredurl: mySrchMarkerInfo.getAttribute("desccredurl"),
        ifyougo: mySrchMarkerInfo.getAttribute("ifyougo"),
        address1: mySrchMarkerInfo.getAttribute("address1"),
        address2: mySrchMarkerInfo.getAttribute("address2"),
        address3: mySrchMarkerInfo.getAttribute("address3"),
        city: mySrchMarkerInfo.getAttribute("city"),
        state: mySrchMarkerInfo.getAttribute("state"),
        zipcode: mySrchMarkerInfo.getAttribute("zipcode"),
        country: mySrchMarkerInfo.getAttribute("country"),
        email: mySrchMarkerInfo.getAttribute("email"),
        maddress1: mySrchMarkerInfo.getAttribute("maddress1"),
        maddress2: mySrchMarkerInfo.getAttribute("maddress2"),
        maddress3: mySrchMarkerInfo.getAttribute("maddress3"),
        mcity: mySrchMarkerInfo.getAttribute("mcity"),
        mstate: mySrchMarkerInfo.getAttribute("mstate"),
        mzipcode: mySrchMarkerInfo.getAttribute("mzipcode"),
        mcountry: mySrchMarkerInfo.getAttribute("mcountry"),
        phonelabel1: mySrchMarkerInfo.getAttribute("label1"),
        ccode1: rta_CC1SearchValue[newIndex],
        acode1: mySrchMarkerInfo.getAttribute("tele12"),
        phnum1: mySrchMarkerInfo.getAttribute("tele13"),
        ext1: mySrchMarkerInfo.getAttribute("tele14"),
        phonelabel2: mySrchMarkerInfo.getAttribute("label2"),
        ccode2: rta_CC2SearchValue[newIndex],
        acode2: mySrchMarkerInfo.getAttribute("tele22"),
        phnum2: mySrchMarkerInfo.getAttribute("tele23"),
        ext2: mySrchMarkerInfo.getAttribute("tele24"),
        phonelabel3: mySrchMarkerInfo.getAttribute("label3"),
        ccode3: rta_CC3SearchValue[newIndex],
        acode3: mySrchMarkerInfo.getAttribute("tele32"),
        phnum3: mySrchMarkerInfo.getAttribute("tele33"),
        ext3: mySrchMarkerInfo.getAttribute("tele34"),
        link1: mySrchMarkerInfo.getAttribute("link1"),
        link2: mySrchMarkerInfo.getAttribute("link2"),
        link3: mySrchMarkerInfo.getAttribute("link3"),
        anchor1: mySrchMarkerInfo.getAttribute("anchor1"),
        anchor2: mySrchMarkerInfo.getAttribute("anchor2"),
        anchor3: mySrchMarkerInfo.getAttribute("anchor3"),
        photo1: mySrchMarkerInfo.getAttribute("photo1"),
        phototitle: mySrchMarkerInfo.getAttribute("phototitle"),
        phcredname: mySrchMarkerInfo.getAttribute("phcredname"),
        phcredurl: mySrchMarkerInfo.getAttribute("phcredurl"),
        keywords: mySrchMarkerInfo.getAttribute("keywords"),
        type: mySrchMarkerInfo.getAttribute("type"),
        lat: theLat,
        lng: theLng,
        place: poiPosition,
        currentIndex: newIndex,
        theHTML: "",
        dist1: parseInt(mySrchMarkerInfo.getAttribute("dist1"), 10),
        dist2: parseInt(mySrchMarkerInfo.getAttribute("dist2"), 10),
        dist3: parseInt(mySrchMarkerInfo.getAttribute("dist3"), 10),
        numvoters: mySrchMarkerInfo.getAttribute("numvoters"),
        ratingtotal: mySrchMarkerInfo.getAttribute("ratingtotal"),
        access: mySrchMarkerInfo.getAttribute("access"),
        ownercode: mySrchMarkerInfo.getAttribute("ownercode"),
        owner: mySrchMarkerInfo.getAttribute("owner")
    };
    poiSearchArray[newIndex] = new rtaPOISearchObj(poiSearchData);
    poiSearchArray[newIndex].theHTML = findPricelineCity(newIndex, false);
}

function rtaPOIObj(poiData) {
    var ifItIsNew = (poiData.theID === -1);
    var thePosition = new google.maps.LatLng(poiData.lat, poiData.lng);
    var poiIndex = poiData.currentIndex;
    var testNull = null;
    var marker = new google.maps.Marker({
        position: thePosition,
        map: RTAMap,
        zIndex: zIndexCtr,
        visible: ifItIsNew,
        draggable: ifItIsNew
    });
    zIndexCtr += 1;
    marker.setTitle((poiIndex + 1) + "");
    whenMarkerIsClicked(marker);
    if (ifItIsNew) {
        whenPOIMarkerIsDragged(marker, poiIndex);
        side_bar_htmlArray[poiIndex] = '<a href="javascript:sidebarclick(' + (poiIndex) + ')">' + (poiIndex + 1) + '<\/a> <br />';
    } else {
        side_bar_htmlArray[poiIndex] = '<a href="javascript:sidebarclick(' + (poiIndex) + ')">' + (poiIndex + 1) + '<\/a> ' + poiData.name + '<br />';
    }
    if (!poiData.keywords) {
        this.theKeywords = " ";
    } else {
        this.theKeywords = poiData.keywords;
    }
    if (!poiData.photo) {
        poiData.photo = '';
    }
    this.thePosition = thePosition;
    this.theLat = poiData.lat;
    this.theLng = poiData.lng;
    this.dist1 = poiData.dist1;
    this.dist2 = poiData.dist2;
    this.dist3 = poiData.dist3;
    this.theMarker = marker;
    this.dbPOIID = poiData.theID;
    if (poiData.name) {
        this.theName = poiData.name;
    } else {
        this.theName = '';
    }
    this.theDescription = poiData.description;
    this.theIfYouGo = poiData.ifyougo;
    this.thePhoto1 = poiData.photo1;
    this.thePhotoTitle = poiData.phototitle;
    this.thePhotoCredit = poiData.phcredname;
    this.thePhotoCredURL = poiData.phcredurl;
    this.theDescCredit = poiData.desccredname;
    this.theDescCredURL = poiData.desccredurl;
    this.theOwner = poiData.owner;
    this.theAccess = poiData.access;
    this.theOwnercode = poiData.ownercode;
    this.theIndex = poiIndex;
    this.theType = poiData.type;
    this.theHTML = poiData.theHTML;
    this.theAddress1 = poiData.address1;
    this.theAddress2 = poiData.address2;
    this.theAddress3 = poiData.address3;
    this.theCity = poiData.city;
    this.theState = poiData.state;
    this.theZip = poiData.zipcode;
    this.theCountry = poiData.country;
    this.theEmail = poiData.email;
    this.theMAddress1 = poiData.maddress1;
    this.theMAddress2 = poiData.maddress2;
    this.theMAddress3 = poiData.maddress3;
    this.theMCity = poiData.mcity;
    this.theMState = poiData.mstate;
    this.theMZip = poiData.mzipcode;
    this.theMCountry = poiData.mcountry;
    if (poiData.phonelabel1 === testNull) {
        this.thePhoneLabel1 = '';
    } else {
        this.thePhoneLabel1 = poiData.phonelabel1;
    }
    this.thePhone11 = poiData.ccode1;
    this.thePhone12 = poiData.acode1;
    this.thePhone13 = poiData.phnum1;
    this.thePhone14 = poiData.ext1;
    if (poiData.phonelabel2 === testNull) {
        this.thePhoneLabel2 = '';
    } else {
        this.thePhoneLabel2 = poiData.phonelabel2;
    }
    this.thePhone21 = poiData.ccode2;
    this.thePhone22 = poiData.acode2;
    this.thePhone23 = poiData.phnum2;
    this.thePhone24 = poiData.ext2;
    if (poiData.phonelabel3 === testNull) {
        this.thePhoneLabel3 = '';
    } else {
        this.thePhoneLabel3 = poiData.phonelabel3;
    }
    this.thePhone31 = poiData.ccode3;
    this.thePhone32 = poiData.acode3;
    this.thePhone33 = poiData.phnum3;
    this.thePhone34 = poiData.ext3;
    this.theLink1 = poiData.link1;
    this.theLink2 = poiData.link2;
    this.theLink3 = poiData.link3;
    this.theAnchor1 = poiData.anchor1;
    this.theAnchor2 = poiData.anchor2;
    this.theAnchor3 = poiData.anchor3;
    this.theInfowindow = new google.maps.InfoWindow({
        content: (poiData.theHTML),
        maxWidth: 225
    });
}

function sidebarclick(i) {
    if (inMode) {
        return;
    }
    if (!rtaPOIArray[i].theMarker.getVisible()) {
        rtaPOIArray[i].theMarker.setVisible(true);
        setMapIsCurrentFlag(false);
    }
    google.maps.event.trigger(rtaPOIArray[i].theMarker, "click");
    exitRtePlaceMode();
    eraseMessage();
}

function searchsidebarclick(i) {
    if (inMode) {
        return;
    }
    if (!poiSearchArray[i].theMarker.getVisible()) {
        poiSearchArray[i].theMarker.setVisible(true);
        setMapIsCurrentFlag(false);
    }
    google.maps.event.trigger(poiSearchArray[i].theMarker, "click");
    exitRtePlaceMode();
    eraseMessage();
}

function sidebarrouteclick(i) {
    if (inMode) {
        return;
    }
    google.maps.event.trigger(rtaRouteMarkers[i][0], "click");
    exitRtePlaceMode();
}

function ldsidebardorouteclick(i) {
    if (inMode) {
        return;
    }
    addLDRouteToMap(i);
    google.maps.event.trigger(rtaRouteMarkers[i][0], "click");
    exitRtePlaceMode();
}

function ldsidebarshowrouteclick(i) {
    if (inMode) {
        return;
    }
    showLDRouteMarkers(i);
    RTAMap.fitBounds(ldBoundsArray[i]);
    rtaRtStartInfoWindows[i].open();
    exitRtePlaceMode();
}

function showLDRouteMarkers(i, flagvalue) {
    if (inMode) {
        return;
    }
    if (arguments[1]) {
        setMapIsCurrentFlag(true);
    } else {
        setMapIsCurrentFlag(false);
    }
    rtaRoutes[i].setMap(RTAMap);
    var numMarkers = rtaRouteMarkers[i].length;
    var j;
    for (j = 0; j < numMarkers; j++) {
        rtaRouteMarkers[i][j].setVisible(true);
    }
    exitRtePlaceMode();
}

function ldsidesrchdorouteclick(i) {
    if (inMode) {
        return;
    }
    addSearchLDRouteToMap(i);
    google.maps.event.trigger(rtaSrchRouteMarkers[i][0], "click");
    exitRtePlaceMode();
}

function showSrchLDRouteMarkers(k) {
    if (inMode) {
        return;
    }
    var j = 0;
    searchMapBounds = [];
    searchMapBounds = new google.maps.LatLngBounds();
    rtaSearchLDRoutes[k].setMap(RTAMap);
    var numMarkers = rtaSrchRouteMarkers[k].length;
    for (j = 0; j < numMarkers; j++) {
        rtaSrchRouteMarkers[k][j].setVisible(true);
        searchMapBounds.extend(rtaSrchRouteMarkers[k][j].getPosition());
    }
    exitRtePlaceMode();
    RTAMap.fitBounds(searchMapBounds);
}

function ldsrchsidebarshowrouteclick(k) {
    if (inMode) {
        return;
    }
    showSrchLDRouteMarkers(k);
    rtaSrchRtStInfoWindows[k].open();
    exitRtePlaceMode();
}

function sidebarcalcrouteclick(i) {
    if (inMode) {
        return;
    }
    if (rtaMapDirectionsChangedListener) {
        google.maps.event.removeListener(rtaMapDirectionsChangedListener);
        rtaMapDirectionsChangedListener = null;
    }
    searchMapBounds = [];
    searchMapBounds = new google.maps.LatLngBounds();
    if ((currRTAMap[0][0] > -1) && (currRTAMap[0][0] != i)) {
        hideCalcRtAndMarker(currRTAMap[0][0]);
    }
    google.maps.event.trigger(rta_calcRtArray[i].startMarker, "click");
    exitRtePlaceMode();
}

function sidebardocalcrouteclick(k, flagvalue) {
    if (inMode) {
        return;
    }
    var wayPtCt = calc_side_bar_db_infoArray[k].numwaypts;
    var theCurrWayPtLatLng;
    var theStart;
    var theEnd;
    var the_db_ID;
    var i;
    if (currRTAMap[0][0] > -1) {
        hideCalcRtAndMarker(currRTAMap[0][0]);
    }
    if (rtaMapDirectionsChangedListener) {
        google.maps.event.removeListener(rtaMapDirectionsChangedListener);
        rtaMapDirectionsChangedListener = null;
    }
    if (arguments[1]) {
        setMapIsCurrentFlag(true);
    } else {
        setMapIsCurrentFlag(false);
    }
    theStart = new google.maps.LatLng(calc_side_bar_db_infoArray[k].startlat, calc_side_bar_db_infoArray[k].startlng);
    theEnd = new google.maps.LatLng(calc_side_bar_db_infoArray[k].endlat, calc_side_bar_db_infoArray[k].endlng);
    the_db_ID = calc_side_bar_db_infoArray[k].theID;
    if (calc_side_bar_db_infoArray[k].newfield) {
        getCalcRtPoints(k, the_db_ID);
        currRTAMap[0][0] = k;
        currRTAMap[0][1] = the_db_ID;
        currRTAMap[0][2] = 1;
        return;
    }
    if (rtaWaypts.length > 0) {
        clearPoints();
    }
    if (wayPtCt > 0) {
        for (i = 0; i < wayPtCt; i++) {
            theCurrWayPtLatLng = new google.maps.LatLng(calc_side_bar_db_infoArray[k].latvals[i], calc_side_bar_db_infoArray[k].lngvals[i]);
            rtaWaypts[i] = {
                location: theCurrWayPtLatLng,
                stopover: true
            };
        }
    }
    calcRoute(theStart, theEnd, the_db_ID, k);
}

function sidebardosearchcalcrouteclick(arrIndex) {
    if (inMode) {
        return;
    }
    var wayPtCt = calc_search_db_infoArray[arrIndex].numwaypts;
    var theCurrWayPtLatLng;
    var theStart;
    var theEnd;
    var the_db_ID;
    var i;
    if (rtaMapDirectionsChangedListener) {
        google.maps.event.removeListener(rtaMapDirectionsChangedListener);
        rtaMapDirectionsChangedListener = null;
    }
    if (rtaWaypts.length > 0) {
        clearPoints();
    }
    if (wayPtCt > 0) {
        for (i = 0; i < wayPtCt; i++) {
            theCurrWayPtLatLng = new google.maps.LatLng(calc_search_db_infoArray[arrIndex].latvals[i], calc_search_db_infoArray[arrIndex].lngvals[i]);
            rtaWaypts[i] = {
                location: theCurrWayPtLatLng,
                stopover: true
            };
        }
    }
    theStart = new google.maps.LatLng(calc_search_db_infoArray[arrIndex].startlat, calc_search_db_infoArray[arrIndex].startlng);
    theEnd = new google.maps.LatLng(calc_search_db_infoArray[arrIndex].endlat, calc_search_db_infoArray[arrIndex].endlng);
    the_db_ID = calc_search_db_infoArray[arrIndex].theID;
    calcSearchRoute(theStart, theEnd, the_db_ID, arrIndex);
}

function sidebarsearchcalcrouteclick(rtIndex) {
    if (inMode) {
        return;
    }
    hideCurrCalcRtMarker();
    if (rtaMapDirectionsChangedListener) {
        google.maps.event.removeListener(rtaMapDirectionsChangedListener);
        rtaMapDirectionsChangedListener = null;
    }
    google.maps.event.trigger(calcSearchRtArray[rtIndex].startMarker, "click");
    exitRtePlaceMode();
}

function confirmDelMap(mapIndex) {
    var mapName = rtaMapArray[mapIndex][5];
    var theReply = false;
    theReply = confirm("Permanently delete map '" + mapName + "'?");
    if (theReply) {
        removeMapFromDb(mapIndex);
    } else {
        return;
    }
}

function sidebarmapclick(indx) {
    if (rtaDeleteMapFlag) {
        confirmDelMap(indx);
        rtaDeleteMapFlag = false;
        exitRtePlaceMode();
        return;
    }
    if (inMode) {
        return;
    }
    clearMap();
    var allComponentsFound = true;
    var i, j, k, m, searchMarkersNum;
    var getMarkersFromDatabase = false;
    var databaseIDs = [];
    var calcRtID = rtaMapArray[indx][0];
    var theRightRt;
    var totSideBarRtNum;
    var lineDrawnRtNum;
    var sideBarLDRouteNum;
    var mapPOINum;
    var markersNum;
    var rtNum;
    var testNull = null;
    currRTAMap[3] = rtaMapArray[indx][3];
    currRTAMap[4] = rtaMapArray[indx][5];
    if (calcRtID > -1) {
        if (rtaMapDirectionsChangedListener) {
            google.maps.event.removeListener(rtaMapDirectionsChangedListener);
            rtaMapDirectionsChangedListener = null;
        }
        theRightRt = -3;
        totSideBarRtNum = calc_side_bar_db_infoArray.length;
        for (i = 0; i < totSideBarRtNum; i++) {
            if (calc_side_bar_db_infoArray[i]) {
                if (calcRtID == calc_side_bar_db_infoArray[i].theID) {
                    theRightRt = i;
                    break;
                }
            }
        }
        if (theRightRt == -3) {
            rtNum = rta_calcRtArray.length;
            for (i = 0; i < rtNum; i++) {
                if (calcRtID == rta_calcRtArray[i].dbID) {
                    theRightRt = i;
                    break;
                }
            }
        }
        if (theRightRt == -3) {
            alert("Calculated route was not found.");
            allComponentsFound = false;
        } else {
            if (rta_calcRtArray[theRightRt] == -1) {
                sidebardocalcrouteclick(theRightRt, true);
            } else if (rta_calcRtArray[theRightRt].dbID == calcRtID) {
                google.maps.event.trigger(rta_calcRtArray[theRightRt].startMarker, "click");
            } else {
                document.getElementById("message").innerHTML = "Error in sidebarmapclick.";
                allComponentsFound = false;
            }
        }
    }
    if (rtaMapArray[indx][1][0] > -2) {
        lineDrawnRtNum = rtaMapArray[indx][1].length;
        sideBarLDRouteNum = ld_side_bar_db_infoArray.length;
        routeLoop: for (i = 0; i < lineDrawnRtNum; i++) {
            for (j = 0; j < sideBarLDRouteNum; j++) {
                if (rtaMapArray[indx][1][i] == ld_side_bar_db_infoArray[j].routeID) {
                    if (rtaRouteMarkers[j]) {
                        showLDRouteMarkers(j, true);
                    } else {
                        addLDRouteToMap(j, true);
                    }
                    continue routeLoop;
                }
            }
            alert("Line-drawn route was not found.");
            allComponentsFound = false;
        }
    }
    if (rtaMapArray[indx][2][0] > -2) {
        mapPOINum = rtaMapArray[indx][2].length;
        markersNum = rtaPOIArray.length;
        markerLoop: for (i = 0; i < mapPOINum; i++) {
            for (j = 0; j < markersNum; j++) {
                if (rtaPOIArray[j]) {
                    if (rtaMapArray[indx][2][i] == rtaPOIArray[j].dbPOIID) {
                        rtaPOIArray[j].theMarker.setVisible(true);
                        continue markerLoop;
                    }
                }
            }
            searchMarkersNum = poiSearchArray.length;
            for (k = 0; k < searchMarkersNum; k++) {
                if (poiSearchArray[k]) {
                    if (rtaMapArray[indx][2][i] == poiSearchArray[k].dbPOIID) {
                        poiSearchArray[k].theMarker.setVisible(true);
                        continue markerLoop;
                    }
                }
            }
            getMarkersFromDatabase = true;
            databaseIDs.push(rtaMapArray[indx][2][i]);
        }
    }
    if (getMarkersFromDatabase) {
        if (calcRtID > -2) {
            getStartPointAndPOIs(databaseIDs, calcRtID);
        } else {
            getPOIFromDB(databaseIDs);
        }
    }
    if (!allComponentsFound) {
        document.getElementById("message").innerHTML = "Not all map components could be added to the map. ";
    } else {
        document.getElementById("message").innerHTML = "Map retrieved. ";
    }
    setMapIsCurrentFlag(true);
    exitRtePlaceMode();
}

function searchCalcRouteAlreadyOnList(searchCalcRtIndex) {
    var i;
    arrLen = calc_search_db_infoArray.length;
    for (i = 0; i < arrLen; i++) {
        if (calc_search_db_infoArray[i]) {
            if (calc_search_db_infoArray[i].theID === searchCalcRtIndex) {
                return (i);
            }
        }
    }
    return (-1);
}

function sidebarsearchmapclick(indx) {
    var allComponentsFound = true;
    var i, j;
    var searchCalcRtIndex = rta_SearchMapArray[indx][0];
    var hasCalcRt = (rta_SearchMapArray[indx][0] > -2);
    var ldArray;
    var poiArray;
    var startlat;
    var startlng;
    var hasStartPt = false;
    if (arguments.length == 3) {
        startlat = arguments[1];
        startlng = arguments[2];
        hasStartPt = true;
    }
    if (rtaMapDirectionsChangedListener) {
        google.maps.event.removeListener(rtaMapDirectionsChangedListener);
        rtaMapDirectionsChangedListener = null;
    }
    clearMap();
    if (hasCalcRt) {
        var theExistingIndex = searchCalcRouteAlreadyOnList(searchCalcRtIndex);
        if (theExistingIndex > -1) {
            if (calcSearchRtArray[theExistingIndex]) {
                if (calcSearchRtArray[theExistingIndex].theID > -1) {
                    sidebarsearchcalcrouteclick(theExistingIndex);
                } else {
                    sidebardosearchcalcrouteclick(theExistingIndex);
                }
            }
        } else {
            getSearchRtFromDB(searchCalcRtIndex);
        }
    }
    ldArray = rta_SearchMapArray[indx][1].split(",");
    if (ldArray[0] > -2) {
        getLDRtesFromDB(indx, ldArray);
    }
    poiArray = rta_SearchMapArray[indx][2].split(",");
    if (poiArray[0] > -2) {
        if (hasStartPt) {
            getPOIFromDB(poiArray, startlat, startlng);
        } else {
            getPOIFromDB(poiArray);
        }
    }
    setMapIsCurrentFlag(true);
    exitRtePlaceMode();
}

function refreshAnySidebar(pageDivID, theHTMLArray, theLabel) {
    var i;
    var txtArray = [];
    var theArrLen;
    if (!hasControls) {
        return;
    }
    document.getElementById(pageDivID).innerHTML = theLabel;
    theArrLen = theHTMLArray.length;
    for (i = 0; i < theArrLen; i++) {
        if (theHTMLArray[i]) {
            txtArray.push(theHTMLArray[i]);
        }
    }
    document.getElementById(pageDivID).innerHTML += txtArray.join("");
    txtArray = null;
}

function erasePOISearchSidebar() {
    var barLen = search_poi_bar_htmlArray.length;
    var i;
    for (i = 0; i < barLen; i++) {
        search_poi_bar_htmlArray[i] = "";
    }
    refreshAnySidebar("poi_results", search_poi_bar_htmlArray, "Points of interest<br/>");
}

function refreshAllSidebars() {
    refreshAnySidebar("poiList", side_bar_htmlArray, "");
    refreshAnySidebar("routeList", side_bar_route_htmlArray, "");
    refreshAnySidebar("calcRtSideBar", calc_side_bar_route_htmlArray, "");
    refreshAnySidebar("mapListDiv", side_bar_map_htmlArray, "");
    exitRtePlaceMode();
}

function refreshAllSearchSidebars() {
    refreshAnySidebar("map_results", side_bar_searchmap_htmlArray, "Maps<br/>");
    refreshAnySidebar("calc_results", search_calc_side_htmlArray, "Calculated routes<br/>");
    refreshAnySidebar("poi_results", search_poi_bar_htmlArray, "Points of interest<br/>");
    refreshAnySidebar("ld_results", ld_srch_side_route_htmlArray, "Hand-drawn routes<br/>");
}

function whenStartMarkerClicked(theMarker) {
    google.maps.event.addListener(theMarker, "click", function() {
        var thisMarker = parseInt(theMarker.getTitle(), 10) - 1;
        if (inMode) {
            return;
        }
        if (RTAMap.getZoom() < 10) {
            RTAMap.setZoom(10);
        }
        rtaRtStartInfoWindows[thisMarker].open(RTAMap, theMarker);
    });
}

function whenSrchStartMarkerClicked(marker, theArrayIndex) {
    if (rta_Maptype == "mapprint") {
        return;
    }
    google.maps.event.addListener(marker, "click", function() {
        var thisMarker = parseInt(marker.getTitle(), 10) - 1;
        if (inMode) {
            return;
        }
        if (RTAMap.getZoom() < 10) {
            RTAMap.setZoom(10);
        }
        rtaSrchRtStInfoWindows[thisMarker].open(RTAMap, marker);
    });
}

function whenSearchMarkerIsClicked(clickedMarker) {
    if (rta_Maptype == "mapprint") {
        return;
    }
    google.maps.event.addListener(clickedMarker, "click", function() {
        var thisMarker = parseInt(clickedMarker.getTitle(), 10) - 1;
        var oldNumPts;
        var windOpt;
        if (rtaDeleteMarker) {
            poiSearchArray[thisMarker].theInfowindow.close();
            poiSearchArray[thisMarker].theMarker.setVisible(false);
            setMapIsCurrentFlag(false);
            rtaDeleteMarker = false;
            exitRtePlaceMode();
            eraseMessage();
            return;
        } else if (clickWayPt) {
            oldNumPts = rtaWaypts.length;
            if (oldNumPts < 8) {
                rtaWaypts[oldNumPts] = {
                    location: clickedMarker.getPosition(),
                    stopover: true
                };
                if (rtadebuggingFlag) {
                    document.getElementById("messagelog").innerHTML = "Waypoint " + rtaWaypts.length + " added.<br />";
                }
                if (oldNumPts === 0) {
                    document.getElementById("wayPtsDiv").innerHTML = "";
                }
                document.getElementById("wayPtsDiv").innerHTML += rtaWaypts.length + " " + poiSearchArray[thisMarker].theName + "<br />";
                if (rtaWaypts.length > 7) {
                    document.getElementById("message").innerHTML += " (Waypoint limit reached.)<br />";
                    document.getElementById("wayPtButton").disabled = true;
                }
            }
            exitRtePlaceMode();
            eraseMessage();
            clickWayPt = false;
        } else if (getAddressFromPoint) {
            reverseCodeAddress(null, clickedMarker.getPosition());
            getAddressFromPoint = false;
            exitRtePlaceMode();
            eraseMessage();
        } else if (clickForStartRt) {
            google.maps.event.removeListener(rtaOnceClickListener);
            startRtLatLng = null;
            startRtLatLng = clickedMarker.getPosition();
            document.getElementById("text6").innerHTML = startRtLatLng.toUrlValue(6) + "";
            clickForStartRt = false;
            exitRtePlaceMode();
            eraseMessage();
        } else if (clickForEndRt) {
            google.maps.event.removeListener(rtaOnceClickListener);
            endRtLatLng = null;
            endRtLatLng = clickedMarker.getPosition();
            document.getElementById("text7").innerHTML = endRtLatLng.toUrlValue(6) + "";
            clickForEndRt = false;
            exitRtePlaceMode();
            eraseMessage();
        } else if (inMode) {
            return;
        } else {
            windOpt = {
                maxWidth: 220
            };
            poiSearchArray[thisMarker].theInfowindow.setOptions(windOpt);
            if (searchMarkerInfoOpen[thisMarker]) {
                poiSearchArray[thisMarker].theInfowindow.close();
                searchMarkerInfoOpen[thisMarker] = false;
            } else {
                poiSearchArray[thisMarker].theInfowindow.open(RTAMap, clickedMarker);
                searchMarkerInfoOpen[thisMarker] = true;
            }
        }
    });
}

function whenMarkerIsClicked(clickedMarker) {
    google.maps.event.addListener(clickedMarker, "click", function() {
        var thisMarker = parseInt(clickedMarker.getTitle(), 10) - 1;
        var oldNumPts;
        var windOpt;
        if (rtaDeleteMarker) {
            rtaPOIArray[thisMarker].theInfowindow.close();
            rtaPOIArray[thisMarker].theMarker.setVisible(false);
            rtaDeleteMarker = false;
            setMapIsCurrentFlag(false);
            exitRtePlaceMode();
            eraseMessage();
            return;
        } else if (clickWayPt) {
            oldNumPts = rtaWaypts.length;
            if (oldNumPts < 8) {
                rtaWaypts[oldNumPts] = {
                    location: clickedMarker.getPosition(),
                    stopover: true
                };
                if (rtadebuggingFlag) {
                    document.getElementById("messagelog").innerHTML = "Waypoint " + rtaWaypts.length + " added.<br />";
                }
                if (oldNumPts === 0) {
                    document.getElementById("wayPtsDiv").innerHTML = "";
                }
                document.getElementById("wayPtsDiv").innerHTML += rtaWaypts.length + " " + rtaPOIArray[thisMarker].theName + "<br />";
                if (rtaWaypts.length > 7) {
                    document.getElementById("message").innerHTML += "(Waypoint limit reached.)<br />";
                    document.getElementById("wayPtButton").disabled = true;
                }
            }
            exitRtePlaceMode();
            eraseMessage();
            clickWayPt = false;
            return;
        } else if (getAddressFromPoint) {
            reverseCodeAddress(null, clickedMarker.getPosition());
            getAddressFromPoint = false;
            exitRtePlaceMode();
            eraseMessage();
            return;
        } else if (clickForStartRt) {
            google.maps.event.removeListener(rtaOnceClickListener);
            startRtLatLng = null;
            startRtLatLng = clickedMarker.getPosition();
            document.getElementById("text6").innerHTML = startRtLatLng.toUrlValue(6) + "";
            clickForStartRt = false;
            exitRtePlaceMode();
            eraseMessage();
        } else if (clickForEndRt) {
            google.maps.event.removeListener(rtaOnceClickListener);
            endRtLatLng = null;
            endRtLatLng = clickedMarker.getPosition();
            document.getElementById("text7").innerHTML = endRtLatLng.toUrlValue(6) + "";
            clickForEndRt = false;
            exitRtePlaceMode();
            eraseMessage();
        } else if (inMode) {
            return;
        } else {
            windOpt = {
                maxWidth: 220
            };
            rtaPOIArray[thisMarker].theInfowindow.setOptions(windOpt);
            if (placeMarkerInfoOpen[thisMarker]) {
                rtaPOIArray[thisMarker].theInfowindow.close();
                placeMarkerInfoOpen[thisMarker] = false;
            } else {
                rtaPOIArray[thisMarker].theInfowindow.open(RTAMap, clickedMarker);
                placeMarkerInfoOpen[thisMarker] = true;
            }
        }
    });
}

function whenPOIMarkerIsDragged(thePOIMarker, theIndex) {
    var theMarker = theIndex;
    markerPOIDragEndListeners[theMarker] = google.maps.event.addListener(thePOIMarker, 'dragend', function(mEvent) {
        var thisMarker = parseInt(thePOIMarker.getTitle(), 10) - 1;
        var theLat;
        var theLng;
        rtaPOIArray[thisMarker].thePosition = mEvent.latLng;
        theLat = mEvent.latLng.lat();
        theLng = mEvent.latLng.lng();
        rtaPOIArray[thisMarker].dist1 = Math.round(rtaDistance(theLat, theLng, rta_point1.lat(), rta_point1.lng()));
        rtaPOIArray[thisMarker].dist2 = Math.round(rtaDistance(theLat, theLng, rta_point2.lat(), rta_point2.lng()));
        rtaPOIArray[thisMarker].dist3 = Math.round(rtaDistance(theLat, theLng, rta_point3.lat(), rta_point3.lng()));
    });
}

function whenSearchPOIMarkerIsDragged(thePOIMarker, theIndex) {
    var theMarker = theIndex;
    markerPOIDragEndListeners[theMarker] = google.maps.event.addListener(thePOIMarker, 'dragend', function(mEvent) {
        var thisMarker = parseInt(thePOIMarker.getTitle(), 10) - 1;
        var theLat;
        var theLng;
        poiSearchArray[thisMarker].thePosition = mEvent.latLng;
        theLat = mEvent.latLng.lat();
        theLng = mEvent.latLng.lng();
        poiSearchArray[thisMarker].dist1 = Math.round(rtaDistance(theLat, theLng, rta_point1.lat(), rta_point1.lng()));
        poiSearchArray[thisMarker].dist2 = Math.round(rtaDistance(theLat, theLng, rta_point2.lat(), rta_point2.lng()));
        poiSearchArray[thisMarker].dist3 = Math.round(rtaDistance(theLat, theLng, rta_point3.lat(), rta_point3.lng()));
    });
}

function whenMarkerDragged(theMarker, itsIndex) {
    var theIndex = itsIndex;
    var theDragEndListener;
    var theDragListener = google.maps.event.addListener(theMarker, 'drag', function(event) {
        routePath.setAt(theIndex, event.latLng);
    });
    markerDragListeners[theIndex] = theDragListener;
    theDragEndListener = google.maps.event.addListener(theMarker, 'dragend', function(event) {
        routePath.setAt(theIndex, event.latLng);
        updateRTADists(routePath, rtaRouteMarkers[rtaRoutes.length - 1], theIndex);
    });
    markerDragEndListeners[theIndex] = theDragEndListener;
}

function whenMapZoomed(event) {
    var smallEnough = (RTAMap.getZoom() > 10);
    var routesNum = rtaRouteMarkers.length;
    var markers2Num, i, j;
    for (i = 0; i < routesNum; i++) {
        if (rtaRouteMarkers[i]) {
            if (rtaRouteMarkers[i][0]) {
                if (rtaRouteMarkers[i][0].getVisible()) {
                    markers2Num = rtaRouteMarkers[i].length - 1;
                    for (j = 1; j < markers2Num; j++) {
                        if (rtaRouteMarkers[i][j]) {
                            rtaRouteMarkers[i][j].setVisible(smallEnough);
                        }
                    }
                }
            }
        }
    }
    routesNum = rtaSrchRouteMarkers.length;
    for (i = 0; i < routesNum; i++) {
        if (rtaSrchRouteMarkers[i]) {
            if (rtaSrchRouteMarkers[i][0].getVisible()) {
                markers2Num = rtaSrchRouteMarkers[i].length - 1;
                for (j = 1; j < markers2Num; j++) {
                    if (rtaSrchRouteMarkers[i][j]) {
                        rtaSrchRouteMarkers[i][j].setVisible(smallEnough);
                    }
                }
            }
        }
    }
}

function removeSearchMarkerInfoWindow(theMarker) {
    poiSearchArray[theMarker].theInfowindow.close();
    poiSearchArray[theMarker].theMarker.setVisible(false);
    setMapIsCurrentFlag(false);
    exitRtePlaceMode();
}

function removeMarkerInfoWindow(theMarker) {
    rtaPOIArray[theMarker].theInfowindow.close();
    rtaPOIArray[theMarker].theMarker.setVisible(false);
    setMapIsCurrentFlag(false);
    exitRtePlaceMode();
}

function removeMarker() {
    rtaDeleteMarker = true;
    enterAddPlaceMode();
    document.getElementById("message").innerHTML = "Click on a place marker to remove it from the map";
}

function codeAddress() {
    var rtaAddress = document.getElementById("theAddress").value;
    if (rta_geocoder) {
        rta_geocoder.geocode({
            'address': rtaAddress
        }, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var currindx = rtaPOIArray.length;
                var cc1ValueStrng = "cc1" + currindx;
                var cc2ValueStrng = "cc2" + currindx;
                var cc3ValueStrng = "cc3" + currindx;
                var posStrg = results[0].geometry.location.toUrlValue(6) + "";
                var idRA_TypeString = "typeOfRA" + currindx;
                var countryTypeString = "country" + currindx;
                var mCountryTypeString = "mcountry" + currindx;
                var ifYouGoString = "";
                var mailingAddressString = "";
                var photoCreditString = "";
                var searchTermsString = "";
                var searchTermsMenu = '';
                var rtaHtml;
                var theLat;
                var theLng;
                var poiIData;
                var windOpt;
                setMapIsCurrentFlag(false);
                cannedSearchTerms = '';
                rtaTheTypeValue[currindx] = 9;
                rtaTheCountryValue[currindx] = 4;
                rtaTheMCountryValue[currindx] = 4;
                rta_CC1Value[currindx] = 0;
                rta_CC2Value[currindx] = 0;
                rta_CC3Value[currindx] = 0;
                if (rta_canSuggestRoute) {
                    ifYouGoString = '<tr><td>If you go:</td> <td><textarea id="ifyougo" rows="5" cols="20"></textarea></td> </tr>';
                    mailingAddressString = '<table><tr><td>Mailing address 1:</td> <td><input type="text" id="rtamaddress1"/> </td> </tr>' + '<tr><td>Mailing address 2:</td> <td><input type="text" id="rtamaddress2"/> </td> </tr>' + '<tr><td>Mailing address 3:</td> <td><input type="text" id="rtamaddress3"/> </td> </tr>' + '<tr><td>City:</td> <td><input type="text" id="rtamcity"/> </td> </tr>' + '<tr><td>State:</td> <td><input type="text" id="rtamstate"/> </td></tr>' + '<tr><td>Postal code:</td> <td><input type="text" id="rtamzip"/> ' + '<select id = "' + mCountryTypeString + '" name="mcountry" onChange="changeMCountry(' + (currindx) + ')">' + '<option value="4" selected>' + rta_RA_CountryArray[4] + '</option>' + '<option value="0">' + rta_RA_CountryArray[0] + '</option>' + '<option value="1">' + rta_RA_CountryArray[1] + '</option>' + '<option value="2">' + rta_RA_CountryArray[2] + '</option>' + '<option value="3">' + rta_RA_CountryArray[3] + '</option>' + "</select></td></tr></table>";
                    photoCreditString = '</table><table><tr><td>Photo credit</td> <td> name: </td> <td><input type="text" id="photocredname" /></td> </tr>' + '<tr><td></td> <td> URL: </td> <td><input type="text" id="photocredurl" /></td> </tr>' + '<tr><td>Description credit&nbsp;</td> <td> name: </td> <td><input type="text" id="desccredname" /></td> </tr>' + '<tr><td></td> <td> URL: </td> <td><input type="text" id="desccredurl" /></td> </tr></table><table>';
                    searchTermsString = '<td>Search Terms:</td> <td><textarea id="keywords" rows="4" cols="15"/></textarea></td>';
                    searchTermsMenu = '<td><select id="SearchTermsMenu" name="searchtermsmenu" onchange="changeSearchTermsMenu()" multiple>' + '<option value="camping">Camping</option>' + '<option value="couples">Couples</option>' + '<option value="family">Family</option>' + '<option value="hiking">Hiking</option>' + '<option value="pets">Pets</option>' + '<option value="rv1">RVs</option>' + '<option value="seniors">Seniors</option>' + '<option value="single">Single</option>' + '<option value="teens">Teens</option>' + '<option value="swimming">Swimming</option>' + '<option value="theme park">Theme park</option>' + '<option value="wheelchair">Wheelchair</option>' + '</select></td></tr><tr></table><table>';
                }
                rtaHtml = "<div height=500 width=550><table>" + '<tr><td>Title:</td> <td><input type="text" id="name"/> </td> </tr>' + '<tr><td>Description:</td> <td><textarea id="description" rows="5" cols="20">' + (rtaAddress) + '</textarea></td> </tr>' + ifYouGoString + '<tr><td>Address 1:</td> <td><input type="text" id="rtaaddress1"/> </td> </tr>' + '<tr><td>Address 2:</td> <td><input type="text" id="rtaaddress2"/> </td> </tr>' + '<tr><td>Address 3:</td> <td><input type="text" id="rtaaddress3"/> </td> </tr>' + '<tr><td>City:</td> <td><input type="text" id="rtacity"/> </td> </tr>' + '<tr><td>State:</td> <td><input type="text" id="rtastate"/> </td></tr>' + '<tr><td>Postal code:</td> <td><input type="text" id="rtazip"/> ' + '<select id = "' + countryTypeString + '" name="country" onChange="changeCountry(' + (currindx) + ')">' + '<option value="4" selected>' + rta_RA_CountryArray[4] + '</option>' + '<option value="0">' + rta_RA_CountryArray[0] + '</option>' + '<option value="1">' + rta_RA_CountryArray[1] + '</option>' + '<option value="2">' + rta_RA_CountryArray[2] + '</option>' + '<option value="3">' + rta_RA_CountryArray[3] + '</option>' + "</select></td></tr>" + '<tr><td>Email:</td> <td><input type="text" id="rtaemail"/> </td></tr>' + "<br />" + "</table>" + mailingAddressString + 'Telephone numbers: country code, area code, number, extension.' + '<table>' + '<tr><td>Phone number for: </td></tr><tr><td><input type="text" id="phonelabel1"/></td></tr>' + '<tr><td><select id = "' + cc1ValueStrng + '" name="cc1" onChange="changeCC1(' + (currindx) + ')">' + '<option value="0" selected>' + rta_CountryCodeArray[0] + '</option>' + '<option value="1">' + rta_CountryCodeArray[1] + '</option>' + '<option value="2">' + rta_CountryCodeArray[2] + '</option>' + '<option value="3">' + rta_CountryCodeArray[3] + '</option>' + '<option value="4">' + rta_CountryCodeArray[4] + '</option>' + '<option value="5">' + rta_CountryCodeArray[5] + '</option>' + '<option value="6">' + rta_CountryCodeArray[6] + '</option>' + '<option value="7">' + rta_CountryCodeArray[7] + '</option>' + "</select></td>" + '<td><input type="text" size="3" id="rtaarea1"/> </td>' + '<td><input type="text" size="8" id="rtaphnum1"/> </td><td> ext. <input type="text" size="5" id="rtaext1"/> </td> </tr>' + '<tr><td>Phone number for: </td></tr><tr><td><input type="text" id="phonelabel2"/></td></tr>' + '<tr><td><select id = "' + cc2ValueStrng + '" name="cc2" onChange="changeCC2(' + (currindx) + ')">' + '<option value="0" selected>' + rta_CountryCodeArray[0] + '</option>' + '<option value="1">' + rta_CountryCodeArray[1] + '</option>' + '<option value="2">' + rta_CountryCodeArray[2] + '</option>' + '<option value="3">' + rta_CountryCodeArray[3] + '</option>' + '<option value="4">' + rta_CountryCodeArray[4] + '</option>' + '<option value="5">' + rta_CountryCodeArray[5] + '</option>' + '<option value="6">' + rta_CountryCodeArray[6] + '</option>' + '<option value="7">' + rta_CountryCodeArray[7] + '</option>' + "</select></td>" + '<td><input type="text" size="3" id="rtaarea2"/> </td>' + '<td><input type="text" size="8" id="rtaphnum2"/> </td><td> ext. <input type="text" size="5" id="rtaext2"/> </td> </tr>' + '<tr><td>Phone number for: </td></tr><tr><td><input type="text" id="phonelabel3"/></td></tr>' + '<tr><td><select id = "' + cc3ValueStrng + '" name="cc3" onChange="changeCC3(' + (currindx) + ')">' + '<option value="0" selected>' + rta_CountryCodeArray[0] + '</option>' + '<option value="1">' + rta_CountryCodeArray[1] + '</option>' + '<option value="2">' + rta_CountryCodeArray[2] + '</option>' + '<option value="3">' + rta_CountryCodeArray[3] + '</option>' + '<option value="4">' + rta_CountryCodeArray[4] + '</option>' + '<option value="5">' + rta_CountryCodeArray[5] + '</option>' + '<option value="6">' + rta_CountryCodeArray[6] + '</option>' + '<option value="7">' + rta_CountryCodeArray[7] + '</option>' + "</select></td>" + '<td><input type="text" size="3" id="rtaarea3"/> </td>' + '<td><input type="text" size="8" id="rtaphnum3"/> </td><td> ext. <input type="text" size="5" id="rtaext3"/> </td> </tr>' + "</table><table>" + '<tr><td>Photo URL:</td> <td><input type="text" id="photo1" /></td> </tr>' + '<td>Photo title:</td> <td><input type="text" id="phototitle" /></td> </tr>' + photoCreditString + "</table><table>" + '<tr><th>Links:</th></tr>' + '<tr><td>URL:</td><td><input type="text" id="rtalink1" /></td>' + '<td>Text:</td><td><input type="text" id="rtaanchor1" /></td></tr>' + '<tr><td>URL:</td><td><input type="text" id="rtalink2" /></td>' + '<td>Text:</td><td><input type="text" id="rtaanchor2" /></td></tr>' + '<tr><td>URL:</td><td><input type="text" id="rtalink3" /></td>' + '<td>Text:</td><td><input type="text" id="rtaanchor3" /></td></tr>' + "</table><table>" + "<tr>" + searchTermsString + searchTermsMenu + '<td><select id = "' + idRA_TypeString + '" name="typeOfRA" onChange="changeRA_Type(' + (currindx) + ')">' + '<option value="1">' + rta_RA_TypesArray[1] + '</option>' + '<option value="2">' + rta_RA_TypesArray[2] + '</option>' + '<option value="3">' + rta_RA_TypesArray[3] + '</option>' + '<option value="4">' + rta_RA_TypesArray[4] + '</option>' + '<option value="5">' + rta_RA_TypesArray[5] + '</option>' + '<option value="6">' + rta_RA_TypesArray[6] + '</option>' + '<option value="7">' + rta_RA_TypesArray[7] + '</option>' + '<option value="10">' + rta_RA_TypesArray[10] + '</option>' + '<option value="8">' + rta_RA_TypesArray[8] + '</option>' + '<option value="9" selected>' + rta_RA_TypesArray[9] + '</option>' + "</select></td>" + "</tr>" + '</table><table><tr><td>Position: </td> <td>' + posStrg + '</td> </tr>' + '<tr><td><a href="javascript:savePOIData(' + currindx + ')"><b>' + "Save" + '</b><\/a></td>' + '<td><a href="javascript:deleteCurrPOI(' + currindx + ')"><b>' + 'Delete' + '</b><\/a></td></tr>' + '</table><table><tr><td>' + (rta_Copyright_Line) + '</td> </tr>' + "</table></div>";
                theLat = results[0].geometry.location.lat();
                theLng = results[0].geometry.location.lng();
                poiIData = {
                    theID: -1,
                    name: "",
                    description: rtaAddress,
                    desccredname: "",
                    desccredurl: "",
                    ifyougo: "",
                    address1: "",
                    address2: "",
                    address3: "",
                    city: "",
                    state: "",
                    zipcode: "",
                    country: 4,
                    maddress1: "",
                    maddress2: "",
                    maddress3: "",
                    mcity: "",
                    mstate: "",
                    mzipcode: "",
                    mcountry: 4,
                    email: "",
                    phonelabel1: "",
                    ccode1: "",
                    acode1: "",
                    phnum1: "",
                    ext1: "",
                    phonelabel2: "",
                    ccode2: "",
                    acode2: "",
                    phnum2: "",
                    ext2: "",
                    phonelabel3: "",
                    ccode3: "",
                    acode3: "",
                    phnum3: "",
                    ext3: "",
                    links: "",
                    link1: "",
                    anchor1: "",
                    link2: "",
                    anchor2: "",
                    link3: "",
                    anchor3: "",
                    photo: "",
                    photo1: "",
                    phcredname: "",
                    phcredurl: "",
                    phototitle: "",
                    type: "",
                    lat: theLat,
                    lng: theLng,
                    keywords: "",
                    currentIndex: currindx,
                    dist1: Math.round(rtaDistance(theLat, theLng, rta_point1.lat(), rta_point1.lng())),
                    dist2: Math.round(rtaDistance(theLat, theLng, rta_point2.lat(), rta_point2.lng())),
                    dist3: Math.round(rtaDistance(theLat, theLng, rta_point3.lat(), rta_point3.lng())),
                    owner: mapOwner,
                    access: 10,
                    theHTML: rtaHtml
                };
                rtaPOIArray[currindx] = new rtaPOIObj(poiIData);
                if (RTAMap.getZoom() < 14) {
                    RTAMap.setZoom(14);
                }
                RTAMap.setCenter(results[0].geometry.location);
                windOpt = {
                    maxWidth: 600
                };
                rtaPOIArray[currindx].theInfowindow.setOptions(windOpt);
                rtaPOIArray[currindx].theInfowindow.open(RTAMap, rtaPOIArray[currindx].theMarker);
                google.maps.event.addListenerOnce(rtaPOIArray[currindx].theInfowindow, "closeclick", function() {
                    deleteCurrPOI(currindx);
                });
                inPlaceMarkerMode = true;
                enterAddPlaceMode();
                refreshAnySidebar("poiList", side_bar_htmlArray, "");
                hideCancel();
                document.getElementById("message").innerHTML = "Please save or delete the marker.";
            } else {
                switch (status) {
                    case google.maps.GeocoderStatus.ERROR:
                        alert("There was a problem contacting the Google servers. Please let RTA know about this.");
                        break;
                    case google.maps.GeocoderStatus.INVALID_REQUEST:
                        alert("Google reports this request is invalid. Please check the address entered.");
                        break;
                    case google.maps.GeocoderStatus.OVER_QUERY_LIMIT:
                        alert("The webpage has gone over the requests limit in too short a period of time. Please try again later.");
                        break;
                    case google.maps.GeocoderStatus.REQUEST_DENIED:
                        alert("Google has denied this request as being invalid. Please notify RTA if the problem persists with this webpage.");
                        break;
                    case google.maps.GeocoderStatus.UNKNOWN_ERROR:
                        alert("This request could not be processed due to a server error. The request may succeed if you try again.");
                        break;
                    case google.maps.GeocoderStatus.ZERO_RESULTS:
                        alert("Google reports that no result was found for this address. Please check the address entered.");
                        break;
                    default:
                        alert("Google reports an error with this request. Please check the address entered and notify RTA if the problem persists.");
                }
            }
        });
    }
}

function reverseCodeAddress(event, theLatLng) {
    eraseMessage();
    if (event) {
        theLatLng = event.latLng;
    }
    if (rta_geocoder) {
        rta_geocoder.geocode({
            latLng: theLatLng
        }, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                document.getElementById("clickAddress").innerHTML = "Address:<br />" + results[0].formatted_address;
                document.getElementById("message").innerHTML = "Address: " + results[0].formatted_address;
            } else {
                document.getElementById("message").innerHTML = "Address look-up (Geocode) was not successful for the following reason: " + status;
                if (rtadebuggingFlag) {
                    document.getElementById("messagelog").innerHTML += "Address look-up (Geocode) was not successful for the following reason: " + status + "<br />";
                }
            }
        });
    }
    exitRtePlaceMode();
    getAddressFromPoint = false;
    if (rtaAddressClickListener) {
        google.maps.event.removeListener(rtaAddressClickListener);
    }
}

function getRTAAddress() {
    getAddressFromPoint = true;
    rtaAddressClickListener = google.maps.event.addListenerOnce(RTAMap, 'click', reverseCodeAddress);
    enterAddPlaceMode();
    document.getElementById("message").innerHTML = "Click on map or marker to obtain closest address";
}

function updateCalcRtData(calcRtIndex) {
    var name = document.getElementById("rtname").value;
    if (!name) {
        name = "no name";
    }
    var textName = name;
    name = encodeURIComponent(name);
    var descriptionText = document.getElementById("calcrtdescription").value;
    var description = encodeURIComponent(descriptionText);
    rta_calcRtArray[calcRtIndex].description = descriptionText;
    rta_calcRtArray[calcRtIndex].name = textName;
    var idcode = rta_calcRtArray[calcRtIndex].dbID;
    var rtdistance = rta_calcRtArray[calcRtIndex].theDistance;
    var keywordsText = document.getElementById("rttype").value;
    rta_calcRtArray[calcRtIndex].keywords = keywordsText;
    var keywords = encodeURIComponent(keywordsText);
    var url = urlPrefix + "ajupdatacalcrtrta.php";
    var theParms = "name=" + name + "&description=" + description + "&idcode=" + idcode + "&keywords=" + keywords + "&timezoneOffset=" + rta_tzOffsetStrng;
    downloadPostUrl(url, theParms, function(data, responseCode) {
        if (responseCode === 200) {
            document.getElementById("message").innerHTML = "Route updated: " + textName + "<br />";
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Route updated: " + textName + " yes<br />";
            }
            var rtaHtml = textName + '<br />' + descriptionText + '<br />' + rtdistance + ' mi <br />' + '<a href="javascript:hideCalcRtAndMarker(' + calcRtIndex + ')">' + "Hide Route" + '<\/a>&nbsp;&nbsp;&nbsp;&nbsp;' + '<a href="javascript:editCalcRtWind(' + calcRtIndex + ')">' + "Edit" + '<\/a>&nbsp;&nbsp;&nbsp;&nbsp;' + '<a href="javascript:deleteCalcRt(' + (calcRtIndex) + ')">Delete<\/a><br />' + rta_Copyright_Line;
            rta_calcRtArray[calcRtIndex].theHTML = rtaHtml;
            rta_calcRtArray[calcRtIndex].rtInfowindow.setContent(rtaHtml);
            rta_calcRtArray[calcRtIndex].rtInfowindow.close();
            google.maps.event.clearInstanceListeners(rta_calcRtArray[calcRtIndex].rtInfowindow);
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "(Technical info: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + ")" + "<br />";
            }
            calc_side_bar_route_htmlArray[calcRtIndex] = '<a href="javascript:sidebarcalcrouteclick(' + (calcRtIndex) + ')">' + (calcRtIndex + 1) + '<\/a> ' +
                textName + ' (' + rtdistance + ' mi)<br />';
            refreshAnySidebar("calcRtSideBar", calc_side_bar_route_htmlArray, "");
            document.getElementById("message").innerHTML = "Route saved: " + rta_calcRtArray[calcRtIndex].name + ", distance = " + rta_calcRtArray[calcRtIndex].theDistance + " mi";
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Route saved: " + rta_calcRtArray[calcRtIndex].name + ", distance = " + rta_calcRtArray[calcRtIndex].theDistance + " mi<br />";
            }
        } else {
            document.getElementById("message").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        }
    });
}

function updateWaypoints(db_id_value, newPt, calcRtIndex, currRtaWaypts) {
    var numWaypts = currRtaWaypts.length;
    var theLats;
    var theLngs;
    var url;
    var theParms;
    numWaypts += 1;
    theLats = encodeURIComponent(Math.round(newPt.lat() * aMillion) / aMillion);
    theLngs = encodeURIComponent(Math.round(newPt.lng() * aMillion) / aMillion);
    url = urlPrefix + "ajupdatacalcrtwayptsrta.php";
    theParms = "theLats=" + theLats + "&theLngs=" + theLngs + "&numwaypts=" + numWaypts + "&timezoneOffset=" + rta_tzOffsetStrng + "&idcode=" + db_id_value;
    downloadPostUrl(url, theParms, function(data, responseCode) {
        if (responseCode === 200) {
            document.getElementById("message").innerHTML = "Route updated.";
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Route updated: " + db_id_value + " yes<br />";
            }
        } else {
            document.getElementById("message").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        }
    });
}

function saveNewQuikCalcRtData(startAddress, endAddress, currCalcRteIndx) {
    var rtdistance = rta_calcRtArray[currCalcRteIndx].theDistance;
    var textName = startAddress + " to " + endAddress;
    var name = encodeURIComponent(textName);
    rta_calcRtArray[currCalcRteIndx].theName = textName;
    var description = "";
    var keywords = "";
    var numWaypts = 0;
    var theLats = "0";
    var theLngs = "0";
    var startLat = Math.round(rta_calcRtArray[currCalcRteIndx].startLatLng.lat() * aMillion) / aMillion;
    var startLng = Math.round(rta_calcRtArray[currCalcRteIndx].startLatLng.lng() * aMillion) / aMillion;
    var endLat = Math.round(rta_calcRtArray[currCalcRteIndx].endLatLng.lat() * aMillion) / aMillion;
    var endLng = Math.round(rta_calcRtArray[currCalcRteIndx].endLatLng.lng() * aMillion) / aMillion;
    var startdist1 = encodeURIComponent(rta_calcRtArray[currCalcRteIndx].startDist1);
    var startdist2 = encodeURIComponent(rta_calcRtArray[currCalcRteIndx].startDist2);
    var startdist3 = encodeURIComponent(rta_calcRtArray[currCalcRteIndx].startDist3);
    var enddist1 = encodeURIComponent(rta_calcRtArray[currCalcRteIndx].endDist1);
    var enddist2 = encodeURIComponent(rta_calcRtArray[currCalcRteIndx].endDist2);
    var enddist3 = encodeURIComponent(rta_calcRtArray[currCalcRteIndx].endDist3);
    var owner = encodeURIComponent(rta_calcRtArray[currCalcRteIndx].theOwner);
    var newRtField = 0;
    var rtLats = [];
    var rtLngs = [];
    var theRtlats = 0;
    var theRtlngs = 0;
    var rtNumPts = 0;
    if (rtNumPts > 0) {
        for (i = 0; i < rtNumPts; i++) {
            rtLats[i] = Math.round(rta_calcRtArray[currCalcRteIndx].rtLatLngs[i].lat() * aMillion) / aMillion;
            rtLngs[i] = Math.round(rta_calcRtArray[currCalcRteIndx].rtLatLngs[i].lng() * aMillion) / aMillion;
        }
        theRtlats = encodeURIComponent(rtLats.join());
        theRtlngs = encodeURIComponent(rtLngs.join());
    }
    var overviewLat = [];
    var overviewLng = [];
    var theOverLats = 0;
    var theOverLngs = 0;
    var numOverview = 0;
    if (numOverview > 0) {
        for (i = 0; i < numOverview; i++) {
            overviewLat[i] = Math.round(rta_calcRtArray[currCalcRteIndx].rtOverview[i].lat() * aMillion) / aMillion;
            overviewLng[i] = Math.round(rta_calcRtArray[currCalcRteIndx].rtOverview[i].lng() * aMillion) / aMillion;
        }
        theOverLats = encodeURIComponent(overviewLat.join());
        theOverLngs = encodeURIComponent(overviewLng.join());
    }
    var url = urlPrefix + "ajaddacalcrtrta.php";
    var theParms = "name=" + name + "&description=" + description + "&keywords=" + keywords + "&new=" + newRtField + "&numwaypoints=" + numWaypts + "&thelats=" + theLats + "&thelngs=" + theLngs + "&startlat=" + startLat + "&startlng=" + startLng + "&endlat=" + endLat + "&endlng=" + endLng + "&startdist1=" + startdist1 + "&startdist2=" + startdist2 + "&startdist3=" + startdist3 + "&enddist1=" + enddist1 + "&enddist2=" + enddist2 + "&enddist3=" + enddist3 + "&distance=" + rtdistance + "&owner=" + owner + "&ownercode=" + rtaUserID + "&access=" + curraccess + "&timezoneOffset=" + rta_tzOffsetStrng;
    downloadPostUrl(url, theParms, function(data, responseCode) {
        if (responseCode == 200) {
            var theInfo;
            var theRtaID;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Route saved: " + textName + " yes<br />";
            }
            theRtaID = parseInt(data, 10);
            rta_calcRtArray[currCalcRteIndx].dbID = theRtaID;
            theInfo = {
                theID: theRtaID
            };
            currRTAMap[0][0] = currCalcRteIndx;
            currRTAMap[0][1] = theRtaID;
            currRTAMap[0][2] = 1;
            calc_side_bar_db_infoArray[currCalcRteIndx] = theInfo;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "(Technical info: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + ")" + "<br />";
            }
            calc_side_bar_route_htmlArray[currCalcRteIndx] = '<a href="javascript:sidebarcalcrouteclick(' + (currCalcRteIndx) + ')">' + (currCalcRteIndx + 1) + '<\/a> ' +
                textName + ' (' + rtdistance + ' mi)<br />';
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Route saved: " + rta_calcRtArray[currCalcRteIndx].name + ", distance = " + rta_calcRtArray[currCalcRteIndx].theDistance + " mi<br />";
            }
        } else {
            document.getElementById("message").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        }
        exitRtePlaceMode();
    });
}

function removeCalcRtFromDb(calcRtIndex) {
    var thecalcrtid = rta_calcRtArray[calcRtIndex].dbID;
    var textName = rta_calcRtArray[calcRtIndex].name;
    var url = urlPrefix + "ajadminkillrtrta.php";
    var theParms = "thedbid=" + thecalcrtid + "&rtatablename=" + "calcroutes";
    downloadPostUrl(url, theParms, function(data, responseCode) {
        if (responseCode === 200) {
            document.getElementById("message").innerHTML = "Route '" + (textName) + "' deleted.";
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Route #" + (thecalcrtid) + ", " + (textName) + " deleted. Data: " + data + "<br />";
            }
            hideCalcRtAndMarker(calcRtIndex);
            calc_side_bar_db_infoArray[calcRtIndex] = null;
            rta_calcRtArray[calcRtIndex].startMarker.setMap(null);
            calc_side_bar_route_htmlArray[calcRtIndex] = null;
            if (rta_Maptype === "mapcenter") {
                refreshAnySidebar("calcRtSideBar", calc_side_bar_route_htmlArray, "");
            }
        } else {
            document.getElementById("message").innerHTML += " Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        }
        exitRtePlaceMode();
    });
}

function deleteCalcRt(calcRtIndex) {
    var textName = rta_calcRtArray[calcRtIndex].name;
    var theReply = false;
    theReply = confirm("Permanently delete route '" + textName + "'? Any maps saved with this route will be incomplete.");
    if (theReply) {
        removeCalcRtFromDb(calcRtIndex);
    } else {
        return;
    }
}

function saveCalcRtData(calcRtIndex) {
    var textName = document.getElementById("rtname").value;
    var rta_RouteID;
    var i;
    if (!textName) {
        textName = "no name";
    }
    var name = encodeURIComponent(textName);
    var descriptionText = document.getElementById("calcrtdescription").value;
    var description = encodeURIComponent(descriptionText);
    rta_calcRtArray[calcRtIndex].description = descriptionText;
    rta_calcRtArray[calcRtIndex].name = textName;
    var keywordsText = document.getElementById("rttype").value;
    rta_calcRtArray[calcRtIndex].keywords = keywordsText;
    var keywords = encodeURIComponent(keywordsText);
    var startLat = Math.round(rta_calcRtArray[calcRtIndex].startLatLng.lat() * aMillion) / aMillion;
    var startLng = Math.round(rta_calcRtArray[calcRtIndex].startLatLng.lng() * aMillion) / aMillion;
    var endLat = Math.round(rta_calcRtArray[calcRtIndex].endLatLng.lat() * aMillion) / aMillion;
    var endLng = Math.round(rta_calcRtArray[calcRtIndex].endLatLng.lng() * aMillion) / aMillion;
    var rtdistance = rta_calcRtArray[calcRtIndex].theDistance;
    var startdist1 = encodeURIComponent(rta_calcRtArray[calcRtIndex].startDist1);
    var startdist2 = encodeURIComponent(rta_calcRtArray[calcRtIndex].startDist2);
    var startdist3 = encodeURIComponent(rta_calcRtArray[calcRtIndex].startDist3);
    var enddist1 = encodeURIComponent(rta_calcRtArray[calcRtIndex].endDist1);
    var enddist2 = encodeURIComponent(rta_calcRtArray[calcRtIndex].endDist2);
    var enddist3 = encodeURIComponent(rta_calcRtArray[calcRtIndex].endDist3);
    var owner = encodeURIComponent(rta_calcRtArray[calcRtIndex].theOwner);
    var newRtField = 0;
    var rtLats = [];
    var rtLngs = [];
    var theRtlats = 0;
    var theRtlngs = 0;
    var rtNumPts = 0;
    if (rtNumPts > 0) {
        for (i = 0; i < rtNumPts; i++) {
            rtLats[i] = Math.round(rta_calcRtArray[calcRtIndex].rtLatLngs[i].lat() * aMillion) / aMillion;
            rtLngs[i] = Math.round(rta_calcRtArray[calcRtIndex].rtLatLngs[i].lng() * aMillion) / aMillion;
        }
        theRtlats = encodeURIComponent(rtLats.join());
        theRtlngs = encodeURIComponent(rtLngs.join());
    }
    var overviewLat = [];
    var overviewLng = [];
    var theOverLats = 0;
    var theOverLngs = 0;
    var numOverview = 0;
    if (numOverview > 0) {
        for (i = 0; i < numOverview; i++) {
            overviewLat[i] = Math.round(rta_calcRtArray[calcRtIndex].rtOverview[i].lat() * aMillion) / aMillion;
            overviewLng[i] = Math.round(rta_calcRtArray[calcRtIndex].rtOverview[i].lng() * aMillion) / aMillion;
        }
        theOverLats = encodeURIComponent(overviewLat.join());
        theOverLngs = encodeURIComponent(overviewLng.join());
    }
    var numWaypts = rta_calcRtArray[calcRtIndex].waypoints.length;
    var latData = [];
    var lngData = [];
    var theLats;
    var theLngs;
    if (numWaypts > 0) {
        for (i = 0; i < numWaypts; i++) {
            latData[i] = Math.round(rta_calcRtArray[calcRtIndex].waypoints[i].lat() * aMillion) / aMillion;
            lngData[i] = Math.round(rta_calcRtArray[calcRtIndex].waypoints[i].lng() * aMillion) / aMillion;
        }
        theLats = encodeURIComponent(latData.join());
        theLngs = encodeURIComponent(lngData.join());
    } else {
        theLats = "0";
        theLngs = "0";
    }
    var textKeywords = document.getElementById("rttype").value;
    var url = urlPrefix + "ajaddacalcrtrta.php";
    var theParms = "name=" + name + "&description=" + description + "&keywords=" + keywords + "&new=" + newRtField + "&numwaypoints=" + numWaypts + "&thelats=" + theLats + "&thelngs=" + theLngs + "&startlat=" + startLat + "&startlng=" + startLng + "&endlat=" + endLat + "&endlng=" + endLng + "&startdist1=" + startdist1 + "&startdist2=" + startdist2 + "&startdist3=" + startdist3 + "&enddist1=" + enddist1 + "&enddist2=" + enddist2 + "&enddist3=" + enddist3 + "&distance=" + rtdistance + "&owner=" + owner + "&ownercode=" + rtaUserID + "&access=" + curraccess + "&timezoneOffset=" + rta_tzOffsetStrng;
    eraseMessage();
    downloadPostUrl(url, theParms, function(data, responseCode) {
        if (responseCode == 200) {
            var windOpt;
            var theInfo;
            rta_RouteID = parseInt(data, 10);
            currRTAMap[0][1] = rta_RouteID;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Route saved: " + textName + " yes<br />";
            }
            var rtaHtml = "Route" + "<br />" + textName + "<br />" + descriptionText + "<br />" + textKeywords + "<br />" + '<a href="javascript:hideCalcRtAndMarker(' + (calcRtIndex) + ')">Hide Route<\/a>&nbsp;&nbsp;<a href="javascript:editCalcRtWind(' + (calcRtIndex) + ')">Edit<\/a>' + '&nbsp;&nbsp;<a href="javascript:deleteCalcRt(' + (calcRtIndex) + ')">Delete Route<\/a><br />';
            google.maps.event.clearInstanceListeners(rta_calcRtArray[calcRtIndex].rtInfowindow);
            rta_calcRtArray[calcRtIndex].rtInfowindow.close();
            windOpt = {
                maxWidth: 220
            };
            rta_calcRtArray[calcRtIndex].rtInfowindow.setOptions(windOpt);
            rta_calcRtArray[calcRtIndex].theHTML = rtaHtml;
            rta_calcRtArray[calcRtIndex].rtInfowindow.setContent(rtaHtml);
            rta_calcRtArray[calcRtIndex].rtInfowindow.open(RTAMap, rta_calcRtArray[calcRtIndex].startMarker);
            rta_calcRtArray[calcRtIndex].dbID = rta_RouteID;
            if (rtaWaypts.length > 0) {
                clearWayPoints();
            }
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "(Technical info: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + ")" + "<br />";
            }
            calc_side_bar_route_htmlArray[calcRtIndex] = '<a href="javascript:sidebarcalcrouteclick(' + (calcRtIndex) + ')">' + (calcRtIndex + 1) + '<\/a> ' +
                textName + ' (' + rtdistance + ' mi)<br />';
            refreshAnySidebar("calcRtSideBar", calc_side_bar_route_htmlArray, "");
            document.getElementById("message").innerHTML = "Route saved: " + rta_calcRtArray[calcRtIndex].name + ", distance = " + rta_calcRtArray[calcRtIndex].theDistance + " mi";
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Route saved: " + rta_calcRtArray[calcRtIndex].name + ", distance = " + rta_calcRtArray[calcRtIndex].theDistance + " mi<br />";
            }
        } else {
            document.getElementById("message").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        }
        exitRtePlaceMode();
    });
}

function mapSaveCalcRt(rtIndx) {
    var name = encodeURIComponent(rta_calcRtArray[rtIndx].name);
    var i;
    var descriptionAreaIDString = "rtinfoAddress" + calcRtIndex;
    var descriptionText = nicEditors.findEditor(descriptionAreaIDString).getContent();
    var description = encodeURIComponent(descriptionText);
    var keywords = encodeURIComponent(rta_calcRtArray[rtIndx].keywords);
    var startLat = Math.round(rta_calcRtArray[rtIndx].startLatLng.lat() * aMillion) / aMillion;
    var startLng = Math.round(rta_calcRtArray[rtIndx].startLatLng.lng() * aMillion) / aMillion;
    var endLat = Math.round(rta_calcRtArray[rtIndx].endLatLng.lat() * aMillion) / aMillion;
    var endLng = Math.round(rta_calcRtArray[rtIndx].endLatLng.lng() * aMillion) / aMillion;
    var rtdistance = rta_calcRtArray[rtIndx].theDistance;
    var startdist1 = encodeURIComponent(rta_calcRtArray[calcRtIndex].startDist1);
    var startdist2 = encodeURIComponent(rta_calcRtArray[calcRtIndex].startDist2);
    var startdist3 = encodeURIComponent(rta_calcRtArray[calcRtIndex].startDist3);
    var enddist1 = encodeURIComponent(rta_calcRtArray[calcRtIndex].endDist1);
    var enddist2 = encodeURIComponent(rta_calcRtArray[calcRtIndex].endDist2);
    var enddist3 = encodeURIComponent(rta_calcRtArray[calcRtIndex].endDist3);
    var owner = encodeURIComponent(rta_calcRtArray[rtIndx].theOwner);
    var numWaypts = rta_calcRtArray[rtIndx].waypoints.length;
    var latData = [];
    var lngData = [];
    var theLats;
    var theLngs;
    if (numWaypts > 0) {
        for (i = 0; i < numWaypts; i++) {
            latData[i] = Math.round(rta_calcRtArray[rtIndx].waypoints[i].lat() * aMillion) / aMillion;
            lngData[i] = Math.round(rta_calcRtArray[rtIndx].waypoints[i].lng() * aMillion) / aMillion;
        }
        theLats = encodeURIComponent(latData.join());
        theLngs = encodeURIComponent(lngData.join());
    } else {
        theLats = "0";
        theLngs = "0";
    }
    var url = urlPrefix + "ajaddacalcrtrta.php";
    var theParms = "name=" + name + "&description=" + description + "&keywords=" + keywords + "&numwaypoints=" + numWaypts + "&thelats=" + theLats + "&thelngs=" + theLngs + "&startlat=" + startLat + "&startlng=" + startLng + "&endlat=" + endLat + "&endlng=" + endLng + "&startdist1=" + startdist1 + "&startdist2=" + startdist2 + "&startdist3=" + startdist3 + "&enddist1=" + enddist1 + "&enddist2=" + enddist2 + "&enddist3=" + enddist3 + "&distance=" + rtdistance + "&owner=" + owner + "&access=" + curraccess + "&timezoneOffset=" + rta_tzOffsetStrng;
    downloadPostUrl(url, theParms, function(data, responseCode) {
        if (responseCode === 200) {
            rta_calcRtArray[rtIndx].dbID = parseInt(data, 10);
            document.getElementById("message").innerHTML = "Route saved: " + rtIndx + ". ";
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Route saved: " + rtIndx + " yes<br />";
            }
            rta_calcRtArray[rtIndx].rtInfowindow.close();
            var rtaHtml = "Route" + (rtIndx + 1) + "<br />" + "<input type='button' value='Hide Route' onclick='hideCalcRtAndMarker(" + rtIndx + ")'/>";
            rta_calcRtArray[rtIndx].rtInfowindow.setContent(rtaHtml);
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "(Technical info: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + ")" + "<br />";
            }
            calc_side_bar_route_htmlArray[rtIndx] = '<br /><a href="javascript:sidebarcalcrouteclick(' + (rtIndx) + ')">' + (rtIndx + 1) + '<\/a> ' + " (" + rtdistance + " mi)";
            refreshAnySidebar("calcRtSideBar", calc_side_bar_route_htmlArray, "");
            document.getElementById("message").innerHTML = "Route saved: " + rta_calcRtArray[rtIndx].name + ", distance = " + rta_calcRtArray[rtIndx].theDistance + " mi";
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Route saved: " + rta_calcRtArray[rtIndx].name + ", distance = " + rta_calcRtArray[rtIndx].theDistance + " mi<br />";
            }
        } else {
            document.getElementById("message").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        }
    });
}

function saveLDRtData(theIndex) {
    var name = encodeURIComponent(trim(removeChars(document.getElementById("rtname").value)));
    var infoWindDescriptionID = "ldrtinfoAddress" + theIndex;
    var descriptionText = document.getElementById(infoWindDescriptionID).value;
    var description = encodeURIComponent(descriptionText);
    var keywords = encodeURIComponent(document.getElementById("rttype").value);
    var latData = [];
    var lngData = [];
    var thePath = rtaRoutes[theIndex].getPath();
    var textName = trim(removeChars(document.getElementById("rtname").value));
    var textKeywords = document.getElementById("rttype").value;
    var owner = encodeURIComponent(mapOwner);
    var patEnd = thePath.getLength() - 1;
    var ldStartLat = thePath.getAt(0).lat();
    var ldStartLng = thePath.getAt(0).lng();
    var ldEndLat = thePath.getAt(patEnd).lat();
    var ldEndLng = thePath.getAt(patEnd).lng();
    var startdist1 = encodeURIComponent(Math.round(rtaDistance(ldStartLat, ldStartLng, rta_point1.lat(), rta_point1.lng())));
    var startdist2 = encodeURIComponent(Math.round(rtaDistance(ldStartLat, ldStartLng, rta_point2.lat(), rta_point2.lng())));
    var startdist3 = encodeURIComponent(Math.round(rtaDistance(ldStartLat, ldStartLng, rta_point3.lat(), rta_point3.lng())));
    var enddist1 = encodeURIComponent(Math.round(rtaDistance(ldEndLat, ldEndLng, rta_point1.lat(), rta_point1.lng())));
    var enddist2 = encodeURIComponent(Math.round(rtaDistance(ldEndLat, ldEndLng, rta_point2.lat(), rta_point2.lng())));
    var enddist3 = encodeURIComponent(Math.round(rtaDistance(ldEndLat, ldEndLng, rta_point3.lat(), rta_point3.lng())));
    thePath.forEach(function(latLng, index) {
        latData[index] = Math.round(latLng.lat() * aMillion) / aMillion;
    });
    thePath.forEach(function(latLng, index) {
        lngData[index] = Math.round(latLng.lng() * aMillion) / aMillion;
    });
    var theLats = encodeURIComponent(latData.join());
    var theLngs = encodeURIComponent(lngData.join());
    var url = urlPrefix + "ajaddaldrtepostrta.php";
    theParms = "name=" + name + "&description=" + description + "&keywords=" + keywords + "&thelats=" + theLats + "&thelngs=" + theLngs + "&startdist1=" + startdist1 + "&startdist2=" + startdist2 + "&startdist3=" + startdist3 + "&enddist1=" + enddist1 + "&enddist2=" + enddist2 + "&enddist3=" + enddist3 + "&access=" + curraccess + "&ownercode=" + rtaUserID + "&owner=" + owner + "&access=" + curraccess + "&timezoneOffset=" + rta_tzOffsetStrng;
    downloadPostUrl(url, theParms, function(data, responseCode) {
        var rtaHtml;
        var nameData;
        eraseMessage();
        if (responseCode === 200) {
            document.getElementById("message").innerHTML = "Route saved: " + textName;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Route saved: " + textName + "<br />";
            }
            rtaHtml = "Route" + "<br />" + textName + "<br />" + descriptionText + "<br />" + textKeywords + '<br /><a href="javascript:hideLDRoute(' + (theIndex) + ')">' + 'Hide Route<\/a>' +
            '&nbsp;&nbsp;&nbsp;' + '<a href="javascript:deleteLDRoute(' + theIndex + ')">' + "Delete" + '<\/a>'; // &&&&&&
            nameData = {
                theName: textName
            };
            ld_side_bar_db_infoArray[theIndex] = nameData;
            google.maps.event.clearInstanceListeners(rtaRtStartInfoWindows[theIndex]);
            rtaRtStartInfoWindows[theIndex].setContent(rtaHtml);
            rtaRtStartInfoWindows[theIndex].close();
            dbLDRteID[theIndex] = parseInt(data, 10);
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "(Technical info: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + ")" + "<br />";
            }
            side_bar_route_htmlArray[theIndex] = '<a href="javascript:sidebarrouteclick(' + (theIndex) + ')">' + (theIndex + 1) + '<\/a> ' + textName + '<br />';
            refreshAnySidebar("routeList", side_bar_route_htmlArray, "");
        } else {
            document.getElementById("message").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        }
        exitRtePlaceMode();
    });
}

function mapSaveLDRoute(routeIndex) {
    var name = encodeURIComponent(" ");
    var description = encodeURIComponent(" ");
    var keywords = encodeURIComponent(" ");
    var owner = encodeURIComponent(mapOwner);
    var ownercode = encodeURIComponent(rtaUserID);
    var latData = [];
    var lngData = [];
    var thePath = rtaRoutes[routeIndex].getPath();
    thePath.forEach(function(latLng, index) {
        latData[index] = Math.round(latLng.lat() * aMillion) / aMillion;
    });
    thePath.forEach(function(latLng, index) {
        lngData[index] = Math.round(latLng.lng() * aMillion) / aMillion;
    });
    var theLats = encodeURIComponent(latData.join());
    var theLngs = encodeURIComponent(lngData.join());
    var url = urlPrefix + "rta_phpsqlinfo_addldrte.php";
    var theParms = "name=" + name + "&description=" + description + "&keywords=" + keywords + "&thelats=" + theLats + "&thelngs=" + theLngs + "&owner=" + owner + "&ownercode=" + ownercode + "&access=" + curraccess + "&timezoneOffset=" + rta_tzOffsetStrng;
    downloadPostUrl(url, theParms, function(data, responseCode) {
        if (responseCode === 200) {
            var rtaHtml;
            document.getElementById("message").innerHTML = "Route saved: " + (routeIndex + 1) + "<br />";
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Route saved: " + (routeIndex + 1) + "<br />";
            }
            rtaHtml = "Route " + (routeIndex + 1);
            rtaRtStartInfoWindows[routeIndex].close();
            rtaRtStartInfoWindows[routeIndex].setContent(rtaHtml);
            dbLDRteID[routeIndex] = parseInt(data, 10);
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "(Technical info: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + ")" + "<br />";
            }
            side_bar_route_htmlArray[routeIndex] = '<a href="javascript:sidebarrouteclick(' + (routeIndex) + ')">' + (routeIndex + 1) + '<\/a> <br />';
            refreshAnySidebar("routeList", side_bar_route_htmlArray, "");
        } else {
            document.getElementById("message").innerHTML += "<br />Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        }
    });
}

function downloadPostUrl(url, theParms, callback) {
    var request = getHTTPObject();
    if (request) {
        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                request.onreadystatechange = doNothing;
                callback(request.responseText, request.status);
            }
        };
        request.open('POST', url, true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//        request.setRequestHeader("Content-length", theParms.length);
//        request.setRequestHeader("Connection", "close");             These lines not needed
        request.send(theParms);
    }
}

function doNothing() {}

function updateSearchPOIData(theIndex) {
    var url;
    var theParms;
    var idcode = encodeURIComponent(poiSearchArray[theIndex].dbPOIID);
    var theLatlng = poiSearchArray[theIndex].theMarker.getPosition();
    var theLat = theLatlng.lat();
    var theLng = theLatlng.lng();
    var posStrg = theLatlng.toUrlValue(6) + "";
    var dist1 = encodeURIComponent(poiSearchArray[theIndex].dist1);
    var dist2 = encodeURIComponent(poiSearchArray[theIndex].dist2);
    var dist3 = encodeURIComponent(poiSearchArray[theIndex].dist3);
    var rtaTheType = parseInt(poiSearchArray[theIndex].theType, 10);
    var rtapoitype = encodeURIComponent(rtaTheType);
    var name = encodeURIComponent(document.getElementById("name").value);
    var textName = document.getElementById("name").value;
    var description = encodeURIComponent(document.getElementById("description").value);
    var rtaemail = encodeURIComponent(document.getElementById("rtaemail").value);
    var codedKeywords;
    var keywords;
    var rtaaddress1 = encodeURIComponent(document.getElementById("rtaaddress1").value);
    var rtaaddress2 = encodeURIComponent(document.getElementById("rtaaddress2").value);
    var rtaaddress3 = encodeURIComponent(document.getElementById("rtaaddress3").value);
    var rtacity = encodeURIComponent(document.getElementById("rtacity").value);
    var rtastate = encodeURIComponent(document.getElementById("rtastate").value);
    var rtazip = encodeURIComponent(document.getElementById("rtazip").value);
    var rtacountry = encodeURIComponent(rtaTheSearchCountryValue[theIndex]);
    var phonelab1 = encodeURIComponent(document.getElementById("phonelabel1").value);
    var phonelab2 = encodeURIComponent(document.getElementById("phonelabel2").value);
    var phonelab3 = encodeURIComponent(document.getElementById("phonelabel3").value);
    var ccode1 = rta_CC1SearchValue[theIndex];
    var ccode2 = rta_CC2SearchValue[theIndex];
    var ccode3 = rta_CC3SearchValue[theIndex];
    var phonarea1 = encodeURIComponent(document.getElementById("rtaarea1").value);
    var phonarea2 = encodeURIComponent(document.getElementById("rtaarea2").value);
    var phonarea3 = encodeURIComponent(document.getElementById("rtaarea3").value);
    var phonnum1 = encodeURIComponent(document.getElementById("rtaphnum1").value);
    var phonnum2 = encodeURIComponent(document.getElementById("rtaphnum2").value);
    var phonnum3 = encodeURIComponent(document.getElementById("rtaphnum3").value);
    var phonext1 = encodeURIComponent(document.getElementById("rtaext1").value);
    var phonext2 = encodeURIComponent(document.getElementById("rtaext2").value);
    var phonext3 = encodeURIComponent(document.getElementById("rtaext3").value);
    var link1 = encodeURIComponent(document.getElementById("rtalink1").value);
    var link2 = encodeURIComponent(document.getElementById("rtalink2").value);
    var link3 = encodeURIComponent(document.getElementById("rtalink3").value);
    var anchor1 = encodeURIComponent(document.getElementById("rtaanchor1").value);
    var anchor2 = encodeURIComponent(document.getElementById("rtaanchor2").value);
    var anchor3 = encodeURIComponent(document.getElementById("rtaanchor3").value);
    var photo1 = encodeURIComponent(document.getElementById("photo1").value);
    var phototitle = encodeURIComponent(document.getElementById("phototitle").value);
    var type = encodeURIComponent(poiSearchArray[theIndex].theType);
    var ownercode = encodeURIComponent(-10);
    var owner = "RTA";
    var accesscode = encodeURIComponent(poiSearchArray[theIndex].theAccess);
    var ifyougo = encodeURIComponent(document.getElementById("ifyougo").value);
    var rtamaddress1 = encodeURIComponent(document.getElementById("rtamaddress1").value);
    var rtamaddress2 = encodeURIComponent(document.getElementById("rtamaddress2").value);
    var rtamaddress3 = encodeURIComponent(document.getElementById("rtamaddress3").value);
    var rtamcity = encodeURIComponent(document.getElementById("rtamcity").value);
    var rtamstate = encodeURIComponent(document.getElementById("rtamstate").value);
    var rtamzip = encodeURIComponent(document.getElementById("rtamzip").value);
    var rtamcountry = encodeURIComponent(rtaTheSearchMCountryValue[theIndex]);
    var photocred = encodeURIComponent(document.getElementById("photocredname").value);
    var photourl = encodeURIComponent(document.getElementById("photocredurl").value);
    var desccred = encodeURIComponent(document.getElementById("desccredname").value);
    var descurl = encodeURIComponent(document.getElementById("desccredurl").value);
    if (cannedSearchTerms !== '') {
        codedKeywords = cannedSearchTerms + document.getElementById("keywords").value;
        keywords = encodeURIComponent(codedKeywords);
    } else {
        keywords = encodeURIComponent(document.getElementById("keywords").value);
    }
    poiSearchArray[theIndex].theMarker.setIcon(rtaFlagImage[rtaTheType]);
    poiSearchArray[theIndex].theName = document.getElementById("name").value;
    poiSearchArray[theIndex].theDescription = document.getElementById("description").value;
    poiSearchArray[theIndex].theKeywords = document.getElementById("keywords").value;
    poiSearchArray[theIndex].theAddress1 = document.getElementById("rtaaddress1").value;
    poiSearchArray[theIndex].theAddress2 = document.getElementById("rtaaddress2").value;
    poiSearchArray[theIndex].theAddress3 = document.getElementById("rtaaddress3").value;
    poiSearchArray[theIndex].theCity = document.getElementById("rtacity").value;
    poiSearchArray[theIndex].theState = document.getElementById("rtastate").value;
    poiSearchArray[theIndex].theZip = document.getElementById("rtazip").value;
    poiSearchArray[theIndex].theCountry = rtaTheSearchCountryValue[theIndex];
    poiSearchArray[theIndex].theEmail = document.getElementById("rtaemail").value;
    poiSearchArray[theIndex].thePhoto1 = document.getElementById("photo1").value;
    poiSearchArray[theIndex].thePhotoTitle = document.getElementById("phototitle").value;
    poiSearchArray[theIndex].theIfYouGo = document.getElementById("ifyougo").value;
    poiSearchArray[theIndex].theMAddress1 = document.getElementById("rtamaddress1").value;
    poiSearchArray[theIndex].theMAddress2 = document.getElementById("rtamaddress2").value;
    poiSearchArray[theIndex].theMAddress3 = document.getElementById("rtamaddress3").value;
    poiSearchArray[theIndex].theMCity = document.getElementById("rtamcity").value;
    poiSearchArray[theIndex].theMState = document.getElementById("rtamstate").value;
    poiSearchArray[theIndex].theMZip = document.getElementById("rtamzip").value;
    poiSearchArray[theIndex].theMCountry = rtaTheSearchMCountryValue[theIndex];
    poiSearchArray[theIndex].thePhotoCredit = document.getElementById("photocredname").value;
    poiSearchArray[theIndex].thePhotoCredURL = document.getElementById("photocredurl").value;
    poiSearchArray[theIndex].theDescCredit = document.getElementById("desccredname").value;
    poiSearchArray[theIndex].theDescCredURL = document.getElementById("desccredurl").value;
    poiSearchArray[theIndex].theKeywords = document.getElementById("keywords").value;
    if (cannedSearchTerms !== '') {
        poiSearchArray[theIndex].theKeywords = cannedSearchTerms + poiSearchArray[theIndex].theKeywords;
    }
    poiSearchArray[theIndex].thePhoneLabel1 = document.getElementById("phonelabel1").value;
    poiSearchArray[theIndex].thePhoneLabel2 = document.getElementById("phonelabel2").value;
    poiSearchArray[theIndex].thePhoneLabel3 = document.getElementById("phonelabel3").value;
    poiSearchArray[theIndex].thePhone11 = rta_CC1SearchValue[theIndex];
    poiSearchArray[theIndex].thePhone21 = rta_CC2SearchValue[theIndex];
    poiSearchArray[theIndex].thePhone31 = rta_CC3SearchValue[theIndex];
    poiSearchArray[theIndex].thePhone12 = document.getElementById("rtaarea1").value;
    poiSearchArray[theIndex].thePhone22 = document.getElementById("rtaarea2").value;
    poiSearchArray[theIndex].thePhone32 = document.getElementById("rtaarea3").value;
    poiSearchArray[theIndex].thePhone13 = document.getElementById("rtaphnum1").value;
    poiSearchArray[theIndex].thePhone23 = document.getElementById("rtaphnum2").value;
    poiSearchArray[theIndex].thePhone33 = document.getElementById("rtaphnum3").value;
    poiSearchArray[theIndex].thePhone14 = document.getElementById("rtaext1").value;
    poiSearchArray[theIndex].thePhone24 = document.getElementById("rtaext2").value;
    poiSearchArray[theIndex].thePhone34 = document.getElementById("rtaext3").value;
    poiSearchArray[theIndex].theLink1 = document.getElementById("rtalink1").value;
    poiSearchArray[theIndex].theLink2 = document.getElementById("rtalink2").value;
    poiSearchArray[theIndex].theLink3 = document.getElementById("rtalink3").value;
    poiSearchArray[theIndex].theAnchor1 = document.getElementById("rtaanchor1").value;
    poiSearchArray[theIndex].theAnchor2 = document.getElementById("rtaanchor2").value;
    poiSearchArray[theIndex].theAnchor3 = document.getElementById("rtaanchor3").value;
    url = urlPrefix + "ajupdatapoipostrta.php";
    theParms = "name=" + name + "&description=" + description + "&ifyougo=" + ifyougo + "&address1=" + rtaaddress1 + "&address2=" + rtaaddress2 + "&address3=" + rtaaddress3 + "&city=" + rtacity + "&state=" + rtastate + "&zipcode=" + rtazip + "&country=" + rtacountry + "&maddress1=" + rtamaddress1 + "&maddress2=" + rtamaddress2 + "&maddress3=" + rtamaddress3 + "&mcity=" + rtamcity + "&mstate=" + rtamstate + "&mzipcode=" + rtamzip + "&mcountry=" + rtamcountry + "&email=" + rtaemail + "&phonelab1=" + phonelab1 + "&phonelab2=" + phonelab2 + "&phonelab3=" + phonelab3 + "&ccode1=" + ccode1 + "&ccode2=" + ccode2 + "&ccode3=" + ccode3 + "&phonarea1=" + phonarea1 + "&phonarea2=" + phonarea2 + "&phonarea3=" + phonarea3 + "&phonnum1=" + phonnum1 + "&phonnum2=" + phonnum2 + "&phonnum3=" + phonnum3 + "&phonext1=" + phonext1 + "&phonext2=" + phonext2 + "&phonext3=" + phonext3 + "&photo1=" + photo1 + "&phototitle=" + phototitle + "&photocred=" + photocred + "&photourl=" + photourl + "&desccred=" + desccred + "&descurl=" + descurl + "&link1=" + link1 + "&link2=" + link2 + "&link3=" + link3 + "&anchor1=" + anchor1 + "&anchor2=" + anchor2 + "&anchor3=" + anchor3 + "&keywords=" + keywords + "&type=" + type + "&lat=" + theLatlng.lat() + "&lng=" + theLatlng.lng() + "&dist1=" + dist1 + "&dist2=" + dist2 + "&dist3=" + dist3 + "&idcode=" + idcode + "&timezoneOffset=" + rta_tzOffsetStrng;
    eraseMessage();
    downloadPostUrl(url, theParms, function(data, responseCode) {
        if (responseCode === 200) {
            var rtaHtml;
            var windOpt;
            poiSearchArray[theIndex].theInfowindow.close();
            document.getElementById("message").innerHTML = "Location " + (theIndex + 1) + " updated: " + textName + ". ";
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Location updated: " + textName + "<br />";
            }
            rtaHtml = findPricelineCity(theIndex, true);
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "More info: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        } else {
            document.getElementById("message").innerHTML += " Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        }
        exitRtePlaceMode();
    });
}

function suggestPlace(theIndex) {
    var idcode = encodeURIComponent(rtaPOIArray[theIndex].dbPOIID);
    var newAccess = encodeURIComponent(12);
    var textName = rtaPOIArray[theIndex].theName;
    rtaPOIArray[theIndex].theAccess = 12;
    rtaPOIArray[theIndex].theInfowindow.close();
    var descriptionText = rtaPOIArray[theIndex].theDescription;
    var theLatlng = rtaPOIArray[theIndex].theMarker.getPosition();
    var theLat = theLatlng.lat();
    var theLng = theLatlng.lng();
    var url = urlPrefix + "ajupdatapoipostsugrta.php";
    var theParms = "idcode=" + idcode + "&access=" + newAccess + "&timezoneOffset=" + rta_tzOffsetStrng;
    eraseMessage();
    downloadPostUrl(url, theParms, function(data, responseCode) {
        if (responseCode === 200) {
            var rtaHtml;
            var windOpt;
            document.getElementById("message").innerHTML = "Location " + (theIndex + 1) + " submitted to RTA: " + textName + ". ";
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Location submitted to RTA: " + textName + "<br />";
            }
            rtaHtml = makeHTMLString(theIndex);
            rtaPOIArray[theIndex].theHTML = rtaHtml;
            rtaPOIArray[theIndex].theInfowindow.setContent(rtaHtml);
            windOpt = {
                maxWidth: 220
            };
            rtaPOIArray[theIndex].theInfowindow.setOptions(windOpt);
            rtaPOIArray[theIndex].theMarker.setDraggable(false);
            rtaPOIArray[theIndex].theInfowindow.open(RTAMap, rtaPOIArray[theIndex].theMarker);
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "More info: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        } else {
            document.getElementById("message").innerHTML += " Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        }
        exitRtePlaceMode();
    });
}

function updatePOIData(theIndex) {
    var url;
    var theParms;
    var theLatlng = rtaPOIArray[theIndex].theMarker.getPosition();
    var theLat = theLatlng.lat();
    var theLng = theLatlng.lng();
    var dist1 = encodeURIComponent(rtaPOIArray[theIndex].dist1);
    var dist2 = encodeURIComponent(rtaPOIArray[theIndex].dist2);
    var dist3 = encodeURIComponent(rtaPOIArray[theIndex].dist3);
    var textName = document.getElementById("name").value;
    var name = encodeURIComponent(document.getElementById("name").value);
    var description = encodeURIComponent(document.getElementById("description").value);
    var rtaemail = encodeURIComponent(document.getElementById("rtaemail").value);
    var rtaaddress1 = encodeURIComponent(document.getElementById("rtaaddress1").value);
    var rtaaddress2 = encodeURIComponent(document.getElementById("rtaaddress2").value);
    var rtaaddress3 = encodeURIComponent(document.getElementById("rtaaddress3").value);
    var rtacity = encodeURIComponent(document.getElementById("rtacity").value);
    var rtastate = encodeURIComponent(document.getElementById("rtastate").value);
    var rtazip = encodeURIComponent(document.getElementById("rtazip").value);
    var rtacountry = encodeURIComponent(rtaTheCountryValue[theIndex]);
    var phonelab1 = encodeURIComponent(document.getElementById("phonelabel1").value);
    var phonelab2 = encodeURIComponent(document.getElementById("phonelabel2").value);
    var phonelab3 = encodeURIComponent(document.getElementById("phonelabel3").value);
    var ccode1 = rta_CC1Value[theIndex];
    var ccode2 = rta_CC2Value[theIndex];
    var ccode3 = rta_CC3Value[theIndex];
    var phonarea1 = encodeURIComponent(document.getElementById("rtaarea1").value);
    var phonarea2 = encodeURIComponent(document.getElementById("rtaarea2").value);
    var phonarea3 = encodeURIComponent(document.getElementById("rtaarea3").value);
    var phonnum1 = encodeURIComponent(document.getElementById("rtaphnum1").value);
    var phonnum2 = encodeURIComponent(document.getElementById("rtaphnum2").value);
    var phonnum3 = encodeURIComponent(document.getElementById("rtaphnum3").value);
    var phonext1 = encodeURIComponent(document.getElementById("rtaext1").value);
    var phonext2 = encodeURIComponent(document.getElementById("rtaext2").value);
    var phonext3 = encodeURIComponent(document.getElementById("rtaext3").value);
    var link1 = encodeURIComponent(document.getElementById("rtalink1").value);
    var link2 = encodeURIComponent(document.getElementById("rtalink2").value);
    var link3 = encodeURIComponent(document.getElementById("rtalink3").value);
    var anchor1 = encodeURIComponent(document.getElementById("rtaanchor1").value);
    var anchor2 = encodeURIComponent(document.getElementById("rtaanchor2").value);
    var anchor3 = encodeURIComponent(document.getElementById("rtaanchor3").value);
    var photo1 = encodeURIComponent(document.getElementById("photo1").value);
    var phototitle = encodeURIComponent(document.getElementById("phototitle").value);
    var type = encodeURIComponent(rtaTheTypeValue[theIndex]);
    var ownercode = encodeURIComponent(rtaUserID);
    var owner = encodeURIComponent(rtaName);
    var accesscode = encodeURIComponent(10);
    var idcode = encodeURIComponent(rtaPOIArray[theIndex].dbPOIID);
    var ifyougo = "";
    var rtamaddress1 = "";
    var rtamaddress2 = "";
    var rtamaddress3 = "";
    var rtamcity = "";
    var rtamstate = "";
    var rtamzip = "";
    var rtamcountry = 4;
    var photocred = "";
    var photourl = '';
    var desccred = '';
    var descurl = '';
    var keywords = "";
    var codedKeywords;
    rtaPOIArray[theIndex].theLat = theLat;
    rtaPOIArray[theIndex].theLng = theLng;
    rtaPOIArray[theIndex].theName = textName;
    rtaPOIArray[theIndex].theDescription = document.getElementById("description").value;
    rtaPOIArray[theIndex].theAddress1 = document.getElementById("rtaaddress1").value;
    rtaPOIArray[theIndex].theAddress2 = document.getElementById("rtaaddress2").value;
    rtaPOIArray[theIndex].theAddress3 = document.getElementById("rtaaddress3").value;
    rtaPOIArray[theIndex].theCity = document.getElementById("rtacity").value;
    rtaPOIArray[theIndex].theState = document.getElementById("rtastate").value;
    rtaPOIArray[theIndex].theZip = document.getElementById("rtazip").value;
    rtaPOIArray[theIndex].theCountry = rtaTheCountryValue[theIndex];
    rtaPOIArray[theIndex].theEmail = document.getElementById("rtaemail").value;
    rtaPOIArray[theIndex].theMAddress1 = "";
    rtaPOIArray[theIndex].theMAddress2 = "";
    rtaPOIArray[theIndex].theMAddress3 = "";
    rtaPOIArray[theIndex].theMCity = "";
    rtaPOIArray[theIndex].theMState = "";
    rtaPOIArray[theIndex].theMZip = "";
    rtaPOIArray[theIndex].theMCountry = 4;
    rtaPOIArray[theIndex].theKeywords = '';
    rtaPOIArray[theIndex].theIfYouGo = "";
    rtaPOIArray[theIndex].thePhoto1 = document.getElementById("photo1").value;
    rtaPOIArray[theIndex].thePhotoTitle = document.getElementById("phototitle").value;
    if (rta_canSuggestRoute) {
        rtaPOIArray[theIndex].theIfYouGo = document.getElementById("ifyougo").value;
        rtaPOIArray[theIndex].theMAddress1 = document.getElementById("rtamaddress1").value;
        rtaPOIArray[theIndex].theMAddress2 = document.getElementById("rtamaddress2").value;
        rtaPOIArray[theIndex].theMAddress3 = document.getElementById("rtamaddress3").value;
        rtaPOIArray[theIndex].theMCity = document.getElementById("rtamcity").value;
        rtaPOIArray[theIndex].theMState = document.getElementById("rtamstate").value;
        rtaPOIArray[theIndex].theMZip = document.getElementById("rtamzip").value;
        rtaPOIArray[theIndex].theMCountry = rtaTheMCountryValue[theIndex];
        rtaPOIArray[theIndex].thePhotoCredit = document.getElementById("photocredname").value;
        rtaPOIArray[theIndex].thePhotoCredURL = document.getElementById("photocredurl").value;
        rtaPOIArray[theIndex].theDescCredit = document.getElementById("desccredname").value;
        rtaPOIArray[theIndex].theDescCredURL = document.getElementById("desccredurl").value;
        rtaPOIArray[theIndex].theKeywords = document.getElementById("keywords").value;
        if (cannedSearchTerms !== '') {
            rtaPOIArray[theIndex].theKeywords = cannedSearchTerms + rtaPOIArray[theIndex].theKeywords;
        }
    }
    rtaPOIArray[theIndex].thePhoneLabel1 = document.getElementById("phonelabel1").value;
    rtaPOIArray[theIndex].thePhoneLabel2 = document.getElementById("phonelabel2").value;
    rtaPOIArray[theIndex].thePhoneLabel3 = document.getElementById("phonelabel3").value;
    rtaPOIArray[theIndex].thePhone11 = rta_CC1Value[theIndex];
    rtaPOIArray[theIndex].thePhone21 = rta_CC2Value[theIndex];
    rtaPOIArray[theIndex].thePhone31 = rta_CC3Value[theIndex];
    rtaPOIArray[theIndex].thePhone12 = document.getElementById("rtaarea1").value;
    rtaPOIArray[theIndex].thePhone22 = document.getElementById("rtaarea2").value;
    rtaPOIArray[theIndex].thePhone32 = document.getElementById("rtaarea3").value;
    rtaPOIArray[theIndex].thePhone13 = document.getElementById("rtaphnum1").value;
    rtaPOIArray[theIndex].thePhone23 = document.getElementById("rtaphnum2").value;
    rtaPOIArray[theIndex].thePhone33 = document.getElementById("rtaphnum3").value;
    rtaPOIArray[theIndex].thePhone14 = document.getElementById("rtaext1").value;
    rtaPOIArray[theIndex].thePhone24 = document.getElementById("rtaext2").value;
    rtaPOIArray[theIndex].thePhone34 = document.getElementById("rtaext3").value;
    rtaPOIArray[theIndex].theLink1 = document.getElementById("rtalink1").value;
    rtaPOIArray[theIndex].theLink2 = document.getElementById("rtalink2").value;
    rtaPOIArray[theIndex].theLink3 = document.getElementById("rtalink3").value;
    rtaPOIArray[theIndex].theAnchor1 = document.getElementById("rtaanchor1").value;
    rtaPOIArray[theIndex].theAnchor2 = document.getElementById("rtaanchor2").value;
    rtaPOIArray[theIndex].theAnchor3 = document.getElementById("rtaanchor3").value;
    if (rta_canSuggestRoute) {
        ifyougo = encodeURIComponent(document.getElementById("ifyougo").value);
        rtamaddress1 = encodeURIComponent(document.getElementById("rtamaddress1").value);
        rtamaddress2 = encodeURIComponent(document.getElementById("rtamaddress2").value);
        rtamaddress3 = encodeURIComponent(document.getElementById("rtamaddress3").value);
        rtamcity = encodeURIComponent(document.getElementById("rtamcity").value);
        rtamstate = encodeURIComponent(document.getElementById("rtamstate").value);
        rtamzip = encodeURIComponent(document.getElementById("rtamzip").value);
        rtamcountry = encodeURIComponent(rtaTheMCountryValue[theIndex]);
        photocred = encodeURIComponent(document.getElementById("photocredname").value);
        photourl = encodeURIComponent(document.getElementById("photocredurl").value);
        desccred = encodeURIComponent(document.getElementById("desccredname").value);
        descurl = encodeURIComponent(document.getElementById("desccredurl").value);
        if (cannedSearchTerms !== '') {
            codedKeywords = cannedSearchTerms + document.getElementById("keywords").value;
            keywords = encodeURIComponent(codedKeywords);
        } else {
            keywords = encodeURIComponent(document.getElementById("keywords").value);
        }
    }
    rtaPOIArray[theIndex].theType = rtaTheTypeValue[theIndex];
    url = urlPrefix + "ajupdatapoipostrta.php";
    theParms = "name=" + name + "&description=" + description + "&ifyougo=" + ifyougo + "&address1=" + rtaaddress1 + "&address2=" + rtaaddress2 + "&address3=" + rtaaddress3 + "&city=" + rtacity + "&state=" + rtastate + "&zipcode=" + rtazip + "&country=" + rtacountry + "&maddress1=" + rtamaddress1 + "&maddress2=" + rtamaddress2 + "&maddress3=" + rtamaddress3 + "&mcity=" + rtamcity + "&mstate=" + rtamstate + "&mzipcode=" + rtamzip + "&mcountry=" + rtamcountry + "&email=" + rtaemail + "&phonelab1=" + phonelab1 + "&phonelab2=" + phonelab2 + "&phonelab3=" + phonelab3 + "&ccode1=" + ccode1 + "&ccode2=" + ccode2 + "&ccode3=" + ccode3 + "&phonarea1=" + phonarea1 + "&phonarea2=" + phonarea2 + "&phonarea3=" + phonarea3 + "&phonnum1=" + phonnum1 + "&phonnum2=" + phonnum2 + "&phonnum3=" + phonnum3 + "&phonext1=" + phonext1 + "&phonext2=" + phonext2 + "&phonext3=" + phonext3 + "&photo1=" + photo1 + "&phototitle=" + phototitle + "&photocred=" + photocred + "&photourl=" + photourl + "&desccred=" + desccred + "&descurl=" + descurl + "&link1=" + link1 + "&link2=" + link2 + "&link3=" + link3 + "&anchor1=" + anchor1 + "&anchor2=" + anchor2 + "&anchor3=" + anchor3 + "&keywords=" + keywords + "&type=" + type + "&lat=" + theLatlng.lat() + "&lng=" + theLatlng.lng() + "&dist1=" + dist1 + "&dist2=" + dist2 + "&dist3=" + dist3 + "&idcode=" + idcode + "&timezoneOffset=" + rta_tzOffsetStrng;
    eraseMessage();
    downloadPostUrl(url, theParms, function(data, responseCode) {
        if (responseCode === 200) {
            var rtaHtml;
            var windOpt;
            document.getElementById("message").innerHTML = "Location " + (theIndex + 1) + " updated: " + textName + ". ";
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Location updated: " + textName + "<br />";
            }
            rtaPOIArray[theIndex].theInfowindow.close();
            rtaHtml = makeHTMLString(theIndex);
            rtaPOIArray[theIndex].theHTML = rtaHtml;
            google.maps.event.clearInstanceListeners(rtaPOIArray[theIndex].theInfowindow);
            rtaPOIArray[theIndex].theInfowindow.setContent(rtaHtml);
            windOpt = {
                maxWidth: 220
            };
            rtaPOIArray[theIndex].theInfowindow.setOptions(windOpt);
            rtaPOIArray[theIndex].theMarker.setDraggable(false);
            rtaPOIArray[theIndex].theInfowindow.open(RTAMap, rtaPOIArray[theIndex].theMarker);
            side_bar_htmlArray[theIndex] = '<a href="javascript:sidebarclick(' + (theIndex) + ')">' + (theIndex + 1) + '<\/a> ' + textName + '<br />';
            refreshAnySidebar("poiList", side_bar_htmlArray, "");
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "More info: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        } else {
            document.getElementById("message").innerHTML += " Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        }
        exitRtePlaceMode();
    });
}

function removeMarkerFromDb(theMarker) {
    var thepoiid = rtaPOIArray[theMarker].dbPOIID;
    var textName = rtaPOIArray[theMarker].theName;
    var url = urlPrefix + "ajadminkillpoirta.php";
    var theParms = "thepoiid=" + thepoiid;
    downloadPostUrl(url, theParms, function(data, responseCode) {
        if (responseCode === 200) {
            document.getElementById("message").innerHTML = "Location '" + (textName) + "' deleted.";
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Location " + (theMarker + 1) + " " + (textName) + " deleted. Data: " + data + "<br />";
            }
            rtaPOIArray[theMarker].theInfowindow.close();
            rtaPOIArray[theMarker].theMarker.setMap(null);
            rtaPOIArray[theMarker] = null;
            side_bar_htmlArray[theMarker] = null;
            refreshAnySidebar("poiList", side_bar_htmlArray, "");
        } else {
            document.getElementById("message").innerHTML += " Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        }
        exitRtePlaceMode();
    });
}

function killPOI(thisMarker) {
    var textName = rtaPOIArray[thisMarker].theName;
    var theReply = false;
    theReply = confirm("Permanently delete marker '" + textName + "'? Any maps saved with this custom place marker will be incomplete.");
    if (theReply) {
        removeMarkerFromDb(thisMarker);
    } else {
        return;
    }
}

function savePOIData(theIndex) {
    var theLatlng = rtaPOIArray[theIndex].theMarker.getPosition();
    var theLat = theLatlng.lat();
    var theLng = theLatlng.lng();
    var theKeywordsString = '';
    rtaPOIArray[theIndex].thePosition = theLatlng;
    rtaPOIArray[theIndex].theLat = theLat;
    rtaPOIArray[theIndex].theLng = theLng;
    rtaPOIArray[theIndex].dist1 = Math.round(rtaDistance(theLat, theLng, rta_point1.lat(), rta_point1.lng()));
    rtaPOIArray[theIndex].dist2 = Math.round(rtaDistance(theLat, theLng, rta_point2.lat(), rta_point2.lng()));
    rtaPOIArray[theIndex].dist3 = Math.round(rtaDistance(theLat, theLng, rta_point3.lat(), rta_point3.lng()));
    var dist1 = encodeURIComponent(rtaPOIArray[theIndex].dist1);
    var dist2 = encodeURIComponent(rtaPOIArray[theIndex].dist2);
    var dist3 = encodeURIComponent(rtaPOIArray[theIndex].dist3);
    rtaPOIArray[theIndex].theName = document.getElementById("name").value;
    rtaPOIArray[theIndex].theDescription = document.getElementById("description").value;
    rtaPOIArray[theIndex].theAddress1 = document.getElementById("rtaaddress1").value;
    rtaPOIArray[theIndex].theAddress2 = document.getElementById("rtaaddress2").value;
    rtaPOIArray[theIndex].theAddress3 = document.getElementById("rtaaddress3").value;
    rtaPOIArray[theIndex].theCity = document.getElementById("rtacity").value;
    rtaPOIArray[theIndex].theState = document.getElementById("rtastate").value;
    rtaPOIArray[theIndex].theZip = document.getElementById("rtazip").value;
    rtaPOIArray[theIndex].theCountry = rtaTheCountryValue[theIndex];
    rtaPOIArray[theIndex].theEmail = document.getElementById("rtaemail").value;
    rtaPOIArray[theIndex].theMAddress1 = '';
    rtaPOIArray[theIndex].theMAddress2 = '';
    rtaPOIArray[theIndex].theMAddress3 = '';
    rtaPOIArray[theIndex].theMCity = '';
    rtaPOIArray[theIndex].theMState = '';
    rtaPOIArray[theIndex].theMZip = '';
    rtaPOIArray[theIndex].theMCountry = 4;
    rtaPOIArray[theIndex].theKeywords = '';
    rtaPOIArray[theIndex].theIfYouGo = '';
    rtaPOIArray[theIndex].thePhoto = '';
    rtaPOIArray[theIndex].thePhoto1 = document.getElementById("photo1").value;
    rtaPOIArray[theIndex].thePhotoTitle = document.getElementById("phototitle").value;
    if (rta_canSuggestRoute) {
        rtaPOIArray[theIndex].theIfYouGo = document.getElementById("ifyougo").value;
        rtaPOIArray[theIndex].theMAddress1 = document.getElementById("rtamaddress1").value;
        rtaPOIArray[theIndex].theMAddress2 = document.getElementById("rtamaddress2").value;
        rtaPOIArray[theIndex].theMAddress3 = document.getElementById("rtamaddress3").value;
        rtaPOIArray[theIndex].theMCity = document.getElementById("rtamcity").value;
        rtaPOIArray[theIndex].theMState = document.getElementById("rtamstate").value;
        rtaPOIArray[theIndex].theMZip = document.getElementById("rtamzip").value;
        rtaPOIArray[theIndex].theMCountry = rtaTheMCountryValue[theIndex];
        rtaPOIArray[theIndex].thePhotoCredit = document.getElementById("photocredname").value;
        rtaPOIArray[theIndex].thePhotoCredURL = document.getElementById("photocredurl").value;
        rtaPOIArray[theIndex].theDescCredit = document.getElementById("desccredname").value;
        rtaPOIArray[theIndex].theDescCredURL = document.getElementById("desccredurl").value;
        theKeywordsString = cannedSearchTerms;
        theKeywordsString += document.getElementById("keywords").value;
        rtaPOIArray[theIndex].theKeywords = theKeywordsString;
    }
    rtaPOIArray[theIndex].theCountry = rtaTheCountryValue[theIndex];
    rtaPOIArray[theIndex].thePhoneLabel1 = document.getElementById("phonelabel1").value;
    rtaPOIArray[theIndex].thePhoneLabel2 = document.getElementById("phonelabel2").value;
    rtaPOIArray[theIndex].thePhoneLabel3 = document.getElementById("phonelabel3").value;
    rtaPOIArray[theIndex].thePhone11 = rta_CC1Value[theIndex];
    rtaPOIArray[theIndex].thePhone21 = rta_CC2Value[theIndex];
    rtaPOIArray[theIndex].thePhone31 = rta_CC3Value[theIndex];
    rtaPOIArray[theIndex].thePhone12 = document.getElementById("rtaarea1").value;
    rtaPOIArray[theIndex].thePhone22 = document.getElementById("rtaarea2").value;
    rtaPOIArray[theIndex].thePhone32 = document.getElementById("rtaarea3").value;
    rtaPOIArray[theIndex].thePhone13 = document.getElementById("rtaphnum1").value;
    rtaPOIArray[theIndex].thePhone23 = document.getElementById("rtaphnum2").value;
    rtaPOIArray[theIndex].thePhone33 = document.getElementById("rtaphnum3").value;
    rtaPOIArray[theIndex].thePhone14 = document.getElementById("rtaext1").value;
    rtaPOIArray[theIndex].thePhone24 = document.getElementById("rtaext2").value;
    rtaPOIArray[theIndex].thePhone34 = document.getElementById("rtaext3").value;
    rtaPOIArray[theIndex].theLink1 = document.getElementById("rtalink1").value;
    rtaPOIArray[theIndex].theLink2 = document.getElementById("rtalink2").value;
    rtaPOIArray[theIndex].theLink3 = document.getElementById("rtalink3").value;
    rtaPOIArray[theIndex].theAnchor1 = document.getElementById("rtaanchor1").value;
    rtaPOIArray[theIndex].theAnchor2 = document.getElementById("rtaanchor2").value;
    rtaPOIArray[theIndex].theAnchor3 = document.getElementById("rtaanchor3").value;
    var textName = document.getElementById("name").value;
    var name = encodeURIComponent(document.getElementById("name").value);
    var description = encodeURIComponent(document.getElementById("description").value);
    var rtaemail = encodeURIComponent(document.getElementById("rtaemail").value);
    var rtaaddress1 = encodeURIComponent(document.getElementById("rtaaddress1").value);
    var rtaaddress2 = encodeURIComponent(document.getElementById("rtaaddress2").value);
    var rtaaddress3 = encodeURIComponent(document.getElementById("rtaaddress3").value);
    var rtacity = encodeURIComponent(document.getElementById("rtacity").value);
    var rtastate = encodeURIComponent(document.getElementById("rtastate").value);
    var rtazip = encodeURIComponent(document.getElementById("rtazip").value);
    var rtacountry = encodeURIComponent(rtaTheCountryValue[theIndex]);
    var phonelab1 = encodeURIComponent(document.getElementById("phonelabel1").value);
    var phonelab2 = encodeURIComponent(document.getElementById("phonelabel2").value);
    var phonelab3 = encodeURIComponent(document.getElementById("phonelabel3").value);
    var ccode1 = rta_CC1Value[theIndex];
    var ccode2 = rta_CC2Value[theIndex];
    var ccode3 = rta_CC3Value[theIndex];
    var phonarea1 = encodeURIComponent(document.getElementById("rtaarea1").value);
    var phonarea2 = encodeURIComponent(document.getElementById("rtaarea2").value);
    var phonarea3 = encodeURIComponent(document.getElementById("rtaarea3").value);
    var phonnum1 = encodeURIComponent(document.getElementById("rtaphnum1").value);
    var phonnum2 = encodeURIComponent(document.getElementById("rtaphnum2").value);
    var phonnum3 = encodeURIComponent(document.getElementById("rtaphnum3").value);
    var phonext1 = encodeURIComponent(document.getElementById("rtaext1").value);
    var phonext2 = encodeURIComponent(document.getElementById("rtaext2").value);
    var phonext3 = encodeURIComponent(document.getElementById("rtaext3").value);
    var link1 = encodeURIComponent(document.getElementById("rtalink1").value);
    var link2 = encodeURIComponent(document.getElementById("rtalink2").value);
    var link3 = encodeURIComponent(document.getElementById("rtalink3").value);
    var anchor1 = encodeURIComponent(document.getElementById("rtaanchor1").value);
    var anchor2 = encodeURIComponent(document.getElementById("rtaanchor2").value);
    var anchor3 = encodeURIComponent(document.getElementById("rtaanchor3").value);
    var photo1 = encodeURIComponent(document.getElementById("photo1").value);
    var phototitle = encodeURIComponent(document.getElementById("phototitle").value);
    var ifyougo = "";
    var rtamaddress1 = "";
    var rtamaddress2 = "";
    var rtamaddress3 = "";
    var rtamcity = "";
    var rtamstate = "";
    var rtamzip = "";
    var rtamcountry = 4;
    var photocred = "";
    var photourl = '';
    var desccred = '';
    var descurl = '';
    var keywords = "";
    if (rta_canSuggestRoute) {
        ifyougo = encodeURIComponent(document.getElementById("ifyougo").value);
        rtamaddress1 = encodeURIComponent(document.getElementById("rtamaddress1").value);
        rtamaddress2 = encodeURIComponent(document.getElementById("rtamaddress2").value);
        rtamaddress3 = encodeURIComponent(document.getElementById("rtamaddress3").value);
        rtamcity = encodeURIComponent(document.getElementById("rtamcity").value);
        rtamstate = encodeURIComponent(document.getElementById("rtamstate").value);
        rtamzip = encodeURIComponent(document.getElementById("rtamzip").value);
        rtamcountry = encodeURIComponent(rtaTheMCountryValue[theIndex]);
        photocred = encodeURIComponent(document.getElementById("photocredname").value);
        photourl = encodeURIComponent(document.getElementById("photocredurl").value);
        desccred = encodeURIComponent(document.getElementById("desccredname").value);
        descurl = encodeURIComponent(document.getElementById("desccredurl").value);
        keywords = encodeURIComponent(theKeywordsString);
    }
    var type = encodeURIComponent(rtaTheTypeValue[theIndex]);
    var ownercode = encodeURIComponent(rtaUserID);
    var owner = encodeURIComponent(rtaName);
    var accesscode = encodeURIComponent(10);
    rtaPOIArray[theIndex].theType = rtaTheTypeValue[theIndex];
    var posStrg = theLatlng.toUrlValue(6) + "";
    var url = urlPrefix + "ajaddapoipostrta.php";
    var theParms = "name=" + name + "&description=" + description + "&ifyougo=" + ifyougo + "&address1=" + rtaaddress1 + "&address2=" + rtaaddress2 + "&address3=" + rtaaddress3 + "&city=" + rtacity + "&state=" + rtastate + "&zipcode=" + rtazip + "&country=" + rtacountry + "&maddress1=" + rtamaddress1 + "&maddress2=" + rtamaddress2 + "&maddress3=" + rtamaddress3 + "&mcity=" + rtamcity + "&mstate=" + rtamstate + "&mzipcode=" + rtamzip + "&mcountry=" + rtamcountry + "&email=" + rtaemail + "&phonelab1=" + phonelab1 + "&phonelab2=" + phonelab2 + "&phonelab3=" + phonelab3 + "&ccode1=" + ccode1 + "&ccode2=" + ccode2 + "&ccode3=" + ccode3 + "&phonarea1=" + phonarea1 + "&phonarea2=" + phonarea2 + "&phonarea3=" + phonarea3 + "&phonnum1=" + phonnum1 + "&phonnum2=" + phonnum2 + "&phonnum3=" + phonnum3 + "&phonext1=" + phonext1 + "&phonext2=" + phonext2 + "&phonext3=" + phonext3 + "&photo1=" + photo1 + "&phototitle=" + phototitle + "&photocred=" + photocred + "&photourl=" + photourl + "&desccred=" + desccred + "&descurl=" + descurl + "&link1=" + link1 + "&link2=" + link2 + "&link3=" + link3 + "&anchor1=" + anchor1 + "&anchor2=" + anchor2 + "&anchor3=" + anchor3 + "&keywords=" + keywords + "&type=" + type + "&lat=" + theLatlng.lat() + "&lng=" + theLatlng.lng() + "&dist1=" + dist1 + "&dist2=" + dist2 + "&dist3=" + dist3 + "&owner=" + owner + "&ownercode=" + ownercode + "&accesscode=" + accesscode + "&timezoneOffset=" + rta_tzOffsetStrng;
    if (textName === "") {
        textName = "(no name)";
    }
    eraseMessage();
    downloadPostUrl(url, theParms, function(data, responseCode) {
        if (responseCode === 200) {
            document.getElementById("message").innerHTML = "Location " + (theIndex + 1) + " saved: " + textName + ". ";
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Location saved: " + textName + " Data: " + data + "<br />";
            }
            var rtaHtml = makeHTMLString(theIndex);
            rtaPOIArray[theIndex].theHTML = rtaHtml;
            google.maps.event.clearInstanceListeners(rtaPOIArray[theIndex].theInfowindow);
            rtaPOIArray[theIndex].theInfowindow.close();
            rtaPOIArray[theIndex].theInfowindow.setContent(rtaHtml);
            var windOpt = {
                maxWidth: 225
            };
            rtaPOIArray[theIndex].theInfowindow.setOptions(windOpt);
            rtaPOIArray[theIndex].theInfowindow.open(RTAMap, rtaPOIArray[theIndex].theMarker);
            rtaPOIArray[theIndex].dbPOIID = parseInt(data, 10);
            side_bar_htmlArray[theIndex] = '<a href="javascript:sidebarclick(' + (theIndex) + ')">' + (theIndex + 1) + '<\/a> ' + textName + '<br />';
            rtaPOIArray[theIndex].theMarker.setDraggable(false);
            refreshAnySidebar("poiList", side_bar_htmlArray, "");
        } else {
            document.getElementById("message").innerHTML += " Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        }
        exitRtePlaceMode();
    });
}

function removeMapFromDb(mapIndex) {
    var themapid = rtaMapArray[mapIndex][3];
    var textName = rtaMapArray[mapIndex][5];
    var rtaURL = urlPrefix + "ajadminkillmaprta.php";
    var theParms = "themapid=" + themapid;
    downloadPostUrl(rtaURL, theParms, function(data, responseCode) {
        if (responseCode === 200) {
            document.getElementById("message").innerHTML = "Map '" + (textName) + "' deleted.";
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Map " + (mapIndex + 1) + " " + (textName) + ' ID = ' + (themapid) + " deleted. Data: " + (data) + "<br />";
            }
            rtaMapArray[mapIndex] = [];
            side_bar_map_htmlArray[mapIndex] = null;
            refreshAnySidebar("mapListDiv", side_bar_map_htmlArray, "");
            rtaMapsNum--;
        } else {
            document.getElementById("message").innerHTML += " Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + data + ", Data length = " + data.length + "<br />";
            }
        }
        exitRtePlaceMode();
    });
}

function sendMapToDB() {
    var thecalcroute;
    var theAccess = curraccess;
    var theldroutes = encodeURIComponent(currRTAMap[1].join());
    var thepois = encodeURIComponent(currRTAMap[2].join());
    var keywords = "";
    if ((rta_Maptype === "mapcenter") || (rta_Maptype === "admin")) {
        keywords = encodeURIComponent(document.getElementById("maptags").value);
    }
    var savedString = 'Map saved with ';
    var hasCalcRt = (currRTAMap[0][1] > -1);
    var calcRtString;
    var numRAs = 0;
    var numLDs = 0;
    var owner = encodeURIComponent(rtaName);
    var currUserID = rtaUserID;
    if (rta_special_flag) {
        theAccess = 22;
        currUserID = -10;
        owner = RTA;
    }
    var name = encodeURIComponent(document.getElementById("mapName").value);
    var theUrl = urlPrefix + "ajaddamaprta.php";
    var theParms;
    if (currRTAMap[0][1] === -1) {
        currRTAMap[0][1] = -2;
    }
    thecalcroute = encodeURIComponent(currRTAMap[0][1]);
    if (hasCalcRt) {
        savedString += 'one calculated route, ';
    }
    if (currRTAMap[1][0] > -1) {
        numLDs = currRTAMap[1].length;
    }
    if (numLDs > 0) {
        savedString += (numLDs) + ' hand-drawn route(s), ';
    }
    if (currRTAMap[2][0] > -1) {
        numRAs = currRTAMap[2].length;
    }
    if (numRAs === 1) {
        savedString += 'one place marker.';
    } else {
        savedString += (numRAs) + ' place markers.';
    }
    theParms = "thecalcroute=" + thecalcroute + "&theldroutes=" + theldroutes + "&thepois=" + thepois + "&keywords=" + keywords + "&access=" + theAccess + "&name=" + name + "&owner=" + owner + "&ownercode=" + currUserID + "&timezoneOffset=" + rta_tzOffsetStrng;
    downloadPostUrl(theUrl, theParms, function(theData, responseCode) {
        if (responseCode === 200) {
            currRTAMap[3] = parseInt(theData, 10);
            currRTAMap[4] = name;
            document.getElementById("message").innerHTML = savedString;
            if ((theAccess === 22) && (rtaMapBlesser) && (rta_special_flag)) {
                document.getElementById("message").innerHTML += "Map access set to seachable. ";
            }
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += savedString;
            }
            var currMapIndx = rtaMapArray.length;
            rtaMapArray[currMapIndx] = [];
            rtaMapArray[currMapIndx][0] = thecalcroute;
            rtaMapArray[currMapIndx][1] = currRTAMap[1];
            rtaMapArray[currMapIndx][2] = currRTAMap[2];
            rtaMapArray[currMapIndx][3] = currRTAMap[3];
            rtaMapArray[currMapIndx][4] = theAccess;
            rtaMapArray[currMapIndx][5] = document.getElementById("mapName").value;
            rtaMapArray[currMapIndx][6] = rtaName;
            rtaMapsNum++;
            setMapIsCurrentFlag(true);
            var html = '<a href="javascript:sidebarmapclick(' + (currMapIndx) + ')">' + (currMapIndx + 1) + '<\/a> ' + rtaMapArray[currMapIndx][5] + "<br />";
            side_bar_map_htmlArray[currMapIndx] = html;
            refreshAnySidebar("mapListDiv", side_bar_map_htmlArray, "");
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "(Technical info: ResponseCode = " + responseCode + ", Data = " + theData + ", Data length = " + theData.length + ")" + "<br />";
            }
        } else {
            document.getElementById("message").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + theData + ", Data length = " + theData.length;
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "Error occured: ResponseCode = " + responseCode + ", Data = " + theData + ", Data length = " + theData.length + "<br />";
            }
        }
        rta_special_flag = false;
        if (currRTAMap[0][1] === -2) {
            currRTAMap[0][1] = -1;
        }
        exitRtePlaceMode();
    });
}

function saveMap() {
    currRTAMap[1] = [];
    currRTAMap[2] = [];
    var alertString = "";
    var i;
    var numMarkers = rtaRouteMarkers.length;
    for (i = 0; i < numMarkers; i++) {
        if (rtaRouteMarkers[i]) {
            if (rtaRouteMarkers[i][0]) {
                if (rtaRouteMarkers[i][0].getVisible()) {
                    if (dbLDRteID[i] === -1) {
                        alert("Line-drawn route not yet saved");
                        return;
                    }
                    currRTAMap[1].push(dbLDRteID[i]);
                }
            }
        }
    }
    numMarkers = rtaPOIArray.length;
    for (i = 0; i < numMarkers; i++) {
        if (rtaPOIArray[i]) {
            if (rtaPOIArray[i].theMarker.getVisible()) {
                if (rtaPOIArray[i].dbPOIID === -1) {
                    alert("Invalid map (place marker not yet saved).");
                    return;
                }
                currRTAMap[2].push(rtaPOIArray[i].dbPOIID);
            }
        }
    }
    numMarkers = poiSearchArray.length;
    for (i = 0; i < numMarkers; i++) {
        if (poiSearchArray[i]) {
            if (poiSearchArray[i].theMarker.getVisible()) {
                currRTAMap[2].push(poiSearchArray[i].dbPOIID);
            }
        }
    }
    var calcNum = currRTAMap[0][1];
    if ((currRTAMap[0][0] > -1) && (currRTAMap[0][1] === -1) && (rtadebuggingFlag)) {
        document.getElementById("message").innerHTML = 'Route number discrepancy. No route was saved. If you are trying to save a route, please contact Map Support at mapsupport@roadtripamerica.com.';
    }
    alertString = "currRTAMap[0] = " + currRTAMap[0] + "; currRTAMap[1] = " + currRTAMap[1] + "; currRTAMap[2] = " + currRTAMap[2] + "; currRTAMap[1].length = " + currRTAMap[1].length + "; currRTAMap[2].length = " + currRTAMap[2].length;
    if (currRTAMap[1].length === 0) {
        currRTAMap[1][0] = -2;
    }
    if (currRTAMap[2].length === 0) {
        currRTAMap[2][0] = -2;
    }
    alertString = "currRTAMap[0] = " + currRTAMap[0] + "; currRTAMap[1] = " + currRTAMap[1] + "; currRTAMap[2] = " + currRTAMap[2] + "; currRTAMap[1].length = " + currRTAMap[1].length + "; currRTAMap[2].length = " + currRTAMap[2].length;
    sendMapToDB();
}

function downloadUrl(url, callback) {
    var request = window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            request.onreadystatechange = doNothing;
            callback(request.responseText, request.status);
        }
    };
    request.open('GET', url, true);
    request.send(null);
}

function doNothing() {}

function parseXml(str) {
    if (window.ActiveXObject) {
        var doc = new ActiveXObject('Microsoft.XMLDOM');
        doc.loadXML(str);
        return doc;
    } else if (window.DOMParser) {
        return (new DOMParser()).parseFromString(str, 'text/xml');
    }
}

function thisCalcRouteAlreadyOnList(routeID) {
    var arrayNum = calc_side_bar_db_infoArray.length;
    var i;
    for (i = 0; i < arrayNum; i++) {
        if (calc_side_bar_db_infoArray[i]) {
            if (calc_side_bar_db_infoArray[i].theID === routeID) {
                return true;
            }
        }
    }
    arrayNum = rta_calcRtArray.length;
    for (i = 0; i < arrayNum; i++) {
        if (rta_calcRtArray[i]) {
            if (rta_calcRtArray[i].dbID === routeID) {
                return true;
            }
        }
    }
    return false;
}

function thisLDRouteAlreadyOnList(thisID) {
    var i, j;
    if (dbLDRteID) {
        for (i = 0; i < dbLDRteID.length; i++) {
            if (dbLDRteID[i]) {
                if (dbLDRteID[i] === thisID) {
                    return true;
                }
            }
        }
    }
    if (ld_side_bar_db_infoArray) {
        for (j = 0; j < ld_side_bar_db_infoArray.length; j++) {
            if (ld_side_bar_db_infoArray[j]) {
                if (ld_side_bar_db_infoArray[j].routeID === thisID) {
                    return true;
                }
            }
        }
    }
    return false;
}

function srchLDRtNotAlreadyOnList(theID) {
    var arrLen = ld_srch_side_db_infoArray.length;
    var i;
    for (i = 0; i < arrLen; i++) {
        if (ld_srch_side_db_infoArray[i]) {
            if (ld_srch_side_db_infoArray[i].routeID === theID) {
                if (rtaSrchRouteMarkers[i] && rtaSrchRouteMarkers[i][0]) {
                    if (rtaSrchRouteMarkers[i][0].getVisible()) {
                        return false;
                    } else {
                        showSrchLDRouteMarkers(i);
                    }
                } else {
                    ldsidesrchdorouteclick(i);
                    return false;
                }
            }
        }
    }
    return true;
}

function poiAlreadyInSrchBar(srchID) {
    var arrayNum = poiSearchArray.length;
    var i;
    for (i = 0; i < arrayNum; i++) {
        if (poiSearchArray[i]) {
            if (poiSearchArray[i].dbPOIID == srchID) {
                return i;
            }
        }
    }
    return -1;
}

function thisRAAlreadyOnSearchList(thePOIID) {
    var arrayNum = poiSearchArray.length;
    var k;
    for (k = 0; k < arrayNum; k++) {
        if (poiSearchArray[k]) {
            if (thePOIID === poiSearchArray[k].dbPOIID) {
                if (!poiSearchArray[k].theMarker.getVisible()) {
                    poiSearchArray[k].theMarker.setVisible(true);
                }
                return (true);
            }
        }
    }
    return (false);
}

function getCalcRtPoints(rtIndex, calcRtID) {
    var theUrl = urlPrefix + "ajuserretrcalcrtptsrta.php";
    var theParms = "idnumber=" + calcRtID;
    downloadPostUrl(theUrl, theParms, function(data, responseCode) {
        document.getElementById("messagelog").innerHTML = '';
        if (rtadebuggingFlag) {
            document.getElementById("messagelog").innerHTML += "(Technical info (Calc rts): ResponseCode = " + responseCode + ", Data length = " + data.length + ")" + "<br />";
        }
        var xml = parseXml(data);
        var i;
        var myCalcRoutes = xml.documentElement.getElementsByTagName("calcroute");
        var newField;
        var latptsString = '0';
        var lngptsString = '0';
        var overlatptsString = '0';
        var overlngptsString = '0';
        var pointsInfo;
        for (i = 0; i < 1; i++) {
            newField = parseInt(myCalcRoutes[i].getAttribute("newfield"), 10);
            latptsString = myCalcRoutes[i].getAttribute("rtlats");
            lngptsString = myCalcRoutes[i].getAttribute("rtlngs");
            overlatptsString = myCalcRoutes[i].getAttribute("overlats");
            overlngptsString = myCalcRoutes[i].getAttribute("overlngs");
        }
        pointsInfo = {
            rtaNewField: newField,
            latString: latptsString,
            lngString: lngptsString,
            overlatString: overlatptsString,
            overlngString: overlngptsString
        };
        rta_calcRtArray[rtIndex] = new rta_NewCalcRoute(pointsInfo, rtIndex);
        if (newField != 1) {
            document.getElementById("messagelog").innerHTML = 'Error: newField = ' + newField;
        }
        drawRtFromPts(rtIndex);
        google.maps.event.addListener(rta_calcRtArray[rtIndex].startMarker, "click", function() {
            var theRouteNum = parseInt(rta_calcRtArray[rtIndex].startMarker.getTitle(), 10) - 1;
            if (inMode) {
                return;
            }
            if (currRTAMap[0][1] == rta_calcRtArray[theRouteNum].dbID) {
                if (rta_Maptype === "mapcenter") {
                    rta_calcRtArray[theRouteNum].rtInfowindow.open(RTAMap, rta_calcRtArray[theRouteNum].startMarker);
                    return;
                }
            }
            if (currRTAMap[0][0] > -1) {
                hideCalcRtAndMarker(currRTAMap[0][0]);
            }
            rta_calcRtArray[theRouteNum].startMarker.setVisible(true);
            rta_calcRtArray[theRouteNum].polyline.setMap(RTAMap);
            RTAMap.fitBounds(rta_calcRtArray[rtIndex].rtBounds);
            currRTAMap[0][0] = theRouteNum;
            currRTAMap[0][1] = rta_calcRtArray[theRouteNum].dbID;
            currRTAMap[0][2] = 1;
            if (RTAMap.getZoom() < 10) {
                RTAMap.setZoom(10);
            }
            if (rta_Maptype === "mapcenter") {
                rta_calcRtArray[theRouteNum].rtInfowindow.open(RTAMap, rta_calcRtArray[theRouteNum].startMarker);
            }
        });
        if (rta_Maptype === "mapcenter") {
            calc_side_bar_route_htmlArray[rtIndex] = '<a href="javascript:sidebarcalcrouteclick(' + (rtIndex) + ')">' + (rtIndex + 1) + '<\/a> ' +
                calc_side_bar_db_infoArray[rtIndex].name + ' (' + rta_calcRtArray[rtIndex].theDistance + ' mi)<br />';
            refreshAnySidebar("calcRtSideBar", calc_side_bar_route_htmlArray, "");
        }
        exitRtePlaceMode();
    });
}

function listCalcRts() {
    var url = urlPrefix + "ajuserretrcalcrtsrta.php";
    var theParms = "mycalcrts=" + rtaUserID;
    downloadPostUrl(url, theParms, function(data, responseCode) {
        if (rtadebuggingFlag) {
            document.getElementById("messagelog").innerHTML += "(Technical info (Calc rts): ResponseCode = " + responseCode + ", Data length = " + data.length + ")" + "<br />";
        }
        var xml = parseXml(data);
        var i;
        var myCalcRoutes = xml.documentElement.getElementsByTagName("calcroute");
        var idOfThisRoute;
        var theNumWaypts;
        var latArray = [0];
        var lngArray = [0];
        var latstring;
        var lngstring;
        var theDistance;
        var theDescription;
        var routeInfo;
        var theArrayIndex;
        var theNewField;
        for (i = 0; i < myCalcRoutes.length; i++) {
            idOfThisRoute = parseInt(myCalcRoutes[i].getAttribute("id"), 10);
            if (thisCalcRouteAlreadyOnList(idOfThisRoute)) {
                continue;
            }
            theNumWaypts = myCalcRoutes[i].getAttribute("numwaypts");
            if (theNumWaypts > 0) {
                latstring = myCalcRoutes[i].getAttribute("thelats");
                lngstring = myCalcRoutes[i].getAttribute("thelngs");
                latArray = latstring.split(",");
                lngArray = lngstring.split(",");
            }
            theDistance = myCalcRoutes[i].getAttribute("distance");
            theDescription = myCalcRoutes[i].getAttribute("description");
            theDescription = restoreHTML(theDescription);
            theNewField = 0;
            routeInfo = {
                theID: idOfThisRoute,
                arrayindex: rta_calcRtArray.length,
                name: myCalcRoutes[i].getAttribute("name"),
                description: theDescription,
                keywords: myCalcRoutes[i].getAttribute("keywords"),
                newfield: theNewField,
                numwaypts: theNumWaypts,
                latvals: latArray,
                lngvals: lngArray,
                startlat: myCalcRoutes[i].getAttribute("startlat"),
                startlng: myCalcRoutes[i].getAttribute("startlng"),
                endlat: myCalcRoutes[i].getAttribute("endlat"),
                endlng: myCalcRoutes[i].getAttribute("endlng"),
                distance: theDistance,
                owner: myCalcRoutes[i].getAttribute("owner"),
                access: myCalcRoutes[i].getAttribute("access"),
                thehtml: (this.name + "<br /> " + this.description)
            };
            theArrayIndex = rta_calcRtArray.length;
            calc_side_bar_db_infoArray[theArrayIndex] = routeInfo;
            calc_side_bar_route_htmlArray[theArrayIndex] = '<a href="javascript:sidebardocalcrouteclick(' + (theArrayIndex) + ')">' + (theArrayIndex + 1) + '<\/a> ' +
                calc_side_bar_db_infoArray[theArrayIndex].name + " (" + theDistance + " mi)" + '<br />';
            rta_calcRtArray[theArrayIndex] = -1;
        }
        if (rta_Maptype === "mapcenter") {
            refreshAnySidebar("calcRtSideBar", calc_side_bar_route_htmlArray, "");
        }
    });
}

function showLineDrawnRoutes() {
    var url = urlPrefix + "ajuserretrldrtesrta.php?myldrtes=" + rtaUserID;
    downloadUrl(url, function(data, responseCode) {
        if (rtadebuggingFlag) {
            document.getElementById("messagelog").innerHTML += "(Technical info (LD Rts): ResponseCode = " + responseCode + ", Data length = " + data.length + ")" + "<br />";
        }
        var xml = parseXml(data);
        var myLDRoutes = xml.documentElement.getElementsByTagName("ldroute");
        var i;
        for (i = 0; i < myLDRoutes.length; i++) {
            var theID = myLDRoutes[i].getAttribute("id");
            if (thisLDRouteAlreadyOnList(theID)) {
                continue;
            }
            var latstring = myLDRoutes[i].getAttribute("thelats");
            var lngstring = myLDRoutes[i].getAttribute("thelngs");
            var theLatArray = latstring.split(",");
            var theLngArray = lngstring.split(",");
            var theDescription = myLDRoutes[i].getAttribute("description");
            theDescription = restoreHTML(theDescription);
            var ldRouteInfo = {
                routeID: theID,
                theName: myLDRoutes[i].getAttribute("name"),
                description: theDescription,
                type: myLDRoutes[i].getAttribute("type"),
                latArray: theLatArray,
                lngArray: theLngArray,
                owner: myLDRoutes[i].getAttribute("owner"),
                ownercode: myLDRoutes[i].getAttribute("ownercode"),
                access: myLDRoutes[i].getAttribute("access")
            };
            var theCurrIndex = side_bar_route_htmlArray.length;
            ld_side_bar_db_infoArray[theCurrIndex] = ldRouteInfo;
            rtaRoutes[theCurrIndex] = 0;
            side_bar_route_htmlArray[theCurrIndex] = '<a href="javascript:ldsidebardorouteclick(' +
                (theCurrIndex) + ')">' + (theCurrIndex + 1) + '<\/a> ' + ld_side_bar_db_infoArray[theCurrIndex].theName + '<br />';
        }
        refreshAnySidebar("routeList", side_bar_route_htmlArray, "");
    });
}

function showAllPOIs() {
    var url = urlPrefix + "ajuserretrpoirta.php";
    var theParms = "mypois=" + rtaUserID;
    downloadPostUrl(url, theParms, function(data) {
        var xml = parseXml(data);
        var myMarkers = xml.documentElement.getElementsByTagName("marker");
        var numMarkers = myMarkers.length;
        var currLength = rtaPOIArray.length;
        var theAccessCode;
        var dbID;
        var theCountryCode;
        var theMCountryCode;
        var thePhoto;
        var theLinks;
        var poiHtml;
        var theLat;
        var theLng;
        var i;
        var theNewIndex;
        var testNull = null;
        var indexStrng;
        var poiIData;
        for (i = 0; i < numMarkers; i++) {
            theLat = myMarkers[i].getAttribute("lat");
            theLng = myMarkers[i].getAttribute("lng");
            theAccessCode = parseInt(myMarkers[i].getAttribute("access"), 10);
            if (theAccessCode === 0) {
                theAccessCode = 10;
            }
            theNewIndex = rtaPOIArray.length;
            rtaTheTypeValue[theNewIndex] = myMarkers[i].getAttribute("type");
            theCountryCode = parseInt(myMarkers[i].getAttribute("country"), 10);
            if (isNaN(theCountryCode)) {
                theCountryCode = 4;
            }
            rtaTheCountryValue[theNewIndex] = theCountryCode;
            theMCountryCode = parseInt(myMarkers[i].getAttribute("mcountry"), 10);
            if (isNaN(theMCountryCode)) {
                theMCountryCode = 4;
            }
            rtaTheMCountryValue[theNewIndex] = theMCountryCode;
            rta_CC1Value[theNewIndex] = parseInt(myMarkers[i].getAttribute("tele11"), 10);
            if (isNaN(rta_CC1Value[theNewIndex])) {
                rta_CC1Value[theNewIndex] = 0;
            }
            rta_CC2Value[theNewIndex] = parseInt(myMarkers[i].getAttribute("tele21"), 10);
            if (isNaN(rta_CC2Value[theNewIndex])) {
                rta_CC2Value[theNewIndex] = 0;
            }
            rta_CC3Value[theNewIndex] = parseInt(myMarkers[i].getAttribute("tele31"), 10);
            if (isNaN(rta_CC3Value[theNewIndex])) {
                rta_CC3Value[theNewIndex] = 0;
            }
            indexStrng = theNewIndex + "";
            poiIData = {
                theID: myMarkers[i].getAttribute("id"),
                name: myMarkers[i].getAttribute("name"),
                description: myMarkers[i].getAttribute("description"),
                ifyougo: myMarkers[i].getAttribute("ifyougo"),
                photo1: myMarkers[i].getAttribute("photo1"),
                phototitle: myMarkers[i].getAttribute("phototitle"),
                phcredname: myMarkers[i].getAttribute("phcredname"),
                phcredurl: myMarkers[i].getAttribute("phcredurl"),
                desccredname: myMarkers[i].getAttribute("desccredname"),
                desccredurl: myMarkers[i].getAttribute("desccredurl"),
                address1: myMarkers[i].getAttribute("address1"),
                address2: myMarkers[i].getAttribute("address2"),
                address3: myMarkers[i].getAttribute("address3"),
                city: myMarkers[i].getAttribute("city"),
                state: myMarkers[i].getAttribute("state"),
                zipcode: myMarkers[i].getAttribute("zipcode"),
                country: theCountryCode,
                email: myMarkers[i].getAttribute("email"),
                maddress1: myMarkers[i].getAttribute("maddress1"),
                maddress2: myMarkers[i].getAttribute("maddress2"),
                maddress3: myMarkers[i].getAttribute("maddress3"),
                mcity: myMarkers[i].getAttribute("mcity"),
                mstate: myMarkers[i].getAttribute("mstate"),
                mzipcode: myMarkers[i].getAttribute("mzipcode"),
                mcountry: theMCountryCode,
                phonelabel1: myMarkers[i].getAttribute("label1"),
                ccode1: rta_CC1Value[theNewIndex],
                acode1: myMarkers[i].getAttribute("tele12"),
                phnum1: myMarkers[i].getAttribute("tele13"),
                ext1: myMarkers[i].getAttribute("tele14"),
                phonelabel2: myMarkers[i].getAttribute("label2"),
                ccode2: rta_CC2Value[theNewIndex],
                acode2: myMarkers[i].getAttribute("tele22"),
                phnum2: myMarkers[i].getAttribute("tele23"),
                ext2: myMarkers[i].getAttribute("tele24"),
                phonelabel3: myMarkers[i].getAttribute("label3"),
                ccode3: rta_CC3Value[theNewIndex],
                acode3: myMarkers[i].getAttribute("tele32"),
                phnum3: myMarkers[i].getAttribute("tele33"),
                ext3: myMarkers[i].getAttribute("tele34"),
                link1: myMarkers[i].getAttribute("link1"),
                link2: myMarkers[i].getAttribute("link2"),
                link3: myMarkers[i].getAttribute("link3"),
                anchor1: myMarkers[i].getAttribute("anchor1"),
                anchor2: myMarkers[i].getAttribute("anchor2"),
                anchor3: myMarkers[i].getAttribute("anchor3"),
                keywords: myMarkers[i].getAttribute("keywords"),
                type: rtaTheTypeValue[theNewIndex],
                lat: parseFloat(theLat),
                lng: parseFloat(theLng),
                currentIndex: theNewIndex,
                theHTML: "",
                dist1: myMarkers[i].getAttribute("dist1"),
                dist2: myMarkers[i].getAttribute("dist2"),
                dist3: myMarkers[i].getAttribute("dist3"),
                ownercode: myMarkers[i].getAttribute("ownercode"),
                owner: myMarkers[i].getAttribute("owner"),
                access: theAccessCode
            };
            rtaPOIArray[theNewIndex] = new rtaPOIObj(poiIData);
            poiHtml = makeHTMLString(theNewIndex);
            rtaPOIArray[theNewIndex].theHTML = poiHtml;
            rtaPOIArray[theNewIndex].theInfowindow.setContent(poiHtml);
        }
        refreshAnySidebar("poiList", side_bar_htmlArray, "");
    });
}

function listMaps() {
    var url = urlPrefix + "ajuserretrmaprta.php";
    var theParms = "mymaps=" + rtaUserID;
    downloadPostUrl(url, theParms, function(data) {
        var xml = parseXml(data);
        var mapList = xml.documentElement.getElementsByTagName("itinerary");
        var numMaps = mapList.length;
        var currIndx = rtaMapArray.length;
        var j, i;
        var newIndex;
        var calcRoute;
        var lineDrawns;
        var poiList;
        var name;
        var newHtml;
        mainLoop: for (i = 0; i < numMaps; i++) {
            var dbMapID = mapList[i].getAttribute("id");
            for (j = 0; j < currIndx; j++) {
                if (rtaMapArray[j][3] === dbMapID) {
                    continue mainLoop;
                }
            }
            newIndex = rtaMapArray.length;
            rtaMapsNum++;
            calcRoute = mapList[i].getAttribute("thecalcroute");
            lineDrawns = mapList[i].getAttribute("theldroutes");
            poiList = mapList[i].getAttribute("thepois");
            name = mapList[i].getAttribute("name");
            newHtml = '<a href="javascript:sidebarmapclick(' + (newIndex) + ')">' + (newIndex + 1) + '<\/a> ' + name + '<br />';
            side_bar_map_htmlArray[newIndex] = newHtml;
            rtaMapArray[newIndex] = [];
            rtaMapArray[newIndex][0] = calcRoute;
            rtaMapArray[newIndex][1] = lineDrawns.split(",");
            rtaMapArray[newIndex][2] = poiList.split(",");
            rtaMapArray[newIndex][3] = dbMapID;
            rtaMapArray[newIndex][4] = mapList[i].getAttribute("access");
            rtaMapArray[newIndex][5] = name;
            rtaMapArray[newIndex][6] = mapList[i].getAttribute("owner");
            rtaMapArray[newIndex][7] = mapList[i].getAttribute("numvoters");
            rtaMapArray[newIndex][8] = mapList[i].getAttribute("ratingtotal");
            rtaMapArray[newIndex][9] = mapList[i].getAttribute("ownercode");
        }
        document.getElementById("message").innerHTML = "<br />";
        refreshAnySidebar("mapListDiv", side_bar_map_htmlArray, "");
        exitRtePlaceMode();
    });
}

function getMapByID(theMapNum) {
    var url = urlPrefix + "ajpagegetmapbyidrta.php";
    var theParms = "mapnumber=" + theMapNum;
    var theParms2;
    var url2;
    downloadPostUrl(url, theParms, function(data) {
        var xml = parseXml(data);
        var mySrchMaps = xml.documentElement.getElementsByTagName("itinerary");
        if (!mySrchMaps[0]) {
            alert('No map found.');
            return;
        }
        var theAccess = parseInt(mySrchMaps[0].getAttribute("access"), 10);
        var html = ' ';
        side_bar_searchmap_htmlArray[0] = html;
        rta_SearchMapArray[0] = [];
        rta_SearchMapArray[0][0] = parseInt(mySrchMaps[0].getAttribute("thecalcroute"), 10);
        rta_SearchMapArray[0][1] = mySrchMaps[0].getAttribute("theldroutes");
        rta_SearchMapArray[0][2] = mySrchMaps[0].getAttribute("thepois");
        rta_SearchMapArray[0][3] = theMapNum;
        rta_SearchMapArray[0][4] = theAccess;
        rta_SearchMapArray[0][5] = mySrchMaps[0].getAttribute("name");
        if ((rta_SearchMapArray[0][0] != -2) && (rta_SearchMapArray[0][2] != -2)) {
            url2 = urlPrefix + "getstart.php";
            theParms2 = "searchid=" + rta_SearchMapArray[0][0];
            downloadPostUrl(url2, theParms2, function(data) {
                var xml2 = parseXml(data);
                var theRt = xml2.documentElement.getElementsByTagName("calcroute");
                if (!theRt[0]) {
                    document.getElementById("message").innerHTML = 'Note: markers may be in random order.';
                    sidebarsearchmapclick(0);
                    return;
                }
                var startLat = theRt[0].getAttribute("startlat");
                var startLng = theRt[0].getAttribute("startlng");
                sidebarsearchmapclick(0, startLat, startLng);
            });
        } else {
            sidebarsearchmapclick(0);
        }
    });
}

function changeSearchItems1() {
    var theElement;
    var i;
    searchOption1 = 1;
    if (searchOption1 == 1) {
        return;
    }
    theElement = document.getElementById("SearchItems1");
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            searchOption1 = parseInt(theElement.options[i].value, 10);
            break;
        }
    }
}

function getRACode() {
    switch (searchRATypesNum) {
        case 1:
            return (101);
        case 2:
            return (102);
        case 4:
            return (103);
        case 8:
            return (104);
        case 16:
            return (105);
        case 32:
            return (106);
        case 64:
            return (107);
        case 128:
            return (108);
        case 512:
            return (110);
        case 1024:
            return (1024);
        default:
            return (1024);
    }
}

function changeCannedKey() {
    var theElement = document.getElementById("cannedKeywords");
    var i;
    var numKeyWds = theElement.options.length;
    cannedKey = '';
    for (i = 0; i < numKeyWds; i++) {
        if (theElement.options[i].selected) {
            cannedKey = theElement.options[i].value;
        }
    }
}

function changeSearchRATypes() {
    var theElement = document.getElementById("searchRATypes");
    var i;
    var numRATypes = theElement.options.length;
    searchRATypesNum = 0;
    for (i = 0; i < numRATypes; i++) {
        if (theElement.options[i].selected) {
            searchRATypesNum = parseInt(theElement.options[i].value, 10);
        }
    }
}

function changeSearchItems2() {
    searchOption2 = 1;
    if (searchOption2 == 1) {
        return;
    }
    var theElement;
    var i;
    if (searchOption2 == 1) {
        return;
    }
    theElement = document.getElementById("SearchItems2");
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            searchOption2 += parseInt(theElement.options[i].value, 10);
        }
    }
}

function changeSearchRadius() {
    var theElement = document.getElementById("SearchRadius");
    var i;
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            rtaSearchRadius = parseInt(theElement.options[i].value, 10);
            break;
        }
    }
}

function emptyPoiSearchArray() {
    poiLen = poiSearchArray.length;
    var i;
    for (i = 0; i < poiLen; i++) {
        if (poiSearchArray[i]) {
            poiSearchArray[i].thePosition = null;
            poiSearchArray[i].theMarker.setVisible(false);
            poiSearchArray[i].theMarker.setMap(null);
            poiSearchArray[i].theInfowindow.setContent(null);
            poiSearchArray[i].theInfowindow.close();
            poiSearchArray[i] = null;
        }
    }
}

function emptyCalc_search_db_infoArray() {
    var theLen = calc_search_db_infoArray.length;
    var i;
    for (i = 0; i < theLen; i++) {
        calc_search_db_infoArray[i] = null;
    }
}

function emptySearch_calc_side_htmlArray() {
    var theLen = search_calc_side_htmlArray.length;
    var i;
    for (i = 0; i < theLen; i++) {
        search_calc_side_htmlArray[i] = null;
    }
}

function emptyCalcSearchRtArray() {
    var arrLenth = calcSearchRtArray.length;
    var i;
    for (i = 0; i < arrLenth; i++) {
        if (calcSearchRtArray[i]) {
            if (calcSearchRtArray[i].startMarker) {
                calcSearchRtArray[i].startMarker.setMap(null);
                calcSearchRtArray[i].startMarker = null;
            }
            if (calcSearchRtArray[i].rtInfowindow) {
                calcSearchRtArray[i].rtInfowindow.setContent(null);
                calcSearchRtArray[i].rtInfowindow.close();
            }
            calcSearchRtArray[i] = null;
        }
    }
}

function emptyDirectionsSearchResultsArray() {
    var theLen = directionsSearchResultsArray.length;
    var i;
    for (i = 0; i < theLen; i++) {
        directionsSearchResultsArray[i] = null;
    }
}

function emptyRta_SearchMapArray() {
    var arraysNum = rta_SearchMapArray.length;
    var i, j;
    for (i = 0; i < arraysNum; i++) {
        for (j = 0; j < rta_SearchMapArray[i].length; j++) {
            rta_SearchMapArray[i][j] = null;
        }
    }
}

function emptyside_bar_searchmap_htmlArray() {
    var arraysNum = side_bar_searchmap_htmlArray.length;
    var i;
    for (i = 0; i < arraysNum; i++) {
        side_bar_searchmap_htmlArray[i] = null;
    }
}

function emptyLDSearchArrays() {
    var arrLen = ld_srch_side_route_htmlArray.length;
    var i;
    for (i = 0; i < arrLen; i++) {
        ld_srch_side_route_htmlArray[i] = null;
    }
    arrLen = ld_srch_side_db_infoArray.length;
    for (i = 0; i < arrLen; i++) {
        ld_srch_side_db_infoArray[i] = null;
    }
    arrLen = dbSrchLDRteID.length;
    for (i = 0; i < arrLen; i++) {
        dbSrchLDRteID[i] = null;
    }
}

function emptySearchArrays() {
    emptyCalcSearchRtArray();
    emptyPoiSearchArray();
    emptyCalc_search_db_infoArray();
    emptyDirectionsSearchResultsArray();
    emptySearch_calc_side_htmlArray();
    emptyRta_SearchMapArray();
    erasePOISearchSidebar();
    emptyside_bar_searchmap_htmlArray();
    emptyLDSearchArrays();
}

function getPoiSearchArrayIndex() {
    var theEnd = poiSearchArray.length;
    var i;
    for (i = 0; i < theEnd; i++) {
        if (poiSearchArray[i] === null) {
            return i;
        }
    }
    return theEnd;
}

function getCalcSearchRouteArrayIndex() {
    var theEnd = calcSearchRtArray.length;
    var i;
    for (i = 0; i < theEnd; i++) {
        if (calcSearchRtArray[i] === null) {
            return i;
        }
    }
    return theEnd;
}

function getRta_SearchMapArrayIndex() {
    var theEnd = rta_SearchMapArray.length;
    var i;
    for (i = 0; i < theEnd; i++) {
        if (rta_SearchMapArray[i] === null) {
            return i;
        }
    }
    return theEnd;
}

function getLDSearchRtArrayIndex() {
    var theEnd = ld_srch_side_route_htmlArray.length;
    var i;
    for (i = 0; i < theEnd; i++) {
        if (ld_srch_side_route_htmlArray[i] === null) {
            return i;
        }
    }
    return theEnd;
}

function checkForRV(searchText) {
    var testRV;
    if (searchText.length == 2) {
        testRV = searchText.toUpperCase();
        if (testRV == 'RV') {
            searchText = 'RV1';
            return (searchText);
        }
    }
    return (searchText);
}

function getPOIFromDB(tempArr) {
    var newStrng = tempArr.join(",");
    var url = urlPrefix + "ajusersrchidpoirta.php";
    var theParms = "poilist=" + newStrng;
    var newBoundsNeeded = false;
    var startLat;
    var startLng;
    var hasStartPt = false;
    if (arguments.length == 3) {
        startLat = arguments[1];
        startLng = arguments[2];
        hasStartPt = true;
    }
    downloadPostUrl(url, theParms, function(data) {
        var xml = parseXml(data);
        var mySrchMarkers = xml.documentElement.getElementsByTagName("marker");
        var numMarkers = mySrchMarkers.length;
        var newBounds = new google.maps.LatLngBounds();
        var theLat;
        var theLng;
        var theAccess;
        var srchID;
        var i;
        var thePOIIndex;
        var newIndex;
        var sortIndex;
        var orderAr = [];
        var distArray = [];
        newBounds = RTAMap.getBounds();
        if (hasStartPt) {
            for (i = 0; i < numMarkers; i++) {
                theLat = mySrchMarkers[i].getAttribute("lat");
                theLng = mySrchMarkers[i].getAttribute("lng");
                distArray[i] = Math.round(rtaDistance(theLat, theLng, startLat, startLng));
            }
            orderAr = sortSequence(distArray);
        }
        for (i = 0; i < numMarkers; i++) {
            if (hasStartPt) {
                sortIndex = orderAr[i];
            } else {
                sortIndex = i;
            }
            theAccess = mySrchMarkers[sortIndex].getAttribute("access");
            srchID = mySrchMarkers[sortIndex].getAttribute("id");
            thePOIIndex = poiAlreadyInSrchBar(srchID);
            if (thePOIIndex > -1) {
                poiSearchArray[thePOIIndex].theMarker.setVisible(true);
                continue;
            }
            newIndex = getPoiSearchArrayIndex();
            loadSearchPOIObject(mySrchMarkers[sortIndex], newIndex);
            if (newBounds) {
                if (!(newBounds.contains(poiSearchArray[newIndex].thePosition))) {
                    newBounds = newBounds.extend(poiSearchArray[newIndex].thePosition);
                    newSearchBoundsNeeded = true;
                }
            }
        }
        refreshAnySidebar("poi_results", search_poi_bar_htmlArray, "<b>RoadTrip Attractions</b><br/>");
        exitRtePlaceMode();
        if (newBoundsNeeded) {
            RTAMap.fitBounds(currBounds);
        }
    });
}

function getStartPointAndPOIs(databaseIDs, calcRtID) {
    var url = urlPrefix + "getstart.php";
    var theParms = "searchid=" + calcRtID;
    downloadPostUrl(url, theParms, function(data) {
        var xml = parseXml(data);
        var theRt = xml.documentElement.getElementsByTagName("calcroute");
        if (!theRt[0]) {
            document.getElementById("message").innerHTML = 'Note: markers may be in random order.';
            getPOIFromDB(databaseIDs);
            return;
        }
        var startLat = theRt[0].getAttribute("startlat");
        var startLng = theRt[0].getAttribute("startlng");
        getPOIFromDB(databaseIDs, startLat, startLng);
    });
}

function getLDRtesFromDB(mapIndex, tempArr) {
    var newStrng = tempArr.join(",");
    var url = urlPrefix + "ajusersrchidldrterta.php?ldrlist=" + newStrng;
    downloadUrl(url, function(data) {
        var xml = parseXml(data);
        var myLDRoutes = xml.documentElement.getElementsByTagName("ldroute");
        var numRtes = myLDRoutes.length;
        var i;
        var theID;
        var latstring;
        var lngstring;
        var theLatArray;
        var theLngArray;
        var theDescription;
        var ldRouteInfo;
        var theCurrIndex;
        for (i = 0; i < numRtes; i++) {
            theID = parseInt(myLDRoutes[i].getAttribute("id"), 10);
            if (srchLDRtNotAlreadyOnList(theID)) {
                latstring = myLDRoutes[i].getAttribute("thelats");
                lngstring = myLDRoutes[i].getAttribute("thelngs");
                theLatArray = latstring.split(",");
                theLngArray = lngstring.split(",");
                theDescription = myLDRoutes[i].getAttribute("description");
                if (theDescription !== '') {
                    theDescription = restoreHTML(theDescription);
                }
                ldRouteInfo = {
                    routeID: theID,
                    theName: myLDRoutes[i].getAttribute("name"),
                    description: theDescription,
                    type: myLDRoutes[i].getAttribute("type"),
                    latArray: theLatArray,
                    lngArray: theLngArray,
                    timedate: myLDRoutes[i].getAttribute("timedate"),
                    owner: myLDRoutes[i].getAttribute("owner"),
                    access: myLDRoutes[i].getAttribute("access")
                };
                theCurrIndex = getLDSearchRtArrayIndex();
                ld_srch_side_db_infoArray[theCurrIndex] = ldRouteInfo;
                rtaSearchLDRoutes[theCurrIndex] = 0;
                ld_srch_side_route_htmlArray[theCurrIndex] = '<a href="javascript:ldsidesrchdorouteclick(' +
                    (theCurrIndex) + ')">' + (theCurrIndex + 1) + '<\/a> ' + ld_srch_side_db_infoArray[theCurrIndex].theName + '<br />';
                addSearchLDRouteToMap(theCurrIndex);
            }
        }
        refreshAnySidebar("ld_results", ld_srch_side_route_htmlArray, "Hand-drawn routes<br/>");
        exitRtePlaceMode();
    });
}

function vicinitySearchPOI(theClickLocation, searchBounds) {
    var expSearchRad = rtaSearchRadius + 1;
    var currBounds = RTAMap.getBounds();
    var newBoundsNeeded = false;
    var theUrl;
    var theParms;
    var searchText;
    var listkeyword;
    var searchcat1;
    if (rtaApplyKeySearchFlag) {
        searchText = encodeURIComponent(document.getElementById("keywdsearch").value);
        if (searchText.length === 2) {
            searchText = checkForRV(searchText);
        }
        listkeyword = cannedKey;
        if (cannedKey === '') {
            listkeyword = 'none';
        }
        searchcat1 = getRACode();
        theUrl = urlPrefix + "ajusersrchradkeypoirta.php";
        theParms = "dist1=" + (theClickLocation[2]) + "&dist2=" + (theClickLocation[3]) + "&dist3=" + (theClickLocation[4]) + "&radius=" + (expSearchRad) + '&searchcat1=' + (searchcat1) + '&searchtxt=' + (searchText) + '&searchkey=' + (listkeyword);
    } else {
        theUrl = urlPrefix + "ajusersrchradpoirta.php";
        theParms = "dist1=" + (theClickLocation[2]) + "&dist2=" + (theClickLocation[3]) + "&dist3=" + (theClickLocation[4]) + "&radius=" + (expSearchRad);
    }
    downloadPostUrl(theUrl, theParms, function(data) {
        var placesFound = 0;
        var xml = parseXml(data);
        var mySrchMarkers = xml.documentElement.getElementsByTagName("marker");
        var numMarkers = mySrchMarkers.length;
        var realDiff;
        var currID;
        var theLat;
        var theLng;
        var poiPosition;
        var newIndex;
        var i;
        if (numMarkers > 0) {
            for (i = 0; i < numMarkers; i++) {
                currID = mySrchMarkers[i].getAttribute("id");
                thePOIIndex = poiAlreadyInSrchBar(currID);
                if (thePOIIndex > -1) {
                    poiSearchArray[thePOIIndex].theMarker.setVisible(true);
                    continue;
                }
                theLat = parseFloat(mySrchMarkers[i].getAttribute("lat"));
                theLng = parseFloat(mySrchMarkers[i].getAttribute("lng"));
                if (rtaDistance(theClickLocation[0], theClickLocation[1], theLat, theLng) <= rtaSearchRadius) {
                    poiPosition = new google.maps.LatLng(theLat, theLng);
                    if (!currBounds.contains(poiPosition)) {
                        currBounds = currBounds.extend(poiPosition);
                        newBoundsNeeded = true;
                    }
                    placesFound += 1;
                    newIndex = getPoiSearchArrayIndex();
                    loadSearchPOIObject(mySrchMarkers[i], newIndex);
                }
            }
        }
        if (newBoundsNeeded) {
            RTAMap.fitBounds(currBounds);
        }
        switch (placesFound) {
            case 0:
                document.getElementById("message").innerHTML += " -- no new hits ";
                break;
            case 1:
                document.getElementById("message").innerHTML += " -- one hit ";
                refreshAnySidebar("poi_results", search_poi_bar_htmlArray, "<b>RoadTrip Attractions</b><br/>");
                setMapIsCurrentFlag(false);
                break;
            default:
                document.getElementById("message").innerHTML += "-- " + (placesFound + " hits ");
                refreshAnySidebar("poi_results", search_poi_bar_htmlArray, "<b>RoadTrip Attractions</b><br/>");
                setMapIsCurrentFlag(false);
                break;
        }
        exitRtePlaceMode();
    });
}

function vicinitySearchLDRoutes(theClickLocation) {
    var expSearchRad = rtaSearchRadius + 1;
    url = urlPrefix + "phpsqlajax_genxmlldroutesrchrad.php?dist1=" + (theClickLocation[2]) + "&dist2=" + (theClickLocation[3]) + "&dist3=" + (theClickLocation[4]) + "&radius=" + (expSearchRad);
    downloadUrl(url, function(data, responseCode) {
        if (rtadebuggingFlag) {
            document.getElementById("messagelog").innerHTML += "(Technical info: ResponseCode = " + responseCode + ", Data length = " + data.length + ")" + "<br />";
        }
        var xml = parseXml(data);
        var myLDRoutes = xml.documentElement.getElementsByTagName("ldroute");
        var numRtes = myLDRoutes.length;
        var ldRoutesFound = 0;
        var theStLat;
        var theStLng;
        var theEndLat;
        var theEndLng;
        var i;
        var latstring;
        var lngstring;
        var theLatArray;
        var theLngArray;
        var endInd;
        var theDescription;
        var ldRouteInfo;
        var theCurrIndex;
        for (i = 0; i < numRtes; i++) {
            latstring = myLDRoutes[i].getAttribute("thelats");
            lngstring = myLDRoutes[i].getAttribute("thelngs");
            theLatArray = latstring.split(",");
            theLngArray = lngstring.split(",");
            theStLat = parseFloat(theLatArray[0]);
            theStLng = parseFloat(theLngArray[0]);
            endInd = theLatArray.length - 1;
            theEndLat = parseFloat(theLatArray[endInd]);
            theEndLng = parseFloat(theLngArray[endInd]);
            if ((rtaDistance(theClickLocation[0], theClickLocation[1], theStLat, theStLng) <= rtaSearchRadius) || (rtaDistance(theClickLocation[0], theClickLocation[1], theEndLat, theEndLng) <= rtaSearchRadius)) {
                ldRoutesFound += 1;
                theDescription = myLDRoutes[i].getAttribute("description");
                theDescription = restoreHTML(theDescription);
                ldRouteInfo = {
                    routeID: myLDRoutes[i].getAttribute("id"),
                    theName: myLDRoutes[i].getAttribute("name"),
                    description: theDescription,
                    type: myLDRoutes[i].getAttribute("type"),
                    latArray: theLatArray,
                    lngArray: theLngArray,
                    timedate: myLDRoutes[i].getAttribute("timedate"),
                    owner: myLDRoutes[i].getAttribute("owner"),
                    access: myLDRoutes[i].getAttribute("access")
                };
                theCurrIndex = getLDSearchRtArrayIndex();
                ld_srch_side_db_infoArray[theCurrIndex] = ldRouteInfo;
                rtaSearchLDRoutes[theCurrIndex] = 0;
                ld_srch_side_route_htmlArray[theCurrIndex] = '<a href="javascript:ldsidesrchdorouteclick(' +
                    (theCurrIndex) + ')">' + (theCurrIndex + 1) + '<\/a> ' + ld_srch_side_db_infoArray[theCurrIndex].theName + '<br />';
            }
        }
        refreshAnySidebar("ld_results", ld_srch_side_route_htmlArray, "Hand-drawn routes<br/>");
        switch (ldRoutesFound) {
            case 0:
                document.getElementById("message").innerHTML += " -- no drawn routes ";
                break;
            case 1:
                document.getElementById("message").innerHTML += " -- one drawn route ";
                break;
            default:
                document.getElementById("message").innerHTML += "--  " + (ldRoutesFound) + " drawn routes ";
                break;
        }
        exitRtePlaceMode();
    });
}

function vicinitySearchRoutes(theClickLocation, searchBounds) {
    var expSearchRad = rtaSearchRadius + 1;
    url = urlPrefix + "phpsqlajax_rtagenxmlcalcroutesrchrad.php?dist1=" + (theClickLocation[2]) + "&dist2=" + (theClickLocation[3]) + "&dist3=" + (theClickLocation[4]) + "&radius=" + (expSearchRad);
    downloadUrl(url, function(data, responseCode) {
        if (rtadebuggingFlag) {
            document.getElementById("messagelog").innerHTML += "(Technical info: ResponseCode = " + responseCode + ", Data length = " + data.length + ")" + "<br />";
        }
        var xml = parseXml(data);
        var myCalcRoutes = xml.documentElement.getElementsByTagName("calcroute");
        var numRtes = myCalcRoutes.length;
        var routesFound = 0;
        var theStLat;
        var theStLng;
        var theEndLat;
        var theEndLng;
        var i;
        var theNumWaypts;
        var latArray;
        var lngArray;
        var latstring;
        var lngstring;
        var theDesription;
        var theDistance;
        var newArrayIndex;
        var theNewField;
        var routeInfo;
        for (i = 0; i < numRtes; i++) {
            theStLat = parseFloat(myCalcRoutes[i].getAttribute("startlat"));
            theStLng = parseFloat(myCalcRoutes[i].getAttribute("startlng"));
            theEndLat = parseFloat(myCalcRoutes[i].getAttribute("endlat"));
            theEndLng = parseFloat(myCalcRoutes[i].getAttribute("endlng"));
            if ((rtaDistance(theClickLocation[0], theClickLocation[1], theStLat, theStLng) <= rtaSearchRadius) || (rtaDistance(theClickLocation[0], theClickLocation[1], theEndLat, theEndLng) <= rtaSearchRadius)) {
                routesFound += 1;
                theNumWaypts = myCalcRoutes[i].getAttribute("numwaypts");
                latArray = [0];
                lngArray = [0];
                if (theNumWaypts > 0) {
                    latstring = myCalcRoutes[i].getAttribute("thelats");
                    lngstring = myCalcRoutes[i].getAttribute("thelngs");
                    latArray = latstring.split(",");
                    lngArray = lngstring.split(",");
                }
                theDesription = myCalcRoutes[i].getAttribute("description");
                theDescription = restoreHTML(theDescription);
                theDistance = myCalcRoutes[i].getAttribute("distance");
                theNewField = parseInt(myCalcRoutes[i].getAttribute("new"), 10);
                if (theNewField !== 1) {
                    theNewField = 0;
                }
                newArrayIndex = getCalcSearchRouteArrayIndex();
                routeInfo = {
                    theID: myCalcRoutes[i].getAttribute("id"),
                    name: myCalcRoutes[i].getAttribute("name"),
                    description: theDescription,
                    keywords: myCalcRoutes[i].getAttribute("keywords"),
                    newfield: theNewField,
                    numwaypts: theNumWaypts,
                    latvals: latArray,
                    lngvals: lngArray,
                    startlat: theStLat,
                    startlng: theStLng,
                    endlat: theEndLat,
                    endlng: theEndLng,
                    numvoters: myCalcRoutes[i].getAttribute("numvoters"),
                    ratingtotal: myCalcRoutes[i].getAttribute("ratingtotal"),
                    distance: theDistance,
                    owner: myCalcRoutes[i].getAttribute("owner"),
                    access: myCalcRoutes[i].getAttribute("access")
                };
                calc_search_db_infoArray[newArrayIndex] = routeInfo;
                search_calc_side_htmlArray[newArrayIndex] = '<a href="javascript:sidebardosearchcalcrouteclick(' + (newArrayIndex) + ')">' + (newArrayIndex + 1) + '<\/a> ' +
                    calc_search_db_infoArray[newArrayIndex].name + " (" + theDistance + " mi)" + '<br />';
                calcSearchRtArray[newArrayIndex] = -1;
            }
        }
        refreshAnySidebar("calc_results", search_calc_side_htmlArray, "Calculated routes<br/>");
        switch (routesFound) {
            case 0:
                document.getElementById("message").innerHTML += "-- no calculated routes ";
                break;
            case 1:
                document.getElementById("message").innerHTML += "-- one calculated route ";
                break;
            default:
                document.getElementById("message").innerHTML += "-- " + (routesFound) + " calculated routes ";
                break;
        }
        exitRtePlaceMode();
    });
}

function doVicinitySearch(theEvent) {
    var searchBounds;
    var theClickLocation = [];
    vicinitySearchFlag = false;
    document.getElementById("message").innerHTML = 'Search found: ';
    theClickLocation[0] = theEvent.latLng.lat();
    theClickLocation[1] = theEvent.latLng.lng();
    theClickLocation[2] = Math.round(rtaDistance(theClickLocation[0], theClickLocation[1], rta_point1.lat(), rta_point1.lng()));
    theClickLocation[3] = Math.round(rtaDistance(theClickLocation[0], theClickLocation[1], rta_point2.lat(), rta_point2.lng()));
    theClickLocation[4] = Math.round(rtaDistance(theClickLocation[0], theClickLocation[1], rta_point3.lat(), rta_point3.lng()));
    searchBounds = makeMapBoundsFromPoint(theEvent.latLng);
    switch (searchOption1) {
        case 1:
            vicinitySearchPOI(theClickLocation, searchBounds);
            break;
        case 2:
            vicinitySearchRoutes(theClickLocation, searchBounds);
            vicinitySearchLDRoutes(theClickLocation);
            break;
        case 3:
            vicinitySearchPOI(theClickLocation, searchBounds);
            vicinitySearchRoutes(theClickLocation, searchBounds);
            vicinitySearchLDRoutes(theClickLocation, searchBounds);
            break;
        default:
            break;
    }
}

function enableVicinitySearch() {
    var searchText;
    if (rtaApplyKeySearchFlag) {
        searchText = encodeURIComponent(document.getElementById("keywdsearch").value);
        if (searchText.length === 2) {
            searchText = checkForRV(searchText);
        }
        vicinitySearchFlag = true;
        rtaAddressClickListener = google.maps.event.addListenerOnce(RTAMap, 'click', doVicinitySearch);
        enterAddPlaceMode();
        document.getElementById("message").innerHTML = "Click on map to find what's nearby.";
    } else {
        vicinitySearchFlag = true;
        rtaAddressClickListener = google.maps.event.addListenerOnce(RTAMap, 'click', doVicinitySearch);
        enterAddPlaceMode();
        document.getElementById("message").innerHTML = "Click on map to find what's nearby.";
    }
}

function doMapKeywordSearch(searchTxt) {
    var url = urlPrefix + "ajusersrchmaprta.php?searchtxt=" + searchTxt;
    emptyRta_SearchMapArray();
    downloadUrl(url, function(data) {
        var routesFound = 0;
        var xml = parseXml(data);
        var mySrchMaps = xml.documentElement.getElementsByTagName("itinerary");
        var numMaps = mySrchMaps.length;
        var currIndex;
        var i;
        var lineDrawns;
        var poiList;
        var name;
        var html;
        for (i = 0; i < numMaps; i++) {
            currIndex = getRta_SearchMapArrayIndex();
            lineDrawns = mySrchMaps[i].getAttribute("theldroutes");
            poiList = mySrchMaps[i].getAttribute("thepois");
            name = mySrchMaps[i].getAttribute("name");
            html = '<a href="javascript:sidebarsearchmapclick(' + (currIndex) + ')">' + (currIndex + 1) + '<\/a> ' + name + '<br />';
            side_bar_searchmap_htmlArray[currIndex] = html;
            rta_SearchMapArray[currIndex] = [];
            rta_SearchMapArray[currIndex][0] = parseInt(mySrchMaps[i].getAttribute("thecalcroute"), 10);
            rta_SearchMapArray[currIndex][1] = mySrchMaps[i].getAttribute("theldroutes");
            rta_SearchMapArray[currIndex][2] = mySrchMaps[i].getAttribute("thepois");
            rta_SearchMapArray[currIndex][3] = mySrchMaps[i].getAttribute("id");
            rta_SearchMapArray[currIndex][4] = parseInt(mySrchMaps[i].getAttribute("access"), 10);
            rta_SearchMapArray[currIndex][5] = name;
            rta_SearchMapArray[currIndex][6] = mySrchMaps[i].getAttribute("owner");
            rta_SearchMapArray[currIndex][7] = parseInt(mySrchMaps[i].getAttribute("numvoters"), 10);
            rta_SearchMapArray[currIndex][8] = parseInt(mySrchMaps[i].getAttribute("ratingtotal"), 10);
            rta_SearchMapArray[currIndex][9] = mySrchMaps[i].getAttribute("ownercode");
        }
        switch (numMaps) {
            case 0:
                document.getElementById("message").innerHTML += "-- no maps ";
                break;
            case 1:
                document.getElementById("message").innerHTML += "-- one map ";
                break;
            default:
                document.getElementById("message").innerHTML += "-- " + (numMaps) + " maps ";
                break;
        }
        refreshAnySidebar("map_results", side_bar_searchmap_htmlArray, "Maps<br />");
    });
}

function doLDRtKeywordSearch(searchTxt) {
    var url = urlPrefix + "ajusersrchldrtesrta.php?searchtxt=" + searchTxt;
    downloadUrl(url, function(data) {
        var xml;
        var myLDRoutes;
        var numRoutes;
        var latstring;
        var lngstring;
        var theLatArray = [];
        var theLngArray = [];
        var theDescription;
        var ldRouteInfo;
        var theCurrIndex;
        var i;
        xml = parseXml(data);
        myLDRoutes = xml.documentElement.getElementsByTagName("ldroute");
        numRoutes = myLDRoutes.length;
        for (i = 0; i < numRoutes; i++) {
            latstring = myLDRoutes[i].getAttribute("thelats");
            lngstring = myLDRoutes[i].getAttribute("thelngs");
            theLatArray = latstring.split(",");
            theLngArray = lngstring.split(",");
            theDescription = myLDRoutes[i].getAttribute("description");
            theDescription = restoreHTML(theDescription);
            ldRouteInfo = {
                routeID: myLDRoutes[i].getAttribute("id"),
                theName: myLDRoutes[i].getAttribute("name"),
                description: theDescription,
                type: myLDRoutes[i].getAttribute("type"),
                latArray: theLatArray,
                lngArray: theLngArray,
                timedate: myLDRoutes[i].getAttribute("timedate"),
                owner: myLDRoutes[i].getAttribute("owner"),
                ownercode: myLDRoutes[i].getAttribute("ownercode"),
                access: myLDRoutes[i].getAttribute("access")
            };
            theCurrIndex = getLDSearchRtArrayIndex();
            ld_srch_side_db_infoArray[theCurrIndex] = ldRouteInfo;
            rtaSearchLDRoutes[theCurrIndex] = 0;
            ld_srch_side_route_htmlArray[theCurrIndex] = '<a href="javascript:ldsidesrchdorouteclick(' +
                (theCurrIndex) + ')">' + (theCurrIndex + 1) + '<\/a> ' + ld_srch_side_db_infoArray[theCurrIndex].theName + '<br />';
        }
        refreshAnySidebar("ld_results", ld_srch_side_route_htmlArray, "Hand-drawn routes<br/>");
        switch (numRoutes) {
            case 0:
                document.getElementById("message").innerHTML += "-- no drawn routes ";
                break;
            case 1:
                document.getElementById("message").innerHTML += "-- one drawn route ";
                break;
            default:
                document.getElementById("message").innerHTML += "-- " + (ldRoutesFound) + " drawn routes ";
                break;
        }
        exitRtePlaceMode();
    });
}

function doRouteKeywordSearch(searchTxt) {
    var url = urlPrefix + "ajusersrchcalcrtsrta.php?searchtxt=" + searchTxt;
    downloadUrl(url, function(data) {
        var routesFound = 0;
        var xml;
        var myCalcRoutes;
        var numRoutes;
        var i;
        var theNumWaypts;
        var latArray = [];
        var lngArray = [];
        var latstring;
        var lngstring;
        var theDistance;
        var theArrayIndex;
        var theDescription;
        var theNewField;
        var routeInfo;
        xml = parseXml(data);
        myCalcRoutes = xml.documentElement.getElementsByTagName("calcroute");
        numRoutes = myCalcRoutes.length;
        for (i = 0; i < numRoutes; i++) {
            theNumWaypts = myCalcRoutes[i].getAttribute("numwaypts");
            latArray = [0];
            lngArray = [0];
            if (theNumWaypts > 0) {
                latstring = myCalcRoutes[i].getAttribute("thelats");
                lngstring = myCalcRoutes[i].getAttribute("thelngs");
                latArray = latstring.split(",");
                lngArray = lngstring.split(",");
            }
            theDistance = myCalcRoutes[i].getAttribute("distance");
            theArrayIndex = getCalcSearchRouteArrayIndex();
            theDescription = myCalcRoutes[i].getAttribute("description");
            theDescription = restoreHTML(theDescription);
            theNewField = parseInt(myCalcRoutes[i].getAttribute("new"), 10);
            if (theNewField !== 1) {
                theNewField = 0;
            }
            routeInfo = {
                theID: myCalcRoutes[i].getAttribute("id"),
                name: myCalcRoutes[i].getAttribute("name"),
                description: theDescription,
                keywords: myCalcRoutes[i].getAttribute("keywords"),
                newfield: theNewField,
                numwaypts: theNumWaypts,
                latvals: latArray,
                lngvals: lngArray,
                startlat: parseFloat(myCalcRoutes[i].getAttribute("startlat")),
                startlng: parseFloat(myCalcRoutes[i].getAttribute("startlng")),
                endlat: parseFloat(myCalcRoutes[i].getAttribute("endlat")),
                endlng: parseFloat(myCalcRoutes[i].getAttribute("endlng")),
                distance: myCalcRoutes[i].getAttribute("distance"),
                numvoters: myCalcRoutes[i].getAttribute("numvoters"),
                ratingtotal: myCalcRoutes[i].getAttribute("ratingtotal"),
                owner: myCalcRoutes[i].getAttribute("owner"),
                access: myCalcRoutes[i].getAttribute("access")
            };
            calc_search_db_infoArray[theArrayIndex] = routeInfo;
            search_calc_side_htmlArray[theArrayIndex] = '<a href="javascript:sidebardosearchcalcrouteclick(' + (theArrayIndex) + ')">' + (theArrayIndex + 1) + '<\/a> ' +
                calc_search_db_infoArray[theArrayIndex].name + " (" + theDistance + " mi)" + '<br />';
            calcSearchRtArray[theArrayIndex] = -1;
        }
        refreshAnySidebar("calc_results", search_calc_side_htmlArray, "Calculated routes<br/>");
        switch (numRoutes) {
            case 0:
                document.getElementById("message").innerHTML += "-- no calculated routes ";
                break;
            case 1:
                document.getElementById("message").innerHTML += "-- one calculated route ";
                break;
            default:
                document.getElementById("message").innerHTML += "-- " + (numRoutes) + " calculated routes ";
                break;
        }
    });
}

function doPOIKeywordSearch(searchTxt) {
    var url = urlPrefix + "ajusersrchpoirta2.php";
    var searchBounds = RTAMap.getBounds();
    var searchcat1 = getRACode();
    var listkeyword = cannedKey;
    var theParms;
    if (cannedKey === '') {
        listkeyword = 'none';
    }
    theParms = 'searchcat1=' + searchcat1 + '&searchtxt=' + searchTxt + '&searchkey=' + listkeyword;
    downloadPostUrl(url, theParms, function(data, responseCode) {
        var xml;
        var mySrchMarkers;
        var numMarkers;
        var markersFound = 0;
        var newSearchBoundsNeeded = false;
        var dbID;
        var i;
        var newIndex;
        var testNull = null;
        xml = parseXml(data);
        if (xml.documentElement.getElementsByTagName("marker") === testNull) {
            if (rtadebuggingFlag) {
                document.getElementById("messagelog").innerHTML += "(Technical info: ResponseCode = " + responseCode + ", Data length = " + data.length + ")" + "<br />";
            }
        }
        mySrchMarkers = xml.documentElement.getElementsByTagName("marker");
        numMarkers = mySrchMarkers.length;
        for (i = 0; i < numMarkers; i++) {
            dbID = parseInt(mySrchMarkers[i].getAttribute("id"), 10);
            thePOIIndex = poiAlreadyInSrchBar(dbID);
            if (thePOIIndex > -1) {
                poiSearchArray[thePOIIndex].theMarker.setVisible(true);
                continue;
            }
            markersFound += 1;
            newIndex = getPoiSearchArrayIndex();
            loadSearchPOIObject(mySrchMarkers[i], newIndex);
            if (searchBounds) {
                if (!(searchBounds.contains(poiSearchArray[newIndex].thePosition))) {
                    searchBounds = searchBounds.extend(poiSearchArray[newIndex].thePosition);
                    newSearchBoundsNeeded = true;
                }
            }
        }
        if (markersFound > 0) {
            refreshAnySidebar("poi_results", search_poi_bar_htmlArray, "<b>RoadTrip Attractions</b><br/>");
        }
        if (newSearchBoundsNeeded) {
            RTAMap.fitBounds(searchBounds);
        }
        switch (markersFound) {
            case 0:
                document.getElementById("message").innerHTML += "-- no additional hits ";
                break;
            case 1:
                document.getElementById("message").innerHTML += "-- one hit ";
                setMapIsCurrentFlag(false);
                break;
            default:
                document.getElementById("message").innerHTML += "-- " + numMarkers + " hits ";
                setMapIsCurrentFlag(false);
                break;
        }
        exitRtePlaceMode();
    });
}

function makeACircle(thePoint, searchRad) {
    var meterRad = Math.round(searchRad * 1609.344);
    var theCircle;
    theCircle = new google.maps.Circle({
        center: thePoint,
        clickable: false,
        fillColor: "#00AAFF",
        fillOpacity: 0.2,
        map: RTAMap,
        radius: meterRad,
        strokeColor: "#FFAA00",
        strokeOpacity: 0.2,
        strokeWeight: 0,
        zIndex: 1
    });
    rtaCircleArray.push(theCircle);
}

function circleDrawMode() {
    inDrawCircleMode = true;
    inMode = true;
    rtaMapCircleClickListener = google.maps.event.addListener(RTAMap, 'click', function(mEvent) {
        makeACircle(mEvent.latLng, rtaCircleDrawRadius);
    });
    enterAddPlaceMode();
    document.getElementById("message").innerHTML = 'Click on map to place circle.';
}

function eraseCircles() {
    var i;
    var numCircles = rtaCircleArray.length;
    for (i = 0; i < numCircles; i++) {
        if (rtaCircleArray[i]) {
            rtaCircleArray[i].setMap(null);
        }
    }
    rtaCircleArray = [];
    document.getElementById("erasecircles").disabled = true;
}

function changeCircleRadius() {
    var theElement = document.getElementById("CircleRadius");
    var i;
    for (i = 0; i < theElement.options.length; i++) {
        if (theElement.options[i].selected) {
            rtaCircleDrawRadius = parseInt(theElement.options[i].value, 10);
            break;
        }
    }
}

function initDists(distArray, currPt) {
    var currLat = currPt.lat();
    var currLng = currPt.lng();
    var dist1 = Math.round(rtaDistance(currLat, currLng, rta_point1.lat(), rta_point1.lng()));
    distArray[0] = dist1;
    distArray[3] = dist1;
    var dist2 = Math.round(rtaDistance(currLat, currLng, rta_point2.lat(), rta_point2.lng()));
    distArray[1] = dist2;
    distArray[4] = dist2;
    var dist3 = Math.round(rtaDistance(currLat, currLng, rta_point3.lat(), rta_point3.lng()));
    distArray[2] = dist3;
    distArray[5] = dist3;
}

function initTheDists(currPt) {
    var currLat = currPt.lat();
    var currLng = currPt.lng();
    var theDistArray = [];
    var dist1 = Math.round(rtaDistance(currLat, currLng, rta_point1.lat(), rta_point1.lng()));
    theDistArray[0] = dist1;
    theDistArray[3] = dist1;
    var dist2 = Math.round(rtaDistance(currLat, currLng, rta_point2.lat(), rta_point2.lng()));
    theDistArray[1] = dist2;
    theDistArray[4] = dist2;
    var dist3 = Math.round(rtaDistance(currLat, currLng, rta_point3.lat(), rta_point3.lng()));
    theDistArray[2] = dist3;
    theDistArray[5] = dist3;
    return (theDistArray);
}

function compareDists(distArray, currPt) {
    var currLat = currPt.lat();
    var currLng = currPt.lng();
    var dist1 = Math.round(rtaDistance(currLat, currLng, rta_point1.lat(), rta_point1.lng()));
    var dist2 = Math.round(rtaDistance(currLat, currLng, rta_point2.lat(), rta_point2.lng()));
    var dist3 = Math.round(rtaDistance(currLat, currLng, rta_point3.lat(), rta_point3.lng()));
    if (dist1 > distArray[0]) {
        distArray[0] = dist1;
    }
    if (dist2 > distArray[1]) {
        distArray[1] = dist2;
    }
    if (dist3 > distArray[2]) {
        distArray[2] = dist3;
    }
    if (dist1 < distArray[3]) {
        distArray[3] = dist1;
    }
    if (dist2 < distArray[4]) {
        distArray[4] = dist2;
    }
    if (dist3 < distArray[5]) {
        distArray[5] = dist3;
    }
}

function adjustDists(distArray, theSearchRadius) {
    distArray[0] += theSearchRadius;
    distArray[1] += theSearchRadius;
    distArray[2] += theSearchRadius;
    distArray[3] -= theSearchRadius;
    distArray[4] -= theSearchRadius;
    distArray[5] -= theSearchRadius;
}

function thisRAOutOfRange(theLat, theLng, searchPath, theSearchRadius) {
    var numPts = searchPath.length;
    var i;
    for (i = 0; i < numPts; i++) {
        if (Math.round(rtaDistance(searchPath[i].lat(), searchPath[i].lng(), theLat, theLng)) <= rtaSearchRadius) {
            return false;
        }
    }
    return true;
}

function searchRange(distArray, searchPath, theSearchRadius, startPt) {
    var newStrng = distArray.join(",");
    var searchBounds = RTAMap.getBounds();
    var theURL;
    var theParms;
    var searchText;
    var listkeyword;
    var searchcat1;
    if (rta_Maptype == "mapcenter") {
        searchText = encodeURIComponent(document.getElementById("keywdsearch").value);
    }
    if (rta_Maptype == "wizard") {
        rtaApplyKeySearchFlag = false;
    }
    if (rtaApplyKeySearchFlag) {
        if (searchText.length === 2) {
            searchText = checkForRV(searchText);
        }
        listkeyword = cannedKey;
        if (cannedKey === '') {
            listkeyword = 'none';
        }
        searchcat1 = getRACode();
        theURL = urlPrefix + "ajusersrchrangekeypoirta.php";
        theParms = "dists=" + newStrng + '&searchcat1=' + searchcat1 + '&searchtxt=' + searchText + '&searchkey=' + listkeyword;
    } else {
        theURL = urlPrefix + "ajusersrchrangepoirta.php";
        theParms = "dists=" + newStrng;
    }
    downloadPostUrl(theURL, theParms, function(data) {
        var xml = parseXml(data);
        var mySrchMarkers = xml.documentElement.getElementsByTagName("marker");
        var numMarkers = 0;
        var increaseBounds = false;
        var i;
        var testNull = null;
        var distArray = [];
        var testAr = [];
        var currID;
        var theLat;
        var theLng;
        var poiPosition;
        var sortIndex;
        var newIndex;
        if (mySrchMarkers !== testNull) {
            numMarkers = mySrchMarkers.length;
        }
        if (numMarkers > 0) {
            for (i = 0; i < numMarkers; i++) {
                theLat = mySrchMarkers[i].getAttribute("lat");
                theLng = mySrchMarkers[i].getAttribute("lng");
                distArray[i] = Math.round(rtaDistance(theLat, theLng, startPt.lat(), startPt.lng()));
            }
            testAr = sortSequence(distArray);
            for (i = 0; i < numMarkers; i++) {
                sortIndex = testAr[i];
                currID = mySrchMarkers[sortIndex].getAttribute("id");
                theLat = mySrchMarkers[sortIndex].getAttribute("lat");
                theLng = mySrchMarkers[sortIndex].getAttribute("lng");
                poiPosition = new google.maps.LatLng(theLat, theLng);
                if (thisRAOutOfRange(theLat, theLng, searchPath, theSearchRadius)) {
                    continue;
                }
                if (!searchBounds.contains(poiPosition)) {
                    searchBounds = searchBounds.extend(poiPosition);
                    increaseBounds = true;
                }
                if (thisRAAlreadyOnSearchList(currID)) {
                    continue;
                }
                newIndex = getPoiSearchArrayIndex();
                loadSearchPOIObject(mySrchMarkers[sortIndex], newIndex);
                rta_RACounter += 1;
            }
        }
        if (increaseBounds) {
            RTAMap.fitBounds(searchBounds);
        }
        if (rta_RACounter > 0) {
            refreshAnySidebar("poi_results", search_poi_bar_htmlArray, "RoadTrip Attractions<br/>");
        }
        switch (rta_RACounter) {
            case 0:
                document.getElementById("message").innerHTML = " No additional hits ";
                break;
            case 1:
                document.getElementById("message").innerHTML = " One RoadTrip Attraction found. ";
                setMapIsCurrentFlag(false);
                break;
            default:
                document.getElementById("message").innerHTML = (rta_RACounter + " RoadTrip Attractions found. ");
                setMapIsCurrentFlag(false);
                break;
        }
        exitRtePlaceMode();
    });
}

function searchTheRange(distArrayList, searchPath, theSearchRadius, startPt) {
    var listLen = distArrayList.length;
    var newStrng;
    var k;
    var searchBounds = RTAMap.getBounds();
    var theURL;
    var theParms;
    var searchText;
    var listkeyword;
    var searchcat1;
    var newArrayList = [];
    var routePlacesFound = 0;
    for (k = 0; k < listLen; k++) {
        newArrayList[k] = distArrayList[k].join(',');
    }
    newStrng = newArrayList.join(",");
    if (rta_Maptype == "mapcenter") {
        searchText = encodeURIComponent(document.getElementById("keywdsearch").value);
    }
    if (rta_Maptype == "wizard") {
        rtaApplyKeySearchFlag = false;
    }
    if (rtaApplyKeySearchFlag) {
        if (searchText.length === 2) {
            searchText = checkForRV(searchText);
        }
        listkeyword = cannedKey;
        if (cannedKey === '') {
            listkeyword = 'none';
        }
        searchcat1 = getRACode();
        theURL = urlPrefix + "ajusersrchrangekeynewpoirta.php";
        theParms = "dists=" + newStrng + '&searchcat1=' + searchcat1 + '&searchtxt=' + searchText + '&searchkey=' + listkeyword;
    } else {
        theURL = urlPrefix + "ajusersrchrangenewpoirta.php";
        theParms = "dists=" + newStrng;
    }
    downloadPostUrl(theURL, theParms, function(data) {
        var xml = parseXml(data);
        var mySrchMarkers = xml.documentElement.getElementsByTagName("marker");
        var numMarkers = 0;
        var increaseBounds = false;
        var i;
        var testNull = null;
        var distArray = [];
        var testAr = [];
        var currID;
        var theLat;
        var theLng;
        var poiPosition;
        var sortIndex;
        var newIndex;
        if (mySrchMarkers !== testNull) {
            numMarkers = mySrchMarkers.length;
        }
        if (numMarkers > 0) {
            for (i = 0; i < numMarkers; i++) {
                theLat = mySrchMarkers[i].getAttribute("lat");
                theLng = mySrchMarkers[i].getAttribute("lng");
                distArray[i] = Math.round(rtaDistance(theLat, theLng, startPt.lat(), startPt.lng()));
            }
            testAr = sortSequence(distArray);
            for (i = 0; i < numMarkers; i++) {
                sortIndex = testAr[i];
                currID = mySrchMarkers[sortIndex].getAttribute("id");
                if (thisRAAlreadyOnSearchList(currID)) {
                    continue;
                }
                theLat = mySrchMarkers[sortIndex].getAttribute("lat");
                theLng = mySrchMarkers[sortIndex].getAttribute("lng");
                poiPosition = new google.maps.LatLng(theLat, theLng);
                if (thisRAOutOfRange(theLat, theLng, searchPath, theSearchRadius)) {
                    continue;
                }
                if (!searchBounds.contains(poiPosition)) {
                    searchBounds = searchBounds.extend(poiPosition);
                    increaseBounds = true;
                }
                newIndex = getPoiSearchArrayIndex();
                loadSearchPOIObject(mySrchMarkers[sortIndex], newIndex);
                routePlacesFound += 1;
            }
        }
        if (increaseBounds) {
            RTAMap.fitBounds(searchBounds);
        }
        if (routePlacesFound > 0) {
            refreshAnySidebar("poi_results", search_poi_bar_htmlArray, "RoadTrip Attractions<br/>");
        }
        switch (routePlacesFound) {
            case 0:
                document.getElementById("message").innerHTML = " No additional hits ";
                break;
            case 1:
                document.getElementById("message").innerHTML = " One RoadTrip Attraction found. ";
                setMapIsCurrentFlag(false);
                break;
            default:
                document.getElementById("message").innerHTML = (routePlacesFound + " RoadTrip Attractions found. ");
                setMapIsCurrentFlag(false);
                break;
        }
        exitRtePlaceMode();
    });
}

function searchPOIsRoute() {
    var theIndex = currRTAMap[0][0];
    var theResponse;
    var theSearchRadius = rtaSearchRadius + Math.round(0.1 * rtaSearchRadius);
    var theLowerLimit = theSearchRadius * 3 / 4;
    var theUpperLimit = theSearchRadius;
    var intermedRadius = rtaSearchRadius;
    var numCoords;
    var searchPath = [];
    var currSearchIndex;
    var searchLat;
    var searchLng;
    var overLat;
    var overLng;
    var testDistance;
    var i, j, m, n;
    var deltaLat;
    var deltaLng;
    var newLat;
    var newLng;
    var newIndex;
    var interPtDist;
    var rtDist;
    var segLimit;
    var numSegs;
    var numRads;
    var segRads;
    var radCounter = 0;
    var distArray = [];
    var searchText;
    var isOkay;
    var distArrayList = distArray;
    var oldstyleRecord;
    var rta_OverviewArray = [];
    var mapTypeCounter = 0;
    var registeredFlag = rta_canSaveRoute;
    if (rta_Maptype == "wizard") {
        mapTypeCounter = 1;
    }
    if (rta_Maptype == "mapcenter") {
        mapTypeCounter = 2;
    }
    if (mapTypeCounter > 0) {
        countSAR(mapTypeCounter, registeredFlag);
    }
    if (currRTAMap[0][2] === 1) {
        if (directionsResultsArray[theIndex]) {
            theResponse = directionsResultsArray[theIndex];
            oldstyleRecord = true;
            rta_OverviewArray = theResponse.routes[0].overview_path;
        } else {
            oldstyleRecord = false;
            rta_OverviewArray = rta_calcRtArray[theIndex].rtOverview;
        }
        rtDist = rta_calcRtArray[theIndex].theDistance;
    } else if (currRTAMap[0][2] === 2) {
        if (directionsSearchResultsArray[theIndex]) {
            theResponse = directionsSearchResultsArray[theIndex];
            oldstyleRecord = true;
            rta_OverviewArray = theResponse.routes[0].overview_path;
        } else {
            oldstyleRecord = false;
            alert('Search not enabled for this route (new record, search route)');
            return;
        }
        rtDist = calcSearchRtArray[theIndex].theDistance;
    } else {
        alert('No route found.');
        document.getElementById("message").innerHTML = 'No route found.';
        return;
    }
    if (rtaApplyKeySearchFlag) {
        searchText = encodeURIComponent(document.getElementById("keywdsearch").value);
        if (searchText.length === 2) {
            searchText = checkForRV(searchText);
        }
    }
    numCoords = rta_OverviewArray.length;
    searchPath[0] = rta_OverviewArray[0];
    overLat = rta_OverviewArray[0].lat;
    overLng = rta_OverviewArray[0].lng;
    currSearchIndex = 0;
    for (i = 1; i < numCoords; i++) {
        searchLat = searchPath[currSearchIndex].lat();
        searchLng = searchPath[currSearchIndex].lng();
        overLat = rta_OverviewArray[i].lat();
        overLng = rta_OverviewArray[i].lng();
        testDistance = rtaDistance(searchLat, searchLng, overLat, overLng);
        if (testDistance < theLowerLimit) {
            if (i === (numCoords - 1)) {
                newIndex = currSearchIndex + 1;
                searchPath[newIndex] = rta_OverviewArray[i];
                break;
            }
            continue;
        } else if (testDistance < theUpperLimit) {
            newIndex = currSearchIndex + 1;
            searchPath[newIndex] = rta_OverviewArray[i];
            currSearchIndex = newIndex;
            continue;
        } else {
            numIntermedPoints = Math.ceil(testDistance / intermedRadius);
            deltaLat = (overLat - searchLat) / numIntermedPoints;
            deltaLng = (overLng - searchLng) / numIntermedPoints;
            for (j = 0; j < numIntermedPoints; j++) {
                newLat = searchPath[currSearchIndex].lat() + deltaLat;
                newLng = searchPath[currSearchIndex].lng() + deltaLng;
                newIndex = currSearchIndex + 1;
                searchPath[newIndex] = new google.maps.LatLng(newLat, newLng);
                currSearchIndex = newIndex;
            }
        }
    }
    segLimit = 400;
    numSegs = Math.ceil(rtDist / segLimit);
    numRads = searchPath.length;
    segRads = Math.ceil(numRads / numSegs);
    rta_RACounter = 0;
    for (m = 0; m < numSegs; m++) {
        if (radCounter >= numRads) {
            break;
        }
        distArrayList[m] = initTheDists(searchPath[radCounter]);
        for (n = 0; n < segRads; n++) {
            if (radCounter >= numRads) {
                break;
            }
            compareDists(distArrayList[m], searchPath[radCounter]);
            radCounter++;
        }
        adjustDists(distArrayList[m], theSearchRadius);
    }
    searchTheRange(distArrayList, searchPath, theSearchRadius, searchPath[0]);
}

function doKeywordSearch(searchTxt) {
    changeSearchItems2();
    var originalValue = searchOption2;
    originalValue = 1;
    searchOption2 = 1;
    if (searchOption2 < 1) {
        document.getElementById("message").innerHTML = 'Select at least one of Maps, Places, or Routes';
        return;
    }
    document.getElementById("message").innerHTML = 'Search found: ';
    if (searchOption2 >= 4) {
        doMapKeywordSearch(searchTxt);
        searchOption2 -= 4;
    }
    if (searchOption2 >= 2) {
        doRouteKeywordSearch(searchTxt);
        doLDRtKeywordSearch(searchTxt);
        searchOption2 -= 2;
    }
    if (searchOption2 >= 1) {
        doPOIKeywordSearch(searchTxt);
        searchOption2 -= 1;
    }
    if (searchOption2 > 0) {
        alert("Bad value of searchOption2: " + originalValue);
    }
}

function keywordSearch() {
    var searchText = encodeURIComponent(document.getElementById("keywdsearch").value);
    searchText = checkForRV(searchText);
    if (notUnvalid(searchText)) {
        doKeywordSearch(searchText);
    } else {
        document.getElementById("message").innerHTML = 'Please enter at least three letters in "Keyword" field (exception: "RV"), or choose a "Popular Keyword"';
        alert('Please enter at least three letters in "Keyword" field (exception: "RV"), or choose a "Popular Keyword"');
        return;
    }
}

function applyKeySearch() {
    rtaApplyKeySearchFlag = !rtaApplyKeySearchFlag;
}

function printSetup() {
    var mapdbid = currRTAMap[3];
    if (mapdbid == -2) {
        alert('No map loaded.');
        document.getElementById("message").innerHTML = 'No map loaded.';
        return;
    }
    var name = encodeURIComponent(currRTAMap[4]);
    var theUrl = urlPrefix + "findmaprta.php";
    var theParms = "themap=" + (mapdbid) + "&name=" + (name) + "&timezoneOffset=" + rta_tzOffsetStrng;
    var mapType = 0;
    var theUrl2 = urlPrefix + "updatprintrta.php";
    var theParms2;
    if (rta_Maptype == "mapcenter") {
        mapType = 2;
    } else if (rta_Maptype == "wizard") {
        mapType = 1;
    }
    if (mapType > 0) {
        theParms2 = "timezoneOffset=" + rta_tzOffsetStrng + "&maptype=" + mapType;
        downloadPostUrl(theUrl2, theParms2, function(data, responseCode) {
            if (rtadebuggingFlag) {
                if (responseCode === 200) {
                    document.getElementById("messagelog").innerHTML += 'Print setup updated. Data = ' + data;
                } else {
                    document.getElementById("messagelog").innerHTML += "Error in usage update (printSetup). responseCode = " + (responseCode);
                }
            }
        });
    }
    downloadPostUrl(theUrl, theParms, function(data) {
        var xml = parseXml(data);
        var mapNumbers = xml.documentElement.getElementsByTagName("mapnumber");
        var numMarkers = mapNumbers.length;
        var dbID = mapNumbers[0].getAttribute("access");
        window.open(urlPrefix2 + "setupprintmap.php?mapnumber=" + dbID + "&name=" + name);
    });
}

function delMapOnList() {
    rtaDeleteMapFlag = true;
    enterAddPlaceMode();
    document.getElementById("message").innerHTML = "Click on the number of the map to be deleted.";
}

function showMapLink() {
    var mapdbid = currRTAMap[3];
    var name = encodeURIComponent(currRTAMap[4]);
    var theUrl = urlPrefix + "findmaprta.php";
    var theParms = "themap=" + (mapdbid) + "&name=" + (name) + "&timezoneOffset=" + rta_tzOffsetStrng;
    downloadPostUrl(theUrl, theParms, function(data) {
        var xml = parseXml(data);
        var mapNumbers = xml.documentElement.getElementsByTagName("mapnumber");
        var numMarkers = mapNumbers.length;
        var dbID = mapNumbers[0].getAttribute("access");
        window.open(urlPrefix2 + "custom.php?mapnumber=" + dbID + "&name=" + name);
    });
}

function coordsToMarker() {
    var cood1 = parseFloat(document.getElementById("coord1").value);
    var cood2 = parseFloat(document.getElementById("coord2").value);
    var mapLatLng = new google.maps.LatLng(cood1, cood2);
    addPlaceMarkerFromLatLng(mapLatLng);
}

function showElevation() {
    var chartHeight = null;
    var hideDiv = null;
    var distMiles;
    var theSamples;
    var elevResult = [];
    var theStatus;
    var chartButton;
    var rtIndex = currRTAMap[0][0];
    var thePath;
    chartHeight = document.getElementById('chart_div');
    chartHeight.style.height = "200px";
    if (screenSize == 300) {
    	chartHeight.style.height = "150px";
    }
    
    if (document.getElementById('close_chart')) {
		chartButton = document.getElementById('close_chart');
		chartButton.style.height = "20px";
		hideDiv = document.getElementById('hidebutton');
		hideDiv.style.visibility = "visible";
    }
    chartHeight.style.visibility = "visible";
    
    if (currRTAMap[0][2] == 1) {
        distMiles = rta_calcRtArray[rtIndex].theDistance;
        theSamples = getSamples(distMiles);
        if (rta_calcRtArray[rtIndex].newField) {
            thePath = rta_calcRtArray[rtIndex].rtOverview;
        } else {
            thePath = directionsResultsArray[rtIndex].routes[0].overview_path;
        }
        elevationService.getElevationAlongPath({
            path: thePath,
            samples: theSamples
        }, plotElevation);
    }
    if (currRTAMap[0][2] == 2) {
        distMiles = calcSearchRtArray[rtIndex].theDistance;
        theSamples = getSamples(distMiles);
        if (calcSearchRtArray[rtIndex].newField) {
            thePath = calcSearchRtArray[rtIndex].rtOverview;
        } else {
            thePath = directionsResultsArray[rtIndex].routes[0].overview_path;
        }
        elevationService.getElevationAlongPath({
            path: thePath,
            samples: theSamples
        }, plotElevation);
    }
}

function clearMouseMarker() {
    if (mousemarker != null) {
        mousemarker.setMap(null);
        mousemarker = null;
    }
}

function closeChart() {
    var chartHeight;
    var hideDiv;
    var chartButton;
    if (document.getElementById('hidebutton')) {
		hideDiv = document.getElementById('hidebutton');
		hideDiv.style.visibility = "hidden";
    }
    chartHeight = document.getElementById('chart_div');
    chartHeight.style.display = 'none';
    chartHeight.style.height = "0px";
    if (document.getElementById('close_chart')) {
		chartButton = document.getElementById('close_chart');
		chartButton.style.height = "0px";
    }
}

function rtaDistance(lat1, lon1, lat2, lon2) {
    var R = 3959.0;
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    var testd = Math.round(d * 1000) / 1000;
    return testd;
}

function rta_LatLngDistance(oneLatLng, secondLatLng) {
    var theDist = rtaDistance(oneLatLng.lat(), oneLatLng.lng(), secondLatLng.lat(), secondLatLng.lng());
    return theDist;
}

function calcRTADist(someArray) {
    var sumDist = 0;
    var i;
    for (i = 1; i < someArray.length; i++) {
        sumDist += rtaDistance(someArray.getAt(i).lat(), someArray.getAt(i).lng(), someArray.getAt(i - 1).lat(), someArray.getAt(i - 1).lng());
    }
    if (sumDist > 0) {
        if (sumDist >= 0.1) {
            return Math.round(sumDist * 100) / 100 + "mi";
        } else if (sumDist < 0.1) {
            return Math.round(sumDist * 5280) + "ft";
        }
    }
    return (sumDist + "");
}

function updateRTADists(routeArray, markerArray, startInd) {
    var reSumDist = 0;
    var newTitle = "";
    var i;
    for (i = 1; i < startInd; i++) {
        reSumDist += rtaDistance(routeArray.getAt(i).lat(), routeArray.getAt(i).lng(), routeArray.getAt(i - 1).lat(), routeArray.getAt(i - 1).lng());
    }
    for (i = startInd; i < markerArray.length; i++) {
        reSumDist += rtaDistance(routeArray.getAt(i).lat(), routeArray.getAt(i).lng(), routeArray.getAt(i - 1).lat(), routeArray.getAt(i - 1).lng());
        if (reSumDist > 0) {
            if (reSumDist >= 0.1) {
                newTitle = Math.round(reSumDist * 100) / 100 + "mi";
            } else if (reSumDist < 0.1) {
                newTitle = Math.round(reSumDist * 5280) + "ft";
            }
        } else if (reSumDist <= 0) {
            newTitle = "0";
        }
        if (markerArray[i]) {
            markerArray[i].setTitle(newTitle);
        }
    }
}