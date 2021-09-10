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
    {matricola    :   1    ,   nome :   'Luigi' ,cognome:   'Marziello' ,eta    : 55},
    {matricola    :   22   ,   nome :   'Luis'  ,cognome:   'Forlka'    ,eta    : 39},
    {matricola    :   31   ,   nome :   'Marlo' ,cognome:   'Julria'    ,eta    : 43},
    {matricola    :   21   ,   nome :   'Quinx' ,cognome:   'Wujara'    ,eta    : 87},
    {matricola    :   11   ,   nome :   'Jioser',cognome:   'Gerald'    ,eta    : 34},
    {matricola    :   41   ,   nome :   'Zino'  ,cognome:   'Di Ponia'  ,eta    : 19},

];
console.log(gruppoStudenti);


//Evento con bottone per aggiungere i valori all'interno del form dentro ad un array;
const btnAggiungi = document.getElementById('btn-register');
btnAggiungi.addEventListener('click', function(){
    const dataStudente = [];
    const dataMatricole = estraiMatr(gruppoStudenti);
    // console.log(`dataMatricole ${dataMatricole}`);
        
    const matrForm = Number(document.forms.register[0].value);
    
    // console.log(`matrForm ${matrForm}`)

    // Condizione per controllare se il valore inserito nell'input matricole
    // è già presente nel gruppoStudenti (tramite la ricerca precedente salvato in matrForm)
    if (dataMatricole.includes(matrForm))
    {
        alert(`La matricola è già presente nel sistema, si prega di inserirne un'altra`);
    }else
    {

        for (let i = 0; i < document.forms.register.length; i++)
        {
            dataStudente[i] = document.forms.register[i].value;
        }
        console.log (dataStudente);

        studente = {};

        studente.matricola = Number(dataStudente[0]);
        studente.nome = dataStudente[1];
        studente.cognome = dataStudente[2];
        studente.eta = Number(dataStudente[3]);
        gruppoStudenti.push(studente);
        console.log(gruppoStudenti);
        
        
    }
}
);

// Evento con bottone per visualizzare l'elenco degli studenti
const btnVisualizza = document.getElementById('btn-visualizza');
btnVisualizza.addEventListener('click', function(){
    // Ciclo per riempire un elenco con solo le matricole
    const elenchi = [...document.getElementsByClassName('elenco')];
    console.log(elenchi);
    elenchi.forEach((element) => {
        element.replaceChildren();
    });

    // Cicli per stampare a schermo per ogni valore all'interno della lista
    // il suo contenuto dell'oggetto
    // Il ciclo for..in stampa una colonna alla volta, iterando per ogni
    // studente all'interno di gruppoStudenti
    for (const studente of gruppoStudenti)
    {
        for ( const proprieta in studente)
            {
                let newLi = document.createElement('li');
                let newContent = document.createTextNode(studente[proprieta]);
                newLi.appendChild(newContent);
                document.getElementById(`elenco-${proprieta}`).appendChild(newLi);
            }
    }
});

const btnElimina = document.getElementById('btn-elimina');
btnElimina.addEventListener('click', function(){

    const matrForm = Number(document.forms.register[0].value);
    const dataMatricole = estraiMatr(gruppoStudenti);
    if ( dataMatricole.includes(matrForm))
    {     
        const index = dataMatricole.indexOf(matrForm);
        // const matrElimina = Number(document.forms.register[0].value);
        // const dataElimina = estraiMatr(gruppoStudenti);
        // const indexElimina = dataMatricole.indexOf(matrElimina);
        
        gruppoStudenti.splice(index,1);   
    }else{
        alert(`La matricola inserita non è prensente nell'elenco`);
    }

});

let btnModifica = document.getElementById('btn-modifica');
btnModifica.addEventListener('click', function(){
    const matrForm = Number(document.forms.register[0].value);
    const dataMatricole = estraiMatr(gruppoStudenti);
    if ( dataMatricole.includes(matrForm))
    {
        const input = document.forms.register;
        const index = dataMatricole.indexOf(matrForm);

        gruppoStudenti[index].nome = input[1].value;
        gruppoStudenti[index].cognome = input[2].value;
        gruppoStudenti[index].eta = Number(input[3].value);
        
    }
});

    





// /**
//  *  Funzione che tramite dei prompt, permette l'inserimento dei valori nell'oggetto studente
//  *  @returns Un oggetto studente;
//  */
// function aggiungiStudente ()
// {
//     const objTemp = {};

//     objTemp['matricola'] = Number(prompt("Inserisci il numero della matricola"));

//     objTemp['nome'] = prompt("Inserisci il nome dello Studente");

//     objTemp['cognome'] = prompt("Inserisci il cognome dello Studente");
    
//     objTemp['eta'] = Number(prompt("Inserisci l'età dello Studente"));

//     return objTemp;
// }

/**Funzione per recupera un array con solo il numero delle matricole dalla lista di oggetti */
function estraiMatr (arr){
    return arr.map(element => element.matricola);
}