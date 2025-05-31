//Eventos onFocus y onBlur
//Solicitar que se ingrese el nombre y la clave de un usuario. Mostrar una ventana de alerta si en la clave se ingresan menos de 7 caracteres o más de 20 (capturar el evento onBlur)
function validarClave() {
    var clave = document.getElementById("clave").value;
    if (clave.length < 7 || clave.length > 20) {
        alert("La clave debe tener entre 7 y 20 caracteres.");
    } else {
        alert("Clave válida.");
    }
}
//Eventos onMouseOver y onMouseOut
//Modificar el segundo problema resuelto (las casillas de la tabla que cambian el color cuando ingresamos con el mouse) para permitir llamar mediante hipervínculos a distintos programas que administran web-mail (gmail, hotmail y yahoo)
function cambiarColor(elemento, color) {
    elemento.style.backgroundColor = color;
}
//Evento onLoad
//Confeccionar una página que muestre un mensaje con la función alert inmediatamente después que se cargue.
function mostrarMensaje() {
    alert("La página se ha cargado correctamente.");
}
//El objeto window
//Confeccionar una página que permita abrir otra ventana cuando se presiona un botón. Dicha ventana debe tener como ancho 600 pixeles y alto 300 pixeles.
function abrirVentana() {
    window.open("https://www.google.com", "Nueva Ventana de Google", "width=600,height=300");
}
//Propiedad location del objeto window
/*Confeccionar una página que tenga un botón. Cuando se presione dicho botón generar un valor aleatorio entre 0 y 2. Si se genera el 0 llamar al webmail de Outlook, si se genera un 1 llamar a gmail en caso de generarse un 2 llamar a yahoo.
Para generar un valor aleatorio utilizar la función random del objeto Math.
 
let num;
num=Math.random()*3; //se guarda en num un valor comprendido entre 0.00001 y 2.99999
num=parseInt(num);  //guardamos solo la parte entera de la variable num
if (num==0){
    window.location='https://www.outlook.com';
}
.....*/
function redirigirWebmail() {
    let num = Math.floor(Math.random() * 3); // Genera un número entre 0 y 2
    switch (num) {
        case 0:
            window.location.href = 'https://www.outlook.com';
            break;
        case 1:
            window.location.href = 'https://www.gmail.com';
            break;
        case 2:
            window.location.href = 'https://www.yahoo.com';
            break;
    }
}
//Propiedad screen del objeto window
//Confeccionar un programa que al presionar un botón aparezca una ventana que ocupe todo el ancho del monitor y la mitad de su altura.
function abrirVentanaCompleta() {
    let ancho = screen.width;
    let alto = screen.height / 2;
    window.open("https://www.google.com", "Nueva Ventana de Google", `width=${ancho},height=${alto}`);
}
//Propiedad navigator del objeto window
//Una vez que se cargue la página mostrar un alert indicando si el navegador tiene activas las cookies.
function verificarCookies() {
    if (navigator.cookieEnabled) {
        alert("Las cookies están habilitadas en este navegador.");
    } else {
        alert("Las cookies no están habilitadas en este navegador.");
    }
}
//Programación orientada a objetos en JavaScript.
/*Confeccionar una clase llamada suma, que contenga dos atributos (valor1, valor2) y tres métodos: cargarvalor1, cargarvalor2 y retornarresultado. Implementar la clase suma.
La definición de un objeto de la clase que deben plantear es:
let s=new suma();
s.primerValor(10);
s.segundoValor(20);
document.write('La suma de los dos valores es:'+s.retornarResultado());*/
function Suma(valor1, valor2) {
    this.valor1 = valor1;
    this.valor2 = valor2;
    this.primerValor = function (valor1) {
        this.valor1 = valor1;
    }
    this.segundoValor = function (valor2) {
        this.valor2 = valor2;
    }
    this.retornarResultado = function () {
        return this.valor1 + this.valor2;
    }
}
function ejecutarPoo(btn) {
    let suma1;
    suma1 = new Suma(5, 10);
    let mensaje;
    mensaje = 'La suma de 5 y 10 es: ' + suma1.retornarResultado();
    suma1.primerValor(70);
    suma1.segundoValor(30);
    mensaje += '<br>La suma de 70 y 30 es: ' + suma1.retornarResultado();
    mostrarResultado(btn, mensaje);
}

function mostrarResultado(btn, mensaje) {
  // Busca el div.resultado más cercano al botón presionado
  const contenedor = btn.parentElement.querySelector('.resultado');
  if (contenedor) {
    contenedor.innerHTML = mensaje;
  } else {
    alert(mensaje); // fallback
  }
}