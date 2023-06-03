
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errormsg');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errormsg');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};




function calcular(){
    const usrnamevalue = document.getElementById('username').value.trim();
    const usrlastnamevalue = document.getElementById("userlastname").value.trim()
    const usremailvalue = document.getElementById("useremail").value.trim()
    const nCantidad = document.getElementById("cantidadinput").value.trim()
    var nTotal = 0
    const nCategoria = document.getElementById("inputGroupSelect01")
    const errorElement = document.getElementById("error")

    let errores = []
    errorElement.innerHTML = ''

    console.log(nCategoria.value);

    if (usrnamevalue === '' || usrnamevalue == null) {
        errores.push('Debe introducir el nombre');
        setError(username, 'Debe introducir el nombre');

    } else {    
        setSuccess(username);
    }

    if (usrlastnamevalue === '' || usrlastnamevalue == null) {
        errores.push('Debe introducir el apellido');
        setError(userlastname, 'Debe introducir el apellido');   
    } else {    
        setSuccess(userlastname);
    }

    if (usremailvalue === '' || usremailvalue == null) {
        errores.push('Debe introducir el email');   
        setError(useremail, 'Debe introducir el email');
    }
    else {    
        setSuccess(useremail);
    }

    if(Number(nCantidad) <= 0) {
        errores.push('Debe introducir una cantidad positiva'); 
        setError(cantidadinput, 'Debe introducir una cantidad positiva');
    }
    else {    
        setSuccess(cantidadinput);
    }
    
   

    if (nCategoria.value === '' || nCategoria.value === undefined || nCategoria.value === null || nCategoria.value === 'Elija una opción') {
        errores.push('Debe elegir una categoria');
        setError(combo, 'Debe introducir una categoría');
    }
    else {
        document.getElementById('categoriaerrmsg').innerText=''
    }


    if (errores.length > 0) {
        //errorElement.innerHTML = errores.join(', ')   
        }
    else{
        
        var nCant = Number(nCantidad);

        if (nCategoria.value === "1") {
            nTotal = nCant *  40;
        }

        if (nCategoria.value === "2") {
            nTotal = nCant *  100;
        }

        if (nCategoria.value === "3") {
            nTotal = nCant *  170;
        }
        //
        var tituloPagina = document.getElementById('totaltext')
        tituloPagina.textContent="Total a Pagar: $ "+nTotal 

        if (nTotal > 0) {
        Swal.fire(
            'Excelente!',
            'Resumen ingresado!',
            'success'
          )
        }     
        }
};

function borrar(){

    var tituloPagina = document.getElementById('totaltext')
    tituloPagina.textContent="Total a Pagar: $ "
    var titulo = document.getElementById("cantidadinput")
    titulo.value=0
    var titulo = document.getElementById("username")
    titulo.value=""
    var titulo = document.getElementById("userlastname")
    titulo.value=""
    var titulo = document.getElementById("useremail")
    titulo.value=""
    var titulo = document.getElementById("inputGroupSelect01")
    titulo.value=""
    var tituloPagina = document.getElementById('error')
    tituloPagina.textContent=""
}
