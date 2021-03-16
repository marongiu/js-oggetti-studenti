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
    nome: 'Andrea',
    // cognome
    cognome: 'Marongiu',
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
      nome: 'Nome:' + ' Valerio',
      cognome: 'Cognome:' + ' Rossi',
      eta: 'Età: ' + 25,
    },
    {
      // studente 2
      nome:'Nome:' + ' Anna',
      cognome: 'Cognome:' + ' Rossi',
      eta:'Età: ' +  18,
    },
    {
      // studente 3
      nome:'Nome:' + ' Marco',
      cognome: 'Cognome:' + ' Esposito',
      eta: 'Età: ' +  29,
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

  // Seleziono il bottone nella pagina
  $('button').click(function(event) {
    // Seleziono input name
    var name = $('input#name').val();
    // Seleziono input cognome
    var surname = $('input#cognome').val();
    // Seleziono input eta
    var age = $('input#eta').val();
// Creo una nuova variabile dove inserire i nuovi studenti
    var studentiAggiunti = {
      nome: 'Nome: ' + name,
      cognome:'Cognome: ' +surname,
      eta: 'Età: ' + age,
    }
    // Ciclo per ottenere le proprietà e le stampo
    for (var variable in studentiAggiunti) {
      $('.nuovi').append( '<li>' + studentiAggiunti[variable] + '</li>');
    }
  });

});
