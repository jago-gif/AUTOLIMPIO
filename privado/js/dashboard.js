//crear cuenta de usuarios

document.addEventListener("DOMContentLoaded", function (event) {
    let signUpForm = document.querySelector("#sign-up");
    signUpForm.onsubmit = signUpSubmitted.bind(signUpForm);
  });
  const signUpSubmitted = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
  
    supabase.auth
      .signUp({ email, password })
      .then((response) => {
        response.error ? alert(response.error.message) : setToken(response);
      })
      .catch((err) => {
        alert(err);
      });
  };
  function setToken(response) {
    if (response.user.confirmation_sent_at && !response?.session?.access_token) {
      alert("Correo de Confirmación Enviado");
    } else {
    }
  }
  //mostrar tabla
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
                           <td>${auto.idventa}</td>
                           <td>${auto.tipo}</td>
                           <td>${auto.marca}</td>
                           <td>${auto.modelo}</td>
                           <td>${auto.año}</td>
                           <td>${auto.RevTec}</td>
                           <td>${auto.neto}</td>
                           <td>${auto.iva}</td>
                           <td>${auto.total}</td>
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