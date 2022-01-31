var cuentas = [
  //los objetos llamados cuentas
  { nombre: "Mali", saldo: 200, password: "helloworld" },
  { nombre: "Gera", saldo: 290, password: "l33t" },
  { nombre: "Maui", saldo: 67, password: "123" },
];
var Zeron = ["a", 2, "x,", 0]; //apellido de Anel

// let nombre = "";
// let password = "";
// console.log(nombre, password);

function validatorUsuario() {
  let nombre = document.getElementById("usuario").value;
  let password = document.getElementById("ÑÑ").value;
  let va = false;
  //se identifica donde se va a poner
  let noSalio = document.getElementById("aqui");
  //se define que se insertara,(en este caso un div)
  // let divuserno = document.createElement("div");

  // while (true) {
  //mientras algo se cumpla, sigue ejecutando lo que tengas dentro
  //aqui empiezo a validar los usernames y las passwords
  let i = 0;
  let j = 0;
  for (let i = 0; i <= cuentas.length; i++) {
    // console.log(cuentas[i].nombre, nombre, password);
    if (i >= 3) {
      //Agrega elemento HTML
      noSalio.innerHTML = `<div class="userno" div="userno">
        <h2>El usuario es incorrecto</h2>
        </div>
         `;
      va = true;
      // break;
    } else if (cuentas[i].nombre === nombre) {
      if (cuentas[i].password === password) {
        var numcue = i;
        Menu(numcue); //aqui se tiene aque reedirigir a Menu
        console.log("Todo bien", numcue);
        va = true;
        break;
      } else {
        //Agrega elemento HTML
        noSalio.innerHTML = `<div class="userno" div="userno"><h2>La constraseña es incorrecta</h2></div>`;
        va = true;
        break;
      }
    }
  }
  //   if (va == true) {
  //     break;
  //   }
  // }
}

function Menu(numcue) {
  document.getElementById("pantalla").innerHTML = `<div class="Bienvenido" div="Bienvenido">
        <h1>Bienvenido</h1>
        <h2 class="opciones">${cuentas[numcue].nombre} ¿Qué deseas hacer?</h2>
        </div>
         `;

  textBotones();
  botones();
  //Botones que no se usan
  document.getElementById("ocho").innerHTML = "<div></div>";
  //Botones que si se usan "SOLO TEXTO"
  document.getElementById("seis").innerHTML = `<h2>Consulta tu Saldo<span class='lupita'>🕵🏽
  </span></h2>`;

  //BOTONES QUE NO SE USAN FUNCIONALIDAD
  document.getElementById("Rcua").setAttribute("onclick", "null"); //ASI SE MODIFICA EL ATRIBUTO "ONCLICK"
  document.getElementById("Rtres").setAttribute("onclick", "null");

  document.getElementById("dos").innerHTML = "<h2>💲Depósito</h2>";

  document.getElementById("tres").innerHTML = "<h2>💸Retiros</h2>";

  document.getElementById("cuatro").innerHTML = "<h2>🔷Salir</h2>";

  //FUNCIONALIDAD DE BOTONES QUE SI SE USAN
  document.getElementById("Icua").setAttribute("onclick", "iniciar()");
  document.getElementById("Idos").setAttribute("onclick", "Deposito(" + numcue + ")");
  document.getElementById("Rdos").setAttribute("onclick", "Saldo(" + numcue + ")");
  document.getElementById("Itres").setAttribute("onclick", "Retiro(" + numcue + ")");
  document.getElementById("superAnuncio").setAttribute("src", "./assets/Fabrica de pasteles.jpg");
}

function Deposito(numcue) {
  textBotones();
  botones();
  console.log(numcue);
  document.getElementById("pantalla").innerHTML = `<div class="Bienvenido" div="Bienvenido">
        <h1>Depósito</h1>
        <h2 class="opciones">${cuentas[numcue].nombre}, Por favor intoduce la cantidad que deseas depositar </h2>
        <br>
        <h3 class="cantidad">Cantidad: <input type="number" id="depo" placeholder="Cantidad" class="InputDeposit" /></h3>
        <div class="respuestaDepo" id="respuestaDepo"></div>
        </div>`;

  //validacion de cantidad no mayor a 990

  //Letra de Botones
  document.getElementById("cuatro").innerHTML = "<h2>🔷Atrás</h2>";
  document.getElementById("ocho").innerHTML = "<h2>Confirmar🔷</h2>";
  document.getElementById("siete").innerHTML = "<h2>Salir🔷</h2>";
  //FUNCIONALIDAD DE BOTONES QUE SI SE USAN
  document.getElementById("Icua").setAttribute("onclick", "Menu(" + numcue + ")");
  document.getElementById("Rcua").setAttribute("onclick", "validacionDepos(" + numcue + ")");
  document.getElementById("Rtres").setAttribute("onclick", "iniciar()");
}

function validacionDepos(numcue) {
  let Dep = parseFloat(document.getElementById("depo").value);
  if (cuentas[numcue].saldo + Dep <= 990) {
    let nuevoSaldo = cuentas[numcue].saldo + Dep;
    document.getElementById("respuestaDepo").innerHTML = `<div class="respue">
    <h3>Perfecto, tu saldo era $${cuentas[numcue].saldo} MXN</h3>
    <br><h3>Tu nuevo saldo sera de $${nuevoSaldo} MXN</h3></div>`;
    cuentas[numcue].saldo = nuevoSaldo;
    console.log(cuentas[numcue].saldo);
  } else {
    console.log(Dep, cuentas[numcue].saldo);
    document.getElementById("respuestaDepo").innerHTML = `<h3 class="respu">Tu saldo actual es $${cuentas[numcue].saldo}. Es imposible ser tan rico, por favor manten tu saldo menor o igual a $990 MXN</h3>`;
  }
}

function Saldo(numcue) {
  textBotones();
  botones();
  console.log(numcue);
  document.getElementById("pantalla").innerHTML = `<div class="Bienvenido" div="Bienvenido">
  <h1>Consulta de Saldo</h1>
  <h2 class="opciones">${cuentas[numcue].nombre}, tu saldo es: $${cuentas[numcue].saldo} MXN</h2>`;

  //Letra de Botones
  document.getElementById("cuatro").innerHTML = "<h2>🔷Atrás</h2>";
  document.getElementById("ocho").innerHTML = "<h2>Salir🔷</h2>";
  //FUNCIONALIDAD DE BOTONES QUE SI SE USAN
  document.getElementById("Icua").setAttribute("onclick", "Menu(" + numcue + ")");
  document.getElementById("Rcua").setAttribute("onclick", "iniciar()");
  document.getElementById("superAnuncio").setAttribute("src", "./assets/fabrica de wafles.jpg");
}

function Retiro(numcue) {
  textBotones();
  botones();
  console.log(numcue);
  document.getElementById("pantalla").innerHTML = `<div class="Bienvenido" div="Bienvenido">
        <h1>Retiros</h1>
        <h2 class="opciones">${cuentas[numcue].nombre}, Por favor intoduce la cantidad que deseas retirar </h2>
        <br>
        <h3 class="cantidad">Cantidad: <input type="number" id="depo" placeholder="Cantidad" class="InputDeposit" /></h3>
        <div class="respuestaDepo" id="respuestaDepo"></div>
        </div>`;

  //validacion de cantidad no menor a 10

  //Letra de Botones
  document.getElementById("cuatro").innerHTML = "<h2>🔷Atrás</h2>";
  document.getElementById("ocho").innerHTML = "<h2>Confirmar🔷</h2>";
  document.getElementById("siete").innerHTML = "<h2>Salir🔷</h2>";
  //FUNCIONALIDAD DE BOTONES QUE SI SE USAN
  document.getElementById("Icua").setAttribute("onclick", "Menu(" + numcue + ")");
  document.getElementById("Rcua").setAttribute("onclick", "validacionRetiros(" + numcue + ")");
  document.getElementById("Rtres").setAttribute("onclick", "iniciar()");
  document.getElementById("superAnuncio").setAttribute("src", "./assets/Fabrica de pizza.jpg");
}

function validacionRetiros(numcue) {
  let Dep = parseFloat(document.getElementById("depo").value);
  if (cuentas[numcue].saldo - Dep >= 10) {
    let nuevoSaldo = cuentas[numcue].saldo - Dep;
    document.getElementById("respuestaDepo").innerHTML = `<div class="respue">
    <h3>Perfecto, tu saldo era $${cuentas[numcue].saldo} MXN</h3>
    <br><h3>Tu nuevo saldo sera de $${nuevoSaldo} MXN</h3></div>`;
    cuentas[numcue].saldo = nuevoSaldo;
    console.log(cuentas[numcue].saldo);
  } else {
    console.log(Dep, cuentas[numcue].saldo);
    document.getElementById("respuestaDepo").innerHTML = `<h3 class="respu">Tu saldo actual es $${cuentas[numcue].saldo}. Es imposible ser tan pobre, por favor manten tu saldo mayor o igual a $10 MXN</h3>`;
  }
}

function inicial() {
  let menu = document.getElementById("pantalla");
  menu.innerHTML = `<div class="cuenta">
  <h2 class="saludos">
    ¡Hola Crayola!, por favor ingrese la información requerida
  </h2>
  <br /><br /><br />
  <!--Aqui empezamos a pedir la información del usurio-->
  <div id="cuenta">
    <h2 class="usuario">Usuario:</h2>
    <input type="text" id="usuario" placeholder="Usuario" />
    <br />
    <div class="cont">
      <br /><br /><br />
      <h2 class="contraseña">Contraseña:</h2>
      <input type="password" id="ÑÑ" placeholder="Contraseña" />
    </div>
    <br />
  </div>
  <div id="aqui">
    <!-- <div class="userno" id="userno"></div> -->
  </div>
</div>`;

  textBotones();
  document.getElementById("ocho").innerHTML = "<h2>Continuar🔷</h2>";
  botones();
  //BOTONES QUE USAN FUNCIONALIDAD
  document.getElementById("Rcua").setAttribute("onclick", "validatorUsuario()"); //ASI SE MODIFICA EL ATRIBUTO "ONCLICK"
  document.getElementById("superAnuncio").setAttribute("src", "./assets/Fabrica de pasteles.jpg");
}

function botones() {
  document.getElementById("Rone").setAttribute("onclick", "null");
  document.getElementById("Rdos").setAttribute("onclick", "null");
  document.getElementById("Rtres").setAttribute("onclick", "null");
  document.getElementById("Rcua").setAttribute("onclick", "null");
  document.getElementById("Ione").setAttribute("onclick", "null");
  document.getElementById("Idos").setAttribute("onclick", "null");
  document.getElementById("Itres").setAttribute("onclick", "null");
  document.getElementById("Icua").setAttribute("onclick", "null");
}

function textBotones() {
  document.getElementById("dos").innerHTML = "<div></div>";
  document.getElementById("tres").innerHTML = "<div></div>";
  document.getElementById("cuatro").innerHTML = "<div></div>";
  document.getElementById("seis").innerHTML = "<div></div>";
  document.getElementById("siete").innerHTML = "<div></div>";
  document.getElementById("ocho").innerHTML = "<div></div>";
}
function iniciar() {
  textBotones();
  botones();
  document.getElementById("pantalla").innerHTML = "<div></div>";
  document.getElementById("ocho").innerHTML = "<h2>Iniciar🔷</h2>";
  document.getElementById("Rcua").setAttribute("onclick", "inicial()");
  document.getElementById("superAnuncio").setAttribute("src", "./assets/fabrica de pelotas.jpg");
}
