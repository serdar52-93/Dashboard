const express = require('express');
const app = express();

app.use(express.static(__dirname));

// Legt die Route für die Suchseite fest
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/dashboard.html');
});

// Definiert die Route für Ergebnisseiten
app.get('/:depart.html', function(req, res) {
  var selectedDeparture = req.params.depart;
  
  var filename = selectedDeparture + '-' + '.html'; 
  res.sendFile(__dirname + '/' + filename);
});

// Starten Sie den Server auf Port 3000
app.listen(4000, function() {
  console.log('Server auf Port 4000 gestartet');
});