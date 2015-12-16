// Get hour of the day.
var d = new Date();
var h = d.getHours();

// Nighttime.
if (h > 23 && h < 6) {
  var myShows = ['Hi nightowl', 'Goeienag', ' Gute Nacht', 'Buenas noches'];
}

// Morning.
if (h > 5 && h < 12) {
  var myShows = ['Good morning', 'Goeije morn', 'Guid mornin', 'Bom dia',
  'Bonjour', 'Guten Morgen', 'Goede morgen'];
}

// Afternoon.
if (h > 11 && h < 18) {
  var myShows = ['Good afternoon', 'Bona tarda', 'Góðan dag'];
}

// Evening.
if (h > 17 && h < 0) {
  var myShows = ['Good evening', 'Guid evenin', 'Buena nuei', 'Guuten ābend',
    'Bon nochi', 'Bonsoir', 'Gott kvøld'];
}

// Get random welcome.
var show = myShows[Math.floor(Math.random() * myShows.length)];
// Replace default welcome with random one.
var welcomeText = document.getElementById('main-header');
if (document.getElementById('main-header') != null && show !== '') {
  document.getElementById('main-header').innerHTML = show;
}

