let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let listaNotas = document.getElementById("listaNotas");
let promedioTexto = document.getElementById("promedio");
let notasAltasTexto = document.getElementById("notasAltas");
let notaMayorTexto = document.getElementById("notaMayor");
let notaMenorTexto = document.getElementById("notaMenor");

formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
    evento.preventDefault();
    let suma = 0;
    let cantidadValidos = 0;
    let notasAltas = 0;
    let mayor = -1;
    let menor = 6;
    listaNotas.innerText = "";

    for(let i = 1; i<= 5; i++) {
        nota = parseFloat(document.getElementById("nota" +  i).value);
        let fila = document.createElement("li");
        fila.textContent = "Nota" + i + ": " + nota;
    
        if(Number.isNaN(nota) || nota < 0 || nota > 5) {
            fila.textContent += `(invalida)`;
        } else{
            suma += nota;
            cantidadValidos++;
            if (nota >= 3){
                notasAltas++;
            }
            if(nota > mayor){
                mayor = nota;
            }
            if (nota < menor){
                menor = nota;
            }
        } 
        listaNotas.appendChild(fila);
    }

    if(cantidadValidos === 0){
        mensaje.textContent = `No se ingresaron notas validas.`;
        promedioTexto.textContent = "_";
        notasAltasTexto.textContent = "_";
        notaMayorTexto.textContent = "_";
        notaMenorTexto.textContent = "_";
        return;
    }

    let promedio = suma/cantidadValidos;
    promedioTexto.textContent = promedio.toFixed(2);
    notasAltasTexto.textContent = notasAltas;
    notaMayorTexto.textContent = mayor;
    notaMenorTexto.textContent = menor;
    mensaje.textContent = promedio >= 3 ? "Aprobo. " : "Reprobo. ";
}

