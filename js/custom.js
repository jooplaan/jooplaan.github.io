// Get hour of the day.
var d = new Date();
var h = d.getHours();

// Nighttime.
if (h >= 0 && h <= 5) {
  var myWelcomeTexts = ['Hi nightowl', 'Goeienag', ' Gute Nacht', 'Buenas noches'];
}

// Morning.
if (h >= 6 && h <= 11) {
  var myWelcomeTexts = ['Good morning', 'Goeije morn', 'Guid mornin', 'Bom dia',
  'Bonjour', 'Guten Morgen', 'Goede morgen'];
}

// Afternoon.
if (h >= 12 && h <= 17) {
  var myWelcomeTexts = ['Good afternoon', 'Bona tarda', 'Góðan dag'];
}

// Evening.
if (h >= 18 && h <= 23) {
  var myWelcomeTexts = ['Guid evenin', 'Buena nuei', 'Bonsoir', 'Gott kvøld'];
}

// Get random welcome text for time of day.
if (myWelcomeTexts.length > 0) {
  var show = myWelcomeTexts[Math.floor(Math.random() * myWelcomeTexts.length)];

  // Replace default welcome with random one.
  var welcomeText = document.getElementById('main-header');
  if (document.getElementById('main-header') !== 'undefined'
    && document.getElementById('main-header') !== null
    && show !== '') {
    document.getElementById('main-header').innerHTML = show;
  }
}


