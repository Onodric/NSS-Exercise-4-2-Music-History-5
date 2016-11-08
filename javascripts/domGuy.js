"use strict";
var MusicHistory = (function(oldMH){
  let artist = [];
  let album = [];
  let genre = [];

  oldMH.writeSong= function(obj, index){
// Writes the correct card by getting info from obj
// Create unique id for the card using title
    let $newCard = $("<article>", {class: "card", id: obj.title + index});
    $('<h2>').text(obj.title).appendTo($newCard);
    $("<h5>", {class: "duration"}).text(obj.duration).appendTo($newCard);
    let $newElement1 = $("<ul>");
    $("<li>", {class: "descriptor"}).text(obj.artist).appendTo($newElement1);
    $("<li>", {class: "descriptor"}).text(obj.album).appendTo($newElement1);
    $("<li>", {class: "descriptor"}).text(obj.genre).appendTo($newElement1);
    $newElement1.appendTo($newCard);
// Create button id based on index (in the main array)
    $("<button>", {class: "deleter", id: index}).text('Delete').appendTo($newCard);
    $("#view-songs").append($newCard);
    $newCard.click( (event) => {
      MusicHistory.deleSong(event);
    });
  };
  

  oldMH.writeArray = function(arr){
    $INSERT.html('');
    JSON_AVAILABLE--;
// Calls writesong in a loop over the MusicHistory.getsongArray()
    for (let i = 0; i < arr.length; i++){
      MusicHistory.writeSong(arr[i], i);
    }
// Call writeSelect
      MusicHistory.writeSelect();
// Add more button at the bottom of dom if there are more JSONs
    if (JSON_AVAILABLE > 0){
      $('<button>', {id: "moreSongs", class: "morer"}).text('Add more songs from URL...').appendTo($INSERT);
      addBtnEar();
    }
  };

  oldMH.deleSong = function(event){
// check if event target is a button named delete
    if(event.target.classList.contains('deleter')){
// Deletes from array (calls removeSong)
      MusicHistory.removeSong(event);
// Deletes event.target.parent of button
      event.target.parentElement.remove();
// Refactors button id's
      let tempArr = document.getElementsByClassName('deleter');    
      for (let i = parseInt(event.target.id); i < tempArr.length; i++){
        tempArr[i].setAttribute('id', i);
      }
    }
  };

  oldMH.writeSelect = function(){
// Calls .getSelectList on all three selects...
    let albumArr = MusicHistory.getSelectList("album");
    let artistArr = MusicHistory.getSelectList("artist");
    let genreArr = MusicHistory.getSelectList("genre");
// Start from scratch
    let $albumSel = $("#album");
    let $artistSel = $("#artist");
    let $genreSel = $("#genre");
    
    $albumSel.html('').append($('<option>', {class: "disabled selected"}).text("Album"));
    $artistSel.html('').append($('<option>', {class: "disabled selected"}).text("Artist"));
    $albumSel.html('').append($('<option>', {class: "disabled selected"}).text("Genre"));

// Loop through each array, and get the results
    for (let j = 0; j < albumArr.length; j++){
// Call buildOption
      MusicHistory.buildOption(albumArr[j], album, "album");
    }
    for (let j = 0; j < artistArr.length; j++){
// Call buildOption
      MusicHistory.buildOption(artistArr[j], artist, "artist");
    }
    for (let j = 0; j < genreArr.length; j++){
// Call buildOption
      MusicHistory.buildOption(genreArr[j], genre, "genre");
    }
  };

  oldMH.buildOption = function(string, listName, id){
    let inject = document.getElementById(id);
    artist = [];
    album = [];
    genre = [];
    if (!listName.includes(string)){
      listName.push(string);
      $('<option>').text(string).appendTo('#' + id);
    }
  };

  oldMH.cullOptions = function(str, select){
// culls unused items from one select list at a time
    if(!MusicHistory.getSelectList(select).includes(str)){
      document.getElementById(str).remove();
    }
  };
  
  return oldMH;

})(MusicHistory || {});
