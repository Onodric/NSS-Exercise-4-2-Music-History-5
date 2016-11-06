"use strict";
// THIS SHOULD GET SONG DATA from JSON. Nothing else.
var MusicHistory = (function(oldMH){

// PASS IT: DataURL as string and a callbackFn
// OFFER IT TO: the internal array holder and dom builder
  oldMH.loadJSON = function(jsonURL, cbFunc){
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", jsonURL);
    myRequest.send();

    myRequest.addEventListener("error", function () {
      alert("There was an error:", event.target);
    });
  
    myRequest.addEventListener("load", function () {
      let songsLoaded = JSON.parse(this.response).songs;
      cbFunc(songsLoaded);
    });  
  };

  return oldMH;

})(MusicHistory || {});
