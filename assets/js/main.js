/* 
Creiamo un finto biglietto del treno con:
    Nome passeggero
    Codice treno (numero casuale tra 90000 e 100000 escluso)
    Numero carrozza
    Prezzo calcolato
    Categoria selezionata dall'utente
*/

document.getElementById('ticket_gen').addEventListener('click', function() {
    var nomePasseggeroEl = document.getElementById('nomePasseggero');
    var kmPercorsiEl = document.getElementById('kmPercorsi');
    var fasciaEtàEl = document.getElementById('ages');
    var prezzoStandard = kmPercorsiEl.value * 0.21;
    var nomeBigliettoEl = document.querySelector('.nometicket');
    var prezzoBigliettoEl = document.querySelector('.prezzoticket');
    var testoSconto = 'Prezzo Pieno';

    if (fasciaEtàEl.value == 'minorenne') {
        prezzoStandard -= prezzoStandard * 0.2;
        testoSconto = 'Sconto Minorenne'
    } else if (fasciaEtàEl.value == 'anzianità') {
        prezzoStandard -= prezzoStandard * 0.4;
        testoSconto = 'Sconto Anziani';
    }

    nomeBigliettoEl.insertAdjacentHTML('beforeend', 
    `
        <div>Nome passeggero ${nomePasseggeroEl.value}</div>
    `)
    prezzoBigliettoEl.insertAdjacentHTML('beforeend', 
    `
        <div>Offerta ${testoSconto} ${prezzoStandard.value}</div>
    `)
});

function randomNumber(min, max) {
    Math.floor(Math.random()*(max - min + 1)) + min;
}

{/* <div>${kmPercorsiEl.value}</div>
        <div>${fasciaEtàEl.value}</div> */}
        
/* TASTO ANNULLA */
document
.getElementById('ticket_del')
.addEventListener('click', function() {
    document.getElementById('nomePasseggero').value = '';
    document.getElementById('kmPercorsi').value = '';
    document.getElementById('ages').value = '';
});