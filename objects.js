var playlist = {artistName:"songTitle"};
 
function UpdatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName]=songTitle
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}
