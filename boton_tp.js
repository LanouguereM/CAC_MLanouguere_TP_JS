

const Estud= 40; //20 * 200 / 100 ; 
const Train = 50 * 200 / 100;
const Jr=  85 * 200 / 100;
const Entrada = 200;

totalPagar = () => { 

  var dineroTotal;
    const apuntadorNroPersonas = document.getElementById('cantidadPersonas').value;
    const apuntadorCategoria = document.getElementById('categ').value;
    
    if (!validateForm()) { 
        alert("Es necesario completar TODOS los campos");
        return;
    };

    if (apuntadorCategoria === 'Estudiante')  {
        dineroTotal = Number(apuntadorNroPersonas) * Estud ;
        ahorro = Entrada * apuntadorNroPersonas - dineroTotal;
    }
    
    else if (apuntadorCategoria === 'Trainee')  {
        dineroTotal = Number(apuntadorNroPersonas) * Train ;
        ahorro = Entrada * apuntadorNroPersonas - dineroTotal;
    }

    else if (apuntadorCategoria === 'Junior')  {
        dineroTotal = Number(apuntadorNroPersonas) * Jr ;
        ahorro = Entrada * apuntadorNroPersonas - dineroTotal;
        
      }

      
   
      document.getElementById("montoActualizado").innerHTML = `Total a pagar : $ ${dineroTotal}    (Felicitaciones, has ahorrado  ${ahorro} pesos!! )`;
      
    }



validateForm = () => {
  let nombre = document.querySelectorAll('inputNombre').value;
  let apellido = document.querySelectorAll('inputApellido').value;
  let correo = document.getElementById('inputCorreo').value;
  let nroPersonas = document.getElementById('cantidadPersonas').value;
  if (nombre === "" ) { 
    return false;
  }
  
  if (apellido === "" ) { 
    return false;
  }
  
  if (correo === "" ) { 
    return false;
  }
  
  if (nroPersonas === "" ) { 
    return false;
  }
  return true; 
}



//apunto a boton Resumen
const apuntadorAlBoton2 = document.getElementById('botonResumen');
//al boton apuntador le tengo que asociar el evento click que va a disparar la funcion 
apuntadorAlBoton2.addEventListener('click', totalPagar);


function borrarDatos() {
    document.getElementById("formu").reset();
    document.getElementById("montoActualizado").innerHTML = `Total a pagar : $ `;
   
};


//apunto a boton borrar
const apuntadorAlBoton1 = document.getElementById('botonBorrar');
//al boton apuntador le tengo que asociar el evento click que va a disparar la funcion 
apuntadorAlBoton1.addEventListener('click',borrarDatos);


