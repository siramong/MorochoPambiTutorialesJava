// Clase Array Ejercicio 1
//Desarrollar un programa que permita ingresar un vector de 8 elementos, e informe:
//El valor acumulado de todos los elementos del vector.
//El valor acumulado de los elementos del vector que sean mayores a 36.
//Cantidad de valores mayores a 50.
function ejercicio1() {
    let vector = new Array(8);
    let sumaTotal = 0;
    let sumaMayores36 = 0;
    let contadorMayores50 = 0;
    for (let i = 0; i < vector.length; i++) {
        vector[i] = parseInt(prompt(`Ingrese el valor del elemento ${i + 1}`)); 
        sumaTotal += vector[i];
        if (vector[i] > 36) {
            sumaMayores36 += vector[i];
        }
    }
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] > 50) {
            contadorMayores50++;
        }
    }
    document.write("El valor acumulado de todos los elementos del vector es: " + sumaTotal + "<br>");
    document.write("El valor acumulado de los elementos del vector que sean mayores a 36 es: " + sumaMayores36 + "<br>");
    document.write("La cantidad de valores mayores a 50 es: " + contadorMayores50 + "<br>");
}


// Clase Array Ejercicio 2
// Realizar un programa que pida la carga de dos vectores numéricos. Obtener la suma de los dos vectores, dicho resultado guardarlo en un tercer vector del mismo tamaño. Sumar componente a componente.
// El tamaño del vector es a elección.
function ejercicio2() {
  let size = parseInt(prompt("Ingrese el tamaño de los vectores: "));
  let vector1 = new Array(size);
  let vector2 = new Array(size);
  let vector3 = new Array(size);

  for (let i = 0; i < size; i++) {
    vector1[i] = parseInt(prompt("Ingrese el valor del primer vector: "));
    vector2[i] = parseInt(prompt("Ingrese el valor del segundo vector: "));
    vector3[i] = vector1[i] + vector2[i];
  }
  document.write("El resultado de la suma de los dos vectores es: " + vector3);
}

//Math Ejercicio 1
//Confeccionar un programa que solicite el ingreso de un número y nos muestre dicho valor elevado a la tercera potencia.
function ejercicio1Math() {
  let num = parseInt(prompt("Ingrese un número: "));
  let result = Math.pow(num, 3);
  document.write(
    "El resultado de " + num + " elevado a la tercera potencia es: " + result
  );
}

//Math Ejercicio 2
//Ingresar por teclado un valor y luego mostrar la raiz cuadrada de dicho valor.
function ejercicio2Math() {
  let num = parseInt(prompt("Ingrese un número: "));
  let result = Math.sqrt(num);
  document.write("La raíz cuadrada de " + num + " es: " + result);
}

//String Ejercicio 1
//Ingresar una serie de nombres por teclado hasta que se cargue la palabra Fin, y mostrar cuántos nombres se ingresaron.
function ejercicio1String() {
  let names = [];
  let name;
  do {
    name = prompt("Ingrese un nombre (o 'Fin' para terminar): ");
    if (name !== "Fin") {
      names.push(name);
    }
  } while (name !== "Fin");
  document.write("Se ingresaron " + names.length + " nombres.");
}
//String Ejercicio 2
//Igual al anterior, pero que termine la aplicación sin contemplar mayúsculas ni minúsculas. Es decir que para salir se pueda teclear fin, Fin o FIN.
function ejercicio2String() {
  let names = [];
  let name;
  do {
    name = prompt("Ingrese un nombre (o 'Fin' para terminar): ");
    if (name.toLowerCase() !== "fin") {
      names.push(name);
    }
  } while (name.toLowerCase() !== "fin");
  document.write("Se ingresaron " + names.length + " nombres.");
}
//String Ejercicio 3
//Realizar la búsqueda de un string clave en un string fuente. Se deberá ingresar una frase o texto (fuente) y luego la clave a buscar. En caso de encontrarla, imprimir la posición, de lo contrario una leyenda que indique que no está.
function ejercicio3String() {
  let source = prompt("Ingrese una frase o texto: ");
  let key = prompt("Ingrese la clave a buscar: ");
  let position = source.indexOf(key);
  if (position !== -1) {
    document.write("La clave se encuentra en la posición: " + position);
  } else {
    document.write("La clave no se encuentra en el texto.");
  }
}
//String Ejercicio 4
//Ingresar una palabra o texto por teclado y determinar si es o no una palabra palíndromo. (Palabra que se lee de igual manera de adelante hacia atrás, que de atrás hacia delante)
function ejercicio4String() {
  let word = prompt("Ingrese una palabra o texto: ");
  let reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    document.write(word + " es un palíndromo.");
  } else {
    document.write(word + " no es un palíndromo.");
  }
}
//String Ejercicio 5
//Realizar un programa que permita cargar una dirección de mail e implementar una función que verifique si el String tiene cargado el carácter @.
function ejercicio5String() {
  let email = prompt("Ingrese una dirección de mail: ");
  if (email.includes("@")) {
    document.write(email + " es una dirección de mail válida.");
  } else {
    document.write(email + " no es una dirección de mail válida.");
  }
}
//String Ejercicio 6
//Cargar un String por teclado e implementar las siguientes funciones:
//a) Imprimir la primera mitad de los caracteres de la cadena.
//b) Imprimir el último carácter.
//c) Imprimirlo en forma inversa.
//d) Imprimir cada carácter del String separado con un guión.
//e) Imprimir la cantidad de vocales almacenadas.
function ejercicio6String() {
  let str = prompt("Ingrese un String: ");
  let half = Math.floor(str.length / 2);
  let lastChar = str.charAt(str.length - 1);
  let reversedStr = str.split("").reverse().join("");
  let separatedStr = str.split("").join("-");
  let vowelsCount = (str.match(/[aeiou]/gi) || []).length;

  document.write(
    "La primera mitad de los caracteres es: " + str.slice(0, half)
  );
  document.write("<br>");
  document.write("El último carácter es: " + lastChar);
  document.write("<br>");
  document.write("El String en forma inversa es: " + reversedStr);
  document.write("<br>");
  document.write("El String separado por guiones es: " + separatedStr);
  document.write("<br>");
  document.write("La cantidad de vocales es: " + vowelsCount);
}
//String Ejercicio 7
//Codifique un programa que permita cargar una oración por teclado, luego mostrar cada palabra ingresada en una línea distinta.
function ejercicio7String() {
  let sentence = prompt("Ingrese una oración: ");
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    document.write(words[i] + "<br>");
  }
}
//Formulario y Eventos Ejercicio
//Crear un formulario con tres botones con las leyendas "1", "2" y "3". Mostrar un mensaje indicando qué botón se presionó.
function ejercicioFormulario() {
  let form = document.createElement("form");
  let button1 = document.createElement("button");
  button1.innerHTML = "1";
  button1.onclick = function () {
    alert("Se presionó el botón 1");
  };
  let button2 = document.createElement("button");
  button2.innerHTML = "2";
  button2.onclick = function () {
    alert("Se presionó el botón 2");
  };
  let button3 = document.createElement("button");
  button3.innerHTML = "3";
  button3.onclick = function () {
    alert("Se presionó el botón 3");
  };

  form.appendChild(button1);
  form.appendChild(button2);
  form.appendChild(button3);

  document.body.appendChild(form);
}
//Controles FORM, BUTTON y TEXT Ejercicio 1
//Crear un programa que permita cargar un entero en un text y al presionar un botón nos muestre dicho valor elevado al cubo (emplear la función alert).
function ejercicio1Form() {
  let input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Ingrese un número";

  let button = document.createElement("button");
  button.innerHTML = "Calcular cubo";
  button.onclick = function () {
    let num = parseInt(input.value);
    let result = Math.pow(num, 3);
    alert("El resultado de " + num + " elevado al cubo es: " + result);
  };

  document.body.appendChild(input);
  document.body.appendChild(button);
}
//Controles FORM, BUTTON y TEXT Ejercicio 1
//Cargar dos números en objetos de tipo text y al presionar un botón, mostrar el mayor.
function ejercicio2Form() {
  let input1 = document.createElement("input");
  input1.type = "number";
  input1.placeholder = "Ingrese el primer número";

  let input2 = document.createElement("input");
  input2.type = "number";
  input2.placeholder = "Ingrese el segundo número";

  let button = document.createElement("button");
  button.innerHTML = "Mostrar mayor";
  button.onclick = function () {
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);
    let mayor = Math.max(num1, num2);
    alert("El número mayor es: " + mayor);
  };

  document.body.appendChild(input1);
  document.body.appendChild(input2);
  document.body.appendChild(button);
}
//Controles FORM, BUTTON y TEXT Ejercicio 3
//Cargar un nombre y un apellido en sendos text. Al presionar un botón, concatenarlos y mostrarlos en un tercer text (Tener en cuenta que podemos modificar la propiedad value de un objeto TEXT cuando ocurre un evento)
function ejercicio3Form() {
  let input1 = document.createElement("input");
  input1.type = "text";
  input1.placeholder = "Ingrese su nombre";

  let input2 = document.createElement("input");
  input2.type = "text";
  input2.placeholder = "Ingrese su apellido";

  let button = document.createElement("button");
  button.innerHTML = "Mostrar nombre completo";
  button.onclick = function () {
    let nombreCompleto = input1.value + " " + input2.value;
    alert("El nombre completo es: " + nombreCompleto);
  };

  document.body.appendChild(input1);
  document.body.appendChild(input2);
  document.body.appendChild(button);
}
//Control PASSWORD Ejercicio 1
//Disponer dos campos de texto tipo password. Cuando se presione un botón mostrar si las dos claves ingresadas son iguales o no (es muy común solicitar al operador el ingreso de dos veces de su clave para validar si las escribió correctamente, esto se hace cuando se crea una password para el ingreso a un sitio o para el cambio de una existente).
//Tener en cuenta que podemos emplear el operador == para ver si dos string son iguales.
function ejercicioPassword() {
  let input1 = document.createElement("input");
  input1.type = "password";
  input1.placeholder = "Ingrese su clave";

  let input2 = document.createElement("input");
  input2.type = "password";
  input2.placeholder = "Repita su clave";

  let button = document.createElement("button");
  button.innerHTML = "Validar claves";
  button.onclick = function () {
    if (input1.value === input2.value) {
      alert("Las claves son iguales.");
    } else {
      alert("Las claves no son iguales.");
    }
  };

  document.body.appendChild(input1);
  document.body.appendChild(input2);
  document.body.appendChild(button);
}
//Control SELECT Ejercicio 1
//Confeccionar una página que muestre un objeto SELECT con distintos tipos de pizzas (Jamón y Queso, Muzzarella, Morrones). Al seleccionar una, mostrar en un objeto de tipo TEXT el precio de la misma.
function ejercicio1Select() {
  let select = document.createElement("select");
  let pizzas = [
    { name: "Jamón y Queso", price: 500 },
    { name: "Muzzarella", price: 600 },
    { name: "Morrones", price: 700 },
  ];

  for (let i = 0; i < pizzas.length; i++) {
    let option = document.createElement("option");
    option.value = pizzas[i].price;
    option.text = pizzas[i].name;
    select.appendChild(option);
  }

  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Precio de la pizza";

  select.onchange = function () {
    input.value = "El precio de la pizza seleccionada es: " + select.value;
  };

  document.body.appendChild(select);
  document.body.appendChild(input);
}
//Control SELECT Ejercicio 2
//Generar un presupuesto de un equipo de computación a partir de tres objetos de tipo SELECT que nos permiten seleccionar:
//Procesador (Intel I3 - $400, Intel I5 $600, Intel I7 $800).
//Monitor (Samsung 20' - $250, Samsung 22' - $350, Samsung 26' - $550)
//Disco Duro(500 Gb - $300, 1 Tb - $440, 3 Tb - $500)
//Para cada característica indicamos string a mostrar (Ej. Intel I3) y el valor asociado a dicho string (Ej. 400).
//Al presionar un botón "Calcular" mostrar el presupuesto en un objeto de tipo TEXT.
function ejercicio2Select() {
  let select1 = document.createElement("select");
  let select2 = document.createElement("select");
  let select3 = document.createElement("select");

  let procesadores = [
    { name: "Intel I3", price: 400 },
    { name: "Intel I5", price: 600 },
    { name: "Intel I7", price: 800 },
  ];

  let monitores = [
    { name: "Samsung 20'", price: 250 },
    { name: "Samsung 22'", price: 350 },
    { name: "Samsung 26'", price: 550 },
  ];

  let discos = [
    { name: "500 Gb", price: 300 },
    { name: "1 Tb", price: 440 },
    { name: "3 Tb", price: 500 },
  ];

  for (let i = 0; i < procesadores.length; i++) {
    let option = document.createElement("option");
    option.value = procesadores[i].price;
    option.text = procesadores[i].name;
    select1.appendChild(option);
  }

  for (let i = 0; i < monitores.length; i++) {
    let option = document.createElement("option");
    option.value = monitores[i].price;
    option.text = monitores[i].name;
    select2.appendChild(option);
  }
}
//Control SELECT Ejercicio 3
//Confeccionar una página que permita seleccionar una pizza y la cantidad de unidades. Luego al presionar un botón calcular el importe a pagar.
//Utilizar un objeto de la clase SELECT para la selección de la pizza, pudiendo ser:
//Queso: $ 4.
//Jamón y queso: $ 6.
//Especial: $ 10.
//A la cantidad de pizzas cargarla en un objeto de la clase TEXT y en otro objeto de la clase TEXT mostrar el importe total a abonar.
function ejercicio3Select() {
  let select = document.createElement("select");
  let pizzas = [
    { name: "Queso", price: 4 },
    { name: "Jamón y Queso", price: 6 },
    { name: "Especial", price: 10 },
  ];

  for (let i = 0; i < pizzas.length; i++) {
    let option = document.createElement("option");
    option.value = pizzas[i].price;
    option.text = pizzas[i].name;
    select.appendChild(option);
  }

  let input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Cantidad de pizzas";

  let button = document.createElement("button");
  button.innerHTML = "Calcular";
  button.onclick = function () {
    let cantidad = parseInt(input.value);
    let precioPizza = parseInt(select.value);
    let total = cantidad * precioPizza;
    alert("El importe total a abonar es: " + total);
  };

  document.body.appendChild(select);
  document.body.appendChild(input);
  document.body.appendChild(button);
}
//Control SELECT Ejercicio 4
//Confeccionar una página que permita tomar un examen múltiple choice. Se debe mostrar una pregunta y seguidamente un objeto SELECT con las respuestas posibles. Al presionar un botón mostrar la cantidad de respuestas correctas e incorrectas (Disponer 4 preguntas y sus respectivos controles SELECT)
function ejercicio4Select() {
  let preguntas = [
    {
      pregunta: "¿Cuál es la capital de Francia?",
      respuestas: ["París", "Londres", "Berlín"],
      correcta: 0,
    },
    {
      pregunta: "¿Cuál es la capital de España?",
      respuestas: ["Madrid", "Barcelona", "Valencia"],
      correcta: 0,
    },
    {
      pregunta: "¿Cuál es la capital de Italia?",
      respuestas: ["Roma", "Milán", "Nápoles"],
      correcta: 0,
    },
    {
      pregunta: "¿Cuál es la capital de Alemania?",
      respuestas: ["Berlín", "Múnich", "Fráncfort"],
      correcta: 0,
    },
  ];

  let correctas = 0;
  let incorrectas = 0;

  for (let i = 0; i < preguntas.length; i++) {
    let select = document.createElement("select");
    let pregunta = document.createElement("p");
    pregunta.innerHTML = preguntas[i].pregunta;

    for (let j = 0; j < preguntas[i].respuestas.length; j++) {
      let option = document.createElement("option");
      option.value = j;
      option.text = preguntas[i].respuestas[j];
      select.appendChild(option);
    }

    select.onchange = function () {
      if (parseInt(select.value) === preguntas[i].correcta) {
        correctas++;
      } else {
        incorrectas++;
      }
    };

    document.body.appendChild(pregunta);
    document.body.appendChild(select);
  }

  let button = document.createElement("button");
  button.innerHTML = "Calcular resultados";
  button.onclick = function () {
    alert(
      "Respuestas correctas: " +
        correctas +
        "\n" +
        "Respuestas incorrectas: " +
        incorrectas
    );
  };

  document.body.appendChild(button);
}

//Control CHECKBOX Ejercicio 1
//Confeccionar una página que muestre tres checkbox que permitan seleccionar los deportes que practica el usuario (Fútbol, Básket, Tenis) Mostrar al presionar un botón los deportes que eligió.
function ejercicioCheckbox() {
  let deportes = ["Fútbol", "Básket", "Tenis"];
  let checkboxes = [];
  let form = document.createElement("form");

  for (let i = 0; i < deportes.length; i++) {
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = deportes[i];
    checkbox.id = deportes[i];
    checkboxes.push(checkbox);

    let label = document.createElement("label");
    label.htmlFor = deportes[i];
    label.appendChild(document.createTextNode(deportes[i]));

    form.appendChild(checkbox);
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
  }

  let button = document.createElement("button");
  button.innerHTML = "Mostrar deportes seleccionados";
  button.onclick = function () {
    let selectedSports = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedSports.push(checkboxes[i].value);
      }
    }
    alert("Deportes seleccionados: " + selectedSports.join(", "));
  };

  form.appendChild(button);
  document.body.appendChild(form);
}
//Control RADIO Ejercicio 1
//Confeccionar una página que muestre dos objetos de la clase RADIO solicitando que seleccione si es mayor de 18 años o no. Al presionar un botón mostrar un alert indicando si puede ingresar al sitio o no.
function ejercicioRadio() {
  let form = document.createElement("form");
  let radio1 = document.createElement("input");
  radio1.type = "radio";
  radio1.name = "edad";
  radio1.value = "mayor";
  let label1 = document.createElement("label");
  label1.appendChild(document.createTextNode("Mayor de 18 años"));

  let radio2 = document.createElement("input");
  radio2.type = "radio";
  radio2.name = "edad";
  radio2.value = "menor";
  let label2 = document.createElement("label");
  label2.appendChild(document.createTextNode("Menor de 18 años"));

  form.appendChild(radio1);
  form.appendChild(label1);
  form.appendChild(document.createElement("br"));
  form.appendChild(radio2);
  form.appendChild(label2);
  form.appendChild(document.createElement("br"));

  let button = document.createElement("button");
  button.innerHTML = "Verificar edad";
  button.onclick = function () {
    if (radio1.checked) {
      alert("Puede ingresar al sitio.");
    } else if (radio2.checked) {
      alert("No puede ingresar al sitio.");
    } else {
      alert("Seleccione una opción.");
    }
  };

  form.appendChild(button);
  document.body.appendChild(form);
}

//Control TEXTAREA Ejercicio 1
//Confeccionar una página de visitas a un sitio, solicitar ingresar el nombre de una persona, su mail y los comentarios (TEXTAREA). Mostrar luego llamando a la función alert los datos ingresados.
function ejercicioTextarea() {
  let form = document.createElement("form");
  let input1 = document.createElement("input");
  input1.type = "text";
  input1.placeholder = "Ingrese su nombre";

  let input2 = document.createElement("input");
  input2.type = "email";
  input2.placeholder = "Ingrese su mail";

  let textarea = document.createElement("textarea");
  textarea.placeholder = "Ingrese sus comentarios";

  let button = document.createElement("button");
  button.innerHTML = "Enviar";
  button.onclick = function () {
    alert(
      "Nombre: " +
        input1.value +
        "\n" +
        "Mail: " +
        input2.value +
        "\n" +
        "Comentarios: " +
        textarea.value
    );
  };

  form.appendChild(input1);
  form.appendChild(document.createElement("br"));
  form.appendChild(input2);
  form.appendChild(document.createElement("br"));
  form.appendChild(textarea);
  form.appendChild(document.createElement("br"));
  form.appendChild(button);

  document.body.appendChild(form);
}
