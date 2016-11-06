"use strict";
var MusicHistory = (function(oldMH){

  // shredder.js -- internal deleters
    // MusicHistory.removeArray()
      //deletes all songs data from the internal array

  oldMH.removeArray = function(arr){
    for (let i = 0; i <= arr.length;){
      MusicHistory.removeSong(arr[i]);
    }
  };
  
  return oldMH;

})(MusicHistory || {});