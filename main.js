//
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
//  Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
//  Creare un array di oggetti di studenti.
//  Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
//  Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto
//  studente inserendo nell’ordine: nome, cognome e età.


$(document).ready(function() {
  //creo un oggetto che ha come proprietà nome,cognome e età

  var studente = {
    // nome
    nome: 'andrea',
    // cognome
    cognome: 'marongiu',
    // eta
    eta: 20,
  }

  // stampo tutte le proprietà dell'oggetto attraverso un ciclo for in
  for (var keys in studente) {
    // stampo
    $('#studente').append('<td>'+ studente[keys] + '</td>');
  }


  // -------------------------------------------------- //
  //  Creare un array di oggetti di studenti.

  var studenti = [
    {
      // studente 1
      nome: 'valerio',
      cognome: 'rossi',
      eta: 25,
    },
    {
      // studente 2
      nome: 'anna',
      cognome: 'rossi',
      eta: 18,
    },
    {
      // studente 3
      nome: 'marco',
      cognome: 'esposito',
      eta: 29,
    }
  ]

  console.log(studenti);
  // creo un ciclo for per stampare le tre array
  for (var i = 0; i < studenti.length; i++) {
    // dopo aver fatto il ciclo for creo un ciclo for in
    for (var keys in studenti[i]) {
      //stampo
        $('#studenti').append( '<li>' + studenti[i][keys] + '</li>');
    }
  }
  // -------------------------------------------------- //
  // Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto


});
