var src
function getParamValue(paramName) {
    console.log("using href",window.location.href);
    console.log("using location",window.location.search);
    var location = window.location.href;
    console.log("Href location",location)
     
    var s=location.split("?") //split by ?
    // console.log("Href Split location",s)
    var url = s[1]; //get rid of "?" in querystring
    // console.log("url url url",url);
    var qArray = url.split('&'); //get key-value pairs
    for (var i = 0; i < qArray.length; i++) {
        var pArr = qArray[i].split('='); //split key and value
        if (pArr[0] == paramName)
            return pArr[1]; //return value
    }
}
function addCode(src) {
    document.getElementById("search-block").innerHTML += 
      "<embed id=\"property\" src=\""+src+"\" style=\"width: 100%; height: 3000px;\" type=\"text/html\">";
      console.log("code added")
}
sQuery = getParamValue('sQuery');
pId = getParamValue('pId');

var url ="https://colive-search-system-dev.web.app/smartsearch?redirectHost=https://www.google.com&amp;isMobile=1"
if (sQuery) {
    if (pId) {
        let src = url + '&sQuery=' + sQuery + '&pId=' + pId;
        addCode(src);
    }
    else {
        let src = url + '&sQuery=' + sQuery;
        addCode(src);
    }
    console.log("If Search Queryyyy", document.getElementById("property"))
} else {
    if (pId) {
        let src = url + '&pId=' + pId
        addCode(src);
    } else {
        let src = url + '&sQuery=pgs in marathalli'
        addCode(src);
    }
    console.log("If Noo Search Queryyyy", document.getElementById("property"))
}

