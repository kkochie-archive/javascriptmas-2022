/*
Christmas Jukebox
Add code inside of the playSong(id) function to make the YouTube Player play the new YouTube song.

Stretch Goals:
• Add your favorite songs
• Change style of button of currently playing song
• Hide the YouTube player so you just hear music.
*/

const player = document.getElementById("player")

function playSong(id) {
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`
}