"use strict";
var MusicHistory = (function(oldMH){

  oldMH.getSelectList = function(prop){
    let tempArr = [];
    let tempSongs = MusicHistory.getSongArray();
    for (let i = 0; i < tempSongs.length; i++){
      if (!tempArr.includes(tempSongs[i][prop])){
        tempArr.push(tempSongs[i][prop]);
      }
    }
    return tempArr;
  };
  
  return oldMH;

})(MusicHistory || {});