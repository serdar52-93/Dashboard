$(document).ready(function() {
	$('form').submit(function(event) {
	  event.preventDefault(); // Verhindert, dass das Formular normal gesendet wird
  
	  // Ruft die im Formular ausgewählten Werte ab
	  var selectedDeparture = $('#depart').val();
	  
  
	  // Erstellt die URL der anzuzeigenden Seite basierend auf den ausgewählten Werten
	  var url = selectedDeparture + '.html?track=';
  
	  // Leitet den Benutzer auf die entsprechende Seite weiter
	  window.location.href = url;
	});
  });