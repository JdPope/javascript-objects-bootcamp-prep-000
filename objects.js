var playlist = new Object({"Phil Ochs":"meh"})
function updatePlaylist(playlist, artist,song){
return Object.assign({}, playlist, {artist:song})}
function removeFromPlaylist(playlist,artist){
  var copy = Object.assign({}, playlist)
  delete copy[artist]
  return copy
}