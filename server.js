const express = require('express');
const app = express();

app.use(express.static(__dirname));

// Définit la route pour la page de recherche
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dashboard.html');
});

// Définit la route pour les pages de résultat
app.get('/:depart.html', function(req, res) {
  var selectedDeparture = req.params.depart;
  
  var filename = selectedDeparture + '-' + '.html'; 
  res.sendFile(__dirname + '/' + filename);
});

// Lance le serveur sur le port 3000
app.listen(4000, function() {
  console.log('Serveur démarré sur le port 4000');
});