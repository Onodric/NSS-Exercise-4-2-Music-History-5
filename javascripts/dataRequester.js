"use strict";
// THIS SHOULD GET SONG DATA from JSON. Nothing else.
var MusicHistory = (function(oldMH){

// PASS IT: DataURL as string and a callbackFn
// OFFER IT TO: the internal array holder and dom builder
  oldMH.loadJSON = function(jsonURL, cbFunc){
    $.ajax({
      url: jsonURL,
    })
    .done( (data) => {
      cbFunc(data.songs);
    })
    .fail( () => {
    })
    .always( () => {
    });
  };  

  return oldMH;

})(MusicHistory || {});
