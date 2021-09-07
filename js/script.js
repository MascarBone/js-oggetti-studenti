// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(),
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

let studente = {
    nome: undefined,
    cognome: undefined,
    eta: undefined
}

/**Ciclo For per visualizzare i nomi delle proprietà */
for (let proprieta in studente)
{
    console.log(proprieta);
    console.log(studente[proprieta]);
}

const gruppoStudenti = [
    {'nome' :   'Luigi' ,cognome:   'Marziello' ,eta    : 55},
    {'nome' :   'Luis'  ,cognome:   'Forlka'    ,eta    : 39},
    {'nome' :   'Marlo' ,cognome:   'Julria'    ,eta    : 43},
    {'nome' :   'Quinx' ,cognome:   'Wujara'    ,eta    : 87},
    {'nome' :   'Jioser',cognome:   'Gerald'    ,eta    : 34},
    {'nome' :   'Zino'  ,cognome:   'Di Ponia'  ,eta    : 19},

];

for (let i = 0; i < gruppoStudenti.length; i++)
{
    for(let proprieta in gruppoStudenti[i])
    {
        console.log(proprieta);
        console.log(gruppoStudenti[i][proprieta]);
    }
}

let input;

input = prompt('Inserisci il -NOME- del nuovo studente');
studente.nome = input;
// console.log(studente);

input = prompt('Inserisci il -COGNOME- del nuovo studente');
studente.cognome = input;
// console.log(studente);

input = Number(prompt('Inserisci -L\'ETA\'- del nuovo studente'));
studente.eta = input;
console.log(studente);

gruppoStudenti.push(studente);

console.log(gruppoStudenti);

