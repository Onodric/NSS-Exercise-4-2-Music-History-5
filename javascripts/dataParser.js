"use strict";
var MusicHistory = (function(oldMH){

  oldMH.getSelectList = function(prop){
    // PASS IT: a str property
    // OFFER IT TO: anything that needs an array of unique key values.
    let tempArr = [];
    let tempSongs = MusicHistory.getSongArray();
    for (let i = 0; i < tempSongs.length; i++){
      if (!tempArr.includes(tempSongs[i][prop])){
        tempArr.push(tempSongs[i][prop]);
      }
    }
// returns an array of the options needed...
    return tempArr;
  };
  
  return oldMH;

})(MusicHistory || {});