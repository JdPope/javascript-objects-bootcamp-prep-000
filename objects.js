var playlist = new Object({artist:"song"})
function updatePlaylist(playlist, artist,song){
  Console.log(song + " " + artist)
  playlist[song]=artist; 
  return playlist}