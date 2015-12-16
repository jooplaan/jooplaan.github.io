



var myShows = ['Good morning', 'Goeije morn', 'Guid mornin', 'Bom dia',
'Bonjour', 'Guten Morgen'];
var show = myShows[Math.floor(Math.random() * myShows.length)];

var welcomeText = document.getElementById('main-header');
if (document.getElementById('main-header') != null) {
  document.getElementById('main-header').innerHTML = show;
}

