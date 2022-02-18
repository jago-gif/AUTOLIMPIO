//validador y POST tabla clientes
//Validador de rut
document.getElementById("rut").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtrut = input.value;

  const feedbackrut = document.getElementById("feedback-rut");
  expr = /^[0-9]{7,8}$/;
  if (!expr.test(txtrut)) {
    feedbackrut.innerHTML = "Solo debe tener Numeros y debe tener entre 7 y 8 caracteres.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackrut.className = "invalid-feedback";
  } else {
    feedbackrut.innerHTML = "El Rut es consistennte";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackrut.className = "valid-feedback";
  }
});
//Validador de dv
document.getElementById("dv").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtdv = input.value;

  const feedbackdv = document.getElementById("feedback-dv");
  expr = /^[k-k K-K 0-9]{1}$/;
  if (!expr.test(txtdv)) {
    feedbackdv.innerHTML = "Solo debe tener Numeros o k.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackdv.className = "invalid-feedback";
  } else {
    feedbackdv.innerHTML = "consistente";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackdv.className = "valid-feedback";
  }
});
//Validador de Nombre
document.getElementById("Nombreclient").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtNombre = input.value;

  const feedbackNombre = document.getElementById("feedback-nombre");
  expr = /^[a-zA-Z]{1,30}$/;
  if (!expr.test(txtNombre)) {
    feedbackNombre.innerHTML = "El nombre es muy corto o contiene numeros o caracteres no reconocidos.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackNombre.className = "invalid-feedback";
  } else {
    feedbackNombre.innerHTML = "El nombre es consistennte";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackNombre.className = "valid-feedback";
  }
});
document.getElementById("direccionclient").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtdireccion = input.value;

  const feedbackdireccion = document.getElementById("feedback-direccion");
  expr = /^[a-zA-Z0-9 ]{1,80}$/;
  if (!expr.test(txtdireccion)) {
    feedbackdireccion.innerHTML = "El direccion es muy larga.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackdireccion.className = "invalid-feedback";
  } else {
    feedbackdireccion.innerHTML = "El direccion es consistennte";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackdireccion.className = "valid-feedback";
  }
});
//Validador de Apellido
document.getElementById("apellidoclient").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtApellido = input.value;

  const feedbackApellido = document.getElementById("feedback-apellido");
  expr = /^[a-zA-Z]{1,30}$/;
  if (!expr.test(txtApellido)) {
    feedbackApellido.innerHTML = "Solo debe contener letras.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackApellido.className = "invalid-feedback";
  } else {
    feedbackApellido.innerHTML = "El apellido es consistennte";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackApellido.className = "valid-feedback";
  }
});

function registrar(event) {
  // evito que el formulario haga un submit normal
  // para manejarlo dentro de la función
  event.preventDefault();
  alert("su formulario fue enviado");

  const boton = (document.getElementById("btnclient").disabled = true);
  const rutcar = document.getElementById("rut").value;
  const dverifcar = document.getElementById("dv").value;
  const Nombrecar = document.getElementById("Nombreclient").value;
  const apellidocar = document.getElementById("apellidoclient").value;
  const direccioncar = document.getElementById("direccionclient").value;
  const comunacar = document.getElementById("comunacar").value;

  //envio de datos por API REST
  const baseURL = "https://hwwyuypdcxdigyfznqcw.supabase.co";
  const apiCall = "/rest/v1/usercar";
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzgzODkxMiwiZXhwIjoxOTU5NDE0OTEyfQ.uxO0CK1gfxS3YnIl_qrcaFxaageKNBLLW61yKxbBl1k";
  const url = baseURL + apiCall;
  const contacto = {
    rutcar,
    dverifcar,
    Nombrecar,
    apellidocar,
    direccioncar,
    comunacar,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey,
      authorization: "Bearer " + apiKey,
    },
    body: JSON.stringify(contacto),
  });
}

document
  .getElementById("form-registrar")
  .addEventListener("submit", registrar);

 //validador y POST tabla autos
//Validador de rut
document.getElementById("rutsdv").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtrut = input.value;

  const feedbackrut = document.getElementById("feedback-rutsdv");
  expr = /^[0-9]{7,8}$/;
  if (!expr.test(txtrut)) {
    feedbackrut.innerHTML = "Solo debe tener Numeros y debe tener entre 7 y 8 caracteres.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackrut.className = "invalid-feedback";
  } else {
    feedbackrut.innerHTML = "El Rut es consistennte";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackrut.className = "valid-feedback";
  }
});

//Validador de tipo
document.getElementById("optiontipo").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txttipo = input.value;
  if (txttipo >=20) {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  } else {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  }
});
//Validador de marca
document.getElementById("optionmarca").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtmarca = input.value;
  if (txtmarca <=20) {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  } else {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  }
});
//Validador de modelo
document.getElementById("optionmodelo").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtmarca = input.value;
  if (txtmarca <=20) {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  } else {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  }
});
//Validador de modelo
document.getElementById("año").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtmarca = input.value;
  expr = /^[0-9]{4}$/;
  if (!expr.test(txtmarca)) {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  } else {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  }
});

function registrarauto(event) {
  // evito que el formulario haga un submit normal
  // para manejarlo dentro de la función
  event.preventDefault();
  alert("su formulario fue enviado");

  const boton = (document.getElementById("btnauto").disabled = true);
  const rut = document.getElementById("rutsdv").value;
  const tipo = document.getElementById("optiontipo").value;
  const marca = document.getElementById("optionmarca").value;
  const modelo = document.getElementById("optionmodelo").value;
  const año = document.getElementById("año").value;
  const RevTec = document.getElementById("revaldia").value;

  //envio de datos por API REST
  const baseURL = "https://hwwyuypdcxdigyfznqcw.supabase.co";
  const apiCallauto = "/rest/v1/autos";
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzgzODkxMiwiZXhwIjoxOTU5NDE0OTEyfQ.uxO0CK1gfxS3YnIl_qrcaFxaageKNBLLW61yKxbBl1k";
  const urlauto = baseURL + apiCallauto;
  const contacto = {
    rut,
    tipo,
    marca,
    modelo,
    año,
    RevTec,
  };

  fetch(urlauto, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey,
      authorization: "Bearer " + apiKey,
    },
    body: JSON.stringify(contacto),
  });
}

document
  .getElementById("form-auto")
  .addEventListener("submit", registrarauto);
 

  //tipo de vehiculo

const changeTipo = document.getElementById("optiontipo");
changeTipo.addEventListener("change", function () {
    if (changeTipo.value == "Automóvil") {
        document.getElementById("optionmarca").innerHTML = `<option>seleccione Marca</option>
        <option value="Toyota">Toyota</option>
        <option value="Nissan">Nissan</option>
        <option value="Subaru">Subaru</option>
        `;
    }
    if (changeTipo.value == "Furgón") {
        document.getElementById("optionmarca").innerHTML = `<option>seleccione Marca</option>
        <option value="Chevrolet">Chevrolet</option>
        <option value="Citroën ">Citroën </option>
        <option value="DFSK ">DFSK </option>
        `;
    }if (changeTipo.value == "Camión") {
      document.getElementById("optionmarca").innerHTML = `<option>seleccione Marca</option>
      <option value="Mercedes Benz">Mercedes Benz</option>
      <option value="Volvo">Volvo</option>
      <option value="Iveco">Iveco</option>
      `;
  }if (changeTipo.value == "Camioneta") {
    document.getElementById("optionmarca").innerHTML = `<option>seleccione Marca</option>
    <option value="ToyotaC">Toyota</option>
    <option value="NissanC">Nissan</option>
    <option value="mazda">mazda</option>
    `;
}if (changeTipo.value == "Moto") {
  document.getElementById("optionmarca").innerHTML = `<option>seleccione Marca</option>
  <option value="Suzuki">Suzuki</option>
  <option value="Honda">Honda</option>
  `;
}
});
//modelo de vehiculo
const changeMarca = document.getElementById("optionmarca");
changeMarca.addEventListener("change", function () {
    if (changeMarca.value == "Toyota") {
        document.getElementById("optionmodelo").innerHTML = `<option>seleccione Modelo</option>
        <option value="Corolla">Corolla</option>
        <option value="Yaris">Yaris</option>
        <option value="Rav4">Rav4</option>
        `;
    }
    if (changeMarca.value == "Nissan") {
      document.getElementById("optionmodelo").innerHTML = `<option>seleccione Marca</option>
      <option value="New Versa">New Versa</option>
      <option value="Nuevo Sentra">Nuevo Sentra</option>
      <option value="Kicks">Kicks</option>
      `;
  }if (changeMarca.value == "Subaru") {
    document.getElementById("optionmodelo").innerHTML = `<option>seleccione Marca</option>
    <option value="XV">XV</option>
    <option value="Forester">Forester</option>
    <option value="Impresa">Impresa</option>
    `;
}
    });
    //mostrar autos de cliente
    document.getElementById("rutsearch").addEventListener("blur", (evento) => {
      const input = evento.currentTarget;
      const txtrut = input.value;
      const baseURL   = "https://hwwyuypdcxdigyfznqcw.supabase.co";
      const apiCallautos   = '/rest/v1/autos'
      const buscar  ='?select'
      const apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzgzODkxMiwiZXhwIjoxOTU5NDE0OTEyfQ.uxO0CK1gfxS3YnIl_qrcaFxaageKNBLLW61yKxbBl1k";  
      const urlautos       = baseURL + apiCallautos + buscar + txtrut

      const contenedorautos = document.querySelector("#taba-autos");
let resultados = "";

const mostrarAutos = (autos) => {
    autos.forEach((auto) => {
    resultados += ` 
                         <tr>
                             <td>${auto.id}</td>
                             <td>${auto.tipo}</td>
                             <td>${auto.marca}</td>
                             <td>${auto.modelo}</td>
                             <td>${auto.año}</td>
                             <td>${auto.RevTec}</td>
                             <td><a class="btnentrar btn btn-success  fa fa-plus"> </a></td>
                             <td><a class="btnborrar btn btn-danger  fa fa-trash"> </a></td>
                         </tr>
                        `;
  });
  contenedorautos.innerHTML = resultados;
};

fetch(urlautos, {
  headers: {
    method: "GET",
    "Content-Type": "application/json",
    apikey: apiKey,
    authorization: "Bearer " + apiKey,
  },
})
  .then((response) => {
    console.dir(response);
    return response.json();
  })
  .then((data) => {
    console.dir(data);
    mostrarAutos(data);
    return data;
  })
  .catch((error) => {
    console.dir(error);
    return error;
  });
    })
    //seleccionar envento dentro del tg
  const on = (element, event, selector, handler ) =>{
    element.addEventListener(event, e => {
      if(e.target.closest(selector)){
        handler(e)
      }
    })
  }
    on(document, 'click', ".btnborrar", e =>{
      const fila = e.target.parentNode.parentNode
      const id= fila.firstElementChild.innerHTML
      console.log(id)
      fetch(apiCallauto+id,{
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "apikey": apiKey,
          "authorization": "Bearer "+apiKey     
      },
    })
  });  
  on(document, 'click', ".btnentrar", e =>{
    const fila = e.target.parentNode.parentNode
    const capturarid= fila.firstElementChild.innerHTML
    const id = fila.children[0].innerHTML;
    const tipo = fila.children[1].innerHTML;
    const marca = fila.children[2].innerHTML;
    const modelo = fila.children[3].innerHTML;
    const año = fila.children[4].innerHTML;
    const RevTec = fila.children[5].innerHTML;
    recibID.value = id
    recibtipo.value = tipo
    recibmarca.value = marca
    recibmodelo.value = modelo
    recibaño.value = año
    recibrevaldia.value = RevTec
  })
  const botoncal = document.getElementById("btnCalcular");
  botoncal.addEventListener("click", () => {
      // reviso si están checkeados los servicios
      const lavadoExterior    = $("#lavadoExterior").prop("checked");
      const lavadoMotor       = $("#lavadoMotor").prop("checked");
  
      // creo variable para hacer cálculo
      let montoNeto           = 0;
  
      if( lavadoExterior ) {
          montoNeto = montoNeto + 7000;
      }
  
      if( lavadoMotor ) {
          montoNeto = montoNeto + 5000;
      }
  
      // cálculo impuesto y total 
      const impuesto  = montoNeto * 0.19;
      const total     = montoNeto + impuesto;
  
      // cargo los datos a pantalla 
      
      const vneto= document.getElementById("neto").innerHTML   = `<span>$ ${montoNeto}</span>`;
      const viva= document.getElementById("iva").innerHTML    = `<span>$ ${impuesto}</span>`;
      const vtotal= document.getElementById("total").innerHTML  = `<span>$ ${total}</span>`;
  
    });
  function registrarventa(event) {
    // evito que el formulario haga un submit normal
    // para manejarlo dentro de la función
    event.preventDefault();
    alert("su formulario fue enviado");
  
    const botonventa = (document.getElementById("btnventa").disabled = true);
    const idventa = document.getElementById("recibID").value;
    const tipo = document.getElementById("recibtipo").value;
    const marca = document.getElementById("recibmarca").value;
    const modelo = document.getElementById("recibmodelo").value;
    const año = document.getElementById("recibaño").value;
    const RevTec = document.getElementById("recibrevaldia").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    
    const neto = document.getElementById("neto").value;
    const iva = document.getElementById("iva").value;
    const total = document.getElementById("total").value;

  
    //envio de datos por API REST
    const baseURL = "https://hwwyuypdcxdigyfznqcw.supabase.co";
    const apiCallventa = "/rest/v1/servicios";
    const apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzgzODkxMiwiZXhwIjoxOTU5NDE0OTEyfQ.uxO0CK1gfxS3YnIl_qrcaFxaageKNBLLW61yKxbBl1k";
    const urlventa = baseURL + apiCallventa;
    const contacto = {
     idventa,
     tipo,
     marca,
     modelo,
     año,
     RevTec,
     fecha,
     hora,
     neto,
     iva,
     total,
    };
  
    fetch(urlventa, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: apiKey,
        authorization: "Bearer " + apiKey,
      },
      body: JSON.stringify(contacto),
    });
  }
  
  document
    .getElementById("form-venta")
    .addEventListener("submit", registrarventa);