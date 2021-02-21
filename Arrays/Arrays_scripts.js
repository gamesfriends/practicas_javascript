let numeros = [1,2,3,4,5,6,7,8,9,10,55,66,77,12];
const muestra_array = document.getElementById("muestra_array");
muestra_array.textContent = `${numeros}`;

let opcion = prompt("Eliga una opción: \n 1 - Agregar numeros al final \n 2 -  Agregar numeros al inicio \n 3 - Eliminar un elemento por indice \n 4 - Eleminar elemento por valor");

let principio=[];
let borrados=[];
let borrados_valores=[];
let index;

if (opcion == "1"){
        
    while(principio[principio.length-1] != "s")
    {   
        
        principio.push(prompt("Ingrese un numero (s para finalizar)"));
    }
    principio.pop(); //Borra la s que se usa para salir
    numeros.push(principio);
   
}else if (opcion =="2"){
     
     while(principio[principio.length-1] != "s"){
        principio.push(prompt("Ingrese un numero (s para finalizar)"));
       
     }
     principio.pop(); //Borra la s que se usa para salir
     numeros.unshift(principio);
     
    
}

if (opcion == "3"){
    
    while (borrados[borrados.length-1] != "s")
    {   
         borrados.push(prompt(`Seleccione el indice del valor a eliminar(0 - ${numeros.length-1}) \n Valores: ${numeros}`));
         if (borrados[borrados.length-1] != "s"){    
             borrados_valores.push(numeros[borrados[borrados.length-1]]);
             numeros.splice(borrados[borrados.length-1],1); 
         }
    }
     

    muestra_array_eliminados.textContent = `${borrados_valores}`;
}

if (opcion == "4"){
    
    while (borrados[borrados.length-1] != "s")
    {   
        borrados.push(prompt(`Seleccione el valor a eliminar(${numeros})`));
        if (borrados[borrados.length-1] != "s"){    
        let numero = parseInt(borrados[borrados.length-1]);
        borrados_valores.push(numero);
        index = numeros.indexOf(numero);
        alert(`${index}`);
        if (index >= 0) {
           numeros.splice(index, 1);
        }
         }
                 
    }
     

    muestra_array_eliminados.textContent = `${borrados_valores}`;
}



muestra_array_final.textContent = `${numeros}` ;
muestra_array_agregados.textContent = `${principio}` ;

