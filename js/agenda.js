 //Validador de rut
document.getElementById("rut").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtrut = input.value;
  
    const feedbackrut = document.getElementById("feedback-rut");
    expr = /^[0-9]{8,9}$/;
    if (!expr.test(txtrut)) {
      feedbackrut.innerHTML = "Solo debe tener Numeros y debe tener entre 8 y 9 caracteres.";
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
    expr = /^[k-k K-K 0-9]{1,1}$/;
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
  
    if (txtNombre.length > 30 ) {
      feedbackNombre.innerHTML = "El nombre es muy corto.";
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
  
    if (txtdireccion.length > 80 ) {
      feedbackdireccion.innerHTML = "El direccion es muy corto.";
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
  
    if (txtApellido.length  > 30) {
      feedbackApellido.innerHTML = "El apellido es muy largo.";
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