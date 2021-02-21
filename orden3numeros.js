let a = parseInt(prompt("introduzca el primer numero:"));
let b = parseInt(prompt("introduzca el segundo numero:"));
let c = parseInt(prompt("introduzca el tercer numero:"));

//numbers.textContent = `Los numeros introducidos son ${a}, ${b}, ${c}`;

document.write(` Los numeros ingresados son: a= ${a}, b= ${b}, c= ${c} <br>`);



if (a>=b && a>=c){
  
    if (b>c) {document.write(`Ordenados de mayor a menor: ${a}, ${b}, ${c}`);}
    else {document.write(`Ordenados de mayor a menor: ${a}, ${c}, ${b}`);}
} 

else if (b>a && b>c){
    
    if (a>c) document.write(`Ordenados de mayor a menor: ${b}, ${a}, ${c}`);
    else document.write(`Ordenados de mayor a menor: ${b}, ${c}, ${a}`);
}

else if (c>a && c>b){
    
    if (a>b) document.write(`Ordenados de mayor a menor: ${c}, ${a}, ${b}`);
    else document.write(`Ordenados de mayor a menor: 55${c}, ${b}, ${a}`);
        
}
