// Random welcome message.
var myShows = ['Good morning', 'Goeije morn', 'Guid mornin', 'Bom dia',
'Bonjour', 'Guten Morgen', 'Goede morgen'];
// Get random welcome.
var show = myShows[Math.floor(Math.random() * myShows.length)];
// Replace default welcome with random one.
var welcomeText = document.getElementById('main-header');
if (document.getElementById('main-header') != null && show !== '') {
  document.getElementById('main-header').innerHTML = show;
}

