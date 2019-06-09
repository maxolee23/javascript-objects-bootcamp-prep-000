var playlist = {
  artistName : 'Drake',
  songTitle : 'Best I Ever Had',
}

function updatePlaylist (playlist, artistName, songTitle) {
  Object.assign({}, artistName, {artistName: ['Chris Brown', 'Rihanna']});
  Object.assign({}, songTitle, {songTitle: ['Forever', 'Umbrella']});
}