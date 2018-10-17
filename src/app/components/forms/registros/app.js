(function(){
  var formulario = document.getElementsByName('formulario')[0],
  elementos = formulario.elements,
  boton = elements.getElementsById('btn');

  var validarNombre = function(){
    if(formulario.nombre.value == 0)
    {
      e.preventDefault();
    }
  };

  var validarEmail = function(){
    if(formulario.correo.value == 0)
    {
      e.preventDefault();
    }
  };

  var validarTelefono = function(){
    if(formulario.tel.value == 0)
    {
      e.preventDefault();
    }
  };

  var validarLlegada = function(){
    if(formulario.llegada.value == 0)
    {
      e.preventDefault();
    }
  };

  var validarSalida = function(){
    if(formulario.salida.value == 0)
    {
      e.preventDefault();
    }
  };

var selectorHabitacion = function(){
  if(formulario.habitacion.selectedIndex==0)
  {
      e.preventDefault();
    formulario.habitacion.focus();
  	return false;
  }
  return true;
  }

  var selectorAdulto = function(){
    if(formulario.adulto.selectedIndex==0)
    {
        e.preventDefault();
      formulario.adulto.focus();
    	return false;
    }
    return true;
    }


    var selectorNino = function(){
      if(formulario.nino.selectedIndex==0)
      {
          e.preventDefault();
        formulario.nino.focus();
      	return false;
      }
      return true;
      }

  var validar = function(e){
    validarNombre(e);
    validarEmail(e);
    validarTelefono(e);
    validarLlegada(e);
    validarSalida(e);
    selectorHabitacion(e);
    selectorAdulto(e);
    selectorNino(e);
    };
  formulario.addEventListener("submit",validar);
}())
