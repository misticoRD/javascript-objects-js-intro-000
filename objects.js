let  playlist = {
  Romeo: "El malo"
}

let updatePlaylist = function(playlist, artistName, songTitle){
 playlist[artistName] = songTitle;
 return playlist;
}