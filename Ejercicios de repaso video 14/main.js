

let ejercicio = parseInt(prompt("Seleccione el numero de ejercicio:"));


switch(ejercicio){
    case 1:
        let nombre = prompt("Ingrese su nombre:");
        let edad = parseInt(prompt("Ingrese su edad:"));
        console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edad+1} años`);
        break;
    case 2:
        let figura = parseInt(prompt("Elija una figura: \n 1 - Rectángulo \n 2 - Triángulo \n 3 - Círculo"));
        switch(figura){
            case 1:
                let base = parseInt(prompt("Ingrese la medida de la base en CM:"));
                let altura = parseInt(prompt("Ingrese la medida de la altura en CM:"));
                console.log(`El área del rectángulo es ${base*altura} CM.`);
                break;
            case 2:
                let base2 = parseInt(prompt("Ingrese la medida de la base en CM:"));
                let altura2 = parseInt(prompt("Ingrese la medida de la altura en CM:"));
                console.log(`El área del triángulo es ${(base2*altura)/2} CM.`);
                break;
            case 3:
                let radioo = parseInt(prompt("Ingrese la medida del radio en CM:"));
                console.log(`El área del círculo es ${Math.PI*(radioo**2)} CM.`);
                break;
            default:
                break;
        }
        break;
    case 3:
        let numero = parseInt(prompt("Ingrese un número:"));
        for ( let i=1; i<= numero; i++){
            if (i%2 == 0) console.log(`${i} es par`)
            else console.log(`${i} es impar`)
        }
        break;
    case 4:
       let num,primo;
        num = parseInt(prompt("Introduzca un numero:"));
        let i = 0;
        primo=true;
        
        for(i=2; i<num;i++){
            if(num%i==0){
                primo=false;
            }
        }
        if (!primo) console.log(`El número ${num} no es primo`);
        else console.log(`El número ${num} es primo`);
        break;
    case 5:
        let numer = parseInt(prompt("Introduzca un numero mayor a 0:"));
        let total=1;
        for(let i=2;i<=numer;i++){
            total=total*i;
        }
        console.log(`El factorial de ${numer} es ${total}`);
        break;
    case 6:
        let contador =0;
        let acumulado =0;
                
        while (acumulado<=50){
        let ingresado=parseInt(prompt("Ingrese un número:"));
        contador++;
        acumulado+=ingresado;
        }
        console.log(`El total acomulado es ${acumulado} y la cantidad de números ingresados es ${contador}`);
        break;
    case 7:
        let array = [3,6,9,13,46];
        let pares = [];
        let impares = [];
        
        for(let ii of array){
            let randomizado = Math.floor((Math.random() * 9) + 1);
            let resultado = ii*randomizado;
            
            if (resultado%2 == 0){
                pares.push(resultado);
                console.log(`${ii} x ${randomizado} = ${resultado} - array de pares`);
            }
            else{
                impares.push(resultado)
                console.log(`${ii} x ${randomizado} = ${resultado} - array de impares`);
            }
        }
        console.log(`Array de pares: ${pares}. Array de impares: ${impares}`);
        break;
    case 8:
        const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        let dni=parseInt(prompt("Ingrese su DNI:"));
        let posicion = dni%23;
        console.log(`La letra que corresponde a su DNI es ${letras[posicion]}`);
        break;
    case 9:
        let palabra=prompt("Ingrese una palabra:");
        let numeroVocales = palabra.match(/[aeiou]/gi).length;
        console.log(`Vocales= ${numeroVocales}. Consonantes = ${palabra.length-numeroVocales}. Longitude de palara = ${palabra.length}` );
        break;
    default:
        break;
    case 10:
        let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
        let introdu=prompt("Ingrese un color:");
        
        //CON indxOf
        if (colores.indexOf(introdu) > -1){
                 console.log("si wacho");
            }else console.log("NO wacho");
                
        //CON FOR of
        //for(let valor of colores){
        //    if (valor == introdu){
        //        console.log("si wacho");
        //    }
        //}
        break;
}