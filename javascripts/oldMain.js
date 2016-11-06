"use strict";
/* globals console, event, document, originalSongList */

// 8. When the user clicks on "List Music" in the navigation bar, the *Add Music View* should be hidden, and the *List Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a8d99d401)).
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

// 7. When the user clicks on "Add Music" in the navigation bar, the *List Music View* should be hidden, and the *Add Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a0cf17f7b)).
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

// 9. Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.
var insertPlace = document.getElementById("view-songs");
var songList = '';

document.getElementById("add-btn").addEventListener("click", function(){
  event.preventDefault();
  var newSong = {};
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
  originalSongList.push(newSong);
  filterThing.addAlbum(newSong);
  filterThing.addArtist(newSong);
  popSongCard(originalSongList);
});

// Now populate the list and with these songs + more
function popSongCard(array){
  songList = '';
  insertPlace.innerHTML = '';
  for(let i = 0; i < array.length; i++){
    songList = '<article class="card"><h2 class="song-title">';
    songList += array[i].title;
    songList += '</h2><h5 class="duration">';
    songList += array[i].duration;
    songList += '</h5><ul><li class="descriptor">';
    songList += array[i].artist;
    songList += '</li><li class="descriptor">';
    songList += array[i].album;
    songList += '</li><li class="descriptor">';
    songList += array[i].genre;
    songList += '</li></ul></article>';
    insertPlace.innerHTML += songList;
  }
}

popSongCard(originalSongList);

// And now populate the sidebar filters appropriately
// BREAK THIS UP! 
// ONE RETURN DAMNIT

function popSidebar(arrayOfObjects){
  var tempAlbum = [];
  var tempArtist = [];
  for (let i = 0; i < arrayOfObjects.length; i++){
    if(!tempAlbum.includes(arrayOfObjects[i].album)){
      tempAlbum.push(arrayOfObjects[i].album);
    }
    if(!tempArtist.includes(arrayOfObjects[i].artist)){
    tempArtist.push(arrayOfObjects[i].artist);
    }
  }
  var albumPlace = document.getElementById("album");
  var artistPlace = document.getElementById("artist");
  for (let i = 0; i < tempAlbum.length; i++){

  }
}
/*
as an iife(s): It will return an object of get/set album and artist.
  populate tempalbum (addAlbum)
    this has a qualifier
  populate tempartist (addArtist)
    this has a qualifier
  populate selectlist
    using internal tempArtist tempAlbum
  check on filters using get methods of the object
*/

var filterThing = (function(){
//I need two variables for the lists. I can't push to the function....
  var albumList = function(){
    var tempAlbum = [];
    for (let i = 0; i < originalSongList.length; i++){
      if(!tempAlbum.includes(originalSongList[i].album)){
        tempAlbum.push(originalSongList[i].album);
      }
    }
    return tempAlbum;
  };

  var artistList = function(){
    var tempArtist = [];
    for (let i = 0; i < originalSongList.length; i++){
      if(!tempArtist.includes(originalSongList[i].album)){
        tempArtist.push(originalSongList[i].album);
      }
    }
    return tempArtist;
  };

  return {
    getAlbumList: function(){
      return albumList;
    },
    addAlbum: function (obj) {
      if(!albumList.includes(obj.album)){
// I'm pretty sure you can't push *anything* to a function.
        albumList.push(obj.album);
      }
      return albumList;
    },
    getArtistList: function(){
      return artistList;
    },
    addArtist: function (obj) {
      if(!artistList.includes(obj.album)){
// I'm pretty sure you can't push *anything* to a function.
        artistList.push(obj.album);
      }
      return artistList;
    }
  };
})();

/*
givens:
  html and css
  initial array of objects
  additonal defined objects

to do:
  read in objects
    to populate main song info html
    to populate filter area

the array iife should:
  read in the initial array
  parse that array
  supply information to other iifes by calling their functions
  return setSongArray: function(songArray);
        getSongArray: function(); **called on click event**
        addSong: function(songObject);
        XX getDurationRange: function();
        XX getAlbums: function();
        XX getArtists: function();
        XX getGenre: function();
      Wow those are redundant XX

the card iife should:
  read in data from array iife
  call songThing.getSongArray
       filterThing.addFilters **internally**
  populate the main html
  return viewSong: function(songData)

the filter iife should:
  read data in from array iife
  set the range limits
  populate the select lists
  ***This should hav all the if statements***
  return addFilters(event.values)

the add song iife should:
  read data from add song html
  supply that data to the array iife
  return addNewSong(event.values);
*/
