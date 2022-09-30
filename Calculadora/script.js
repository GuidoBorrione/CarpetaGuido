function mostrarDatos(e) {
    e.preventDefault();
    var uno = document.querySelector("#num1").value;
    var dos = document.querySelector("#num2").value;
    var operacion = document.querySelector("#operacion").value;
    if (operacion == "suma") {
        var resultado = parseInt(uno) + parseInt(dos);
    }   else{
        if(operacion == "resta"){
            var resultado = parseInt(uno) - parseInt(dos);
        }else{
            if(operacion == "multiplicacion"){
                var resultado = parseInt(uno) * parseInt(dos);
            }else{
                var resultado = parseInt(uno) / parseInt(dos);
            }
        }
    } 
    var mensaje = resultado;	
    document.querySelector("h1").textContent = mensaje;
    console.log(mensaje);
}

var formulario = document.querySelector("#form");
formulario.addEventListener("input", mostrarDatos);