"use strict";
const $INSERT = $("#view-songs");
let JSON_AVAILABLE = 2;

const switchPage = () => {
  $("#viewSongs, #addSongs, #userProfile").removeClass('selected');
  $("#chooser, #view-songs, #user-profile, #song-adder").show(0);
};

function addBtnEar(){
  $("#moreSongs").click( (event) => {
    loadMoreNow(event);
  });
}

function loadMoreNow(event){
  event.target.remove();
  MusicHistory.loadJSON("data/more-songs.JSON", MusicHistory.addArray);
}

$("#viewSongs").click( (event) => {
  switchPage();
  $(event.target).toggleClass("selected");
  console.log("event.target: ", $(event.target));
  $("#user-profile, #song-adder").hide(500);
});

$("#addSongs").click( (event) => {
  switchPage();
  $(event.target).toggleClass("selected");
  $("#chooser, #view-songs, #user-profile").hide(500);
});

$("#userProfile").click( (event) => {
  switchPage();
  $(event.target).toggleClass("selected");
  $("#chooser, #view-songs, #song-adder").hide(500);
});

$("#add-btn").click( (event) => {
  event.preventDefault();
  let $newSong = $({title: $("#add-title").val(),
                duration: $("#add-duration").val(),
                artist: $("#add-artist").val(),
                album: $("#add-album").val(),
                genre: $("#add-genre").val()
              });
  console.log("newSong: ", $newSong[0]);
  MusicHistory.addSong($newSong[0]);
  MusicHistory.writeSong($newSong[0], $INSERT);
  MusicHistory.writeSelect();
  alert("New Song Added!");
  $("#add-title, #add-duration, #add-artist, #add-album, #add-genre").val('');
});

MusicHistory.loadJSON("data/songs.JSON", MusicHistory.addArray);
