alert("Bienvenido al juego 'Piedra, Papel o Tijera' de FrontEnd II");
let nombre = prompt("Ingrese su nombre: ");
alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!")

// FUNCION 2:

// Esta función nos devuelve 1, 2 o 3 según la elección del usuario. Hasta que el usuario ingrese un dato válido le seguimos pidiendo que elija.

// Empezamos con la variable elección en 0. 

// Pedimos que elija una opción válida.

// Convertimos el texto que nos llega en un número y reemplazamos el valor guardado en la variable. Si el dato ingresado nos válido entonces se vuelva a pedir hasta que cumpla la condición de que el dato sea igual a 1, 2 o 3.

// Mostramos los datos por consola.

// Finalmente devolvemos el valor de la elección.


function pedirJugada() {
    let eleccion = 0;
    do {
        eleccion = parseInt(prompt("Ingrese para jugar: 1 (piedra), 2 (papel) o 3 (tijera)"));
    } while ((isNaN(eleccion) || eleccion < 1 || eleccion > 3)) {
        console.log("La elección del jugador es: " + eleccion);
    }
    return eleccion;
}

// FUNCION 3:

// Mostramos los datos por consola
// Finalmente devolvemos el valor de la elección aleatoria.

function jugadaRandom() {
    let num = parseInt(Math.random()*3 + 1);

    console.log("La computadora saca: " + num);

    return num;
}

// FUNCION 4:

// Esta función nos devuelve el resultado de la partida según las elecciones. Compara la elección de cada uno para saber quien pierde y quien gana.

// Guardamos los dos valores a comparar en dos constantes.

// Por defecto el jugador gana.

// Chequeamos el caso en que empata.

// Chequeamos los posibles casos en que pierde, sino ya sabemos que ganó

// Devolvemos la frase con el resultado de la partida.

function compararJugadas() {
    const RESULTADOS_POSIBLES = ["Ganaste", "Empataste", "Perdiste"];

    const ELECCION_JUGADOR = pedirJugada();
    const ELECCION_COMPUTADORA = jugadaRandom();

    let resultadoRonda = RESULTADOS_POSIBLES[0];

    if (ELECCION_JUGADOR === ELECCION_COMPUTADORA) {
        resultadoRonda = RESULTADOS_POSIBLES[1]
    } else if (
        (ELECCION_JUGADOR === 1 && ELECCION_COMPUTADORA === 3) || (ELECCION_JUGADOR === 2 && ELECCION_COMPUTADORA === 1) || (ELECCION_JUGADOR === 3 && ELECCION_COMPUTADORA === 2)
        ){
        resultadoRonda = RESULTADOS_POSIBLES[0]
    } else {
        resultadoRonda = RESULTADOS_POSIBLES[2];
    }
    return resultadoRonda;
}

const RESULTADO_PARTIDA = compararJugadas();
// console.log(RESULTADO_PARTIDA);

// CONSIGNA MESA DE TRABAJO:

// 1 - Crear una función que reciba como parámetro un texto (la frase del resultado de la partida).
// 2 - La función debe mostrar por consola el resultado de la partida.
// 3 - A su vez, debe mostrar al usuario una alerta con el resultado de la partida.
// 4 - Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.

function resultadoFinal (RESULTADO_PARTIDA) {
    let resultado = "El resultado de la partida fue: " + RESULTADO_PARTIDA
    if (RESULTADO_PARTIDA === "Perdiste") {
        alert("Lo siento " + nombre + ", esta vez no ganaste. Te deseo más suerte en la próxima.")
    } else {
        console.log(resultado);
        alert(resultado)
    }
}

const MOSTRAR_RESULADO = resultadoFinal(RESULTADO_PARTIDA);
console.log(MOSTRAR_RESULADO);
