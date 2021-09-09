// const newUl = document.createElement("ul");
// const newLi = document.createElement("li");
// const newContent = document.createTextNode("Facciamo dei tentativi");
// newUl.appendChild(newContent);
// document.getElementById("elenco").appendChild(newUl);

let studente = {
    matricola: undefined,
    nome: undefined,
    cognome: undefined,
    eta: undefined,
}

const gruppoStudenti = [
    {matricola    :   1   ,   nome :   'Luigi' ,cognome:   'Marziello' ,eta    : 55},
    {matricola    :   22   ,   nome :   'Luis'  ,cognome:   'Forlka'    ,eta    : 39},
    {matricola    :   31   ,   nome :   'Marlo' ,cognome:   'Julria'    ,eta    : 43},
    {matricola    :   21   ,   nome :   'Quinx' ,cognome:   'Wujara'    ,eta    : 87},
    {matricola    :   11   ,   nome :   'Jioser',cognome:   'Gerald'    ,eta    : 34},
    {matricola    :   41   ,   nome :   'Zino'  ,cognome:   'Di Ponia'  ,eta    : 19},

];
console.log(gruppoStudenti);

// let prova = gruppoStudenti.map(({matricola}) => matricola);
// console.log(prova);



// studente = aggiungiStudente();
// console.log(studente);

// gruppoStudenti.push(studente);
// console.log(gruppoStudenti);


// let dataStudente = [];
// //Ciclo for per ottenere i valori all'interno del form
// for (let i = 0; i < document.forms.register.length; i++)
// {
//     dataStudente[i] = document.forms.register[i].value;
// }

// console.log (dataStudente);

//Evento con bottone per aggiungere i valori all'interno del form dentro ad un array;
let btnAggiungi = document.getElementById('btn-register');
btnAggiungi.addEventListener('click', function(){
    let dataStudente = [];
    // studente = {};
    for (let i = 0; i < document.forms.register.length; i++)
    {
        dataStudente[i] = document.forms.register[i].value;
    }
    console.log (dataStudente);

    studente.matricola = Number(dataStudente[0]);
    studente.nome = dataStudente[1];
    studente.cognome = dataStudente[2];
    studente.eta = Number(dataStudente[3]);
    gruppoStudenti.push(studente);
    console.log(gruppoStudenti);
}
);

// Evento con bottone per visualizzare l'elenco degli studenti
let btnVisualizza = document.getElementById('btn-visualizza');
btnVisualizza.addEventListener('click', function(){
// Ciclo per riempire un elenco con solo le matricole
document.getElementById('elenco-matricola').innerHTML = "";

for (let i = 0; i < gruppoStudenti.length; i++)
{
    let newLi = document.createElement('li');
    let newContent = document.createTextNode(gruppoStudenti[i].matricola);
    newLi.appendChild(newContent);
    document.getElementById('elenco-matricola').appendChild(newLi);
}
});

let btnElimina = document.getElementById('btn-elimina');
btnAggiungi.addEventListener('click', function(){

});
let btnModifica = document.getElementById('btn-modifica');
btnAggiungi.addEventListener('click', function(){

});

    





/**
 *  Funzione che tramite dei prompt, permette l'inserimento dei valori nell'oggetto studente
 *  @returns Un oggetto studente;
 */
function aggiungiStudente ()
{
    const objTemp = {};

    objTemp['matricola'] = Number(prompt("Inserisci il numero della matricola"));

    objTemp['nome'] = prompt("Inserisci il nome dello Studente");

    objTemp['cognome'] = prompt("Inserisci il cognome dello Studente");
    
    objTemp['eta'] = Number(prompt("Inserisci l'età dello Studente"));

    return objTemp;
}