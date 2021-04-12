
//creo l'array dei cognomi
var listaCognomi = [
  'Bianchi',
  'Neri',
  'Rossi',
  'Verdi',   
  'Gialli'
];

// aggiungo un nuovo cognome col prompt E metto in ordine l'array
var nuovoCognome = prompt("inserisci il tuo cognome, con prima lettera MAIUSCOLA!");
listaCognomi.push(nuovoCognome);
listaCognomi.sort();


/* console.log(listaCognomi); */

//creo il ciclo for per stampare la lista
for(var i = 0; i < listaCognomi.length; i++){
  var elementoPrecedente = document.getElementById('lista').innerHTML;
  document.getElementById('lista').innerHTML = elementoPrecedente + "<li>" + listaCognomi[i] + "</li>"
}
//creo il secondo ciclo for per trovare la posizione 
for(var i = 0; i < listaCognomi.length; i++){
  if (nuovoCognome == listaCognomi){
    console.log([i]+1)
  }
} 





