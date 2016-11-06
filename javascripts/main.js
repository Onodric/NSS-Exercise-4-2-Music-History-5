"use strict";
const INSERTPLACE = document.getElementById("view-songs");
let JSON_AVAILABLE = 2;

// Choose a "page" listeners
document.getElementById("viewSongs").addEventListener("click", function(){
  event.target.parentElement.parentElement.children[0].children[0].classList.remove("selected");
  event.target.parentElement.parentElement.children[1].children[0].classList.remove("selected");
  event.target.parentElement.parentElement.children[2].children[0].classList.remove("selected");
  event.target.classList.toggle("selected");
  document.getElementById("chooser").classList.remove("hidden");
  document.getElementById("view-songs").classList.remove("hidden");
  document.getElementById("user-profile").classList.remove("hidden");
  document.getElementById("user-profile").classList.add("hidden");
  document.getElementById("song-adder").classList.remove("hidden");
  document.getElementById("song-adder").classList.add("hidden");
});

document.getElementById("addSongs").addEventListener("click", function(){
  event.target.parentElement.parentElement.children[0].children[0].classList.remove("selected");
  event.target.parentElement.parentElement.children[1].children[0].classList.remove("selected");
  event.target.parentElement.parentElement.children[2].children[0].classList.remove("selected");
  event.target.classList.toggle("selected");
  document.getElementById("chooser").classList.remove("hidden");
  document.getElementById("chooser").classList.add("hidden");
  document.getElementById("view-songs").classList.remove("hidden");
  document.getElementById("view-songs").classList.add("hidden");
  document.getElementById("user-profile").classList.remove("hidden");
  document.getElementById("user-profile").classList.add("hidden");
  document.getElementById("song-adder").classList.remove("hidden");
});

document.getElementById("userProfile").addEventListener("click", function(){
  event.target.parentElement.parentElement.children[0].children[0].classList.remove("selected");
  event.target.parentElement.parentElement.children[1].children[0].classList.remove("selected");
  event.target.parentElement.parentElement.children[2].children[0].classList.remove("selected");
  event.target.classList.toggle("selected");
  document.getElementById("chooser").classList.remove("hidden");
  document.getElementById("chooser").classList.add("hidden");
  document.getElementById("view-songs").classList.remove("hidden");
  document.getElementById("view-songs").classList.add("hidden");
  document.getElementById("user-profile").classList.remove("hidden");
  document.getElementById("song-adder").classList.remove("hidden");
  document.getElementById("song-adder").classList.add("hidden");
});

//Now add event listener to gather added data
  // pass to MH.addSong(obj)
  // pass to mh.writeSong(obj, index)
  // pass to MH.writeSelect()

document.getElementById("add-btn").addEventListener("click", function(){
  event.preventDefault();
  let newSong = {};
  // newSong = '<article class="card"><h2 class="song-title">'
  newSong.title = document.getElementById("add-title").value;
  // newSong += '</h2><h5 class="duration">';
  newSong.duration = document.getElementById("add-duration").value;
  // newSong += '</h5><ul><li class="descriptor">';
  newSong.artist = document.getElementById("add-artist").value;
  // newSong += '</li><li class="descriptor">';
  newSong.album = document.getElementById("add-album").value;
  // newSong += '</li><li class="descriptor">';
  newSong.genre = document.getElementById("add-genre").value;
  // newSong += '</li></ul></article>';
  MusicHistory.addSong(newSong);
  MusicHistory.writeSong(newSong, INSERTPLACE);
  MusicHistory.writeSelect();
});

//Here we invoke the JSON loads,
  // which calls the module to write the JSON into the internal array
    // which calls the internal array push on each member of the JSON file.
    // And then calls the dom array writer
      // Which calls the song builder and
      // the select list builder
        // which calls the option builder
    // and adds a button (addMoreSongs) to the bottom

MusicHistory.loadJSON("data/songs.JSON", MusicHistory.addArray);

function addBtnEar(){
  document.getElementById("moreSongs").addEventListener("click", function(event) {
    loadMoreNow(event);
  });
}

function loadMoreNow(event){
  console.log("clicky: ", event.target);
  event.target.remove();
  MusicHistory.loadJSON("data/more-songs.JSON", MusicHistory.addArray);
}

// THIS SHOULD BE THE MAIN HANDLER.

// Part One
// 1. Read from local JSON file with an XHR.
// 2. Loop over results and inject into Music History list view.
// 3. Add delete button DOM to each row and, when it is clicked, delete the entire row in the DOM.

// Part Two
// 1. Take your music and split it into two JSON file instead of them all living on one file.
// 2. Add a button at the bottom of your music list and label it "More >".
// 3. Load the songs from the first list and inject the DOM into the document as you've already done.
// 4. When the user clicks that button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.

