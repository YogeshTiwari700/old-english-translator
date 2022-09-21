var btnTranslate = document.querySelector("#btn-translate");
var textHeading = document.querySelector("#text-heading");
var textHeading2 = document.querySelector("#text-heading2");

var serverUrl = "https://api.funtranslations.com/translate/oldenglish.json"
function getTranslationURL(input) {
    return serverUrl + "?" + "text=" + input
}

function errorHandler (error) {
    console.log ("error occured", error);
    alert ("something wrong with server try after some time")
}

function clickHandler() {
    var headingText = textHeading.value;
     fetch(getTranslationURL(headingText))
     .then(response => response.json())
     .then(json => {
      var translatedText = json.contents.translated;
       textHeading2.innerText = translatedText;
     })
     .catch(errorHandler)
   };
   

btnTranslate.addEventListener("click",clickHandler);