var playlist = {
  Dido: 'Life For Rent',
  Cure: 'Charlotte Sometimes',
  Smiths: 'Panic'
};
function UpdatePlaylist(playlist, artistName, songTitle)
{
  return Object.assign({}, playlist, [artistName]: songTitle)
}
