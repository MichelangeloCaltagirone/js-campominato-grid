// Scaletta
/**
 * Recupero Elementi dal DOM
 * Setto variabili note
 * Creo Funzioni Utili
 * Genero griglia in pagina dinamicamente con js
 * Aggiungo eventi legati alla griglia
 */


// Prep

// Recupero elementi dal DOM

const grid = document.getElementById('grid');
const playBtn = document.querySelector('button');
const form = document.querySelector('form');

// Variabili note

const rows = 10;
const cols = 10;
const totCells = rows * cols;


// Eventi dinamici

// Al submit del form, genero una griglia 10 x 10 di nodi div, contententi i numeri in ordine da 1 a 100
form.addEventListener('submit', function(event) {
    event.preventDefault();                                         // prevengo il refresh della pagina
    
    for ( let i = 0; i < totCells; i++) {                           // giro per quante 'celle' voglio nella griglia, variabili di partenza a noi note
        const cell = createCell(i + 1);                             // invoco la funzione per generare le celle di nodi che voglio. Il Parametro è la variabile di controllo del for in cui è inserita la funzione, aumentato di 1 per stamapre i numeri da 1 a 100
        grid.appendChild(cell);                                     // aggiungo alla griglia in pagina il nodo appena creato
        //cell.addEventListener('click', function() {
            //console.log(this.innerText, ': è il contenuto della cella che hai cliccato');
        
    }
})
