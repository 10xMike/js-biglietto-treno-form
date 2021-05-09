/* 
Creiamo un finto biglietto del treno con:
    Nome passeggero
    Codice treno (numero casuale tra 90000 e 100000 escluso)
    Numero carrozza
    Prezzo calcolato
    Categoria selezionata dall'utente
*/



/*
function bigliettoTreno() {
    var nomePasseggero = document.getElementById('nomePasseggero').value;
    console.log(nomePasseggero);
    document.getElementById().innerHTML = x;
    var kmPercorsi = document.getElementById('kmPercorsi').value;
    console.log(kmPercorsi);
    var fasciaEtà = document.getElementById('ages').value;
    console.log(fasciaEtà);
    var prezzo = kmPercorsi * 0.21; 
} */

document.getElementById('ticket_gen').addEventListener('click', function() {
    var nomePasseggeroEl = document.getElementById('nomePasseggero');
    var kmPercorsiEl = document.getElementById('kmPercorsi');
    var fasciaEtàEl = document.getElementById('ages');

    var bigliettoEl = document.querySelector('.ticket');

    bigliettoEl
    .insertAdjacentHTML('afterbegin', 
    `
        <div>${nomePasseggeroEl.value}</div>
        <div>${kmPercorsiEl.value}</div>
        <div>${fasciaEtàEl.value}</div>
    `)
});

