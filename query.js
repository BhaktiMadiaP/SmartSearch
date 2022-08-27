var src
function getParamValue(paramName) {
    console.log("using href",window.location.href);
    console.log("using location",window.location.search);
    var location = window.location.href;
    console.log("Href location",location)
    // var n = location.indexOf('?');
    // console.log("Using Splitt",);
    // console.log("Href n",n)
    //  location = n != -1 ? location.substring(0, n != -1 ? n : s.length) : location;
    //  console.log("Href after modification location",location)
    //  var sublink = location.slice(location.lastIndexOf('/') + 1, location.length);
     
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
console.log("Query Params",sQuery);
pId = getParamValue('pId');
// console.log("Pid", pId);
// var url = document.getElementById("property").src;
// console.log(" URLL",url);
// var embedUrl = document.getElementById("property");

var url ="https://colive-search-system-dev.web.app/smartsearch?redirectHost=https://www.google.com&amp;isMobile=0"
// console.log("Embed URL", embedUrl)
if (sQuery) {
    if (pId) {
        let src = url + '&sQuery=' + sQuery + '&pId=' + pId;
        // embedUrl.setAttribute('src', src);
        addCode(src);
    }
    else {
        let src = url + '&sQuery=' + sQuery;
        // embedUrl.setAttribute('src', src);
        addCode(src);
    }
    console.log("If Search Queryyyy", document.getElementById("property"))
} else {
    if (pId) {
        let src = url + '&pId=' + pId
        // embedUrl.setAttribute('src', src);
        addCode(src);
    } else {
        let src = url + '&sQuery=pgs in marathalli'
        // embedUrl.setAttribute('src', src);
        addCode(src);
    }
    console.log("If Noo Search Queryyyy", document.getElementById("property"))
}


// https://colive-search-system-dev.web.app/smartsearch?redirectHost=https://www.google.com&amp;isMobile=0&amp;nQuery=pg" style="width: 100%; height: 3000px" type="text/html"

