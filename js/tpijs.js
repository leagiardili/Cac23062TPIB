var Cantidad = document.getElementById("cantidadinput")

var nCategoria = document.getElementById("inputGroupSelect01")

var nTotal = 0


function calcular() {

    var nCantidad = Number(Cantidad.value)

    switch(nCategoria.value) {
        case "1" : 
            nTotal = nCantidad *  40;
            break;
        case "2" : 
            nTotal = nCantidad *  100;
            break
        case "3" : 
            nTotal = nCantidad *  170;
            break;
        default :
            nTotal = 0;
     }

    var tituloPagina = document.getElementById('totaltext')
    tituloPagina.textContent="Total a Pagar: $ "+nTotal
}

function borrar(){
    var tituloPagina = document.getElementById('totaltext')
    tituloPagina.textContent="Total a Pagar: $ "
    var titulo = document.getElementById("cantidadinput")
    titulo.value=0
    var titulo = document.getElementById("inputnombre")
    titulo.value=""
    var titulo = document.getElementById("inputapellido")
    titulo.value=""
    var titulo = document.getElementById("inputemail")
    titulo.value=""
    var titulo = document.getElementById("inputGroupSelect01")
    titulo.value=""
    
}

