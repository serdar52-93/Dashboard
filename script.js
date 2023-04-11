$(document).ready(function() {
	$('form').submit(function(event) {
	  event.preventDefault(); // Empêche le formulaire de se soumettre normalement
  
	  // Récupère les valeurs sélectionnées dans le formulaire
	  var selectedDeparture = $('#depart').val();
	  
  
	  // Construit l'URL de la page à afficher en fonction des valeurs sélectionnées
	  var url = selectedDeparture + '.html?track=';
  
	  // Redirige l'utilisateur vers la page correspondante
	  window.location.href = url;
	});
  });