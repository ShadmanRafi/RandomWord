var source = '800_essential_g_list.json';
var maxInt = 800;

var wordHTML = document.getElementById("word")
var meaningHTML = document.getElementById("meaning")
var button = document.getElementById("bt")

var toggleButton333 = document.getElementById("hf333");
var toggleButton800 = document.getElementById("ess800");

button.addEventListener("click", function(){
    var req = new XMLHttpRequest();
    var jsonDoc = "json/"+source;
    req.open('GET',jsonDoc);
    req.overrideMimeType("application/json");
    req.onload = function(){
        var data = JSON.parse(req.responseText);
        var randomInt = Math.floor((Math.random()*maxInt)+1);
        var randomJsonObject = data[randomInt];
        wordHTML.innerHTML = randomJsonObject.word;
        var gMeaningArr = randomJsonObject.g_meaning;
        var gLen = Object.keys(randomJsonObject.g_meaning).length;
        var innerStr = randomJsonObject.meaning;
        for(i=0;i<gLen;i++){
            var cStr = gMeaningArr[i];
            if(gMeaningArr[i].split(" ").length == 1){
                var tmpStr = "</p><p><strong>" + gMeaningArr[i] + ":</strong><br>";
                console.log("POS");
            }
            else{
                var tmpStr = gMeaningArr[i];
            }
            innerStr += tmpStr;
        }
        meaningHTML.innerHTML = innerStr
        //console.log(lengthList);
    };
    req.send(null);
});

function switchHF333(){
    source = '333_high_frequency_g_list.json';
    maxInt = 333;
    console.log(source);
}

function switchESS800(){
    source = '800_essential_g_list.json';
    maxInt = 800;
    console.log(source);
}

function getGoogleMeanings(jsonObject){
    for (var key in jsonObject){
        if(jsonObject.hasOwnProperty(key)){
            console.log(key + " : " + jsonObject[key]); 
        }
    }
}

//toggleButton333.addEventListener("click", switchHF333());
//toggleButton800.addEventListener("click", switchESS800());