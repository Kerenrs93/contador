const btnSuma= document.querySelector("#btnSuma");
const btnResta= document.querySelector("#btnResta");
const mostrarResultado= document.querySelector("#mostrarResultado");
let cont=0;


btnSuma.addEventListener('click', ()=>{
    sumar();
})

btnResta.addEventListener('click', ()=>{
    restar();
})


const sumar=()=>{
    cont++;
    imprimirResultado(cont);
}

const restar=()=>{
   cont--;
   imprimirResultado(cont);
}

const imprimirResultado=(resultado)=>{
    mostrarResultado.innerText= resultado;
}