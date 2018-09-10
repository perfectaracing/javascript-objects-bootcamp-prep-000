var playlist = {artistName:"songTitle"};
  Phil Ochs: 'My Bloody Valentine'
var updatePlaylist = function(playlist, artistName, songTitle)
 
{
   return Object.assign({}, playlist,  { [artistName]: songTitle
})}

