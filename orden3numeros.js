let a = parseInt(prompt("introduzca el primer numero:"));
let b = parseInt(prompt("introduzca el segundo numero:"));
let c = parseInt(prompt("introduzca el tercer numero:"));

//numbers.textContent = `Los numeros introducidos son ${a}, ${b}, ${c}`;

const numbers= document.getElementById('numbers');
const results= document.getElementById('results');
const palabra = document.getElementById('palabra');
const conteo = document.getElementById('conteo');


numbers.textContent = ` Primer numero= ${a}, Segundo numero= ${b}, Tercer numero= ${c}`;

//document.write(` Los numeros ingresados son: a= ${a}, b= ${b}, c= ${c} <br>`);



if (a>=b && a>=c){
  
    if (b>c) result.textContent =  `Ordenados de mayor a menor: ${a}, ${b}, ${c}`;
    else result.textContent =  `Ordenados de mayor a menor: ${a}, ${c}, ${b}`;
} 

else if (b>a && b>c){
    
    if (a>c) result.textContent =  `Ordenados de mayor a menor: ${b}, ${a}, ${c}`;
    else result.textContent =  `Ordenados de mayor a menor: ${b}, ${c}, ${ac}`;
}

else if (c>a && c>b){
    
    if (a>b) result.textContent =  `Ordenados de mayor a menor: ${c}, ${a}, ${b}`;
    else result.textContent =  `Ordenados de mayor a menor: ${c}, ${b}, ${a}`;
        
}

let pala = prompt(`Introduzca una palabra:`);
let longitud_pala = pala.length;

palabra.textContent = `${pala}`;
conteo.textContent = `${longitud_pala} letras`;

